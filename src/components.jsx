import React, { useState, useMemo, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  SITE,
  SERVICES,
  SIM_TISSAGES,
  SIM_PERRUQUE,
  SIM_RETWIST,
  MECHES_VIRGIN_BUNDLE,
  MECHES_VIRGIN_PACK3,
  MECHES_LACE,
  MECHES_SEMI_NATURE,
} from './data.js'

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
          <Img src="/images/logo.png" alt="Moon Studio" className="h-10 w-10 rounded-full object-cover" />
          <span className="font-serif text-xl tracking-wide text-ink hidden sm:block">
            Moon <span className="text-gold">Studio</span>
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
            Moon Studio · {SITE.city}
          </motion.span>
          <motion.h1
            variants={fadeUp}
            className="font-serif text-6xl md:text-8xl lg:text-[9rem] leading-[0.95] text-ink"
          >
            <span className="block">Moon Studio</span>
            <span className="block text-gold italic font-light text-3xl md:text-5xl lg:text-6xl mt-2">
              Coiffure &amp; Beauté
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
              alt="Travail Moon Studio"
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
// Simulator — Wizard multi-étapes Moon Studio
// ============================================================
const SIM_INIT = {
  step: 'cat',
  stack: [],
  cat: null,
  tissageType: null,
  styling: false,
  mechesByUs: false,
  mecheQuality: null,
  mecheFormat: null,
  mecheLongueur: null,
  lacePiece: null,
  perruqueType: null,
  lagos: false,
  retwistTranche: null,
  retwistStyling: false,
}

export function Simulator() {
  const [st, setSt] = useState(SIM_INIT)

  const go = (step, updates = {}) =>
    setSt((prev) => ({ ...prev, ...updates, step, stack: [...prev.stack, prev.step] }))

  const back = () =>
    setSt((prev) => ({
      ...prev,
      step: prev.stack[prev.stack.length - 1] || 'cat',
      stack: prev.stack.slice(0, -1),
    }))

  const reset = () => setSt(SIM_INIT)

  const lineItems = useMemo(() => {
    const { cat, tissageType, styling, mechesByUs, mecheQuality, mecheFormat, mecheLongueur, lacePiece, perruqueType, lagos, retwistTranche, retwistStyling } = st
    const items = []
    switch (cat) {
      case 'tissages': {
        const ti = SIM_TISSAGES.find((i) => i.id === tissageType)
        if (ti) items.push({ label: ti.label, prix: ti.prix })
        if (styling) items.push({ label: 'Styling', prix: 20 })
        if (mechesByUs) {
          if (mecheQuality === 'virgin') {
            if (mecheFormat === '1bundle' && mecheLongueur) {
              const m = MECHES_VIRGIN_BUNDLE.find((m) => m.longueur === mecheLongueur)
              if (m) items.push({ label: `Mèches Virgin — ${m.longueur}`, prix: m.prix })
            } else if (mecheFormat === 'pack3' && mecheLongueur) {
              const m = MECHES_VIRGIN_PACK3.find((m) => m.longueur === mecheLongueur)
              if (m) items.push({ label: `Pack 3 boules Virgin — ${m.longueur}`, prix: m.prix })
            } else if (mecheFormat === 'lace' && lacePiece) {
              const m = MECHES_LACE.find((m) => m.label === lacePiece)
              if (m) items.push({ label: lacePiece, prix: m.prix })
            }
          } else if (mecheQuality === 'semi' && mecheLongueur) {
            const m = MECHES_SEMI_NATURE.find((m) => m.longueur === mecheLongueur)
            if (m) items.push({ label: `Mèches Semi-nature — ${m.longueur}`, prix: m.prix })
          }
        }
        break
      }
      case 'perruque': {
        const pi = SIM_PERRUQUE.find((i) => i.id === perruqueType)
        if (pi) items.push({ label: pi.label, prix: pi.prix })
        if (styling) items.push({ label: 'Styling de choix', prix: 20 })
        if (lagos) items.push({ label: 'Custom Lagos Hairline', prix: 10 })
        break
      }
      case 'ponytail':
        items.push({ label: 'Pony Tail (mèches incluses)', prix: 80 })
        break
      case 'natte_tissage':
        items.push({ label: 'Natte × Tissage', prix: 80 })
        break
      case 'retwist': {
        const ri = SIM_RETWIST.find((i) => i.id === retwistTranche)
        if (ri) items.push({ label: `Retwist — ${ri.label}`, prix: ri.prix })
        if (retwistStyling) items.push({ label: 'Styling avec mèches', prix: 20 })
        break
      }
      default:
        break
    }
    return items
  }, [st])

  const total = lineItems.reduce((sum, i) => sum + i.prix, 0)

  const renderStep = () => {
    switch (st.step) {
      case 'cat':
        return (
          <WizStep title="Quelle prestation souhaitez-vous ?" onBack={null}>
            <div className="flex flex-wrap gap-3">
              {[
                { id: 'tissages', label: 'Tissages' },
                { id: 'perruque', label: 'Pose Perruque' },
                { id: 'ponytail', label: 'Pony Tail' },
                { id: 'natte_tissage', label: 'Natte × Tissage' },
                { id: 'retwist', label: 'Retwist Locs' },
              ].map((c) => (
                <SimPill
                  key={c.id}
                  active={st.cat === c.id}
                  onClick={() => {
                    if (c.id === 'ponytail' || c.id === 'natte_tissage') go('recap', { cat: c.id })
                    else if (c.id === 'tissages') go('tissage_type', { cat: c.id })
                    else if (c.id === 'perruque') go('perruque_type', { cat: c.id })
                    else go('retwist_tranche', { cat: c.id })
                  }}
                >
                  {c.label}
                </SimPill>
              ))}
            </div>
          </WizStep>
        )
      case 'tissage_type':
        return (
          <WizStep title="Choisissez votre tissage" onBack={back}>
            <div className="flex flex-wrap gap-3">
              {SIM_TISSAGES.map((t) => (
                <SimPill
                  key={t.id}
                  active={st.tissageType === t.id}
                  onClick={() => go('tissage_styling', { tissageType: t.id })}
                >
                  {t.label} <span className="opacity-60 text-xs ml-1">{t.prix}€</span>
                </SimPill>
              ))}
            </div>
          </WizStep>
        )
      case 'tissage_styling':
        return (
          <WizStep title="Souhaitez-vous un styling ?" subtitle="Layers, boucles ou les deux — +20€" onBack={back}>
            <div className="flex flex-wrap gap-3">
              <SimPill onClick={() => go('tissage_meches', { styling: true })}>Oui +20€</SimPill>
              <SimPill onClick={() => go('tissage_meches', { styling: false })}>Non</SimPill>
            </div>
          </WizStep>
        )
      case 'tissage_meches':
        return (
          <WizStep title="Les mèches sont fournies par Moon Studio ?" onBack={back}>
            <div className="flex flex-wrap gap-3">
              <SimPill onClick={() => go('recap', { mechesByUs: false })}>Non, j'apporte les miennes</SimPill>
              <SimPill onClick={() => go('meche_quality', { mechesByUs: true })}>Oui</SimPill>
            </div>
          </WizStep>
        )
      case 'meche_quality':
        return (
          <WizStep title="Qualité des mèches" onBack={back}>
            <div className="flex flex-wrap gap-3">
              <SimPill active={st.mecheQuality === 'virgin'} onClick={() => go('meche_virgin_format', { mecheQuality: 'virgin' })}>Virgin Hair</SimPill>
              <SimPill active={st.mecheQuality === 'semi'} onClick={() => go('meche_longueur_semi', { mecheQuality: 'semi' })}>Semi-nature</SimPill>
            </div>
          </WizStep>
        )
      case 'meche_virgin_format':
        return (
          <WizStep title="Format Virgin Hair" onBack={back}>
            <div className="flex flex-wrap gap-3">
              <SimPill active={st.mecheFormat === '1bundle'} onClick={() => go('meche_longueur_b1', { mecheFormat: '1bundle' })}>1 Bundle</SimPill>
              <SimPill active={st.mecheFormat === 'pack3'} onClick={() => go('meche_longueur_p3', { mecheFormat: 'pack3' })}>Pack 3 boules</SimPill>
              <SimPill active={st.mecheFormat === 'lace'} onClick={() => go('meche_lace', { mecheFormat: 'lace' })}>Lace & Closure</SimPill>
            </div>
          </WizStep>
        )
      case 'meche_longueur_b1':
        return (
          <WizStep title="Longueur — 1 Bundle" onBack={back}>
            <div className="flex flex-wrap gap-3">
              {MECHES_VIRGIN_BUNDLE.map((m) => (
                <SimPill key={m.longueur} active={st.mecheLongueur === m.longueur} onClick={() => go('recap', { mecheLongueur: m.longueur })}>
                  {m.longueur} <span className="opacity-60 text-xs ml-1">{m.prix}€</span>
                </SimPill>
              ))}
            </div>
          </WizStep>
        )
      case 'meche_longueur_p3':
        return (
          <WizStep title="Longueur — Pack 3 boules" onBack={back}>
            <div className="flex flex-wrap gap-3">
              {MECHES_VIRGIN_PACK3.map((m) => (
                <SimPill key={m.longueur} active={st.mecheLongueur === m.longueur} onClick={() => go('recap', { mecheLongueur: m.longueur })}>
                  {m.longueur} <span className="opacity-60 text-xs ml-1">{m.prix}€</span>
                </SimPill>
              ))}
            </div>
          </WizStep>
        )
      case 'meche_lace':
        return (
          <WizStep title="Lace & Closure" onBack={back}>
            <div className="flex flex-col gap-3">
              {MECHES_LACE.map((m) => (
                <SimPill key={m.label} active={st.lacePiece === m.label} onClick={() => go('recap', { lacePiece: m.label })}>
                  <span className="flex-1 text-left">{m.label}</span>
                  <span className="opacity-60 text-xs ml-2">{m.prix}€</span>
                </SimPill>
              ))}
            </div>
          </WizStep>
        )
      case 'meche_longueur_semi':
        return (
          <WizStep title="Longueur — Semi-nature" onBack={back}>
            <div className="flex flex-wrap gap-3">
              {MECHES_SEMI_NATURE.map((m) => (
                <SimPill key={m.longueur} active={st.mecheLongueur === m.longueur} onClick={() => go('recap', { mecheLongueur: m.longueur })}>
                  {m.longueur} <span className="opacity-60 text-xs ml-1">{m.prix}€</span>
                </SimPill>
              ))}
            </div>
          </WizStep>
        )
      case 'perruque_type':
        return (
          <WizStep title="Type de pose perruque" subtitle="Inclus : customisation + natte" onBack={back}>
            <div className="flex flex-wrap gap-3">
              {SIM_PERRUQUE.map((p) => (
                <SimPill key={p.id} active={st.perruqueType === p.id} onClick={() => go('perruque_styling', { perruqueType: p.id })}>
                  {p.label} <span className="opacity-60 text-xs ml-1">{p.prix}€</span>
                </SimPill>
              ))}
            </div>
          </WizStep>
        )
      case 'perruque_styling':
        return (
          <WizStep title="Styling de choix ?" subtitle="+20€" onBack={back}>
            <div className="flex flex-wrap gap-3">
              <SimPill onClick={() => go('perruque_lagos', { styling: true })}>Oui +20€</SimPill>
              <SimPill onClick={() => go('perruque_lagos', { styling: false })}>Non</SimPill>
            </div>
          </WizStep>
        )
      case 'perruque_lagos':
        return (
          <WizStep title="Custom Lagos Hairline ?" subtitle="+10€" onBack={back}>
            <div className="flex flex-wrap gap-3">
              <SimPill onClick={() => go('recap', { lagos: true })}>Oui +10€</SimPill>
              <SimPill onClick={() => go('recap', { lagos: false })}>Non</SimPill>
            </div>
          </WizStep>
        )
      case 'retwist_tranche':
        return (
          <WizStep title="Nombre de locks" onBack={back}>
            <div className="flex flex-wrap gap-3">
              {SIM_RETWIST.map((r) => (
                <SimPill key={r.id} active={st.retwistTranche === r.id} onClick={() => go('retwist_styling', { retwistTranche: r.id })}>
                  {r.label} <span className="opacity-60 text-xs ml-1">{r.prix}€</span>
                </SimPill>
              ))}
            </div>
          </WizStep>
        )
      case 'retwist_styling':
        return (
          <WizStep title="Styling avec mèches ?" subtitle="+20€" onBack={back}>
            <div className="flex flex-wrap gap-3">
              <SimPill onClick={() => go('retwist_photo', { retwistStyling: true })}>Oui +20€</SimPill>
              <SimPill onClick={() => go('recap', { retwistStyling: false })}>Non</SimPill>
            </div>
          </WizStep>
        )
      case 'retwist_photo':
        return (
          <WizStep title="Une précision importante" onBack={back}>
            <div className="rounded-2xl border border-gold/40 bg-sand/50 p-6 text-ink/80">
              📸 <strong>Une photo de la coupe souhaitée</strong> vous sera demandée avant la confirmation de votre rendez-vous.
            </div>
            <button
              onClick={() => go('recap')}
              className="mt-6 px-6 py-3 rounded-full bg-ink text-cream text-sm tracking-wide hover:shadow-glow transition"
            >
              J'ai compris, voir le récap →
            </button>
          </WizStep>
        )
      case 'recap':
        return (
          <WizStep title="Votre devis est prêt" onBack={back}>
            <p className="text-sm text-muted mb-6 leading-relaxed">
              Récapitulatif à droite. Pour confirmer votre rendez-vous, contactez-nous sur WhatsApp —
              un acompte de 20€ vous sera demandé.
            </p>
            <button
              onClick={reset}
              className="text-xs uppercase tracking-widest text-muted hover:text-copper transition"
            >
              ← Recommencer
            </button>
          </WizStep>
        )
      default:
        return null
    }
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
            Composez votre prestation étape par étape. Le tarif final est confirmé lors de la réservation.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 md:gap-10">
          {/* Wizard */}
          <div className="md:col-span-3 min-h-[320px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={st.step}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
              >
                {renderStep()}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Recap card */}
          <div className="md:col-span-2">
            <div className="sticky top-28 p-8 rounded-3xl border border-rose bg-cream shadow-soft">
              <div className="text-xs uppercase tracking-[0.3em] text-gold mb-6">Votre devis</div>

              {lineItems.length > 0 ? (
                <ul className="space-y-3 mb-6">
                  {lineItems.map((item, i) => (
                    <li key={i} className="flex justify-between gap-3 text-sm">
                      <span className="text-ink/80">{item.label}</span>
                      <span className="font-medium text-ink whitespace-nowrap">{item.prix}€</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-muted italic mb-6">
                  Choisissez une prestation pour démarrer l'estimation.
                </p>
              )}

              {lineItems.length > 0 && (
                <>
                  <div className="border-t border-ink/10 pt-5 mb-2 flex justify-between items-baseline">
                    <div className="text-xs uppercase tracking-widest text-muted">Total estimé</div>
                    <div className="font-serif text-5xl text-copper leading-none">
                      {total}<span className="text-xl">€</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-xs text-muted mb-8">
                    <span>Acompte à la réservation</span>
                    <span className="font-medium text-ink">20€</span>
                  </div>
                </>
              )}

              <a
                href={SITE.bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="block text-center px-6 py-4 rounded-full bg-ink text-cream text-sm tracking-wider uppercase hover:shadow-glow transition"
              >
                Réserver sur WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

function WizStep({ title, subtitle, onBack, children }) {
  return (
    <div>
      {onBack && (
        <button
          onClick={onBack}
          className="text-xs uppercase tracking-widest text-muted hover:text-copper transition mb-6 block"
        >
          ← Retour
        </button>
      )}
      <div className="mb-6">
        <h3 className="font-serif text-2xl md:text-3xl text-ink leading-tight">{title}</h3>
        {subtitle && <p className="text-sm text-muted mt-1">{subtitle}</p>}
      </div>
      {children}
    </div>
  )
}

function SimPill({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2.5 rounded-full text-sm tracking-wide transition border flex items-center gap-1 ${
        active
          ? 'bg-gold text-ink border-gold'
          : 'border-gold/60 text-muted hover:border-copper hover:text-ink'
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
          <span className="font-serif tracking-wide text-ink/80">Moon Studio</span>
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
        <div className="text-xs opacity-70">© {new Date().getFullYear()} Moon Studio</div>
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
    msg: "Bonjour 👋 Je suis l'assistante Moon Studio. Comment puis-je vous aider ?",
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
                <Img src="/images/logo.png" alt="Moon Studio" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="font-serif text-sm text-ink">Moon Studio</div>
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
