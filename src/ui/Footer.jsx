import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-scLight/10 bg-scDark/80">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-scLight">© {new Date().getFullYear()} Mattis Tourneret. Tous droits réservés.</p>
        <div className="flex items-center gap-3">
          <a className="relative p-2 rounded-md hover:bg-scMetal/40 transition group" href="https://github.com/MaTimeo12" target="_blank" rel="noreferrer">
            <span className="pointer-events-none absolute -inset-1 rounded-lg bg-scBlue/20 blur opacity-0 group-hover:opacity-100 transition"></span>
            <Github size={18} />
          </a>
          <a className="relative p-2 rounded-md hover:bg-scMetal/40 transition group" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            <span className="pointer-events-none absolute -inset-1 rounded-lg bg-scBlue/20 blur opacity-0 group-hover:opacity-100 transition"></span>
            <Linkedin size={18} />
          </a>
          <a className="relative p-2 rounded-md hover:bg-scMetal/40 transition group" href="mailto:mattis.tourneret@example.com">
            <span className="pointer-events-none absolute -inset-1 rounded-lg bg-scBlue/20 blur opacity-0 group-hover:opacity-100 transition"></span>
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
