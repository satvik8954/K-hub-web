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
        <section id="domains" className="py-20 md:py-28 bg-surface-container-low">
            <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="mb-16 md:mb-20"
                >
                    <p className="text-[0.75rem] font-body font-semibold tracking-[0.15em] uppercase text-primary mb-6">
                        Paradigms
                    </p>
                    <h2 className="font-display text-[clamp(1.8rem,4.5vw,3rem)] font-bold leading-[1.1] tracking-tight text-on-surface max-w-2xl">
                        Six Verticals.
                        <br />
                        <span className="text-on-surface-variant">One Mission.</span>
                    </h2>
                </motion.div>

                {/* Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                            className="group bg-surface-container-lowest rounded-lg p-8
                         hover:shadow-[0_20px_40px_rgba(0,108,81,0.08)]
                         transition-all duration-400 cursor-default"
                        >
                            {/* Icon */}
                            <span className="inline-block text-3xl text-primary/40 group-hover:text-primary/60 transition-colors duration-300 mb-5">
                                {domain.icon}
                            </span>

                            {/* Name */}
                            <h3 className="font-display text-lg font-bold tracking-tight text-on-surface mb-2">
                                {domain.name}
                            </h3>
                            <p className="text-[0.8rem] font-semibold tracking-tight uppercase text-primary mb-4">
                                {domain.tagline}
                            </p>

                            {/* Description */}
                            <p className="text-sm text-on-surface-variant leading-relaxed font-light">
                                {domain.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
