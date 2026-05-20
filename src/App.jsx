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
  Chatbot,
} from './components.jsx'

export default function App() {
  return (
    <main className="relative min-h-screen bg-cream text-ink overflow-hidden">
      <Header />
      <Hero />
      <Manifesto />
      <Lookbook services={SERVICES} />
      <Simulator />
      <Advisor questions={ADVISOR_QUESTIONS} />
      <Testimonial testimonial={TESTIMONIAL} />
      <Booking />
      <Footer />
      <StickyCTA />
      <Chatbot />
    </main>
  )
}
