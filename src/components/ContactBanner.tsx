import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";

export default function ContactBanner() {
  return (
    <section className="contact-banner">
      <div className="container contact-banner-inner">
        <div>
          <h2>Tu idea puede ser el próximo paso.</h2>
          <p>
            Una web, un proceso o una PC. Empecemos por entender qué necesitás.
          </p>
        </div>
        <Link to="/contacto#contacto" className="button">
          Hacer una consulta <ArrowUpRight size={18} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
