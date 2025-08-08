import React from 'react'
import { motion } from 'framer-motion'
import ShinyText from './ShinyText'

// Logos SVG minimalistes
const IconJS = (props) => (
  <svg viewBox="0 0 256 256" width="28" height="28" aria-hidden fill="currentColor" {...props}>
    <path d="M0 0h256v256H0z" fill="#F7DF1E"/>
    <path d="M67 214l20-12c3 6 6 11 13 11 7 0 12-3 12-16v-86h24v86c0 25-15 36-36 36-19 0-30-10-33-19zm88-2l20-11c5 8 11 14 22 14 9 0 15-4 15-11 0-8-6-10-17-15l-6-3c-18-7-30-15-30-33 0-16 12-28 31-28 14 0 25 5 33 18l-18 12c-4-7-9-9-15-9-7 0-12 5-12 9 0 7 5 9 16 14l6 3c21 9 33 16 33 35 0 20-16 30-37 30-21 0-35-10-41-25z" fill="#1F2D3A"/>
  </svg>
)

const IconReact = (props) => (
  <svg viewBox="0 0 256 256" width="28" height="28" aria-hidden {...props}>
    <circle cx="128" cy="128" r="12" fill="#61DAFB"/>
    <g fill="none" stroke="#61DAFB" strokeWidth="8">
      <ellipse cx="128" cy="128" rx="92" ry="36"/>
      <ellipse cx="128" cy="128" rx="92" ry="36" transform="rotate(60 128 128)"/>
      <ellipse cx="128" cy="128" rx="92" ry="36" transform="rotate(120 128 128)"/>
    </g>
  </svg>
)

const IconVite = (props) => (
  <svg viewBox="0 0 256 256" width="28" height="28" aria-hidden {...props}>
    <defs>
      <linearGradient id="vite-a" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#41D1FF"/>
        <stop offset="50%" stopColor="#BD34FE"/>
        <stop offset="100%" stopColor="#FFA800"/>
      </linearGradient>
    </defs>
    <path d="M20 40l108-24 108 24-108 176z" fill="url(#vite-a)"/>
    <path d="M128 36l56 12-56 92-56-92z" fill="#FFE08A" opacity="0.6"/>
  </svg>
)

const IconHTML = (props) => (
  <svg viewBox="0 0 256 256" width="28" height="28" aria-hidden {...props}>
    <path d="M38 28h180l-16 182-74 22-74-22L38 28z" fill="#E44D26"/>
    <path d="M128 216l60-18 14-154H128v172z" fill="#F16529"/>
    <path d="M128 108H86l2 20h40v-20zm0-40H82l2 20h44V68zm0 84l-34-10 2 20 32 10v-20z" fill="#EBEBEB"/>
    <path d="M128 108v20h38l-4 44-34 10v20l56-16 6-78h-62zm0-40v20h46l2-20h-48z" fill="#FFF"/>
  </svg>
)

const iconMap = {
  js: IconJS,
  react: IconReact,
  vite: IconVite,
  html: IconHTML,
}

export default function SkillBadge({ type, label }) {
  const Icon = iconMap[type]
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
      className="group relative overflow-hidden rounded-xl border border-scLight/20 bg-scMetal/30 px-4 py-3 flex items-center gap-3 shadow-glow"
    >
      <motion.div
        className="p-2 rounded-lg bg-scDark border border-scLight/10 text-scWhite"
        animate={{ rotate: [0, 3, -3, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Icon className="drop-shadow" />
      </motion.div>
      <div className="min-w-0">
        <ShinyText className="text-base font-semibold">{label}</ShinyText>
        <div className="h-px w-16 bg-gradient-to-r from-scBlue/60 to-transparent mt-1 opacity-0 group-hover:opacity-100 transition" />
      </div>
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition" style={{
        background: 'radial-gradient(600px 200px at var(--x,50%) var(--y,50%), rgba(0,191,255,0.15), transparent)'
      }} />
    </motion.div>
  )
}
