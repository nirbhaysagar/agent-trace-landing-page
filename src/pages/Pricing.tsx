import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Check, Terminal, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

// Simulated Data Streams for Pricing Backgrounds
const DATA_STREAMS = {
    local: [
        "INIT_LOCAL_ENV...",
        "MOUNT_VIRTUAL_FS [OK]",
        "REPLAY_ENGINE: READY",
        "LICENSE: COMMUNITY",
        "TRACE_DEPTH: 100",
        "DEBUGGER: ATTACHED"
    ],
    pro: [
        "SYNC_CLOUD_STORE...",
        "TEAM_AUTH: VERIFIED",
        "ALLOCATING_WORKERS [OK]",
        "RETENTION_POLICY: 30D",
        "ALERTS: ACTIVE",
        "BILLING_CYCLE: MONTHLY"
    ],
    enterprise: [
        "AUDIT_GATE: OPEN",
        "SAML_SSO: CONNECTED",
        "VPC_TUNNEL: SECURE",
        "SLA_MONITOR: ACTIVE",
        "COMPLIANCE_CHECK: PASS",
        "ENCRYPTION: AES-256-GCM"
    ]
};

// Terminal Background Component (Monochrome)
const TerminalBackground = ({ streamKey }: { streamKey: string }) => {
    // @ts-ignore
    const lines = DATA_STREAMS[streamKey] || [];
    return (
        <div className="absolute inset-0 overflow-hidden opacity-[0.04] pointer-events-none select-none font-mono text-[10px] leading-relaxed p-6 text-foreground">
            <motion.div
                animate={{ y: ["0%", "-50%"] }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="space-y-1"
            >
                {[...lines, ...lines, ...lines, ...lines].map((line, i) => (
                    <div key={i} className="whitespace-nowrap">{line}</div>
                ))}
            </motion.div>
        </div>
    );
};

// Pricing Tiers Data - Monochrome Edition
const tiers = [
    {
        name: "Local Developer",
        price: "$0",
        streamKey: "local",
        description: "For local debugging and evaluation.",
        features: [
            "Local deterministic record & replay",
            "Timeline UI (local)",
            "Keyframes & state hydration",
            "Virtual filesystem sandbox"
        ],
        limitations: "Local-only. No team features.",
        cta: "Get Started Free",
        popular: false
    },
    {
        name: "Pro Team",
        price: "$99",
        period: "/mo",
        streamKey: "pro",
        description: "For teams running agents in production.",
        features: [
            "Hosted trace storage",
            "Team workspace",
            "Cloud replay & fork",
            "Branch comparison",
            "Slack / Email alerts",
            "30-day retention"
        ],
        hint: "Scales with execution volume",
        cta: "Start Pro",
        popular: true
    },
    {
        name: "Enterprise",
        price: "Custom",
        streamKey: "enterprise",
        description: "For production, compliance, and scale.",
        features: [
            "Unlimited team members",
            "Advanced audit logs",
            "Policy-managed sandboxes",
            "SSO / SAML",
            "SLA & priority support",
            "On-prem / VPC options"
        ],
        cta: "Contact Sales",
        popular: false
    }
];

export const Pricing = () => {
    return (
        <div className="min-h-screen bg-background selection:bg-muted/30 text-foreground">
            <Header />

            <main className="pt-32 pb-24 relative overflow-hidden">
                {/* Void Grid Background */}
                <div className="absolute inset-0 pointer-events-none opacity-20"
                    style={{
                        backgroundImage: `
                    linear-gradient(currentColor 1px, transparent 1px),
                    linear-gradient(90deg, currentColor 1px, transparent 1px)
                 `,
                        backgroundSize: '40px 40px',
                        maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
                        color: 'var(--foreground)'
                    }}
                />

                <div className="container relative z-10 max-w-[1200px] mx-auto px-6">

                    {/* Header - Terminal Style */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-4xl mx-auto mb-20"
                    >
                        <span className="block font-mono text-[11px] font-bold tracking-[0.16em] text-muted-foreground/40 mb-4 uppercase">
                            &lt;Pricing_Models /&gt;
                        </span>
                        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-6 leading-tight">
                            Infrastructure pricing for <br /> <span className="text-foreground">critical agent systems</span>
                        </h1>
                        <p className="text-xl text-muted-foreground/50 font-normal leading-relaxed max-w-2xl mx-auto">
                            Start with local determinism. Scale to production observability. <br />
                            <span className="text-foreground/80">Pay only when you rely on it.</span>
                        </p>
                    </motion.div>

                    {/* Pricing Grid - Monochrome Living Terminal */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start perspective-1000">
                        {tiers.map((tier, i) => (
                            <motion.div
                                key={tier.name}
                                initial={{ opacity: 0, scaleY: 0 }} // Boot-up effect
                                whileInView={{ opacity: 1, scaleY: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5, ease: "circOut" }}
                                className={`relative group ${tier.popular ? 'z-10 md:-mt-4' : ''}`}
                            >
                                <div className={`
                    h-full p-8 rounded-2xl transition-all duration-300
                    bg-card border relative overflow-hidden flex flex-col
                    transform-gpu active:scale-[0.98]
                    ${tier.popular
                                        ? 'border-foreground hover:border-foreground shadow-[0_0_40px_rgba(70,130,180,0.1)] bg-card'
                                        : 'border-border hover:border-foreground/30'
                                    }
                `}>

                                    {/* Scanline Wipe Entry Overlay */}
                                    <motion.div
                                        initial={{ top: "0%" }}
                                        whileInView={{ top: "100%" }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 + (0.1 * i), duration: 0.8, ease: "easeInOut" }}
                                        className="absolute inset-x-0 h-full bg-foreground/5 border-b border-foreground/20 z-20 pointer-events-none opacity-30"
                                        style={{ background: 'linear-gradient(to bottom, transparent, currentColor)' }}
                                    />

                                    {/* Top Status Bar */}
                                    <div className="flex justify-between items-center mb-8 border-b border-border pb-4 relative z-10">
                                        <span className="text-[10px] font-mono font-bold tracking-[0.14em] uppercase text-muted-foreground/40 group-hover:text-foreground/60 transition-colors">
                                            {tier.name}
                                        </span>
                                        {/* Blinking Status Light */}
                                        <div className="flex gap-1.5">
                                            <div className="w-1.5 h-1.5 rounded-full bg-foreground animate-pulse" />
                                            <div className="w-1.5 h-1.5 rounded-full bg-foreground/10" />
                                        </div>
                                    </div>

                                    <div className="mb-8 relative z-10">
                                        <div className="flex items-baseline gap-1 mb-4">
                                            <span className="text-5xl font-bold text-foreground tracking-tight">{tier.price}</span>
                                            {tier.period && <span className="text-muted-foreground/40 font-mono text-sm">{tier.period}</span>}
                                        </div>
                                        <p className="text-sm text-muted-foreground/50 leading-relaxed min-h-[40px]">
                                            {tier.description}
                                        </p>
                                    </div>

                                    <div className="space-y-4 mb-8 flex-grow relative z-10">
                                        {tier.features.map((feature) => (
                                            <div key={feature} className="flex items-start gap-3">
                                                <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${tier.popular ? 'bg-foreground text-background' : 'bg-muted text-muted-foreground'}`}>
                                                    <Check className="w-2.5 h-2.5" />
                                                </div>
                                                <span className="text-sm text-muted-foreground/70">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="relative z-10 mt-auto">
                                        <Button
                                            size="lg"
                                            className={`w-full font-bold h-12 rounded-xl tracking-wide text-[13px] uppercase shadow-none border transition-all ${tier.popular
                                                ? 'bg-foreground hover:bg-foreground/90 text-background border-foreground hover:border-foreground/90'
                                                : 'bg-muted/50 hover:bg-muted text-foreground hover:text-foreground border-border hover:border-foreground/50'
                                                }`}
                                        >
                                            {tier.cta}
                                        </Button>

                                        {tier.limitations && (
                                            <div className="mt-4 flex items-center justify-center gap-2 opacity-40">
                                                <Terminal className="w-3 h-3 text-muted-foreground" />
                                                <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wide">
                                                    {tier.limitations}
                                                </span>
                                            </div>
                                        )}

                                        {tier.hint && (
                                            <div className="mt-4 flex items-center justify-center gap-2 opacity-100">
                                                {/* <Zap className="w-3 h-3 text-foreground" /> */}
                                                <span className="text-[10px] font-mono text-muted-foreground/50 uppercase tracking-wide">
                                                    {tier.hint}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-32 text-center opacity-40">
                        <p className="text-xs font-mono tracking-[0.2em] uppercase text-muted-foreground/50">
                            Trusted by teams responsible for production agents
                        </p>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Pricing;
