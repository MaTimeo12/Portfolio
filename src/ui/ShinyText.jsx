import React from 'react'
import { getShinyText } from '../lib/reactBitsAdapter'

export default function ShinyText({ children, className = '' }) {
  const [Shiny, setShiny] = React.useState(null)

  React.useEffect(() => {
    let mounted = true
    getShinyText().then((C) => mounted && setShiny(() => C))
    return () => { mounted = false }
  }, [])

  if (Shiny) return <Shiny className={className}>{children}</Shiny>
  return <span className={className}>{children}</span>
}
