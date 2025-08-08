import React from 'react'
import ProjectCard from '../ui/ProjectCard'
import ParallaxHover from '../ui/ParallaxHover'
import { motion } from 'framer-motion'

const demoProjects = [
  {
    title: 'Star Voyager (Unity)',
    description: 'Mini jeu spatial en C# avec particules et shaders simples.',
    tags: ['Unity', 'C#', 'Gameplay'],
    repo: 'https://github.com/MaTimeo12',
  },
  {
    title: 'Mod Minecraft – QoL',
    description: 'Pack de mods Java pour améliorer l’ergonomie et l’UI.',
    tags: ['Java', 'Forge', 'Fabric'],
  },
  {
    title: 'Site AshenFall',
    description: 'Charte graphique moderne avec Tailwind et animations.',
    tags: ['React', 'Tailwind', 'Vite'],
    demo: 'https://ashenfall.netlify.app/'
  },
]

export default function Projects() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12 md:py-16">
      <motion.h2
        className="text-3xl font-bold mb-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        Projets
      </motion.h2>
      <motion.p
        className="text-scLight mb-8"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.05 }}
      >
        Sélection de projets (jeux, mods, sites). Ajoute/édite facilement dans ce tableau.
      </motion.p>
      <motion.div
        className="grid sm:grid-cols-2 gap-6"
        initial="hidden"
        animate="show"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
      >
        {demoProjects.map((p) => (
          <motion.div
            key={p.title}
            variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
          >
            <ParallaxHover className="[--x:50%] [--y:50%]">
              <div className="relative">
                <div className="pointer-events-none absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-scBlue/15 to-transparent blur-md opacity-0 hover:opacity-100 transition" />
                <ProjectCard {...p} />
              </div>
            </ParallaxHover>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
