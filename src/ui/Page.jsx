import React from 'react'

export default function Page({ children }) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
      {children}
    </div>
  )
}
