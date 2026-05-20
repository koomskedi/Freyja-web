// FRAMER CODE OVERRIDE — Moon Studio Simulator
// Composant autonome : aucune dépendance externe (router, fetch, etc.).
// Compatible Framer Code Component. Coller dans Assets → Code → New Code File.

import * as React from "react"
import { useState, useMemo } from "react"
import { addPropertyControls, ControlType } from "framer"
import { motion, AnimatePresence } from "framer-motion"

// ============================================================
// CATALOGUE
// ============================================================

const SIM_TISSAGES = [
    { id: "ouvert", label: "Tissage ouvert", prix: 65 },
    { id: "ferme", label: "Tissage fermé", prix: 60 },
    { id: "closure", label: "Closure", prix: 70 },
    { id: "flipover", label: "Flipover", prix: 70 },
    { id: "closure_locks", label: "Closure Locks", prix: 75 },
]

const SIM_PERRUQUE = [
    { id: "p5x4", label: "Pose 5×4 / 5×5", prix: 60 },
    { id: "p13x4", label: "Pose 13×4 / 13×6", prix: 70 },
]

const SIM_RETWIST = [
    { id: "r60", label: "60 à 80 locks", prix: 60 },
    { id: "r80", label: "80 à 100 locks", prix: 80 },
    { id: "r100", label: "100 à 200 locks", prix: 100 },
]

const MECHES_VIRGIN_BUNDLE = [
    { longueur: "18 pouces", prix: 50 },
    { longueur: "20 pouces", prix: 55 },
    { longueur: "22 pouces", prix: 60 },
    { longueur: "24 pouces", prix: 70 },
    { longueur: "26 pouces", prix: 75 },
    { longueur: "28 pouces", prix: 80 },
    { longueur: "30 pouces", prix: 90 },
]

const MECHES_VIRGIN_PACK3 = [
    { longueur: "18 pouces", prix: 150 },
    { longueur: "20 pouces", prix: 165 },
    { longueur: "22 pouces", prix: 180 },
    { longueur: "24 pouces", prix: 210 },
    { longueur: "26 pouces", prix: 225 },
    { longueur: "28 pouces", prix: 240 },
    { longueur: "30 pouces", prix: 270 },
]

const MECHES_LACE = [
    { label: "Lace Frontal HD 13×6 — 18 pouces", prix: 150 },
    { label: "Lace Frontal HD 13×6 — 14 pouces", prix: 130 },
    { label: "Lace Front Transparent 13×6 — 14 pouces", prix: 130 },
    { label: "Closure 5×5 HD", prix: 100 },
    { label: "Closure 5×5 Lace transparente", prix: 85 },
]

const MECHES_SEMI_NATURE = [
    { longueur: "18 pouces", prix: 35 },
    { longueur: "20 pouces", prix: 40 },
    { longueur: "22 pouces", prix: 45 },
    { longueur: "24 pouces", prix: 50 },
    { longueur: "26 pouces", prix: 55 },
    { longueur: "28 pouces", prix: 60 },
]

const ACOMPTE = 20

// ============================================================
// PALETTE
// ============================================================
const C = {
    cream: "#FAF6F0",
    sand: "#F0E7DA",
    powder: "#EADCE4",
    rose: "#D9A8B8",
    ink: "#2B1F24",
    muted: "#7A6A6F",
    gold: "#BFAE7A",
    copper: "#BF7D56",
}

const INIT_STATE = {
    step: "cat",
    stack: [] as string[],
    cat: null as string | null,
    tissageType: null as string | null,
    styling: false,
    mechesByUs: false,
    mecheQuality: null as string | null,
    mecheFormat: null as string | null,
    mecheLongueur: null as string | null,
    lacePiece: null as string | null,
    perruqueType: null as string | null,
    lagos: false,
    retwistTranche: null as string | null,
    retwistStyling: false,
}

interface Props {
    whatsappUrl: string
    priceColor: string
    fontSerif: string
    fontSans: string
}

/**
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight any
 */
export default function MoonSimulator(props: Props) {
    const { whatsappUrl, priceColor, fontSerif, fontSans } = props
    const [st, setSt] = useState(INIT_STATE)

    const go = (step: string, updates: Partial<typeof INIT_STATE> = {}) =>
        setSt((prev) => ({
            ...prev,
            ...updates,
            step,
            stack: [...prev.stack, prev.step],
        }))

    const back = () =>
        setSt((prev) => ({
            ...prev,
            step: prev.stack[prev.stack.length - 1] || "cat",
            stack: prev.stack.slice(0, -1),
        }))

    const reset = () => setSt(INIT_STATE)

    const lineItems = useMemo(() => {
        const items: { label: string; prix: number }[] = []
        const {
            cat,
            tissageType,
            styling,
            mechesByUs,
            mecheQuality,
            mecheFormat,
            mecheLongueur,
            lacePiece,
            perruqueType,
            lagos,
            retwistTranche,
            retwistStyling,
        } = st
        switch (cat) {
            case "tissages": {
                const ti = SIM_TISSAGES.find((i) => i.id === tissageType)
                if (ti) items.push({ label: ti.label, prix: ti.prix })
                if (styling) items.push({ label: "Styling", prix: 20 })
                if (mechesByUs) {
                    if (mecheQuality === "virgin") {
                        if (mecheFormat === "1bundle" && mecheLongueur) {
                            const m = MECHES_VIRGIN_BUNDLE.find((m) => m.longueur === mecheLongueur)
                            if (m) items.push({ label: `Mèches Virgin — ${m.longueur}`, prix: m.prix })
                        } else if (mecheFormat === "pack3" && mecheLongueur) {
                            const m = MECHES_VIRGIN_PACK3.find((m) => m.longueur === mecheLongueur)
                            if (m) items.push({ label: `Pack 3 Virgin — ${m.longueur}`, prix: m.prix })
                        } else if (mecheFormat === "lace" && lacePiece) {
                            const m = MECHES_LACE.find((m) => m.label === lacePiece)
                            if (m) items.push({ label: lacePiece, prix: m.prix })
                        }
                    } else if (mecheQuality === "semi" && mecheLongueur) {
                        const m = MECHES_SEMI_NATURE.find((m) => m.longueur === mecheLongueur)
                        if (m) items.push({ label: `Semi-nature — ${m.longueur}`, prix: m.prix })
                    }
                }
                break
            }
            case "perruque": {
                const pi = SIM_PERRUQUE.find((i) => i.id === perruqueType)
                if (pi) items.push({ label: pi.label, prix: pi.prix })
                if (styling) items.push({ label: "Styling de choix", prix: 20 })
                if (lagos) items.push({ label: "Custom Lagos Hairline", prix: 10 })
                break
            }
            case "ponytail":
                items.push({ label: "Pony Tail (mèches incluses)", prix: 80 })
                break
            case "natte_tissage":
                items.push({ label: "Natte × Tissage", prix: 80 })
                break
            case "retwist": {
                const ri = SIM_RETWIST.find((i) => i.id === retwistTranche)
                if (ri) items.push({ label: `Retwist — ${ri.label}`, prix: ri.prix })
                if (retwistStyling) items.push({ label: "Styling avec mèches", prix: 20 })
                break
            }
        }
        return items
    }, [st])

    const total = lineItems.reduce((sum, i) => sum + i.prix, 0)

    // ─── Styles ─────────────────────────────────────────────
    const pillBase: React.CSSProperties = {
        padding: "10px 20px",
        borderRadius: 999,
        fontSize: 14,
        fontFamily: fontSans,
        cursor: "pointer",
        border: `1px solid ${C.gold}`,
        background: "transparent",
        color: C.muted,
        transition: "all 0.2s ease",
        display: "inline-flex",
        alignItems: "center",
        gap: 4,
    }
    const pillActive: React.CSSProperties = {
        ...pillBase,
        background: C.gold,
        color: C.ink,
        borderColor: C.gold,
    }
    const stepTitle: React.CSSProperties = {
        fontFamily: fontSerif,
        fontSize: 26,
        color: C.ink,
        margin: 0,
        lineHeight: 1.2,
    }
    const stepSub: React.CSSProperties = {
        fontFamily: fontSans,
        fontSize: 13,
        color: C.muted,
        marginTop: 4,
    }
    const linkBtn: React.CSSProperties = {
        background: "transparent",
        border: "none",
        color: C.muted,
        fontFamily: fontSans,
        fontSize: 11,
        textTransform: "uppercase",
        letterSpacing: 2,
        cursor: "pointer",
        marginBottom: 24,
    }

    const Pill: React.FC<{ active?: boolean; onClick: () => void; children: React.ReactNode }> = ({ active, onClick, children }) => (
        <button style={active ? pillActive : pillBase} onClick={onClick}>
            {children}
        </button>
    )

    const StepWrap: React.FC<{ title: string; subtitle?: string; showBack?: boolean; children: React.ReactNode }> = ({ title, subtitle, showBack = true, children }) => (
        <div>
            {showBack && (
                <button style={linkBtn} onClick={back}>
                    ← Retour
                </button>
            )}
            <div style={{ marginBottom: 24 }}>
                <h3 style={stepTitle}>{title}</h3>
                {subtitle && <p style={stepSub}>{subtitle}</p>}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>{children}</div>
        </div>
    )

    // ─── Step rendering ─────────────────────────────────────
    const renderStep = () => {
        switch (st.step) {
            case "cat":
                return (
                    <StepWrap title="Quelle prestation souhaitez-vous ?" showBack={false}>
                        {[
                            { id: "tissages", label: "Tissages" },
                            { id: "perruque", label: "Pose Perruque" },
                            { id: "ponytail", label: "Pony Tail" },
                            { id: "natte_tissage", label: "Natte × Tissage" },
                            { id: "retwist", label: "Retwist Locs" },
                        ].map((c) => (
                            <Pill
                                key={c.id}
                                active={st.cat === c.id}
                                onClick={() => {
                                    if (c.id === "ponytail" || c.id === "natte_tissage") go("recap", { cat: c.id })
                                    else if (c.id === "tissages") go("tissage_type", { cat: c.id })
                                    else if (c.id === "perruque") go("perruque_type", { cat: c.id })
                                    else go("retwist_tranche", { cat: c.id })
                                }}
                            >
                                {c.label}
                            </Pill>
                        ))}
                    </StepWrap>
                )
            case "tissage_type":
                return (
                    <StepWrap title="Choisissez votre tissage">
                        {SIM_TISSAGES.map((t) => (
                            <Pill key={t.id} active={st.tissageType === t.id} onClick={() => go("tissage_styling", { tissageType: t.id })}>
                                {t.label} <span style={{ opacity: 0.6, fontSize: 12, marginLeft: 4 }}>{t.prix}€</span>
                            </Pill>
                        ))}
                    </StepWrap>
                )
            case "tissage_styling":
                return (
                    <StepWrap title="Souhaitez-vous un styling ?" subtitle="Layers, boucles ou les deux — +20€">
                        <Pill onClick={() => go("tissage_meches", { styling: true })}>Oui +20€</Pill>
                        <Pill onClick={() => go("tissage_meches", { styling: false })}>Non</Pill>
                    </StepWrap>
                )
            case "tissage_meches":
                return (
                    <StepWrap title="Les mèches sont fournies par Moon Studio ?">
                        <Pill onClick={() => go("recap", { mechesByUs: false })}>Non, j'apporte les miennes</Pill>
                        <Pill onClick={() => go("meche_quality", { mechesByUs: true })}>Oui</Pill>
                    </StepWrap>
                )
            case "meche_quality":
                return (
                    <StepWrap title="Qualité des mèches">
                        <Pill active={st.mecheQuality === "virgin"} onClick={() => go("meche_virgin_format", { mecheQuality: "virgin" })}>Virgin Hair</Pill>
                        <Pill active={st.mecheQuality === "semi"} onClick={() => go("meche_longueur_semi", { mecheQuality: "semi" })}>Semi-nature</Pill>
                    </StepWrap>
                )
            case "meche_virgin_format":
                return (
                    <StepWrap title="Format Virgin Hair">
                        <Pill active={st.mecheFormat === "1bundle"} onClick={() => go("meche_longueur_b1", { mecheFormat: "1bundle" })}>1 Bundle</Pill>
                        <Pill active={st.mecheFormat === "pack3"} onClick={() => go("meche_longueur_p3", { mecheFormat: "pack3" })}>Pack 3 boules</Pill>
                        <Pill active={st.mecheFormat === "lace"} onClick={() => go("meche_lace", { mecheFormat: "lace" })}>Lace & Closure</Pill>
                    </StepWrap>
                )
            case "meche_longueur_b1":
                return (
                    <StepWrap title="Longueur — 1 Bundle">
                        {MECHES_VIRGIN_BUNDLE.map((m) => (
                            <Pill key={m.longueur} active={st.mecheLongueur === m.longueur} onClick={() => go("recap", { mecheLongueur: m.longueur })}>
                                {m.longueur} <span style={{ opacity: 0.6, fontSize: 12, marginLeft: 4 }}>{m.prix}€</span>
                            </Pill>
                        ))}
                    </StepWrap>
                )
            case "meche_longueur_p3":
                return (
                    <StepWrap title="Longueur — Pack 3 boules">
                        {MECHES_VIRGIN_PACK3.map((m) => (
                            <Pill key={m.longueur} active={st.mecheLongueur === m.longueur} onClick={() => go("recap", { mecheLongueur: m.longueur })}>
                                {m.longueur} <span style={{ opacity: 0.6, fontSize: 12, marginLeft: 4 }}>{m.prix}€</span>
                            </Pill>
                        ))}
                    </StepWrap>
                )
            case "meche_lace":
                return (
                    <StepWrap title="Lace & Closure">
                        {MECHES_LACE.map((m) => (
                            <Pill key={m.label} active={st.lacePiece === m.label} onClick={() => go("recap", { lacePiece: m.label })}>
                                {m.label} <span style={{ opacity: 0.6, fontSize: 12, marginLeft: 4 }}>{m.prix}€</span>
                            </Pill>
                        ))}
                    </StepWrap>
                )
            case "meche_longueur_semi":
                return (
                    <StepWrap title="Longueur — Semi-nature">
                        {MECHES_SEMI_NATURE.map((m) => (
                            <Pill key={m.longueur} active={st.mecheLongueur === m.longueur} onClick={() => go("recap", { mecheLongueur: m.longueur })}>
                                {m.longueur} <span style={{ opacity: 0.6, fontSize: 12, marginLeft: 4 }}>{m.prix}€</span>
                            </Pill>
                        ))}
                    </StepWrap>
                )
            case "perruque_type":
                return (
                    <StepWrap title="Type de pose perruque" subtitle="Inclus : customisation + natte">
                        {SIM_PERRUQUE.map((p) => (
                            <Pill key={p.id} active={st.perruqueType === p.id} onClick={() => go("perruque_styling", { perruqueType: p.id })}>
                                {p.label} <span style={{ opacity: 0.6, fontSize: 12, marginLeft: 4 }}>{p.prix}€</span>
                            </Pill>
                        ))}
                    </StepWrap>
                )
            case "perruque_styling":
                return (
                    <StepWrap title="Styling de choix ?" subtitle="+20€">
                        <Pill onClick={() => go("perruque_lagos", { styling: true })}>Oui +20€</Pill>
                        <Pill onClick={() => go("perruque_lagos", { styling: false })}>Non</Pill>
                    </StepWrap>
                )
            case "perruque_lagos":
                return (
                    <StepWrap title="Custom Lagos Hairline ?" subtitle="+10€">
                        <Pill onClick={() => go("recap", { lagos: true })}>Oui +10€</Pill>
                        <Pill onClick={() => go("recap", { lagos: false })}>Non</Pill>
                    </StepWrap>
                )
            case "retwist_tranche":
                return (
                    <StepWrap title="Nombre de locks">
                        {SIM_RETWIST.map((r) => (
                            <Pill key={r.id} active={st.retwistTranche === r.id} onClick={() => go("retwist_styling", { retwistTranche: r.id })}>
                                {r.label} <span style={{ opacity: 0.6, fontSize: 12, marginLeft: 4 }}>{r.prix}€</span>
                            </Pill>
                        ))}
                    </StepWrap>
                )
            case "retwist_styling":
                return (
                    <StepWrap title="Styling avec mèches ?" subtitle="+20€">
                        <Pill onClick={() => go("retwist_photo", { retwistStyling: true })}>Oui +20€</Pill>
                        <Pill onClick={() => go("recap", { retwistStyling: false })}>Non</Pill>
                    </StepWrap>
                )
            case "retwist_photo":
                return (
                    <div>
                        <button style={linkBtn} onClick={back}>← Retour</button>
                        <h3 style={stepTitle}>Une précision importante</h3>
                        <div style={{
                            marginTop: 16, padding: 20, borderRadius: 16, border: `1px solid ${C.gold}55`, background: C.sand,
                            color: C.ink, fontFamily: fontSans, fontSize: 14, lineHeight: 1.5,
                        }}>
                            📸 <strong>Une photo de la coupe souhaitée</strong> vous sera demandée avant la confirmation de votre rendez-vous.
                        </div>
                        <button
                            style={{
                                marginTop: 24, padding: "12px 24px", borderRadius: 999, background: C.ink,
                                color: C.cream, border: "none", cursor: "pointer", fontFamily: fontSans,
                                fontSize: 13, letterSpacing: 1,
                            }}
                            onClick={() => go("recap")}
                        >
                            J'ai compris, voir le récap →
                        </button>
                    </div>
                )
            case "recap":
                return (
                    <div>
                        <button style={linkBtn} onClick={back}>← Retour</button>
                        <h3 style={stepTitle}>Votre devis est prêt</h3>
                        <p style={{ ...stepSub, marginTop: 12, lineHeight: 1.6 }}>
                            Récapitulatif à droite. Pour confirmer, contactez-nous sur WhatsApp — un acompte de {ACOMPTE}€ vous sera demandé.
                        </p>
                        <button style={{ ...linkBtn, marginTop: 24, marginBottom: 0 }} onClick={reset}>
                            ← Recommencer
                        </button>
                    </div>
                )
            default:
                return null
        }
    }

    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: "3fr 2fr",
            gap: 40,
            width: "100%",
            padding: 32,
            background: C.cream,
            fontFamily: fontSans,
            color: C.ink,
            boxSizing: "border-box",
        }}>
            <div style={{ minHeight: 320 }}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={st.step}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.25 }}
                    >
                        {renderStep()}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Recap card */}
            <div style={{
                position: "sticky",
                top: 32,
                alignSelf: "start",
                background: C.cream,
                border: `1px solid ${C.rose}`,
                borderRadius: 32,
                padding: 32,
                boxShadow: "0 10px 40px -15px rgba(217, 168, 184, 0.5)",
            }}>
                <div style={{
                    fontSize: 11, textTransform: "uppercase", letterSpacing: 4,
                    color: C.gold, marginBottom: 24,
                }}>
                    Votre devis
                </div>

                {lineItems.length > 0 ? (
                    <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px 0" }}>
                        {lineItems.map((item, i) => (
                            <li key={i} style={{
                                display: "flex", justifyContent: "space-between", gap: 12,
                                marginBottom: 12, fontSize: 14,
                            }}>
                                <span style={{ color: C.ink, opacity: 0.8 }}>{item.label}</span>
                                <span style={{ color: C.ink, fontWeight: 500, whiteSpace: "nowrap" }}>{item.prix}€</span>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p style={{ fontSize: 13, fontStyle: "italic", color: C.muted, marginBottom: 24 }}>
                        Choisissez une prestation pour démarrer l'estimation.
                    </p>
                )}

                {lineItems.length > 0 && (
                    <>
                        <div style={{
                            borderTop: `1px solid ${C.ink}1A`, paddingTop: 20, marginBottom: 8,
                            display: "flex", justifyContent: "space-between", alignItems: "baseline",
                        }}>
                            <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 3, color: C.muted }}>
                                Total estimé
                            </div>
                            <div style={{ fontFamily: fontSerif, fontSize: 48, color: priceColor, lineHeight: 1 }}>
                                {total}<span style={{ fontSize: 20 }}>€</span>
                            </div>
                        </div>
                        <div style={{
                            display: "flex", justifyContent: "space-between", alignItems: "center",
                            fontSize: 12, color: C.muted, marginBottom: 32,
                        }}>
                            <span>Acompte à la réservation</span>
                            <span style={{ color: C.ink, fontWeight: 500 }}>{ACOMPTE}€</span>
                        </div>
                    </>
                )}

                <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                        display: "block", textAlign: "center", padding: "16px 24px",
                        borderRadius: 999, background: C.ink, color: C.cream,
                        fontSize: 13, letterSpacing: 2, textTransform: "uppercase",
                        textDecoration: "none", fontFamily: fontSans,
                    }}
                >
                    Réserver sur WhatsApp
                </a>
            </div>
        </div>
    )
}

addPropertyControls(MoonSimulator, {
    whatsappUrl: {
        type: ControlType.String,
        title: "WhatsApp URL",
        defaultValue: "https://wa.me/33758308788",
        placeholder: "https://wa.me/33XXXXXXXXX",
    },
    priceColor: {
        type: ControlType.Color,
        title: "Couleur prix",
        defaultValue: "#BF7D56",
    },
    fontSerif: {
        type: ControlType.String,
        title: "Font Serif",
        defaultValue: "Cormorant Garamond, serif",
    },
    fontSans: {
        type: ControlType.String,
        title: "Font Sans",
        defaultValue: "Inter, sans-serif",
    },
})
