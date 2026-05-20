// ============================================================
// MOON STUDIO — Content & pricing source of truth
// ============================================================

export const SITE = {
  name: 'Moon Studio',
  tagline: "L'or entre les mains pour un cheveu qui respire et qui pousse.",
  subtitle: 'Coiffure & Beauté',
  promise: 'Coiffure sans cire, respect total de la fibre, douceur extrême.',
  bookingUrl: 'https://wa.me/33758308788',
  instagramUrl: 'https://instagram.com/freya_wig',
  phone: '+33 7 45 52 02 60',
  city: 'Aulnay-sous-Bois',
}

// ============================================================
// SERVICES — Lookbook + Advisor (sections visuelles uniquement)
// ============================================================
export const SERVICES = {
  locks: {
    id: 'locks',
    name: 'Locks',
    subtitle: 'Invisible · Faux · Retwist',
    description:
      "La signature de la maison. Des locks posées sans cire, nourries, durables. Un geste précis pour un cuir chevelu qui respire.",
    image: '/images/locks.jpg',
    variants: [
      {
        id: 'invisible',
        name: 'Invisible Locks',
        priceByLength: { court: 70, moyen: 100, long: 130 },
        altByThickness: {
          small: { court: 70, moyen: 100, long: 130 },
          moyen: { court: 65, moyen: 87, long: 110 },
          grand: { court: 60, moyen: 80, long: 100 },
        },
      },
      {
        id: 'faux',
        name: 'Faux Locks',
        priceByLength: { court: 90, moyen: 105, long: 120 },
        altByThickness: {
          small: { court: 90, moyen: 105, long: 120 },
          moyen: { court: 80, moyen: 95, long: 110 },
          grand: { court: 70, moyen: 85, long: 100 },
        },
      },
      {
        id: 'retwist',
        name: 'Retwist',
        priceByLength: { court: 70, moyen: 70, long: 70 },
        altByThickness: {
          small: { court: 70, moyen: 70, long: 70 },
          moyen: { court: 60, moyen: 60, long: 60 },
          grand: { court: 50, moyen: 50, long: 50 },
        },
      },
    ],
    options: [
      { id: 'barrels', name: 'Barrels', price: 10 },
      { id: 'coupe', name: 'Coupe', price: 15 },
    ],
  },
  tissages: {
    id: 'tissages',
    name: 'Tissages',
    subtitle: 'Fulani · Closure · Flip over',
    description:
      "Une couture fine, une tension juste. Pour un rendu net, confortable, qui laisse le cuir chevelu respirer.",
    image: '/images/tissages.jpg',
    variants: [
      { id: 'fulani', name: 'Fulani', price: 50 },
      { id: 'ouvert', name: 'Tissage ouvert', price: 45 },
      { id: 'ferme', name: 'Tissage fermé', price: 40 },
      { id: 'closure', name: 'Closure', price: 50 },
      { id: 'flip', name: 'Flip over', price: 60 },
    ],
    options: [
      { id: 'custom', name: 'Custom closure', price: 10 },
      { id: 'boucles', name: 'Boucles', price: 10 },
    ],
  },
  perruques: {
    id: 'perruques',
    name: 'Perruques',
    subtitle: 'Pose · Repose',
    description:
      "Une pose invisible, une lace fondue avec soin. Votre perruque, portée comme une seconde peau.",
    image: '/images/perruques.jpg',
    variants: [
      { id: 'pose_small', name: 'Pose 4x4 / 5x5', price: 20 },
      { id: 'pose_large', name: 'Pose 13x4 / 13x6', price: 40 },
      { id: 'repose_small', name: 'Repose 4x4 / 5x5', price: 15 },
      { id: 'repose_large', name: 'Repose 13x4 / 13x6', price: 30 },
    ],
    options: [],
  },
}

export const TESTIMONIAL = {
  quote:
    "Coiffure sans cire, faite avec soin et respect. Une vraie pépite, les cheveux ont grave poussé.",
  author: 'Cliente Moon Studio',
}

export const ADVISOR_QUESTIONS = [
  {
    id: 'goal',
    label: 'Quel résultat cherchez-vous ?',
    options: [
      { value: 'locks', label: 'Locks durables' },
      { value: 'tissages', label: 'Longueur & volume' },
      { value: 'perruques', label: 'Changement rapide' },
    ],
  },
  {
    id: 'length',
    label: 'Longueur souhaitée ?',
    options: [
      { value: 'court', label: 'Court' },
      { value: 'moyen', label: 'Moyen' },
      { value: 'long', label: 'Long' },
    ],
  },
  {
    id: 'budget',
    label: 'Budget approximatif ?',
    options: [
      { value: 'low', label: '< 60 €' },
      { value: 'mid', label: '60 – 100 €' },
      { value: 'high', label: '100 € +' },
    ],
  },
]

// ============================================================
// SIMULATOR CATALOGUE — Nouveau catalogue complet Moon Studio
// ============================================================

export const SIM_TISSAGES = [
  { id: 'ouvert',        label: 'Tissage ouvert',  prix: 65 },
  { id: 'ferme',         label: 'Tissage fermé',   prix: 60 },
  { id: 'closure',       label: 'Closure',         prix: 70 },
  { id: 'flipover',      label: 'Flipover',        prix: 70 },
  { id: 'closure_locks', label: 'Closure Locks',   prix: 75 },
]

export const SIM_PERRUQUE = [
  { id: 'p5x4',  label: 'Pose 5×4 / 5×5',   prix: 60, inclus: 'Customisation + natte' },
  { id: 'p13x4', label: 'Pose 13×4 / 13×6', prix: 70, inclus: 'Customisation + natte' },
]

export const SIM_RETWIST = [
  { id: 'r60',  label: '60 à 80 locks',   prix: 60 },
  { id: 'r80',  label: '80 à 100 locks',  prix: 80 },
  { id: 'r100', label: '100 à 200 locks', prix: 100 },
]

export const MECHES_VIRGIN_BUNDLE = [
  { longueur: '18 pouces', prix: 50 },
  { longueur: '20 pouces', prix: 55 },
  { longueur: '22 pouces', prix: 60 },
  { longueur: '24 pouces', prix: 70 },
  { longueur: '26 pouces', prix: 75 },
  { longueur: '28 pouces', prix: 80 },
  { longueur: '30 pouces', prix: 90 },
]

export const MECHES_VIRGIN_PACK3 = [
  { longueur: '18 pouces', prix: 150 },
  { longueur: '20 pouces', prix: 165 },
  { longueur: '22 pouces', prix: 180 },
  { longueur: '24 pouces', prix: 210 },
  { longueur: '26 pouces', prix: 225 },
  { longueur: '28 pouces', prix: 240 },
  { longueur: '30 pouces', prix: 270 },
]

export const MECHES_LACE = [
  { label: 'Lace Frontal HD 13×6 — 18 pouces',          prix: 150 },
  { label: 'Lace Frontal HD 13×6 — 14 pouces',          prix: 130 },
  { label: 'Lace Front Transparent 13×6 — 14 pouces',   prix: 130 },
  { label: 'Closure 5×5 HD',                            prix: 100 },
  { label: 'Closure 5×5 Lace transparente',             prix: 85  },
]

export const MECHES_SEMI_NATURE = [
  { longueur: '18 pouces', prix: 35 },
  { longueur: '20 pouces', prix: 40 },
  { longueur: '22 pouces', prix: 45 },
  { longueur: '24 pouces', prix: 50 },
  { longueur: '26 pouces', prix: 55 },
  { longueur: '28 pouces', prix: 60 },
]

export const ACOMPTE = 20
