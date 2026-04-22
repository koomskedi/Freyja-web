# Freyja Hair — Site Portfolio

Site vitrine + simulateur de prix pour **Freyja Hair**, hairstylist afro à Aulnay.
Stack : **Vite + React + Tailwind + Framer Motion**. Déploiement **Vercel** en un clic.

## Démarrage

```bash
npm install
npm run dev
```

## Build

```bash
npm run build      # génère /dist
npm run preview    # sert /dist localement
```

## Déploiement Vercel

1. Push sur GitHub (déjà fait).
2. Sur [vercel.com](https://vercel.com), **New Project** → importer `koomskedi/freyja-web`.
3. Vercel détecte Vite automatiquement — rien à configurer.
4. Deploy. C'est tout.

## Personnalisation

Toute la donnée éditoriale et tarifaire est dans **`src/data.js`** :

- `SITE.bookingUrl` → ton lien WhatsApp (format `https://wa.me/336XXXXXXXX`)
- `SITE.instagramUrl` → ton compte IG
- `SERVICES` → les prestations, variantes, options, prix
- `TESTIMONIAL` → le témoignage affiché
- `ADVISOR_QUESTIONS` → le parcours du conseiller guidé

## Images

Dépose tes photos dans **`public/images/`** avec ces noms :

| Fichier              | Usage                            |
| -------------------- | -------------------------------- |
| `logo.png`           | Logo header + footer + favicon   |
| `hero.jpg`           | Fond hero section                |
| `portrait.jpg`       | Portrait à droite dans le hero   |
| `locks.jpg`          | Carte Locks (lookbook)           |
| `tissages.jpg`       | Carte Tissages                   |
| `perruques.jpg`      | Carte Perruques                  |
| `entretien.jpg`      | Carte Entretien                  |

Si une image manque, un dégradé éditorial s'affiche automatiquement — le site reste propre.

## Structure

```
src/
  App.jsx           # Assemblage des sections
  components.jsx    # Toutes les sections (Header, Hero, Lookbook, Simulator, Advisor, ...)
  data.js           # Source de vérité : contenu + tarifs
  main.jsx          # Entrée React
  index.css         # Tailwind + style global
```

## Palette

- `powder` `#D9C1D7` (rose poudré)
- `ink` `#080A0D` (noir profond)
- `gold` `#BFAE7A` (or mat)
- `copper` `#BF7D56` (cuivre chaud)
- `earth` `#734230` (brun naturel)
