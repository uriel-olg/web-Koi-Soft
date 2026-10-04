<?php

declare(strict_types=1);

ini_set('display_errors', '0');

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

function responder(int $estado, array $contenido): void
{
    http_response_code($estado);
    echo json_encode($contenido, JSON_UNESCAPED_UNICODE);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Allow: POST');
    responder(405, ['error' => 'Método no permitido']);
}

$tipo = $_SERVER['CONTENT_TYPE'] ?? '';

if (stripos($tipo, 'application/json') !== 0) {
    responder(415, ['error' => 'Se requiere contenido JSON']);
}

// Leer hasta 20 KB más un byte para detectar exceso de tamaño.
$cuerpo = file_get_contents('php://input', false, null, 0, 20481);

if ($cuerpo === false || strlen($cuerpo) > 20480) {
    responder(413, ['error' => 'La consulta es demasiado grande']);
}

$entrada = json_decode($cuerpo);

if (json_last_error() !== JSON_ERROR_NONE || !is_object($entrada)) {
    responder(400, ['error' => 'El contenido enviado no es válido']);
}

$datos = (array) $entrada;

// Validar tipos y longitudes.
$limites = [
    'nombre' => [2, 100],
    'email' => [1, 254],
    'empresa' => [0, 150],
    'servicio' => [1, 100],
    'presupuesto' => [0, 30],
    'mensaje' => [10, 5000],
];

foreach ($limites as $campo => [$minimo, $maximo]) {
    if (!isset($datos[$campo]) || !is_string($datos[$campo])) {
        responder(400, ['error' => "Revisá el campo: $campo"]);
    }

    $datos[$campo] = trim($datos[$campo]);

    // Cuenta caracteres Unicode, incluidas letras con tilde.
    $longitud = preg_match_all('/./us', $datos[$campo]);

    if (
        $longitud === false ||
        $longitud < $minimo ||
        $longitud > $maximo
    ) {
        responder(400, ['error' => "Revisá el campo: $campo"]);
    }
}

if (!filter_var($datos['email'], FILTER_VALIDATE_EMAIL)) {
    responder(400, ['error' => 'Ingresá un email válido']);
}

$servicios = [
    'Desarrollo web',
    'Landing page',
    'Catálogo digital',
    'E-commerce',
    'Automatizaciones',
    'Otro / Necesito asesoramiento',
];

$presupuestos = ['', 'menos-500', '500-1500', 'mas-1500'];

if (
    !in_array($datos['servicio'], $servicios, true) ||
    !in_array($datos['presupuesto'], $presupuestos, true)
) {
    responder(400, ['error' => 'Revisá el servicio y el presupuesto']);
}

try {
    // Desde public_html/api, subir hasta la carpeta de la cuenta.
    $rutaConfig = dirname(__DIR__, 2) . '/private/contacto-config.php';

    if (!is_readable($rutaConfig)) {
        throw new RuntimeException('Falta el archivo privado de configuración');
    }

    $config = require $rutaConfig;

    foreach (['RESEND_API_KEY', 'CONTACT_EMAIL', 'RESEND_FROM'] as $clave) {
        if (
            !is_array($config) ||
            empty($config[$clave]) ||
            !is_string($config[$clave])
        ) {
            throw new RuntimeException('Configuración incompleta');
        }
    }

    if (!function_exists('curl_init')) {
        throw new RuntimeException('La extensión cURL no está habilitada');
    }

    $texto = implode("\n", [
        'Nombre: ' . $datos['nombre'],
        'Email: ' . $datos['email'],
        'Empresa: ' . ($datos['empresa'] ?: 'No especificada'),
        'Servicio: ' . $datos['servicio'],
        'Presupuesto: ' . ($datos['presupuesto'] ?: 'No definido'),
        '',
        'Mensaje:',
        $datos['mensaje'],
    ]);

    $payload = json_encode([
        'from' => $config['RESEND_FROM'],
        'to' => [$config['CONTACT_EMAIL']],
        'reply_to' => $datos['email'],
        'subject' => 'Nueva consulta desde la web',
        'text' => $texto,
    ], JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR);

    $curl = curl_init('https://api.resend.com/emails');

    if ($curl === false) {
        throw new RuntimeException('No se pudo iniciar la conexión');
    }

    curl_setopt_array($curl, [
        CURLOPT_POST => true,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_CONNECTTIMEOUT => 10,
        CURLOPT_TIMEOUT => 20,
        CURLOPT_HTTPHEADER => [
            'Authorization: Bearer ' . $config['RESEND_API_KEY'],
            'Content-Type: application/json',
        ],
        CURLOPT_POSTFIELDS => $payload,
    ]);

    $respuesta = curl_exec($curl);
    $estado = (int) curl_getinfo($curl, CURLINFO_HTTP_CODE);

    curl_close($curl);

    if ($respuesta === false || $estado < 200 || $estado >= 300) {
        throw new RuntimeException('Error de envío. Estado HTTP: ' . $estado);
    }

    $resultado = json_decode($respuesta, true);

    if (!is_array($resultado) || empty($resultado['id'])) {
        throw new RuntimeException('Respuesta inesperada de Resend');
    }

    responder(200, ['ok' => true]);
} catch (Throwable $error) {
    error_log('Formulario de contacto: ' . $error->getMessage());

    responder(502, [
        'error' => 'No se pudo enviar la consulta. Intentá nuevamente.',
    ]);
}