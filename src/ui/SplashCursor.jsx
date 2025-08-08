import React from 'react'
import { getSplashCursor } from '../lib/reactBitsAdapter'

export default function SplashCursor() {
  const [Comp, setComp] = React.useState(null)

  React.useEffect(() => {
    let mounted = true
    getSplashCursor().then((C) => mounted && setComp(() => C))
    return () => { mounted = false }
  }, [])

  if (!Comp) return null
  return <Comp color="#00BFFF" size={12} splashRadius={36} />
}
