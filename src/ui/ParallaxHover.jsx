import React from 'react'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'

// ParallaxHover: applique une rotation/translation subtile selon la position de la souris
export default function ParallaxHover({ children, intensity = 10, className = '' }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rx = useTransform(y, [ -50, 50 ], [ intensity, -intensity ])
  const ry = useTransform(x, [ -50, 50 ], [ -intensity, intensity ])

  const onMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const px = e.clientX - (rect.left + rect.width / 2)
    const py = e.clientY - (rect.top + rect.height / 2)
    x.set(Math.max(-50, Math.min(50, (px / (rect.width / 2)) * 50)))
    y.set(Math.max(-50, Math.min(50, (py / (rect.height / 2)) * 50)))
  }
  const onLeave = () => {
    animate(x, 0, { duration: 0.35 })
    animate(y, 0, { duration: 0.35 })
  }

  return (
    <motion.div
      className={className}
      style={{ perspective: 1000 }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <motion.div style={{ transformStyle: 'preserve-3d', rotateX: rx, rotateY: ry }}>
        {children}
      </motion.div>
    </motion.div>
  )
}
