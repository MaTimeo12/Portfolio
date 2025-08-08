import React from 'react'

export default function SectionTitle({ children, className = '' }) {
  return (
    <h2 className={`text-3xl font-bold mb-6 animate-fadeUp ${className}`}>{children}</h2>
  )
}
