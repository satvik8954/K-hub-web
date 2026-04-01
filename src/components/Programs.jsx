"use client";

import { motion } from "framer-motion";

const programs = [
    {
        title: "The Homebrew",
        description:
            "A collaborative experiment and prototype space where students explore ideas hands-on.",
        number: "01",
    },
    {
        title: "Cohorts",
        description:
            "Structured learning and project groups that guide students through deep-tech domains.",
        number: "02",
    },
    {
        title: "Imagineering School",
        description:
            "Creative problem-solving programs that blend imagination with engineering rigor.",
        number: "03",
    },
    {
        title: "Startup Incubation",
        description:
            "Full-stack startup support — from ideation to market, with mentorship and resources.",
        number: "04",
    },
];

export default function Programs() {
    return (
        <section id="programs" className="py-28 md:py-36">
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
                        Programs
                    </p>
                    <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] leading-[1.12] tracking-tight text-charcoal max-w-xl">
                        How We
                        <br />
                        <span className="text-warm-gray">Build & Learn</span>
                    </h2>
                </motion.div>

                {/* Program pillars */}
                <div className="grid md:grid-cols-2 gap-6">
                    {programs.map((program, i) => (
                        <motion.div
                            key={program.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{
                                delay: i * 0.1,
                                duration: 0.6,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="group relative bg-surface border border-border-warm rounded-2xl p-8 md:p-10
                         hover:border-terracotta/30 transition-all duration-400"
                        >
                            {/* Number */}
                            <span className="inline-block text-[0.72rem] font-body font-semibold tracking-[0.2em] text-terracotta/50 group-hover:text-terracotta transition-colors duration-300 mb-5">
                                {program.number}
                            </span>

                            <h3 className="font-display text-2xl md:text-[1.7rem] tracking-tight text-charcoal mb-3">
                                {program.title}
                            </h3>

                            <p className="text-[0.94rem] text-warm-gray leading-relaxed">
                                {program.description}
                            </p>

                            {/* Hover accent bar */}
                            <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-terracotta/0 group-hover:bg-terracotta/20 rounded-full transition-all duration-500" />
                        </motion.div>
                    ))}
                </div>

                {/* Additional programs (smaller) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
                >
                    {[
                        { title: "Workrooms", desc: "Dedicated research spaces" },
                        { title: "Founders' Brunch", desc: "Networking with entrepreneurs" },
                        { title: "DeepTech Starter Kits", desc: "Curated toolkits to begin" },
                        { title: "Curated Events", desc: "Talks, workshops & demos" },
                    ].map((item, i) => (
                        <div
                            key={item.title}
                            className="bg-cream border border-border-warm rounded-xl px-6 py-5
                         hover:border-terracotta/20 transition-colors duration-300"
                        >
                            <p className="text-sm font-medium text-charcoal mb-1">
                                {item.title}
                            </p>
                            <p className="text-xs text-warm-gray">{item.desc}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
