import React, { useMemo, useState } from "react"
import { MotionConfig, motion, useReducedMotion } from "framer-motion"
import {
  Sparkles,
  Zap,
  Target,
  Rocket,
  CheckCircle,
  ArrowRight,
  MessageCircle,
  Instagram,
  ExternalLink,
  Code,
  TrendingUp,
} from "lucide-react"
const WhatsAppIcon = ({ size = 24, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    width={size}
    height={size}
    aria-hidden="true"
    {...props}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.966-.94 1.164-.173.199-.347.224-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.654-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.373-.025-.522-.075-.149-.669-1.61-.916-2.206-.24-.579-.485-.5-.67-.51-.173-.01-.371-.01-.57-.01-.198 0-.52.074-.793.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

// ╭──────────────────────────────────────────────────────────────────────────────╮
// │ CONFIG                                                                       │
// ╰──────────────────────────────────────────────────────────────────────────────╯
// ⚠️ Cambiá este número por tu WhatsApp (sin + ni espacios)
const WHATSAPP_NUMBER = "5491121608606"

// Links sociales (podés editar acá)
const SOCIALS = {
  whatsapp: `https://wa.me/${WHATSAPP_NUMBER}`,
  instagram: "https://instagram.com/fedecortes01",
}

// Utilidad para componer clases
const cx = (...cls) => cls.filter(Boolean).join(" ")

// Variants de animación reutilizables
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
}

// ╭──────────────────────────────────────────────────────────────────────────────╮
// │ SECTIONS                                                                     │
// ╰──────────────────────────────────────────────────────────────────────────────╯
const Navbar = () => {
  const items = [
    { href: "#servicios", label: "Servicios" },
    { href: "#proceso", label: "Proceso" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#sobre-mi", label: "Sobre mí" },
    { href: "#contacto", label: "Contacto" },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40 bg-slate-900/60 border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2" aria-label="Presence - Inicio">
          <span className="inline-flex h-8 w-8 items-center justify-center">
            <Zap size={20} strokeWidth={2.5} className="text-purple-400 drop-shadow-[0_0_6px_rgba(168,85,247,0.8)]" />
          </span>
          <span className="text-white font-semibold tracking-wide">PRESENCE</span>
        </a>
        <ul className="hidden md:flex items-center gap-6 text-slate-200">
          {items.map((it) => (
            <li key={it.href}>
              <a href={it.href} className="hover:text-white transition-colors">
                {it.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contacto"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 text-sm font-semibold text-white shadow-lg hover:shadow-purple-500/40 transition-shadow"
        >
          Auditoría Gratis <Sparkles size={16} />
        </a>
      </nav>
    </header>
  )
}

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 text-white overflow-hidden"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 opacity-25">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_20%,rgba(168,85,247,0.2),transparent_60%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-24 text-center">
        <motion.div {...fadeUp}>
        <span className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-purple-400/40 bg-purple-500/15 px-5 py-1.5 text-sm font-semibold text-purple-200">
          <Zap size={14} strokeWidth={2.5} className="text-purple-400 drop-shadow-[0_0_5px_rgba(168,85,247,0.8)]" />
          PRESENCE
        </span>
         <h1 id="hero-title" className="mb-6 text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
            Presencia digital que
            <span className="mx-2 inline-block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              vende
            </span>
            , no que solo decora
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg md:text-2xl text-slate-300">
            Te ayudo a construir una presencia digital coherente, profesional y con propósito.{" "}
            <strong className="text-white">Tu marca va a vender incluso cuando vos no estás.</strong>
          </p>


          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#contacto"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-purple-500/50"
            >
              Auditoría Gratis <Sparkles size={20} />
            </motion.a>
            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 py-4 text-lg font-semibold backdrop-blur hover:bg-white/20"
            >
              Ver Proyectos <ArrowRight size={20} />
            </motion.a>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/60">
        <ArrowRight className="rotate-90" size={28} aria-hidden />
      </div>
    </section>
  )
}

const Problem = () => {
  const problems = [
    "¿Tu Instagram tiene seguidores pero no ventas?",
    "¿Te consultan por privado pero se pierden en el chat?",
    "¿No tenés dónde mostrarte profesionalmente?",
  ]
  return (
    <section className="bg-slate-50 py-20" aria-labelledby="problem-title">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div {...fadeUp} className="mx-auto max-w-4xl text-center">
          <h2 id="problem-title" className="mb-12 text-4xl md:text-5xl font-bold text-slate-900">
            ¿Te suena conocido?
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {problems.map((p, i) => (
              <motion.div
                key={p}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border-l-4 border-red-400 bg-white p-8 shadow-lg"
              >
                <p className="text-lg font-medium text-slate-700">{p}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const Services = () => {
  const services = [
    {
      icon: <Target className="h-12 w-12" />,
      title: "Página que atrae",
      description:
        "Diseño páginas pensadas para mostrarte con claridad y convertir, con una estructura clara, moderna y conectada directo a WhatsApp.",
      features: [
        "Diseño limpio y adaptable",
        "Formularios que generan contacto real",
        "Hosting incluido",
        "Lista para usar en pocos días",
      ],
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: <Zap className="h-12 w-12" />,
      title: "Comunicación que conecta",
      description:
        "Mejoro la forma en que tu marca se muestra online: perfiles, imagen y contenido, para que todo comunique con naturalidad y conecte de verdad.",
      features: [
        "Optimización de bio y perfiles",
        "Identidad visual coherente",
        "Asesoría en contenido y tono de comunicación",
        "Tu marca online, ordenada y coherente",
      ],
      color: "from-pink-500 to-pink-600",
    },
    {
      icon: <Rocket className="h-12 w-12" />,
      title: "Estrategia que vende sola",
      description:
        "Te ayudo a ordenar tu sistema digital con flujos y embudos simples que guían al cliente desde el primer contacto hasta la venta.",
      features: [
        "Automatizaciones",
        "Integración con WhatsApp y Email",
        "Embudo de venta adaptado a tu negocio",
        "Acompañamiento si lo necesitás",
      ],
      color: "from-blue-500 to-blue-600",
    }

  ]

  return (
    <section id="servicios" className="bg-white py-20" aria-labelledby="services-title">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div {...fadeUp} className="mb-16 text-center">
          <h2 id="services-title" className="mb-4 text-4xl md:text-5xl font-bold text-slate-900">
            3 pilares para tu presencia digital
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-slate-600">
            Lo esencial para que tu negocio se vea bien, funcione bien y empiece a vender online.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 shadow-xl hover:shadow-2xl"
            >
              <div
                className={cx(
                  "mb-6 flex h-16 w-16 items-center justify-center rounded-xl text-white shadow-lg",
                  `bg-gradient-to-br ${s.color}`
                )}
              >
                {s.icon}
              </div>
              <h3 className="mb-3 text-2xl font-bold text-slate-900">{s.title}</h3>
              <p className="mb-6 text-slate-600">{s.description}</p>
              <ul className="space-y-3">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-slate-700">
                    <CheckCircle className="shrink-0 text-green-500" size={20} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}


const Process = () => {
  const steps = [
  { 
    number: "1", 
    title: "Diagnóstico rápido", 
    badge: "Gratis", 
    description: "Charla inicial para entender tu negocio, tus objetivos y detectar qué es lo más urgente para mejorar resultados."
  },
  { 
    number: "2", 
    title: "Plan a medida", 
    badge: "Flexible", 
    description: "Armamos una estrategia: puede ser una web, publicidad o tu presencia completa."
  },
  { 
    number: "3", 
    title: "Implementación", 
    badge: "En acción", 
    description: "Te asesoramos, mostrandote avances optimizados mientras construimos resultados reales."
  },
  { 
    number: "4", 
    title: "Crecimiento", 
    badge: "Continuo", 
    description: "Una vez generada la base, empezamos a escalar: campañas, embudos o contenido estratégico para seguir vendiendo más y mejor."
  },
]

  return (
    <section id="proceso" className="bg-gradient-to-br from-slate-900 to-purple-900 py-20 text-white" aria-labelledby="process-title">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div {...fadeUp} className="mb-16 text-center">
          <h2 id="process-title" className="mb-4 text-4xl md:text-5xl font-bold">De la idea al lanzamiento en 4 pasos</h2>
          <p className="text-xl text-slate-300">Rápido, claro y sin vueltas</p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.12 }}
              className="relative"
            >
              <div className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm hover:bg-white/20 transition-colors">
                <div className="mb-3 text-5xl font-extrabold text-purple-300">{s.number}</div>
                <h3 className="mb-1 text-xl font-bold">{s.title}</h3>
                <div className="mb-3 inline-block rounded-full bg-purple-500/25 px-3 py-1 text-xs font-semibold text-purple-200">{s.badge}</div>
                <p className="mb-4 text-sm text-slate-200">{s.description}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="absolute top-1/2 -right-4 hidden -translate-y-1/2 md:block">
                  <ArrowRight className="text-purple-300" size={22} aria-hidden />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const Portfolio = () => {
const projects = [
  {
    name: "FrioHouse",
    role: "Web, contenido y publicidad",
    url: "https://www.instagram.com/friohouse_aires/",
    accent: "from-sky-500 to-blue-700",
    bullets: [
      "Video de apertura del local con publicidad paga (+32k visitas)",
      "Contenido para Instagram (reels e historias)",
      "Sitio web: friohouse.netlify.app"
    ],
  },
  {
    name: "Cherry Diosa Tántrica",
    role: "Web de marca personal y asesoramiento",
    url: "https://diosatantrica.com.ar",
    accent: "from-pink-500 to-purple-600",
    bullets: [
      "Desarrollo de sitio web multisección",
      "Seccion para vender su video",
      "Asesoramiento"
    ],
  },
  {
    name: "Paz Científica",
    role: "Web institucional",
    url: "https://pazcientifica.com",
    accent: "from-emerald-500 to-teal-600",
    bullets: [
      "Desarrollo del sitio web",
      "Integración con redes sociales",
      "Botón de contacto por WhatsApp",
    ],
  },
  {
    name: "Working Group",
    role: "Sitio corporativo",
    url: "https://working-group.com.ar",
    accent: "from-indigo-500 to-cyan-600",
    bullets: [
      "Desarrollo del sitio institucional",
      "Integración con redes sociales",
      "Asesoría básica de presencia digital"
    ],
  },
  {
    name: "Judith Navarro",
    role: "Optimización digital",
    url: "https://www.judithnavarro.com/",
    accent: "from-rose-500 to-orange-500",
    bullets: [
      "Mejoras en sitio web y enlaces",
      "Configuración de Instagram, Facebook y WhatsApp Business",
      "Asesoría y ajustes durante 1 mes",
      "Estrategias en grupos de facebook"
    ],
  },

]

return (
  <section id="portfolio" className="bg-slate-50 py-20" aria-labelledby="portfolio-title">
    <div className="mx-auto max-w-6xl px-6">
      <motion.div {...fadeUp} className="mb-16 text-center">
        <h2 id="portfolio-title" className="mb-4 text-4xl md:text-5xl font-bold text-slate-900">
          Casos de éxito
        </h2>
        <p className="text-xl text-slate-600">Resultados reales de emprendedores reales</p>
      </motion.div>

      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
        {projects.map((p, i) => (
<motion.article
  key={p.name}
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ delay: i * 0.1 }}
  className="relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col"
>
  {/* Header visual */}
  <div
    className={cx(
      "flex flex-col items-center justify-center py-10 text-white bg-gradient-to-br",
      p.accent
    )}
  >
    <Code size={48} className="mb-3 opacity-90" />
    <h3 className="text-2xl font-bold">{p.name}</h3>
    <p className="text-white/80 text-sm">{p.role}</p>
  </div>

  {/* Contenido */}
  <div className="p-8 pb-20 flex-grow">
    <h4 className="mb-4 text-xl font-bold text-slate-900">Lo que hicimos</h4>
    <ul className="space-y-3">
      {p.bullets.map((b) => (
        <li key={b} className="flex items-start gap-2 text-slate-700 text-base">
          <CheckCircle className="mt-0.5 shrink-0 text-green-500" size={18} />
          <span>{b}</span>
        </li>
      ))}
    </ul>
  </div>

  {/* Botón fijo abajo */}
  <a
    href={p.url}
    target="_blank"
    rel="noopener noreferrer"
    className="absolute bottom-6 left-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-2.5 font-semibold text-white shadow-md hover:shadow-purple-500/40 text-sm"
    aria-label={`Abrir sitio ${p.name}`}
  >
    Ver más <ExternalLink size={16} />
  </a>
</motion.article>

        ))}
      </div>
    </div>
  </section>
)
}

const About = () => {
  return (
    <section id="sobre-mi" className="bg-white py-20" aria-labelledby="about-title">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-br from-slate-900 to-purple-900 p-12 text-white shadow-2xl"
        >
          <div className="flex flex-col items-center gap-8 md:flex-row">
            <div className="md:w-1/3">
              <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br from-purple-400 to-pink-400 text-6xl font-extrabold shadow-2xl">
                FC
              </div>
            </div>
            <div className="md:w-2/3">
           <h3 id="about-title" className="mb-1 text-3xl font-bold">Federico Cortés</h3>
            <p className="mb-6 text-lg text-purple-200">
              Estratega de Conversión Digital • Desarrollador Frontend con enfoque en Comercialización
            </p>
            <p className="mb-6 text-lg text-slate-200">
              Combino desarrollo y marketing para crear
              <strong className="mx-1 text-white">sistemas digitales que venden solos</strong>
            </p>
              <div className="mb-6 space-y-3">
                <div className="flex items-center gap-3">
                  <Code className="text-purple-300" size={20} />
                  <span>
                    <strong>Stack:</strong> Vue 3, React
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <TrendingUp className="text-purple-300" size={20} />
                  <span>
                    <strong>Enfoque:</strong> Comercialización • Community management • Conversión • Automatización
                  </span>
                </div>

              </div>
              <div className="flex gap-4">
                <a
                  href={SOCIALS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white/10 p-3 transition-colors hover:bg-white/20"
                  aria-label="WhatsApp"
                >
                  <WhatsAppIcon size={24} />
                </a>
                <a
                  href={SOCIALS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white/10 p-3 transition-colors hover:bg-white/20"
                  aria-label="Instagram"
                >
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Sección de contacto enfocada en WhatsApp
function ContactCTA() {
const whatsappMsg = encodeURIComponent(
  "Hola! Quiero una auditoría gratuita y mejorar mi presencia digital"
)
const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMsg}`


return (
<section
id="contacto"
className="bg-gradient-to-br from-purple-600 to-pink-600 py-24 text-white"
aria-labelledby="contact-title"
>
<div className="mx-auto max-w-4xl px-6 text-center">
<motion.div {...fadeUp}>
<h2
  id="contact-title"
  className="mb-6 text-4xl md:text-5xl font-extrabold leading-tight"
>
🔥 Tu presencia digital empieza hoy
</h2>

<p className="mx-auto mb-10 max-w-2xl text-lg text-purple-100">
En Presence hablamos directo, sin formulario y sin vueltas.
<br />
<span className="text-white font-semibold">
Hablá conmigo ahora por WhatsApp.
</span>
</p>


<motion.a
href={whatsappUrl}
target="_blank"
rel="noopener noreferrer"
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.97 }}
className="inline-flex items-center gap-3 rounded-full bg-white text-purple-700 px-10 py-5 text-lg font-bold shadow-2xl hover:bg-purple-50 transition-all"
>
Escribirme por WhatsApp <WhatsAppIcon size={24} />
</motion.a>


<div className="mt-12 text-purple-200 text-sm flex flex-col items-center gap-1">
<p>
Te respondo en menos de <span className="text-white font-semibold">24 horas</span>
</p>
<ArrowRight size={16} className="text-white/70 animate-pulse" />
</div>
</motion.div>
</div>
</section>
)
}

const WhatsAppButton = () => (
  <motion.a
    href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola!%20Quiero%20info%20sobre%20Presence`}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ type: "spring", delay: 0.9 }}
    whileHover={{ scale: 1.08 }}
    whileTap={{ scale: 0.95 }}
    className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-green-500 p-4 text-white shadow-2xl transition-colors hover:bg-green-600"
    aria-label="Abrir WhatsApp"
  >
    <WhatsAppIcon size={26} />
    <span className="hidden pr-2 font-semibold sm:inline">Hablemos</span>
  </motion.a>
)

const Footer = () => (
  <footer className="bg-slate-900 py-12 text-white" aria-labelledby="footer-title">
    <div className="mx-auto max-w-6xl px-6 text-center">
      <h3 id="footer-title" className="mb-2 text-3xl font-bold">
        <Zap size={28} strokeWidth={2.5} className="inline-block text-purple-400 drop-shadow-[0_0_6px_rgba(168,85,247,0.8)]" /> PRESENCE
      </h3>
      <p className="mb-6 text-slate-400">Presencia digital que vende, no que solo decora</p>
      <div className="mb-8 flex justify-center gap-6">
        <a
          href={SOCIALS.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-slate-800 p-3 text-white transition-all hover:bg-green-500 hover:scale-110"
          aria-label="WhatsApp"
        >
          <WhatsAppIcon size={28} />
        </a>
        <a
          href={SOCIALS.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-slate-800 p-3 text-white transition-all hover:bg-pink-500 hover:scale-110"
          aria-label="Instagram"
        >
          <Instagram size={28} />
        </a>
      </div>
      <p className="text-sm text-slate-500">© {new Date().getFullYear()} PRESENCE. Hecho con ❤️ en Argentina.</p>
    </div>
  </footer>
)

// ╭──────────────────────────────────────────────────────────────────────────────╮
// │ APP                                                                           │
// ╰──────────────────────────────────────────────────────────────────────────────╯
export default function App() {
  const prefersReducedMotion = useReducedMotion()
  return (
    <MotionConfig reducedMotion={prefersReducedMotion ? "always" : "user"}>
      <div className="scroll-smooth font-sans">
        <Navbar />
        <main>
          <Hero />
          <Problem />
          <Services />
          <Process />
          <Portfolio />
          <About />
          <ContactCTA />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </MotionConfig>
  )
}