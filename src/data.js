// ============================================================
// FREYJA HAIR — Content & pricing source of truth
// Edit here to update the whole site.
// ============================================================

export const SITE = {
  name: 'Freyja Hair',
  tagline: "L'or entre les mains pour un cheveu qui respire et qui pousse.",
  subtitle: 'Hairstylist · Aulnay',
  promise: 'Coiffure sans cire, respect total de la fibre, douceur extrême.',
  // ⚠️ Remplace ces liens par les vrais
  bookingUrl: 'https://wa.me/33758308788',
  instagramUrl: 'https://instagram.com/freya_wig',
  phone: '+33 7 45 52 02 60',
  city: 'Aulnay-sous-Bois',
}

// ============================================================
// SERVICES — used by Lookbook + Simulator
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
  entretien: {
    id: 'entretien',
    name: 'Entretien',
    subtitle: 'Soin · Rafraîchissement',
    description:
      "Un diagnostic honnête, un soin adapté. Parce qu'un cheveu nourri, c'est un cheveu qui pousse.",
    image: '/images/entretien.jpg',
    variants: [],
    options: [],
    info: 'Sur demande — contactez-nous pour un diagnostic personnalisé.',
  },
}

export const TESTIMONIAL = {
  quote:
    "Coiffure sans cire, faite avec soin et respect. Une vraie pépite, les cheveux ont grave poussé.",
  author: 'Cliente Freyja',
}

// ============================================================
// ADVISOR — pur React, pas de LLM. Recommandation basée sur les réponses.
// ============================================================
export const ADVISOR_QUESTIONS = [
  {
    id: 'goal',
    label: 'Quel résultat cherchez-vous ?',
    options: [
      { value: 'locks', label: 'Locks durables' },
      { value: 'tissages', label: 'Longueur & volume' },
      { value: 'perruques', label: 'Changement rapide' },
      { value: 'entretien', label: 'Soin / entretien' },
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
