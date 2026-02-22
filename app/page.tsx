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
  Instagram,
  Facebook,
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
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white font-sans selection:bg-[#ccff00] selection:text-black">
      {/* Header / Navigation */}
      <nav className="fixed w-full z-50 bg-[#1a1a1a]/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
             <div className="w-12 h-12 bg-[#ccff00] rounded-full flex items-center justify-center overflow-hidden">
                <span className="text-black font-bold text-2xl">W</span>
             </div>
             <span className="text-xl font-bold tracking-tighter">WAGGLE & ROLL</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <div key={item.label} className="relative group">
                <a href={item.href} className="text-sm font-medium hover:text-[#ccff00] transition-colors flex items-center gap-1">
                  {item.label}
                  {item.submenu && <ChevronDown className="w-4 h-4" />}
                </a>
                {item.submenu && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-[#2a2a2a] border border-white/10 rounded-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                    {item.submenu.map((sub) => (
                      <a key={sub.label} href={sub.href} className="block px-4 py-2 text-sm hover:bg-[#ccff00] hover:text-black transition-colors">
                        {sub.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <button className="bg-[#ccff00] text-black px-6 py-2.5 rounded-full text-sm font-bold hover:scale-105 transition-transform active:scale-95">
            PRENOTA ORA
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#2a2a2a] rounded-[40px] p-8 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
               <span className="text-[200px] leading-none font-bold">🐾</span>
            </div>
            <div className="relative z-10 max-w-2xl">
              <span className="inline-block px-4 py-1.5 bg-[#ccff00] text-black rounded-full text-xs font-bold mb-6">
                IL MIGLIOR AMICO DEL TUO CANE
              </span>
              <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8">
                Passeggiate, asilo e <span className="text-[#ccff00]">tanto amore.</span>
              </h1>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                Offriamo servizi professionali di dog walking e cura degli animali a Cagliari. 
                Perché ogni cane merita una giornata speciale, anche quando tu non ci sei.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-black px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-[#ccff00] transition-colors">
                  I nostri servizi <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border border-white/20 px-8 py-4 rounded-full font-bold hover:bg-white/5 transition-colors">
                  Guarda la gallery
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/3887296149" 
        target="_blank" 
        className="fixed bottom-8 right-8 z-50 bg-[#25d366] p-4 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95"
      >
        <MessageCircle className="w-8 h-8 text-white" />
      </a>
    </div>
  )
}
