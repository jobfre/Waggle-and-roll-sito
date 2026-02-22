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

export default function page() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      {/* Il resto del tuo bellissimo sito scuro va qui */}
      <h1 className="text-center pt-20">Waggle & Roll - Sito in Aggiornamento</h1>
    </div>
  )
}
