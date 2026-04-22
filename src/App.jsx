import React, { useState, useMemo, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  SITE,
  SERVICES,
  TESTIMONIAL,
  ADVISOR_QUESTIONS,
} from './data.js'
import {
  Header,
  Hero,
  Manifesto,
  Lookbook,
  Simulator,
  Advisor,
  Testimonial,
  Booking,
  Footer,
  StickyCTA,
} from './components.jsx'

export default function App() {
  return (
    <main className="relative min-h-screen bg-ink text-powder overflow-hidden">
      <Header />
      <Hero />
      <Manifesto />
      <Lookbook services={SERVICES} />
      <Simulator services={SERVICES} />
      <Advisor questions={ADVISOR_QUESTIONS} />
      <Testimonial testimonial={TESTIMONIAL} />
      <Booking />
      <Footer />
      <StickyCTA />
    </main>
  )
}
