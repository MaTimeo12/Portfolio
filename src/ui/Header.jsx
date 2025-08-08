import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Rocket, FolderOpen, Info, Mail } from 'lucide-react'

const navLinkClass = ({ isActive }) =>
  `relative px-3 py-2 rounded-md text-sm font-medium transition ${
    isActive ? 'text-scBlue bg-scMetal/50 shadow-glow' : 'text-scLight hover:text-scWhite hover:bg-scMetal/40'
  } after:content-[""] after:absolute after:left-3 after:right-3 after:-bottom-0.5 after:h-px after:bg-scBlue/60 after:scale-x-0 hover:after:scale-x-100 after:transition after:origin-left`

export default function Header() {
  const location = useLocation()
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xs/0 bg-scDark/70 border-b border-scLight/10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 text-scWhite">
            <Rocket className="text-scBlue" size={22} />
            <span className="font-semibold tracking-wide">Mattis Tourneret</span>
          </Link>
          <nav className="flex items-center gap-1">
            <NavLink to="/" className={navLinkClass} end>
              Accueil
            </NavLink>
            <NavLink to="/projets" className={navLinkClass}>
              <span className="hidden sm:inline">Projets</span>
              <FolderOpen className="sm:hidden" size={18} />
            </NavLink>
            <NavLink to="/a-propos" className={navLinkClass}>
              <span className="hidden sm:inline">À propos</span>
              <Info className="sm:hidden" size={18} />
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              <span className="hidden sm:inline">Contact</span>
              <Mail className="sm:hidden" size={18} />
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  )
}
