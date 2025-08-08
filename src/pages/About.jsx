import React from 'react'
import SkillBadge from '../ui/SkillBadge'
import { motion } from 'framer-motion'
import ParallaxHover from '../ui/ParallaxHover'

export default function About() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12 md:py-16">
      <motion.h2 className="text-3xl font-bold mb-6" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>À propos</motion.h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <p className="text-scLight">
            Je suis Mattis Tourneret, créateur d’expériences interactives. J’aime mêler design et technique pour
            offrir des interfaces claires, rapides et immersives.
          </p>
          <p className="text-scLight">
            Stack et outils principaux: JavaScript, React, Vite, HTML.
          </p>
        </div>
  <ParallaxHover className="card-glass p-6">
          <h3 className="font-semibold mb-4">Compétences</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <SkillBadge type="js" label="JavaScript" />
            <SkillBadge type="react" label="React" />
            <SkillBadge type="vite" label="Vite" />
            <SkillBadge type="html" label="HTML" />
          </div>
  </ParallaxHover>
      </div>
    </section>
  )
}
