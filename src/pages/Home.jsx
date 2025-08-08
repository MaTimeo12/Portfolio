import React from 'react'
import ShinyText from '../ui/ShinyText'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ParallaxHover from '../ui/ParallaxHover'

export default function Home() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.p className="text-scLight uppercase tracking-widest text-xs mb-3" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>Bienvenue</motion.p>
          <motion.h1 className="text-4xl md:text-5xl font-extrabold leading-tight" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
            <ShinyText className="text-scBlue">Mattis Tourneret</ShinyText>
          </motion.h1>
          <p className="text-scLight mt-4 max-w-xl">
            Développeur passionné par les expériences interactives et le front moderne. J'aime créer des jeux,
            des mods, des sites élégants et animés, avec un soin particulier pour l'UX.
          </p>
          <div className="flex gap-3 mt-8">
            <Link to="/projets" className="relative inline-flex items-center gap-2 px-4 py-2 rounded-md bg-scBlue text-scDark font-semibold shadow-glow hover:brightness-110 transition">
              <span className="pointer-events-none absolute -inset-0.5 rounded-lg bg-gradient-to-r from-scBlue/40 to-transparent blur opacity-0 hover:opacity-100 transition"></span>
              Voir mes projets <ArrowRight size={16} />
            </Link>
            <Link to="/a-propos" className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-scLight/30 text-scWhite hover:bg-scMetal/40 transition">
              À propos
            </Link>
          </div>
        </div>
        <ParallaxHover className="card-glass p-6">
          <div className="aspect-video w-full rounded-lg bg-gradient-to-br from-scMetal/60 to-scDark/80 border border-scLight/20 grid place-items-center text-scLight">
            <span className="animate-pulse">Animation héro (placeholder)</span>
          </div>
          <p className="text-sm text-scLight mt-3">
            Section héro animée. Remplace l'image/animation par un visuel de ton choix (Unity/Blender, ou une vidéo).
          </p>
        </ParallaxHover>
      </div>
    </section>
  )
}
