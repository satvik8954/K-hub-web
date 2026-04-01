"use client";

import { motion } from "framer-motion";

const domains = [
    {
        name: "Drugparadigm",
        tagline: "AI-Driven Drug Discovery",
        description:
            "Using generative models to design new molecules and accelerate pharmaceutical research.",
        icon: "⬡",
    },
    {
        name: "Cyberparadigm",
        tagline: "Cybersecurity Training",
        description:
            'Hands-on cybersecurity challenges through "Let Us Hack" — a dedicated training platform.',
        icon: "◈",
    },
    {
        name: "Roboparadigm",
        tagline: "Robotics & Lab Automation",
        description:
            "Building robotic systems and lab automation for deep-tech verticals.",
        icon: "⬢",
    },
    {
        name: "Neuroparadigm",
        tagline: "AI-Driven Mental Wellness",
        description:
            "Developing digital therapeutics and AI tools for mental health support.",
        icon: "◉",
    },
    {
        name: "Neutraparadigm",
        tagline: "Functional Foods & Supplements",
        description:
            "Researching nutrition science and functional food development.",
        icon: "◇",
    },
    {
        name: "Crystalparadigm",
        tagline: "Materials Science",
        description:
            "Exploring crystallography and advanced materials for next-gen applications.",
        icon: "⬠",
    },
];

export default function Domains() {
    return (
        <section id="domains" className="py-28 md:py-36 bg-surface">
            <div className="max-w-6xl mx-auto px-6 md:px-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="mb-16 md:mb-20"
                >
                    <p className="text-[0.78rem] font-body font-medium tracking-[0.25em] uppercase text-terracotta mb-6">
                        Paradigms
                    </p>
                    <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] leading-[1.12] tracking-tight text-charcoal max-w-xl">
                        Six Verticals.
                        <br />
                        <span className="text-warm-gray">One Mission.</span>
                    </h2>
                </motion.div>

                {/* Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {domains.map((domain, i) => (
                        <motion.div
                            key={domain.name}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{
                                delay: i * 0.08,
                                duration: 0.6,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            whileHover={{ y: -4 }}
                            className="group bg-cream border border-border-warm rounded-2xl p-7 md:p-8
                         hover:border-terracotta/40 hover:shadow-[0_8px_40px_rgba(196,93,62,0.06)]
                         transition-all duration-400 cursor-default"
                        >
                            {/* Icon */}
                            <span className="inline-block text-2xl text-terracotta/60 group-hover:text-terracotta transition-colors duration-300 mb-5">
                                {domain.icon}
                            </span>

                            {/* Name */}
                            <h3 className="font-display text-xl tracking-tight text-charcoal mb-1">
                                {domain.name}
                            </h3>
                            <p className="text-[0.78rem] font-medium tracking-wide uppercase text-terracotta mb-4">
                                {domain.tagline}
                            </p>

                            {/* Description */}
                            <p className="text-sm text-warm-gray leading-relaxed">
                                {domain.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
