import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import logoCompromiso from "@/assets/compromiso.png";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { FileText, Settings } from "lucide-react";

// Module icons
import icoActas from "@/assets/icons/ico_actas.png";
import icoRiegos from "@/assets/icons/ico_riegos.png";
import icoObjetivos from "@/assets/icons/ico_objetivos.png";
import icoEgc from "@/assets/icons/egc.png";
import icoAuditoria from "@/assets/icons/ico_auditoria.png";
import icoMipg from "@/assets/icons/ico_mipg.png";
import icoSiacf from "@/assets/icons/ico_siacf.png";
import icoPamm from "@/assets/icons/ico_pamm.png";
import icoAmbiental from "@/assets/icons/ico_ambiental.png";
import icoHc from "@/assets/icons/ico_hc.png";
import icoSyso from "@/assets/icons/ico_syso.png";
import icoNc from "@/assets/icons/ico_nc.png";
import icoSeguridad from "@/assets/icons/ico_seguridad.png";
import icoMeci from "@/assets/icons/ico_meci.png";
import icoDocumentos from "@/assets/icons/ico_documentos.png";
import icoMase from "@/assets/icons/ico_mase.png";
import icoRemove from "@/assets/icons/remove.png";
import icoConfiguracion from "@/assets/icons/ico_configuracion.png";

const modules = [
  { id: "calendario", label: "Calendario", icon: icoActas, description: "Gestión de eventos, actividades y programación del sistema SIGA." },
  { id: "nc", label: "No Conformidades", icon: icoNc, description: "Gestión de no conformidades y acciones correctivas." },
  { id: "alertas", label: "Alertas", icon: icoRiegos, description: "Visualiza las alertas y notificaciones importantes del sistema." },
  { id: "indicadores", label: "Indicadores", icon: icoObjetivos, description: "Seguimiento y evaluación de indicadores de gestión." },
  { id: "reportes", label: "Reportes", icon: icoEgc, description: "Generación y consulta de reportes estadísticos del sistema." },
  { id: "auditoria", label: "Auditoría", icon: icoAuditoria, description: "Gestión de auditorías internas y externas." },
  { id: "mipg", label: "MIPG", icon: icoMipg, description: "Módulo de seguimiento y evaluación de las políticas de MIPG." },
  { id: "siacf", label: "SIACF", icon: icoSiacf, description: "Sistema Integrado de Aseguramiento de la Calidad de la Formación." },
  { id: "pamm", label: "PAMM", icon: icoPamm, description: "Plan de Acción y Mejoramiento del sistema de gestión." },
  { id: "ambiental", label: "Ambiental", icon: icoAmbiental, description: "Gestión ambiental institucional." },
  { id: "hc", label: "Huella de Carbono", icon: icoHc, description: "Seguimiento de la huella de carbono institucional." },
  { id: "sst", label: "SST", icon: icoSyso, description: "Sistema de Seguridad y Salud en el Trabajo." },
  { id: "seguridad", label: "Seguridad", icon: icoSeguridad, description: "Gestión de seguridad de la información y accesos." },
  { id: "oci", label: "OCI", icon: icoMeci, description: "Oficina de Control Interno — auditorías y seguimiento." },
  { id: "documentos", label: "Documentos", icon: icoDocumentos, description: "Repositorio documental del sistema integrado de gestión." },
  { id: "mapa", label: "Mapa de Aseguramiento", icon: icoMase, description: "Mapa de aseguramiento y líneas de defensa del sistema." },
];

const pendingActivities = {
  documentos: [
    { label: "Documento Creado para Divulgar", count: 5, href: "#divulgar" },
    { label: "Eliminar Documento", count: 3, href: "#eliminar" },
  ],
  auditoria: [
    { label: "Como Gestor de su Regional tiene Pendientes de Programar 27 Auditorías", href: "#auditorias" },
  ],
};

const Dashboard = () => {
  const navigate = useNavigate();
  const [showPending, setShowPending] = useState(true);
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const [animatedIndexes, setAnimatedIndexes] = useState<number[]>([]);

  // Bounce-in animation staggered
  useEffect(() => {
    modules.forEach((_, i) => {
      setTimeout(() => {
        setAnimatedIndexes((prev) => [...prev, i]);
      }, i * 100);
    });
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background: "linear-gradient(180deg, #F8FAFC 0%, #8FA8BE 100%)",
      }}
    >
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border glass-card">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <img src={logoCompromiso} alt="Compromiso SENA SIGA" className="h-10 sm:h-12 w-auto" />
          </div>
          <div className="flex items-center gap-3">
            <button
              className="btn-ghost rounded-lg p-2"
              title="Volver al inicio"
              onClick={() => navigate("/")}
            >
              <img src={icoRemove} alt="Cerrar" className="h-5 w-5" />
            </button>
            <button className="btn-ghost rounded-lg p-2" title="Configuración">
              <img src={icoConfiguracion} alt="Configuración" className="h-6 w-6" />
            </button>
            <span className="text-sm font-medium text-muted-foreground">Bienvenido, Usuario</span>
          </div>
        </div>
      </header>

      {/* Main — Grid Icon Layout */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-8 gap-6 md:gap-8 max-w-5xl w-full">
          {modules.map((mod, index) => {
            const isVisible = animatedIndexes.includes(index);
            const isActive = activeTooltip === mod.id;
            // First row: tooltip below; rest: tooltip above
            const isTopRow = index < 8;

            return (
              <div
                key={mod.id}
                className={cn("relative flex flex-col items-center", isActive && "z-40")}
                style={{
                  transform: isVisible ? "translateY(0) scale(1)" : "translateY(40px) scale(0.5)",
                  opacity: isVisible ? 1 : 0,
                  transition: `all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)`,
                }}
              >
                {/* Tooltip */}
                {isActive && (
                  <div
                    className={cn(
                      "absolute left-1/2 -translate-x-1/2 w-48 z-30 animate-scale-in pointer-events-none",
                      isTopRow ? "top-full mt-3" : "bottom-full mb-3"
                    )}
                  >
                    <div className="rounded-lg border border-border bg-card p-3 text-sm text-foreground shadow-lg relative">
                      <h4 className="font-bold mb-1 text-primary text-xs">{mod.label}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{mod.description}</p>
                      {/* Arrow */}
                      {isTopRow ? (
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-card border-t border-l border-border rotate-45" />
                      ) : (
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-card border-b border-r border-border rotate-45" />
                      )}
                    </div>
                  </div>
                )}

                <button
                  onClick={() => setActiveTooltip(isActive ? null : mod.id)}
                  onMouseEnter={() => setActiveTooltip(mod.id)}
                  onMouseLeave={() => setActiveTooltip(null)}
                  className="group flex flex-col items-center gap-2 focus:outline-none"
                >
                  <div
                    className="flex items-center justify-center transition-all duration-300 ease-out group-hover:scale-150 group-hover:-translate-y-3"
                    style={{
                      filter: isActive ? "drop-shadow(0 10px 20px rgba(0,0,0,0.25))" : "drop-shadow(0 4px 8px rgba(0,0,0,0.1))",
                    }}
                  >
                    <img
                      src={mod.icon}
                      alt={mod.label}
                      className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 object-contain"
                    />
                  </div>
                  <span className="text-[10px] sm:text-xs font-semibold text-foreground text-center leading-tight max-w-[80px]">
                    {mod.label}
                  </span>
                </button>
              </div>
            );
          })}
        </div>
      </main>

      {/* Footer */}
      <footer style={{ background: "hsl(101, 100%, 33%)" }}>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 text-center text-xs text-primary-foreground">
          © {new Date().getFullYear()} SIGA — Sistema Integrado de Gestión y Autocontrol · SENA
        </div>
      </footer>

      {/* Pending Activities Dialog */}
      <Dialog open={showPending} onOpenChange={setShowPending}>
        <DialogContent className="sm:max-w-lg" style={{ borderRadius: 12 }}>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-foreground">
              <FileText className="h-5 w-5 text-primary" />
              Actividades Pendientes
            </DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {/* Documentos */}
            <div className="rounded-lg border border-border bg-muted/40 p-4">
              <h4 className="font-bold text-sm text-foreground mb-3 pb-2 border-b border-border">
                Documentos
              </h4>
              <ul className="space-y-2">
                {pendingActivities.documentos.map((item, i) => (
                  <li key={i}>
                    <a
                      href={item.href}
                      className="flex items-center justify-between text-sm hover:bg-accent/50 rounded px-2 py-1 transition-colors cursor-pointer group"
                    >
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">{item.label}</span>
                      <span className="font-bold text-primary">{item.count}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Auditoría */}
            <div className="rounded-lg border border-border bg-muted/40 p-4">
              <h4 className="font-bold text-sm text-foreground mb-3 pb-2 border-b border-border">
                Auditoría
              </h4>
              <ul className="space-y-2">
                {pendingActivities.auditoria.map((item, i) => (
                  <li key={i}>
                    <a
                      href={item.href}
                      className="text-sm text-muted-foreground leading-relaxed hover:text-foreground hover:bg-accent/50 rounded px-2 py-1 transition-colors cursor-pointer block"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex justify-end pt-2">
            <button className="btn-primary" onClick={() => setShowPending(false)}>
              Ok
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Dashboard;
