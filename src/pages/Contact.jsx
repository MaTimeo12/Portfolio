import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Contact() {
  function onSubmit(e) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const payload = Object.fromEntries(data.entries())
    alert(`Merci ${payload.name}! Je te répondrai à ${payload.email}.`) // remplace par une vraie intégration
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-12 md:py-16 relative">
      <motion.h2 className="text-3xl font-bold mb-6" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>Contact</motion.h2>
      <div className="grid md:grid-cols-2 gap-8">
        <form onSubmit={onSubmit} className="card-glass p-6 space-y-4 relative overflow-hidden">
          <span className="pointer-events-none absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-scBlue/15 to-transparent blur-lg opacity-0 group-[.glow]:opacity-100 transition" />
          <div>
            <label className="block text-sm mb-1">Nom</label>
            <input name="name" required className="w-full px-3 py-2 rounded bg-scDark border border-scLight/20 text-scWhite focus:outline-none focus:ring-2 focus:ring-scBlue/50 transition" placeholder="Ton nom" />
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input type="email" name="email" required className="w-full px-3 py-2 rounded bg-scDark border border-scLight/20 text-scWhite focus:outline-none focus:ring-2 focus:ring-scBlue/50 transition" placeholder="ton@mail.com" />
          </div>
          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea name="message" rows="4" required className="w-full px-3 py-2 rounded bg-scDark border border-scLight/20 text-scWhite focus:outline-none focus:ring-2 focus:ring-scBlue/50 transition" placeholder="Ton message" />
          </div>
          <button className="relative px-4 py-2 rounded-md bg-scBlue text-scDark font-semibold shadow-glow hover:brightness-110 transition">
            <span className="pointer-events-none absolute -inset-0.5 rounded-md bg-gradient-to-r from-scBlue/40 to-transparent blur opacity-0 hover:opacity-100 transition" />
            Envoyer
          </button>
        </form>
        <div className="card-glass p-6">
          <h3 className="font-semibold mb-3">Réseaux</h3>
          <div className="flex items-center gap-3">
            <a className="p-2 rounded-md hover:bg-scMetal/40 transition flex items-center gap-2" href="https://github.com/MaTimeo12" target="_blank" rel="noreferrer">
              <Github size={18} /> Github
            </a>
            <a className="p-2 rounded-md hover:bg-scMetal/40 transition flex items-center gap-2" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              <Linkedin size={18} /> LinkedIn
            </a>
            <a className="p-2 rounded-md hover:bg-scMetal/40 transition flex items-center gap-2" href="mailto:mattis.tourneret@example.com">
              <Mail size={18} /> Email
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
