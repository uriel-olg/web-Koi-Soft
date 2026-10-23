import { Link } from "react-router";

export default function Brand() {
  return (
    <Link to="/#inicio" className="brand" aria-label="KoiBite, ir al inicio">
      <span className="bg-">
        <img src="/KoiBite-log.svg" alt="" width="36" height="36" />
      </span>
      <span>
        KoiBite<span className="brand-dot">.</span>
      </span>
    </Link>
  );
}
