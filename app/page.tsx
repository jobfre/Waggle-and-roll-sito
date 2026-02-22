"use client"

import { useState } from "react"
import {
  MapPin, Heart, Shield, Clock, Star, ChevronDown,
  ArrowRight, MessageCircle, Phone, Mail, Instagram, Facebook
} from "lucide-react"

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

export default function WaggleAndRoll() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white font-sans selection:bg-[#ccff00] selection:text-black">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-[#1a1a1a]/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
             <div className="w-10 h-10 bg-[#ccff00] rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-xl">W</span>
             </div>
             <span className="text-xl font-bold tracking-tighter uppercase">Waggle & Roll</span>
          </div>
          <button className="bg-[#ccff00] text-black px-6 py-2 rounded-full text-sm font-bold hover:scale-105 transition-transform">
            PRENOTA
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 bg-[#ccff00]/10 text-[#ccff00] rounded-full text-xs font-bold mb-6 border border-[#ccff00]/20">
            DOG WALKING & CARE A CAGLIARI 🐾
          </span>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tight">
            Amore a ogni <span className="text-[#ccff00]">passo.</span>
          </h1>
          <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Passeggiate, asilo e pensione con personale esperto e appassionato. 
            Perché il tuo cane merita il meglio, anche quando sei impegnato.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-[#ccff00] transition-colors flex items-center gap-2">
              Scopri i Servizi <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Servizi Quick Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: <MapPin />, title: "Dog Walking", desc: "Passeggiate in parchi sicuri." },
            { icon: <Heart />, title: "Asilo Diurno", desc: "Socializzazione e gioco tutto il giorno." },
            { icon: <Shield />, title: "Pensione", desc: "Una casa accogliente per le vacanze." }
          ].map((s, i) => (
            <div key={i} className="bg-[#2a2a2a] p-8 rounded-[32px] border border-white/5 hover:border-[#ccff00]/50 transition-colors">
              <div className="text-[#ccff00] mb-4">{s.icon}</div>
              <h3 className="text-xl font-bold mb-2">{s.title}</h3>
              <p className="text-gray-400">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WhatsApp FAB */}
      <a href="https://wa.me/3887296149" className="fixed bottom-8 right-8 bg-[#25d366] p-4 rounded-full shadow-lg hover:scale-110 transition-transform">
        <MessageCircle className="w-8 h-8 text-white" />
      </a>
    </div>
  )
}
