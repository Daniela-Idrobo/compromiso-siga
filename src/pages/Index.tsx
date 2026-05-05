import { useState } from "react";
import logoCompromiso from "@/assets/compromiso.png";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Building2, Target, Eye, Shield, Award, Leaf, Heart,
  ChevronRight, Bell, Calendar, FileText, Users,
  Lock, HelpCircle, ExternalLink, Menu, X, Search,
  BookOpen, Megaphone, Newspaper, PenSquare,
  ClipboardCheck, HardHat, ShieldCheck, FolderOpen, CalendarDays
} from "lucide-react";

const navItems = [
  { label: "Enero 2019", icon: Calendar },
  { label: "Misión", icon: Target },
  { label: "Visión", icon: Eye },
  { label: "Alcance del SIGA", icon: Shield },
  { label: "Objetivos", icon: Award },
  { label: "Promesa de Valor", icon: Heart },
  { label: "Política de Calidad", icon: FileText },
  { label: "Política Ambiental", icon: Leaf },
  { label: "Política Salud y Seguridad en el Trabajo", icon: HardHat },
  { label: "Política Seguridad de la Información", icon: ShieldCheck },
];

const quickLinks = [
  { label: "Política MECI", icon: FileText },
  { label: "Resolución 00196 de 2017", icon: BookOpen },
  { label: "Qué hacer en emergencia", icon: Shield },
];

const announcements = [
  {
    title: "Curso MIPG - Aula Virtual",
    description: "Accede al curso sobre MIPG en el sitio web Aula Virtual del Estado Colombiano.",
    link: "http://www.funcionpublica.gov.co/web/eva/curso-mipg",
    date: "Enero 2019",
    tag: "Capacitación",
  },
  {
    title: "Curso para Gerentes Públicos",
    description: "Inducción a los Gerentes Públicos de la Administración Colombiana disponible en línea.",
    link: "#",
    date: "Enero 2019",
    tag: "Formación",
  },
  {
    title: "Curso Virtual MIPG - Modelo Integrado de Planeación y Gestión",
    description: "Es obligatorio en procesos de inducción y re-inducción para servidores públicos.",
    link: "#",
    date: "Enero 2019",
    tag: "Obligatorio",
  },
  {
    title: "Circular No. 100.04 - 2018",
    description: "Circular informativa relacionada con el Sistema Integrado de Gestión y Autocontrol.",
    link: "#",
    date: "2018",
    tag: "Normativa",
  },
  {
    title: "El SIGA bajo referente MIPG e ISO",
    description: "Documento de referencia sobre la integración del SIGA con el modelo MIPG y las normas ISO.",
    link: "#",
    date: "2019",
    tag: "Documento",
  },
];

const publications = [
  { title: "Muro 1", content: "Contenido muro 1" },
  { title: "Muro 2", content: "Últimas novedades del Sistema Integrado de Gestión y Autocontrol." },
];

const Index = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("Misión");
  const [loginOpen, setLoginOpen] = useState(false);

  const today = new Date().toLocaleDateString("es-CO", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(180deg, #F8FAFC 0%, #8FA8BE 100%)' }}>
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border glass-card">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="btn-ghost rounded-lg p-2 lg:hidden"
            >
              {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
            <img src={logoCompromiso} alt="Compromiso SENA SIGA" className="h-10 sm:h-12 w-auto" />
          </div>

          <div className="hidden md:flex items-center gap-2 rounded-full bg-muted/60 px-4 py-2 w-72 border border-border">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar documentos, procesos..."
              className="bg-transparent text-sm outline-none w-full text-foreground placeholder:text-muted-foreground"
            />
          </div>

          <div className="flex items-center gap-3">
            <button className="btn-ghost relative rounded-lg p-2">
              <Bell className="h-5 w-5" />
              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-primary" />
            </button>
            <button className="btn-primary" onClick={() => setLoginOpen(true)}>Iniciar Sesión</button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:flex lg:gap-6">
        {/* Sidebar */}
        <aside
          className={`${
            sidebarOpen ? "fixed inset-0 z-40 block" : "hidden"
          } lg:relative lg:block lg:w-64 lg:flex-shrink-0`}
          onClick={() => setSidebarOpen(false)}
          style={sidebarOpen ? { background: "hsla(200,100%,15%,0.3)", backdropFilter: "blur(4px)" } : {}}
        >
          <nav
            onClick={(e) => e.stopPropagation()}
            className={`${
              sidebarOpen
                ? "fixed left-0 top-0 z-50 h-full w-72 overflow-y-auto bg-card p-4 shadow-xl"
                : ""
            } lg:sticky lg:top-24 space-y-1`}
          >
            {sidebarOpen && (
              <div className="mb-4 flex items-center justify-between lg:hidden">
                <h3 className="font-bold text-foreground">Navegación</h3>
                <button onClick={() => setSidebarOpen(false)} className="btn-ghost p-1">
                  <X className="h-5 w-5" />
                </button>
              </div>
            )}

            <div className="flex items-center gap-2 px-3 pb-3">
              <Building2 className="h-4 w-4 text-primary" />
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground" style={{ fontFamily: "var(--font-heading)" }}>
                Empresa
              </span>
            </div>

            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeNav === item.label;
              return (
                <button
                  key={item.label}
                  onClick={() => {
                    setActiveNav(item.label);
                    setSidebarOpen(false);
                  }}
                  className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-primary/10 text-primary shadow-sm"
                      : "text-foreground hover:bg-muted"
                  }`}
                  style={{ borderRadius: 8 }}
                >
                  <Icon className="h-4 w-4 flex-shrink-0" />
                  <span className="text-left">{item.label}</span>
                  {isActive && <ChevronRight className="ml-auto h-4 w-4 flex-shrink-0" />}
                </button>
              );
            })}

            <div className="pt-4">
              <div className="flex items-center gap-2 px-3 pb-3">
                <ExternalLink className="h-4 w-4 text-secondary" />
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground" style={{ fontFamily: "var(--font-heading)" }}>
                  Enlaces Rápidos
                </span>
              </div>
              {quickLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.label}
                    className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-foreground transition-all duration-200 hover:bg-muted"
                    style={{ borderRadius: 8 }}
                  >
                    <Icon className="h-4 w-4 flex-shrink-0" />
                    <span className="text-left">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0">

          {/* Comunicación Interna */}
          <section className="mb-8">
            <div className="mb-4 flex items-center gap-2">
              <Megaphone className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-bold text-foreground">
                Comunicación <span className="text-primary">Interna</span>
              </h2>
            </div>
            <div className="space-y-4">
              {announcements.map((item, i) => (
                <article
                  key={i}
                  className="group rounded-xl border border-border bg-card p-5 soft-card"
                  style={{ borderRadius: 12 }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                      {item.tag}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5" />
                      {item.date}
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-1.5 group-hover:text-primary transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">{item.description}</p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline transition-colors duration-200"
                  >
                    Ver más <ChevronRight className="h-3.5 w-3.5" />
                  </a>
                </article>
              ))}
            </div>
          </section>

          {/* Muro de Publicaciones */}
          <section className="mb-8">
            <div className="mb-4 flex items-center gap-2">
              <PenSquare className="h-5 w-5 text-secondary" />
              <h2 className="text-xl font-bold text-foreground">
                Muro de <span className="text-primary">Publicaciones</span>
              </h2>
            </div>
            <div className="space-y-4">
              {publications.map((pub, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-border bg-card p-5 soft-card"
                  style={{ borderRadius: 12 }}
                >
                  <h3 className="text-base font-bold text-foreground mb-2">{pub.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{pub.content}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Noticias SIGA */}
          <section className="mb-8">
            <div className="mb-4 flex items-center gap-2">
              <Newspaper className="h-5 w-5 text-secondary" />
              <h2 className="text-xl font-bold text-foreground">Noticias SIGA</h2>
            </div>
            <div
              className="rounded-xl border border-border bg-card p-6 text-center text-sm text-muted-foreground soft-card"
              style={{ borderRadius: 12 }}
            >
              No hay noticias recientes por el momento.
            </div>
          </section>

          {/* Publicaciones SIGA */}
          <section>
            <div className="mb-4 flex items-center gap-2">
              <FolderOpen className="h-5 w-5 text-secondary" />
              <h2 className="text-xl font-bold text-foreground">Publicaciones SIGA</h2>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <a
                href="#"
                className="group flex items-center gap-3 rounded-xl border border-border bg-card p-4 soft-card"
                style={{ borderRadius: 12 }}
              >
                <div className="rounded-lg bg-primary/10 p-2.5">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors duration-200">
                    Documentos SIGA
                  </p>
                  <p className="text-xs text-muted-foreground">Accede a los documentos del sistema</p>
                </div>
                <ChevronRight className="ml-auto h-4 w-4 text-muted-foreground" />
              </a>
              <a
                href="#"
                className="group flex items-center gap-3 rounded-xl border border-border bg-card p-4 soft-card"
                style={{ borderRadius: 12 }}
              >
                <div className="rounded-lg bg-secondary/10 p-2.5">
                  <CalendarDays className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors duration-200">
                    Eventos SIGA
                  </p>
                  <p className="text-xs text-muted-foreground">Calendario de eventos y actividades</p>
                </div>
                <ChevronRight className="ml-auto h-4 w-4 text-muted-foreground" />
              </a>
            </div>
          </section>
        </main>

        {/* Right Sidebar */}
        <aside className="mt-6 lg:mt-0 lg:w-72 lg:flex-shrink-0">
          <div className="lg:sticky lg:top-24 space-y-4">
            {/* Quick Actions */}
            <div
              className="rounded-xl border border-border bg-card p-5 soft-card"
              style={{ borderRadius: 12 }}
            >
              <h3 className="mb-3 font-bold text-foreground text-sm">Accesos Directos</h3>
              <div className="space-y-2">
                {quickLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.label}
                      className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-all duration-200 hover:bg-muted hover:text-foreground"
                      style={{ borderRadius: 8 }}
                    >
                      <Icon className="h-4 w-4 flex-shrink-0" />
                      <span className="text-left">{item.label}</span>
                      <ChevronRight className="ml-auto h-3.5 w-3.5 flex-shrink-0" />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Registrar Tarjeta */}
            <a
              href="#"
              className="flex items-center gap-3 rounded-xl border border-border bg-card p-5 soft-card"
              style={{ borderRadius: 12 }}
            >
              <div className="rounded-lg bg-primary/10 p-3">
                <ClipboardCheck className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">Registrar Tarjeta</p>
                <p className="text-xs text-muted-foreground">de Observación</p>
              </div>
            </a>
          </div>
        </aside>
      </div>

      {/* Login Dialog */}
      <Dialog open={loginOpen} onOpenChange={setLoginOpen}>
        <DialogContent className="sm:max-w-md glass-card" style={{ borderRadius: 12 }}>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-foreground">
              <Lock className="h-5 w-5 text-primary" />
              Iniciar Sesión
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 pt-2">
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1 block">Usuario</label>
              <input
                type="text"
                className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20"
                style={{ borderRadius: 8 }}
              />
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1 block">Contraseña</label>
              <input
                type="password"
                className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20"
                style={{ borderRadius: 8 }}
              />
            </div>
            <button className="btn-primary w-full" onClick={() => { setLoginOpen(false); navigate("/dashboard"); }}>Ingresar</button>
            <div className="flex flex-col items-center gap-1 pt-1 text-xs">
              <a href="#" className="text-secondary hover:text-primary hover:underline flex items-center gap-1 transition-colors duration-200">
                <HelpCircle className="h-3.5 w-3.5" /> ¿Necesitas ayuda?
              </a>
              <a href="#" className="text-secondary hover:text-primary hover:underline transition-colors duration-200">
                Activar Usuario y/o Recuperar Contraseña
              </a>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <footer className="mt-12 border-t border-primary/20" style={{ background: '#39A900' }}>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 text-center text-xs text-primary-foreground">
          © {new Date().getFullYear()} SIGA — Sistema Integrado de Gestión y Autocontrol · SENA
        </div>
      </footer>
    </div>
  );
};

export default Index;
