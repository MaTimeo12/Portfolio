import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Header from './ui/Header'
import Footer from './ui/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'

// Transitions de pages via classes CSS sur <main>
function PageContainer({ children }) {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={location.pathname}
        className="min-h-[calc(100vh-160px)]"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <div className="bg-scDark text-scWhite bg-star-grid">
      <Header />
      <PageContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projets" element={<Projects />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </PageContainer>
      <Footer />
    </div>
  )
}
