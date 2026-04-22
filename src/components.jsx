import React, { useState, useMemo, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SITE, SERVICES } from './data.js'

// ============================================================
// Shared primitives
// ============================================================
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
}

function Section({ id, className = '', children }) {
  return (
    <section id={id} className={`relative px-6 md:px-12 py-20 md:py-32 ${className}`}>
      {children}
    </section>
  )
}

function Eyebrow({ children }) {
  return (
    <span className="inline-block text-[0.7rem] tracking-[0.35em] uppercase text-copper/90 mb-4">
      {children}
    </span>
  )
}

function Img({ src, alt, className = '' }) {
  const [failed, setFailed] = useState(false)
  if (failed || !src) {
    return <div className={`placeholder-gradient ${className}`} aria-label={alt} />
  }
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={className}
    />
  )
}

// ============================================================
// Header — glassmorphism flottant
// ============================================================
export function Header() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'backdrop-blur-xl bg-cream/60 border-b border-ink/10'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-4">
        <a href="#top" className="flex items-center gap-3">
          <Img src="/images/logo.png" alt="Freyja" className="h-10 w-10 rounded-full object-cover" />
          <span className="font-serif text-xl tracking-wide text-ink hidden sm:block">
            Freyja <span className="text-gold">Hair</span>
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm tracking-wider uppercase text-ink/70">
          <a href="#lookbook" className="hover:text-ink transition">Services</a>
          <a href="#simulator" className="hover:text-ink transition">Tarifs</a>
          <a href="#advisor" className="hover:text-ink transition">Conseiller</a>
          <a href="#booking" className="hover:text-ink transition">Contact</a>
        </div>
        <a
          href={SITE.bookingUrl}
          target="_blank"
          rel="noreferrer"
          className="px-5 py-2.5 rounded-full border border-ink/40 text-sm tracking-wider uppercase text-ink hover:bg-ink hover:text-cream transition"
        >
          Réserver
        </a>
      </nav>
    </header>
  )
}

// ============================================================
// Hero — editorial, dramatic
// ============================================================
export function Hero() {
  return (
    <Section id="top" className="min-h-[100svh] flex items-center pt-32 pb-16 bg-cream">
      <div className="absolute inset-0 -z-10">
        <Img
          src="/images/hero.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/50 via-cream/20 to-cream" />
      </div>

      <div className="relative max-w-7xl mx-auto w-full grid md:grid-cols-12 gap-8 items-center">
        <motion.div
          className="md:col-span-7"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.span variants={fadeUp} className="block text-[0.7rem] tracking-[0.4em] uppercase text-gold/90 mb-6">
            Maison Freyja · {SITE.city}
          </motion.span>
          <motion.h1
            variants={fadeUp}
            className="font-serif text-6xl md:text-8xl lg:text-[9rem] leading-[0.95] text-ink"
          >
            <span className="block">Freyja</span>
            <span className="block text-gold italic font-light text-4xl md:text-6xl lg:text-7xl mt-2">
              hair &amp; soin
            </span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-xl font-serif italic text-xl md:text-2xl text-ink/80 leading-relaxed"
          >
            « {SITE.tagline} »
          </motion.p>
          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
            <a
              href={SITE.bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="group px-8 py-4 rounded-full bg-ink text-cream font-medium tracking-wider uppercase text-sm hover:shadow-glow transition-all"
            >
              Réserver un rendez-vous
              <span className="ml-2 inline-block group-hover:translate-x-1 transition">→</span>
            </a>
            <a
              href="#lookbook"
              className="px-8 py-4 rounded-full border border-ink/30 text-ink/90 tracking-wider uppercase text-sm hover:border-ink transition"
            >
              Découvrir
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="md:col-span-5 hidden md:block"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-glow">
            <Img
              src="/images/portrait.jpg"
              alt="Travail Freyja"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

// ============================================================
// Manifesto
// ============================================================
export function Manifesto() {
  return (
    <Section id="manifesto" className="bg-cream">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={stagger}
      >
        <motion.div variants={fadeUp}>
          <Eyebrow>Notre promesse</Eyebrow>
        </motion.div>
        <motion.h2
          variants={fadeUp}
          className="font-serif text-4xl md:text-6xl leading-tight text-ink"
        >
          Une coiffure <span className="italic text-gold">douce</span>
          <br />qui respecte vos cheveux naturels.
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="mt-8 text-lg md:text-xl text-ink/70 leading-relaxed max-w-2xl mx-auto"
        >
          {SITE.promise} Sans cire, sans tension excessive. Un geste d'orfèvre au service
          de votre fibre capillaire — pour une coiffure qui dure, et un cheveu qui pousse.
        </motion.p>
        <motion.div
          variants={fadeUp}
          className="mt-12 grid grid-cols-3 gap-6 text-center max-w-2xl mx-auto"
        >
          {[
            { k: 'Sans', v: 'Cire' },
            { k: 'Sans', v: 'Douleur' },
            { k: 'Avec', v: 'Soin' },
          ].map((it) => (
            <div key={it.v} className="border-t border-ink/20 pt-4">
              <div className="text-xs uppercase tracking-widest text-gold/70">{it.k}</div>
              <div className="font-serif text-2xl text-ink mt-1">{it.v}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </Section>
  )
}

// ============================================================
// Lookbook — bento asymétrique
// ============================================================
export function Lookbook({ services }) {
  const list = Object.values(services)
  return (
    <Section id="lookbook" className="bg-sand">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <div>
            <Eyebrow>Lookbook</Eyebrow>
            <h2 className="font-serif text-4xl md:text-6xl text-ink leading-tight">
              La collection
            </h2>
          </div>
          <p className="text-ink/60 max-w-md">
            Trois savoir-faire, une même exigence : sublimer sans agresser.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-6">
          {list.map((s, i) => {
            const spans = [
              'md:col-span-4 aspect-[4/5] md:aspect-auto md:min-h-[520px]',
              'md:col-span-2 aspect-square md:min-h-[260px]',
              'md:col-span-6 aspect-[16/6] md:min-h-[280px]',
            ]
            return (
              <motion.a
                key={s.id}
                href="#simulator"
                className={`group relative overflow-hidden rounded-2xl md:rounded-3xl ${spans[i] || ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
              >
                <div className="absolute inset-0 placeholder-gradient" />
                <Img
                  src={s.image}
                  alt={s.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1200ms] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/40 to-transparent" />
                <div className="relative h-full flex flex-col justify-end p-6 md:p-8">
                  <div className="text-[0.7rem] tracking-[0.35em] uppercase text-gold/80 mb-2">
                    {s.subtitle}
                  </div>
                  <h3 className="font-serif text-3xl md:text-5xl text-ink">{s.name}</h3>
                  <p className="mt-3 text-sm md:text-base text-ink/70 max-w-md">
                    {s.description}
                  </p>
                  <div className="mt-4 text-xs uppercase tracking-widest text-ink/60 group-hover:text-gold transition">
                    Voir les tarifs →
                  </div>
                </div>
              </motion.a>
            )
          })}
        </div>
      </div>
    </Section>
  )
}

// ============================================================
// Simulator — prix dynamique
// ============================================================
export function Simulator({ services }) {
  const [categoryId, setCategoryId] = useState('locks')
  const [variantId, setVariantId] = useState(services.locks.variants[0].id)
  const [thickness, setThickness] = useState('small')
  const [length, setLength] = useState('moyen')
  const [optionIds, setOptionIds] = useState([])

  const category = services[categoryId]
  const variant = useMemo(
    () => category.variants.find((v) => v.id === variantId) || category.variants[0],
    [category, variantId]
  )

  // Reset dependent state when category changes
  useEffect(() => {
    const firstVariant = category.variants[0]
    setVariantId(firstVariant?.id || '')
    setOptionIds([])
  }, [categoryId]) // eslint-disable-line

  const isLocks = categoryId === 'locks'

  const price = useMemo(() => {
    if (!variant) return null
    let base = 0
    if (isLocks && variant.altByThickness) {
      base = variant.altByThickness[thickness]?.[length] ?? 0
    } else {
      base = variant.price ?? 0
    }
    const opts = category.options.filter((o) => optionIds.includes(o.id))
    const extras = opts.reduce((sum, o) => sum + o.price, 0)
    return base + extras
  }, [category, variant, thickness, length, optionIds, isLocks, isInfoOnly])

  const toggleOption = (id) => {
    setOptionIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    )
  }

  return (
    <Section id="simulator" className="bg-gradient-to-b from-cream via-sand/40 to-cream">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Eyebrow>Estimation</Eyebrow>
          <h2 className="font-serif text-4xl md:text-6xl text-ink">
            Simulateur <span className="italic text-gold">de prix</span>
          </h2>
          <p className="mt-4 text-ink/60 max-w-xl mx-auto">
            Composez votre prestation. Le prix est indicatif — il peut être ajusté selon l'épaisseur
            de vos cheveux et la quantité de mèches.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-6 md:gap-10">
          {/* Controls */}
          <div className="md:col-span-3 space-y-8">
            <StepBlock label="1 · Catégorie">
              <div className="flex flex-wrap gap-2">
                {Object.values(services).map((s) => (
                  <Pill
                    key={s.id}
                    active={categoryId === s.id}
                    onClick={() => setCategoryId(s.id)}
                  >
                    {s.name}
                  </Pill>
                ))}
              </div>
            </StepBlock>

            {(
              <>
                <StepBlock label="2 · Variante">
                  <div className="flex flex-wrap gap-2">
                    {category.variants.map((v) => (
                      <Pill
                        key={v.id}
                        active={variantId === v.id}
                        onClick={() => setVariantId(v.id)}
                      >
                        {v.name}
                      </Pill>
                    ))}
                  </div>
                </StepBlock>

                {isLocks && (
                  <>
                    <StepBlock label="3 · Épaisseur">
                      <div className="flex flex-wrap gap-2">
                        {[
                          { id: 'small', label: 'Small' },
                          { id: 'moyen', label: 'Moyen' },
                          { id: 'grand', label: 'Grand' },
                        ].map((t) => (
                          <Pill
                            key={t.id}
                            active={thickness === t.id}
                            onClick={() => setThickness(t.id)}
                          >
                            {t.label}
                          </Pill>
                        ))}
                      </div>
                    </StepBlock>

                    <StepBlock label="4 · Longueur">
                      <div className="flex flex-wrap gap-2">
                        {[
                          { id: 'court', label: 'Court' },
                          { id: 'moyen', label: 'Moyen' },
                          { id: 'long', label: 'Long' },
                        ].map((l) => (
                          <Pill
                            key={l.id}
                            active={length === l.id}
                            onClick={() => setLength(l.id)}
                          >
                            {l.label}
                          </Pill>
                        ))}
                      </div>
                    </StepBlock>
                  </>
                )}

                {category.options.length > 0 && (
                  <StepBlock label={isLocks ? '5 · Options' : '3 · Options'}>
                    <div className="flex flex-wrap gap-2">
                      {category.options.map((o) => (
                        <Pill
                          key={o.id}
                          active={optionIds.includes(o.id)}
                          onClick={() => toggleOption(o.id)}
                        >
                          {o.name} <span className="opacity-70">+{o.price}€</span>
                        </Pill>
                      ))}
                    </div>
                  </StepBlock>
                )}
              </>
            )}
          </div>

          {/* Recap */}
          <div className="md:col-span-2">
            <div className="sticky top-28 p-8 rounded-3xl border border-rose/40 bg-powder/60 backdrop-blur shadow-soft">
              <div className="text-xs uppercase tracking-[0.3em] text-gold/80 mb-2">
                Votre prestation
              </div>
              <div className="font-serif text-3xl text-ink mb-1">{category.name}</div>
              <div className="text-ink/70 mb-6">
                {variant?.name}
                {isLocks && ` · ${thickness} · ${length}`}
              </div>
              {optionIds.length > 0 && (
                <ul className="mb-6 space-y-1 text-sm text-ink/60">
                  {category.options
                    .filter((o) => optionIds.includes(o.id))
                    .map((o) => (
                      <li key={o.id}>+ {o.name}</li>
                    ))}
                </ul>
              )}
              <div className="border-t border-ink/20 pt-6">
                <div className="text-xs uppercase tracking-widest text-ink/60">À partir de</div>
                <div className="mt-1 flex items-baseline gap-1">
                  <span className="font-serif text-6xl text-copper">{price}</span>
                  <span className="text-xl text-copper/80">€</span>
                </div>
              </div>
              <a
                href={SITE.bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-8 block text-center px-6 py-4 rounded-full bg-ink text-cream font-medium tracking-wider uppercase text-sm hover:shadow-glow transition"
              >
                Réserver cette prestation
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

function StepBlock({ label, children }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-[0.3em] text-gold/80 mb-3">{label}</div>
      {children}
    </div>
  )
}

function Pill({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2.5 rounded-full text-sm tracking-wide transition border ${
        active
          ? 'bg-ink text-cream border-ink shadow-glow'
          : 'border-ink/25 text-ink/80 hover:border-ink/60 hover:text-ink'
      }`}
    >
      {children}
    </button>
  )
}

// ============================================================
// Advisor — conseiller guidé (pur React, pas de LLM)
// ============================================================
export function Advisor({ questions }) {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState({})
  const done = step >= questions.length

  const recommend = useMemo(() => {
    const cat = answers.goal || 'locks'
    const service = SERVICES[cat]
    let variantName = service.variants[0]?.name || 'Diagnostic personnalisé'
    if (cat === 'locks') {
      variantName =
        answers.budget === 'high'
          ? 'Invisible Locks'
          : answers.budget === 'low'
          ? 'Retwist'
          : 'Faux Locks'
    } else if (cat === 'tissages') {
      variantName = answers.length === 'long' ? 'Flip over' : 'Fulani'
    } else if (cat === 'perruques') {
      variantName = answers.budget === 'low' ? 'Pose 4x4 / 5x5' : 'Pose 13x4 / 13x6'
    }
    return { service, variantName }
  }, [answers])

  const choose = (qid, value) => {
    const next = { ...answers, [qid]: value }
    setAnswers(next)
    setStep((s) => s + 1)
  }
  const reset = () => {
    setAnswers({})
    setStep(0)
  }

  return (
    <Section id="advisor" className="bg-cream">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <Eyebrow>Conseiller</Eyebrow>
          <h2 className="font-serif text-4xl md:text-6xl text-ink">
            Trouvez votre <span className="italic text-gold">prestation idéale</span>
          </h2>
          <p className="mt-4 text-ink/60">Trois questions, une recommandation sur mesure.</p>
        </div>

        <div className="rounded-3xl border border-ink/15 bg-sand/50 backdrop-blur p-8 md:p-12 min-h-[320px]">
          <AnimatePresence mode="wait">
            {!done ? (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}
              >
                <div className="text-xs uppercase tracking-[0.3em] text-gold/80 mb-4">
                  Question {step + 1} / {questions.length}
                </div>
                <h3 className="font-serif text-2xl md:text-3xl text-ink mb-8">
                  {questions[step].label}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {questions[step].options.map((o) => (
                    <button
                      key={o.value}
                      onClick={() => choose(questions[step].id, o.value)}
                      className="px-6 py-3 rounded-full border border-ink/30 text-ink hover:bg-ink hover:text-cream transition"
                    >
                      {o.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-xs uppercase tracking-[0.3em] text-gold/80 mb-4">
                  Notre recommandation
                </div>
                <h3 className="font-serif text-3xl md:text-4xl text-ink">
                  {recommend.service.name}
                  <span className="block italic text-gold text-xl mt-2">
                    {recommend.variantName}
                  </span>
                </h3>
                <p className="mt-6 text-ink/70 leading-relaxed">
                  {recommend.service.description}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={SITE.bookingUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-3 rounded-full bg-ink text-cream font-medium tracking-wider uppercase text-sm hover:shadow-glow transition"
                  >
                    Réserver →
                  </a>
                  <button
                    onClick={reset}
                    className="px-6 py-3 rounded-full border border-ink/30 text-ink/80 hover:border-ink transition"
                  >
                    Recommencer
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Section>
  )
}

// ============================================================
// Testimonial
// ============================================================
export function Testimonial({ testimonial }) {
  return (
    <Section id="testimonial" className="relative overflow-hidden bg-powder">
      <div className="absolute inset-0 -z-10 placeholder-gradient opacity-60" />
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.9 }}
      >
        <div className="font-serif text-7xl text-gold/60 leading-none mb-4">“</div>
        <p className="font-serif italic text-3xl md:text-5xl text-ink leading-tight">
          {testimonial.quote}
        </p>
        <p className="mt-8 text-sm uppercase tracking-[0.35em] text-gold/80">
          — {testimonial.author}
        </p>
      </motion.div>
    </Section>
  )
}

// ============================================================
// Booking CTA
// ============================================================
export function Booking() {
  return (
    <Section id="booking" className="bg-cream">
      <div className="max-w-5xl mx-auto text-center">
        <Eyebrow>Réservation</Eyebrow>
        <h2 className="font-serif text-4xl md:text-6xl text-ink">
          Prête pour votre <span className="italic text-gold">transformation</span> ?
        </h2>
        <p className="mt-6 text-ink/70 max-w-2xl mx-auto">
          Contactez-nous directement via WhatsApp ou Instagram pour fixer votre rendez-vous.
          Réponse rapide, diagnostic honnête, rendez-vous qui vous ressemble.
        </p>
        <div className="mt-10 grid sm:grid-cols-2 gap-4 max-w-xl mx-auto">
          <a
            href={SITE.bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="px-8 py-5 rounded-2xl bg-ink text-cream font-medium tracking-wider uppercase text-sm hover:shadow-glow transition"
          >
            WhatsApp
          </a>
          <a
            href={SITE.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="px-8 py-5 rounded-2xl border border-ink/30 text-ink tracking-wider uppercase text-sm hover:border-ink transition"
          >
            Instagram
          </a>
        </div>
      </div>
    </Section>
  )
}

// ============================================================
// Footer
// ============================================================
export function Footer() {
  return (
    <footer className="relative px-6 md:px-12 py-12 border-t border-ink/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-ink/50">
        <div className="flex items-center gap-3">
          <Img src="/images/logo.png" alt="" className="h-8 w-8 rounded-full object-cover" />
          <span className="font-serif tracking-wide text-ink/80">Freyja Hair</span>
          <span className="opacity-60">· {SITE.city}</span>
        </div>
        <div className="flex items-center gap-6">
          <a href={SITE.instagramUrl} target="_blank" rel="noreferrer" className="hover:text-ink transition">
            Instagram
          </a>
          <a href={SITE.bookingUrl} target="_blank" rel="noreferrer" className="hover:text-ink transition">
            WhatsApp
          </a>
        </div>
        <div className="text-xs opacity-70">© {new Date().getFullYear()} Freyja Hair</div>
      </div>
    </footer>
  )
}

// ============================================================
// Sticky CTA — toujours visible en mobile
// ============================================================
export function StickyCTA() {
  return (
    <a
      href={SITE.bookingUrl}
      target="_blank"
      rel="noreferrer"
      className="md:hidden fixed bottom-4 inset-x-4 z-40 py-4 rounded-full bg-ink text-cream text-center font-medium tracking-widest uppercase text-sm shadow-glow"
    >
      Réserver
    </a>
  )
}

// ============================================================
// Chatbot — widget flottant, pur React (pas d'IA)
// ============================================================
const CHAT_FLOWS = {
  start: {
    msg: "Bonjour 👋 Je suis l'assistante Freyja. Comment puis-je vous aider ?",
    choices: [
      { label: 'Tarifs Locks', next: 'locks' },
      { label: 'Tarifs Tissages', next: 'tissages' },
      { label: 'Tarifs Perruques', next: 'perruques' },
      { label: 'Prendre rendez-vous', next: 'booking' },
    ],
  },
  locks: {
    msg: "Nous proposons :\n• Invisible Locks à partir de 60 €\n• Faux Locks à partir de 70 €\n• Retwist à partir de 50 €\n\nLe tarif dépend de l'épaisseur et de la longueur.",
    choices: [
      { label: 'Voir le simulateur', href: '#simulator' },
      { label: 'Prendre rendez-vous', next: 'booking' },
      { label: '← Retour', next: 'start' },
    ],
  },
  tissages: {
    msg: "Nos tissages :\n• Fulani — 50 €\n• Tissage ouvert — 45 €\n• Tissage fermé — 40 €\n• Closure — 50 €\n• Flip over — 60 €\n\nOptions : Custom closure +10 €, Boucles +10 €",
    choices: [
      { label: 'Voir le simulateur', href: '#simulator' },
      { label: 'Prendre rendez-vous', next: 'booking' },
      { label: '← Retour', next: 'start' },
    ],
  },
  perruques: {
    msg: "Pose perruque :\n• 4x4 / 5x5 — 20 €\n• 13x4 / 13x6 — 40 €\n\nRepose :\n• 4x4 / 5x5 — 15 €\n• 13x4 / 13x6 — 30 €",
    choices: [
      { label: 'Voir le simulateur', href: '#simulator' },
      { label: 'Prendre rendez-vous', next: 'booking' },
      { label: '← Retour', next: 'start' },
    ],
  },
  booking: {
    msg: "Pour réserver, contactez-nous directement sur WhatsApp ou Instagram. Réponse rapide garantie ✨",
    choices: [
      { label: 'WhatsApp', href: SITE.bookingUrl, external: true },
      { label: 'Instagram', href: SITE.instagramUrl, external: true },
      { label: '← Retour', next: 'start' },
    ],
  },
}

export function Chatbot() {
  const [open, setOpen] = useState(false)
  const [node, setNode] = useState('start')
  const flow = CHAT_FLOWS[node]

  return (
    <>
      {/* Bubble */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Ouvrir le chat"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-ink text-cream shadow-glow flex items-center justify-center text-2xl hover:scale-105 transition-transform"
      >
        {open ? '×' : '💬'}
      </button>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-24 right-6 z-50 w-80 rounded-3xl border border-ink/10 bg-cream shadow-[0_20px_60px_-10px_rgba(43,31,36,0.25)] overflow-hidden"
          >
            {/* Header */}
            <div className="px-5 py-4 border-b border-ink/10 flex items-center gap-3 bg-sand">
              <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                <Img src="/images/logo.png" alt="Freyja" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="font-serif text-sm text-ink">Freyja Hair</div>
                <div className="text-[0.65rem] text-green-600 tracking-wide">● En ligne</div>
              </div>
            </div>

            {/* Message */}
            <div className="px-5 py-5">
              <AnimatePresence mode="wait">
                <motion.p
                  key={node}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-sm text-ink/80 leading-relaxed whitespace-pre-line bg-powder/60 rounded-2xl rounded-tl-none px-4 py-3"
                >
                  {flow.msg}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Choices */}
            <div className="px-5 pb-5 flex flex-col gap-2">
              {flow.choices.map((c) => {
                if (c.href) {
                  return (
                    <a
                      key={c.label}
                      href={c.href}
                      target={c.external ? '_blank' : '_self'}
                      rel="noreferrer"
                      onClick={() => !c.external && setOpen(false)}
                      className="text-sm px-4 py-2.5 rounded-full border border-ink/20 text-ink hover:bg-ink hover:text-cream transition text-center"
                    >
                      {c.label}
                    </a>
                  )
                }
                return (
                  <button
                    key={c.label}
                    onClick={() => setNode(c.next)}
                    className="text-sm px-4 py-2.5 rounded-full border border-ink/20 text-ink hover:bg-ink hover:text-cream transition text-left"
                  >
                    {c.label}
                  </button>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
