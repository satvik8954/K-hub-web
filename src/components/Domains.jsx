"use client";

import { motion } from "framer-motion";

const domains = [
    {
        name: "Drugparadigm",
        tagline: "AI-Driven Drug Discovery",
        description: "Using models to design new molecules and accelerate pharmaceutical research.",
        icon: "🔬",
    },
    {
        name: "Cyberparadigm",
        tagline: "Cybersecurity Training",
        description: "Hands-on cybersecurity challenges through 'Let Us Hack' platform.",
        icon: "🛡️",
    },
    {
        name: "Roboparadigm",
        tagline: "Robotics & Automation",
        description: "Building robotic systems and lab automation for deep-tech verticals.",
        icon: "🤖",
    },
    {
        name: "Neuroparadigm",
        tagline: "AI Mental Wellness",
        description: "Developing digital therapeutics and AI tools for mental health support.",
        icon: "🧠",
    },
    {
        name: "Neutraparadigm",
        tagline: "Functional Foods",
        description: "Researching nutrition science and functional food development.",
        icon: "🌱",
    },
    {
        name: "Crystalparadigm",
        tagline: "Materials Science",
        description: "Exploring crystallography and advanced materials for next-gen apps.",
        icon: "💎",
    },
];

export default function Domains() {
    return (
        <section id="domains" className="py-24 md:py-32">
            <div className="max-w-container">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center md:text-left mb-16"
                >
                    <p className="text-sm font-bold tracking-widest uppercase text-terracotta mb-4">
                        Paradigms
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal">
                        Six Verticals.
                        <span className="text-warm-gray"> One Mission.</span>
                    </h2>
                </motion.div>

                {/* Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {domains.map((domain, i) => (
                        <motion.div
                            key={domain.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            whileHover={{ y: -5 }}
                            className="bg-surface border border-border-warm rounded-2xl p-8 shadow-sm hover:shadow-md hover:border-terracotta/30 transition-all duration-300"
                        >
                            <div className="text-3xl mb-4">{domain.icon}</div>
                            <h3 className="text-xl font-bold text-charcoal mb-1">
                                {domain.name}
                            </h3>
                            <p className="text-xs font-semibold tracking-wider uppercase text-terracotta mb-3">
                                {domain.tagline}
                            </p>
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
