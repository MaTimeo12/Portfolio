// Adaptateur pour utiliser react-bits si dispo, sinon fournir des fallbacks
// Utilise (0, eval)("import('react-bits')") pour éviter le pré-bundling Vite

// Charger react-bits dynamiquement; fallback au shim local si échec
async function loadReactBits() {
  try {
    // éviter pré-bundling: dynamic import via eval
    // eslint-disable-next-line no-eval
    return await (0, eval)("import('react-bits')")
  } catch (e) {
    return import('../lib/react-bits-shim.jsx')
  }
}

export async function getShinyText() {
  try {
    const mod = await loadReactBits()
    return mod.ShinyText
  } catch {
    return null
  }
}

export async function getSplashCursor() {
  try {
    const mod = await loadReactBits()
    return mod.SplashCursor
  } catch {
    return null
  }
}
