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
    <div className="" aria-hidden="true">
      <span className="visual-label">Concepto ilustrativo</span>
      {category === "software" ? (
        <div className="mini-browser">
          
          <div className={``}>
            {visual === "website" && (
              <>
                <img src="/images/proyecto-instituto-ingles.webp" alt="" className="rounded-lg"/>
                
              </>
            )}
            {visual === "shop" && (
              <>
                 <img src="/images/proyecto-shop-catalogo.webp" alt="" className="rounded-lg"/>
              </>
            )}
            {visual === "management" && (
              <>
                 <img src="/images/proyecto-management.webp" alt="" className="rounded-lg"/>
              </>
            )}
            {visual === "calendar" && (
              <>
                 <img src="/images/proyecto-agenda.webp" alt="" className="rounded-lg"/>
              </>
            )}
            {visual === "workflow" && (
              <>
                <img src="/images/proyecto-workflow.webp" alt="" />
              </>
            )}
            {visual === "analytics" && (
              <>
                <img src="/images/proyecto-analytics.webp" alt="" />
              </>
            )}
          </div>
        </div>
      ) : (
        <div className="mini-browser ">
          {visual === "build" && (
            <>
               <img src="/images/soporte-build-concepto.webp" alt="" className="rounded-lg"/>
            </>
          )}
          {visual === "maintenance" && (
            <>
               <img src="/images/soporte-maintenance.webp" alt="" className="rounded-lg"/>
            </>
          )}
          {visual === "upgrade" && (
            <>
               <img src="/images/soporte-upgrade.webp" alt="" className="rounded-lg"/>
            </>
          )}
          {visual === "software" && (
            <>
               <img src="/images/soporte-software.webp" alt="" className="rounded-lg"/>
            </>
          )}
          {visual === "backup" && (
            <>
               <img src="/images/soporte-backup.webp" alt="" className="rounded-lg"/>
            </>
          )}
          {visual === "network" && (
            <>
              <img src="/images/soporte-network.webp" alt="" className="rounded-lg"/>
            </>
          )}
        </div>
      )}
    </div>
  );
}
