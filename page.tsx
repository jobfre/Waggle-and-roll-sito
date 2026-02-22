"use client"

import { useState } from "react"
import Image from "next/image"
import {
  MapPin,
  Heart,
  Shield,
  Clock,
  Star,
  ChevronDown,
  ArrowRight,
  MessageCircle,
  Phone,
  Mail,
} from "lucide-react"

/* ─── MENU ITEMS WITH SUBMENUS ─── */
const menuItems = [
  { label: "HOME", href: "#" },
  {
    label: "CHI SIAMO",
    href: "#chi-siamo",
    submenu: [
      { label: "CONTATTI", href: "#contatti" },
      { label: "RECENSIONI", href: "#recensioni" },
    ],
  },
  {
    label: "SERVIZI",
    href: "#servizi",
    submenu: [
      { label: "DOGWALK", href: "#dogwalk" },
      { label: "ASILO", href: "#asilo" },
      { label: "PENSIONE", href: "#pensione" },
      { label: "TAXY", href: "#taxy" },
    ],
  },
  { label: "GALLERIA", href: "#galleria" },
  { label: "PRENOTA", href: "#prenota" },
  {
    label: "BLOG",
    href: "#blog",
    submenu: [
      { label: "LA STAMPA", href: "#stampa" },
      { label: "AIUTACI", href: "#aiutaci" },
      { label: "ADOZIONI", href: "#adozioni" },
    ],
  },
]

/* ─── SERVICES ─── */
const services = [
  {
    icon: MapPin,
    title: "Passeggiate",
    desc: "Passeggiate quotidiane in parchi sicuri, con attenzione alle esigenze di ogni cane.",
  },
  {
    icon: Heart,
    title: "Asilo Diurno",
    desc: "Un ambiente stimolante dove il tuo cane può giocare e socializzare tutto il giorno.",
  },
  {
    icon: Shield,
    title: "Pensionato",
    desc: "Quando sei via, il tuo cane avrà una casa accogliente con cure amorevoli 24 ore su 24, 7 giorni su 7.",
  },
]

/* ─── WHY US FEATURES ─── */
const features = [
  { icon: Clock, title: "Flessibilità", desc: "Orari adatti alle tue esigenze" },
  { icon: Heart, title: "Passione", desc: "Amiamo davvero gli animali" },
  { icon: Shield, title: "Sicurezza", desc: "Ambienti controllati e sicuri" },
  { icon: Star, title: "Qualità", desc: "Servizio a 5 stelle" },
]

/* ─── STATS ─── */
const stats = [
  { value: "500+", label: "Cani Felici" },
  { value: "5+", label: "Anni Esperienza" },
  { value: "100%", label: "Amore Garantito" },
]

/* ─── TESTIMONIALS ─── */
const testimonials = [
  {
    name: "Maria Rossi",
    text: "Abbiella non è mai stata così tranquilla e felice!",
  },
  {
    name: "Giovanni Bianchi",
    text: "Finalmente posso viaggiare tranquillo sapendo che Rocky è in ottime mani.",
  },
  {
    name: "Francesca Verdi",
    text: "Le passeggiate quotidiane hanno trasformato il comportamento di Bella. Consigliatissimi!",
  },
]

/* ─── FAQ ─── */
const faqs = [
  { q: "Quali servizi offerti?", a: "Offriamo passeggiate, asilo diurno, pensionato e servizio taxi per i vostri amici a quattro zampe." },
  { q: "Quanto costano i vostri servizi?", a: "I nostri prezzi variano in base al servizio scelto. Contattateci per un preventivo personalizzato." },
  { q: "Il mio cane deve essere vaccinato?", a: "Sì, tutti i cani devono avere le vaccinazioni aggiornate per la sicurezza di tutti." },
  { q: "Accettate cani di tutte le taglie e razze?", a: "Assolutamente sì! Accogliamo cani di ogni taglia e razza con lo stesso amore." },
  { q: "Come funziona la prenotazione?", a: "Potete prenotare online tramite il nostro sito o contattarci telefonicamente." },
  { q: "Cosa succede in caso di emergenza?", a: "Abbiamo un protocollo di emergenza e collaboriamo con veterinari di fiducia nella zona." },
  { q: "Posso venire a visitare la struttura prima di prenotare?", a: "Certamente! Siamo felici di mostrarvi i nostri spazi. Contattateci per fissare una visita." },
]

/* ─── PAW EFFECT TYPE ─── */
interface PawEffect {
  id: number
  x: number
  y: number
}

export default function Home() {
  const [openSubmenu, setOpenSubmenu] = useState<number | null>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [pawEffects, setPawEffects] = useState<PawEffect[]>([])

  const handleMenuClick = (e: React.MouseEvent, index: number) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const newPaw: PawEffect = {
      id: Date.now(),
      x,
      y,
    }

    setPawEffects((prev) => [...prev, newPaw])

    setTimeout(() => {
      setPawEffects((prev) => prev.filter((paw) => paw.id !== newPaw.id))
    }, 1000)
  }

  const toggleSubmenu = (index: number) => {
    setOpenSubmenu(openSubmenu === index ? null : index)
  }

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      {/* ─── TOP BAR ─── */}
      <div className="bg-[#2f3640] px-4 py-2 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-6 text-sm font-lanoline">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>388 729 6149</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>info@waggleandroll.it</span>
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm font-lanoline">
            <button className="transition-colors hover:text-[#fbc531]">
              REGISTRATI
            </button>
            <span>|</span>
            <button className="transition-colors hover:text-[#fbc531]">
              ACCEDI
            </button>
          </div>
        </div>
      </div>

      {/* ─── HEADER WITH LOGO ─── */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="mx-auto max-w-7xl px-4">
          {/* LOGO CENTRALE */}
          <div className="flex justify-center py-4">
            <Image
              src="/images/LOGO.png"
              alt="Waggle and Roll Logo"
              width={200}
              height={200}
              className="h-auto w-48"
              priority
            />
          </div>

          {/* MENU ORIZZONTALE */}
          <nav className="border-t border-gray-200">
            <ul className="flex items-center justify-center gap-1">
              {menuItems.map((item, index) => (
                <li key={index} className="relative group">
                  <button
                    onClick={(e) => handleMenuClick(e, index)}
                    onMouseEnter={() => item.submenu && setOpenSubmenu(index)}
                    onMouseLeave={() => item.submenu && setOpenSubmenu(null)}
                    className="relative overflow-hidden px-4 py-4 font-lanoline text-sm font-semibold text-black transition-colors hover:text-[#fbc531]"
                  >
                    {item.label}
                    {item.submenu && (
                      <ChevronDown className="ml-1 inline h-4 w-4" />
                    )}

                    {/* PAW EFFECTS */}
                    {pawEffects
                      .filter((paw) => paw.id)
                      .map((paw) => (
                        <span
                          key={paw.id}
                          className="pointer-events-none absolute animate-ping text-xl"
                          style={{
                            left: `${paw.x}px`,
                            top: `${paw.y}px`,
                            animationDuration: "1s",
                          }}
                        >
                          🐾
                        </span>
                      ))}
                  </button>

                  {/* SUBMENU */}
                  {item.submenu && openSubmenu === index && (
                    <div
                      className="absolute left-0 top-full z-50 min-w-[200px] bg-white shadow-lg"
                      onMouseEnter={() => setOpenSubmenu(index)}
                      onMouseLeave={() => setOpenSubmenu(null)}
                    >
                      <ul className="py-2">
                        {item.submenu.map((subitem, subIndex) => (
                          <li key={subIndex}>
                            <a
                              href={subitem.href}
                              className="block px-6 py-2 font-lanoline text-sm text-black transition-colors hover:bg-[#fbc531] hover:text-white"
                            >
                              {subitem.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* ─── HERO ─── */}
      <section className="flex flex-col items-center px-6 pb-12 pt-8 text-center md:px-12 lg:pt-12">
        <p
          className="mx-auto max-w-2xl text-lg leading-relaxed text-foreground md:text-xl font-lanoline"
        >
          Passeggiate, asilo e pensione con personale esperto e appassionato.
          Perché ogni cane merita il meglio quando non puoi esserci.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4">
          <button className="flex items-center gap-2 rounded-lg bg-[#fbc531] px-8 py-4 text-lg font-semibold text-white shadow-md transition-transform hover:scale-105 hover:bg-[#e8a838] font-lanoline">
            Prenota Ora
            <ArrowRight className="h-5 w-5" />
          </button>
          <button
            className="rounded-lg border-2 border-[#fbc531] bg-transparent px-8 py-3 text-base font-semibold text-[#fbc531] transition-colors hover:bg-[#fdf3e1] font-lanoline"
          >
            Scopri i Servizi
          </button>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="bg-[#1a1a1a] px-6 py-20 text-white md:px-12">
        <p
          className="mb-2 text-center text-[#fbc531] font-lanoline"
        >
          I Nostri Servizi
        </p>
        <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl text-balance">
          Tutto ciò di cui ha bisogno
        </h2>
        <p
          className="mx-auto mb-12 max-w-xl text-center text-gray-300 font-lanoline"
        >
          Offriamo servizi completi per prenderci cura del tuo cane con amore e professionalità.
        </p>
        <div className="mx-auto flex max-w-4xl flex-col gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl bg-white p-8 text-foreground"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#fdf3e1]">
                <s.icon className="h-7 w-7 text-[#fbc531]" />
              </div>
              <h3 className="mb-3 text-2xl font-bold">{s.title}</h3>
              <p
                className="mb-4 text-muted-foreground font-lanoline"
              >
                {s.desc}
              </p>
              <button
                className="flex items-center gap-2 text-[#fbc531] transition-colors hover:text-[#e8a838] font-lanoline"
              >
                Scopri di più
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ─── WHY US ─── */}
      <section className="bg-[#1a1a1a] px-6 py-20 text-white md:px-12">
        <p
          className="mb-2 text-center text-[#fbc531] font-lanoline"
        >
          Perché Sceglierci
        </p>
        <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl text-balance">
          La fiducia si costruisce con i fatti
        </h2>
        <p
          className="mx-auto mb-12 max-w-xl text-center text-gray-300 font-lanoline"
        >
          Da anni ci prendiamo cura dei cani della nostra comunità. Ogni animale è trattato come un membro della famiglia.
        </p>

        {/* Stats */}
        <div className="mx-auto mb-16 grid max-w-3xl grid-cols-3 gap-4 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-bold text-[#fbc531] md:text-4xl">{s.value}</p>
              <p
                className="mt-1 text-sm text-gray-300 md:text-base font-lanoline"
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* Feature Cards */}
        <div className="mx-auto grid max-w-3xl grid-cols-2 gap-4 md:gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl bg-[#f5f5f0] p-6 text-foreground"
            >
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl">
                <f.icon className="h-7 w-7 text-[#fbc531]" />
              </div>
              <h3 className="mb-1 text-lg font-bold">{f.title}</h3>
              <p
                className="text-sm text-muted-foreground font-lanoline"
              >
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="bg-[#1a1a1a] px-6 py-20 text-white md:px-12">
        <p
          className="mb-2 text-center text-[#fbc531] font-lanoline"
        >
          Testimonianze
        </p>
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl text-balance">
          Cosa dicono di noi
        </h2>
        <div className="mx-auto flex max-w-2xl flex-col gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl bg-white p-8 text-foreground"
            >
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-[#fbc531] text-[#fbc531]" />
                ))}
              </div>
              <p
                className="mb-4 text-lg text-muted-foreground font-lanoline"
              >
                {`" ${t.text} "`}
              </p>
              <p className="font-bold font-lanoline">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="bg-[#1a1a1a] px-6 py-20 text-white md:px-12">
        <p
          className="mb-2 text-center text-[#fbc531] font-lanoline"
        >
          Domande frequenti
        </p>
        <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl text-balance">
          Domande Frequenti
        </h2>
        <p
          className="mx-auto mb-12 max-w-xl text-center text-gray-300 font-lanoline"
        >
          Tutto quello che devi sapere sui nostri servizi.
        </p>
        <div className="mx-auto flex max-w-2xl flex-col gap-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="rounded-2xl bg-white text-foreground">
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span
                  className={`text-lg font-semibold ${
                    openFaq === idx ? "text-[#fbc531]" : "text-foreground"
                  }`}
                >
                  {faq.q}
                </span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${
                    openFaq === idx ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openFaq === idx && (
                <div className="px-6 pb-6">
                  <p
                    className="text-muted-foreground font-lanoline"
                  >
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="px-6 py-20 text-center md:px-12">
        <h2 className="mb-4 text-3xl font-bold md:text-5xl text-balance">
          Pronto a far felice il tuo cane?
        </h2>
        <p
          className="mx-auto mb-8 max-w-xl text-lg text-muted-foreground font-lanoline"
        >
          Prenota ora e scopri perché centinaia di famiglie ci hanno scelto per prendersi cura dei loro amici a quattro zampe.
        </p>
        <button
          className="mx-auto flex items-center gap-2 rounded-lg bg-[#fbc531] px-10 py-4 text-lg font-semibold text-white shadow-md transition-transform hover:scale-105 hover:bg-[#e8a838] font-lanoline"
        >
          Prenota Subito
          <ArrowRight className="h-5 w-5" />
        </button>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-[#0a0a0a] px-6 py-16 text-gray-400 md:px-12">
        <div className="mx-auto max-w-6xl">
          {/* Logo placeholder + tagline */}
          <div className="mb-10">
            <div className="mb-4">
              <Image
                src="/images/LOGO.png"
                alt="Waggle and Roll"
                width={120}
                height={120}
                className="h-auto w-32"
              />
            </div>
            <p
              className="max-w-md text-sm leading-relaxed font-lanoline"
            >
              Amore e professionalità per i vostri amici a quattro zampe. Passeggiate, asilo e pensione in un ambiente sicuro e familiare.
            </p>
          </div>

          {/* Link Utili */}
          <div className="mb-10">
            <h4 className="mb-4 text-lg font-bold text-white">Link Utili</h4>
            <ul className="flex flex-col gap-3">
              {["Servizi", "Galleria", "Chi Siamo", "Prenota"].map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="text-sm text-gray-400 transition-colors hover:text-white font-lanoline"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contatti */}
          <div className="mb-10">
            <h4 className="mb-4 text-lg font-bold text-white">Contatti</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#fbc531]" />
                <span
                  className="text-sm font-lanoline"
                >
                  388 729 6149
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#fbc531]" />
                <span
                  className="text-sm font-lanoline"
                >
                  info@waggleandroll.it
                </span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-[#fbc531]" />
                <span
                  className="text-sm font-lanoline"
                >
                  Via dei Cani Felici, 42 - Milano, Italia
                </span>
              </div>
            </div>
          </div>

          {/* Seguici */}
          <div className="mb-10">
            <h4 className="mb-4 text-lg font-bold text-white">Seguici</h4>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#2a2a2a] text-white transition-colors hover:bg-[#fbc531]"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#2a2a2a] text-white transition-colors hover:bg-[#fbc531]"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Divider + Copyright */}
          <div className="border-t border-gray-700 pt-8 text-center">
            <p
              className="text-sm text-gray-500 font-lanoline"
            >
              © 2026 Waggle&Roll. Tutti i diritti riservati.
            </p>
          </div>
        </div>
      </footer>

      {/* ─── WHATSAPP FAB ─── */}
      <a
        href="https://wa.me/3887296149"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contattaci su WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25d366] shadow-xl transition-transform hover:scale-110"
      >
        <MessageCircle className="h-8 w-8 text-white" />
      </a>
    </div>
  )
}
