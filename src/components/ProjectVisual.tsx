import {
  Check,
  ChevronRight,
  Cpu,
  Database,
  HardDrive,
  Mail,
  MemoryStick,
  Monitor,
  Network,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import type { Project } from "../data/site";

export default function ProjectVisual({ project }: { project: Project }) {
  const { visual, category } = project;
  return (
    <div className={`project-visual visual-${category}`} aria-hidden="true">
      <span className="visual-label">Concepto ilustrativo</span>
      {category === "software" ? (
        <div className="mini-browser">
          <div className="mini-toolbar">
            <i />
            <i />
            <i />
            <span>koi / {project.id}</span>
          </div>
          <div className={`mini-screen screen-${visual}`}>
            {visual === "website" && (
              <>
                <span className="mini-nav">
                  ESTUDIO <span>Servicios · Contacto</span>
                </span>
                <div className="mini-website">
                  <div>
                    <strong>
                      Tu idea.
                      <br />
                      Su próximo lugar.
                    </strong>
                    <span className="mini-button">
                      Conocenos <ChevronRight size={9} />
                    </span>
                  </div>
                  <div className="mini-brand-art">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </>
            )}
            {visual === "shop" && (
              <>
                <span className="mini-nav">
                  CASA <span>Colección · Tienda</span>
                </span>
                <strong className="mini-title">Objetos para tu día.</strong>
                <div className="mini-products">
                  {["Luz", "Forma", "Calma"].map((name, i) => (
                    <div key={name}>
                      <div className={`object object-${i}`} />
                      <span>{name}</span>
                    </div>
                  ))}
                </div>
              </>
            )}
            {visual === "management" && (
              <>
                <span className="mini-nav">
                  Tu negocio <span>Vista general</span>
                </span>
                <div className="mini-data-header">
                  <span>Producto</span>
                  <span>Stock</span>
                  <span>Estado</span>
                </div>
                {[
                  "Cuaderno natural",
                  "Agenda semanal",
                  "Set de escritorio",
                ].map((name, i) => (
                  <div className="mini-data-row" key={name}>
                    <span>{name}</span>
                    <span>{[24, 18, 36][i]}</span>
                    <span>Disponible</span>
                  </div>
                ))}
              </>
            )}
            {visual === "calendar" && (
              <>
                <span className="mini-nav">
                  Tu agenda <span>Semana de ejemplo</span>
                </span>
                <div className="mini-calendar">
                  {["LUN", "MAR", "MIÉ", "JUE", "VIE"].map((day, i) => (
                    <div key={day}>
                      <span>{day}</span>
                      <strong>{12 + i}</strong>
                      <i />
                      <i />
                    </div>
                  ))}
                </div>
              </>
            )}
            {visual === "workflow" && (
              <>
                <span className="mini-nav">Una tarea, menos pasos.</span>
                <div className="mini-flow">
                  <div>
                    <Monitor size={21} />
                    <span>Formulario</span>
                  </div>
                  <ChevronRight size={16} />
                  <div>
                    <Database size={21} />
                    <span>Tu sistema</span>
                  </div>
                  <ChevronRight size={16} />
                  <div>
                    <Mail size={21} />
                    <span>Confirmación</span>
                  </div>
                </div>
                <span className="mini-flow-caption">
                  <Check size={11} /> Las herramientas, conectadas.
                </span>
              </>
            )}
            {visual === "analytics" && (
              <>
                <span className="mini-nav">
                  Tu negocio <span>Datos de ejemplo</span>
                </span>
                <strong className="mini-title">Una mirada más clara.</strong>
                <div className="mini-chart">
                  {[28, 43, 36, 60, 51, 72, 83, 92].map((height, i) => (
                    <i key={i} style={{ height: `${height}%` }} />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      ) : (
        <div className="hardware-scene">
          {visual === "build" && (
            <>
              <div className="pc-tower">
                <span />
                <div className="pc-fan" />
                <div className="pc-fan" />
                <i />
              </div>
              <div className="hardware-detail">
                <Cpu size={22} />
                <strong>Elegida para vos.</strong>
                <span>Componentes en equilibrio.</span>
              </div>
            </>
          )}
          {visual === "maintenance" && (
            <>
              <div className="hardware-symbol">
                <Wrench size={44} strokeWidth={1.3} />
              </div>
              <div className="hardware-detail">
                <strong>Cuidar también es mejorar.</strong>
                <span>
                  <Check size={13} /> Limpieza interna
                </span>
                <span>
                  <Check size={13} /> Revisión y diagnóstico
                </span>
                <span>
                  <Check size={13} /> Mantenimiento preventivo
                </span>
              </div>
            </>
          )}
          {visual === "upgrade" && (
            <>
              <div className="hardware-parts">
                <MemoryStick size={54} strokeWidth={1.2} />
                <HardDrive size={44} strokeWidth={1.2} />
              </div>
              <div className="hardware-detail">
                <strong>Más posibilidades.</strong>
                <span>Memoria + almacenamiento.</span>
                <span className="hardware-chip">RAM / SSD</span>
              </div>
            </>
          )}
          {visual === "software" && (
            <>
              <div className="software-window">
                <Monitor size={32} strokeWidth={1.3} />
                <span>Tu entorno de trabajo</span>
                <div>
                  <Check size={12} /> Sistema
                </div>
                <div>
                  <Check size={12} /> Drivers
                </div>
                <div>
                  <Check size={12} /> Programas
                </div>
              </div>
            </>
          )}
          {visual === "backup" && (
            <>
              <div className="backup-icons">
                <HardDrive size={40} strokeWidth={1.3} />
                <span />
                <ShieldCheck size={44} strokeWidth={1.3} />
              </div>
              <div className="hardware-detail">
                <strong>Lo importante, cuidado.</strong>
                <span>Copias con un plan.</span>
              </div>
            </>
          )}
          {visual === "network" && (
            <>
              <Network size={58} strokeWidth={1.2} />
              <div className="hardware-detail">
                <strong>Todo, conectado.</strong>
                <span>Tu espacio de trabajo en red.</span>
                <span className="hardware-chip">Wi-Fi + red local</span>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
