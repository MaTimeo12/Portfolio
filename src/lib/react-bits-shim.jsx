// Shim local de react-bits pour environnement web pur
import React from 'react'

export function ShinyText({ children, className = '' }) {
  return (
    <span
      className={
        'relative inline-block bg-clip-text text-transparent ' +
        'bg-gradient-to-r from-scLight via-scWhite to-scBlue ' +
        'animate-[shimmer_2.2s_ease_infinite] ' +
        className
      }
      style={{ WebkitTextFillColor: 'transparent' }}
    >
      {children}
      <style>{`
        @keyframes shimmer {
          0% { filter: drop-shadow(0 0 0 rgba(0,191,255,0.0)); }
          50% { filter: drop-shadow(0 0 6px rgba(0,191,255,0.6)); }
          100% { filter: drop-shadow(0 0 0 rgba(0,191,255,0.0)); }
        }
      `}</style>
    </span>
  )
}

export function SplashCursor({ color = '#00BFFF', size = 10, splashRadius = 36 }) {
  React.useEffect(() => {
    const el = document.createElement('div')
    el.style.position = 'fixed'
    el.style.left = '0'
    el.style.top = '0'
    el.style.width = `${size}px`
    el.style.height = `${size}px`
    el.style.borderRadius = '999px'
    el.style.pointerEvents = 'none'
    el.style.background = color
    el.style.opacity = '0.8'
    el.style.transform = 'translate(-50%, -50%)'
    el.style.zIndex = '9999'
    document.body.appendChild(el)

    let raf
    const onMove = (e) => {
      el.style.left = e.clientX + 'px'
      el.style.top = e.clientY + 'px'
    }
    const onClick = (e) => {
      const splash = document.createElement('div')
      splash.style.position = 'fixed'
      splash.style.left = e.clientX + 'px'
      splash.style.top = e.clientY + 'px'
      splash.style.width = '2px'
      splash.style.height = '2px'
      splash.style.border = `2px solid ${color}`
      splash.style.borderRadius = '999px'
      splash.style.transform = 'translate(-50%, -50%)'
      splash.style.opacity = '0.8'
      splash.style.zIndex = '9998'
      document.body.appendChild(splash)
      let start
      const dur = 400
      const tick = (t) => {
        if (!start) start = t
        const p = Math.min(1, (t - start) / dur)
        const r = splashRadius * p
        splash.style.width = r * 2 + 'px'
        splash.style.height = r * 2 + 'px'
        splash.style.opacity = String(0.8 * (1 - p))
        if (p < 1) raf = requestAnimationFrame(tick)
        else splash.remove()
      }
      raf = requestAnimationFrame(tick)
    }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('click', onClick)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('click', onClick)
      el.remove()
    }
  }, [color, size, splashRadius])
  return null
}
