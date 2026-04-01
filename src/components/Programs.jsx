"use client";

import { motion } from "framer-motion";

const programs = [
    {
        title: "The Homebrew",
        description: "A collaborative experiment and prototype space where students explore ideas hands-on.",
        number: "01",
    },
    {
        title: "Cohorts",
        description: "Structured learning and project groups that guide students through deep-tech domains.",
        number: "02",
    },
    {
        title: "Imagineering School",
        description: "Creative problem-solving programs that blend imagination with engineering rigor.",
        number: "03",
    },
    {
        title: "Startup Incubation",
        description: "Full-stack startup support — from ideation to market, with mentorship and resources.",
        number: "04",
    },
];

export default function Programs() {
    return (
        <section id="programs" className="py-24 md:py-32 bg-surface">
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
                        Programs
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal">
                        How We
                        <span className="text-warm-gray"> Build & Learn</span>
                    </h2>
                </motion.div>

                {/* Pillars Grid */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {programs.map((program, i) => (
                        <motion.div
                            key={program.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="relative bg-cream border border-border-warm rounded-2xl p-8 hover:border-terracotta/40 transition-colors group"
                        >
                            <div className="text-sm font-bold text-terracotta/60 mb-4 tracking-widest">
                                {program.number}
                            </div>
                            <h3 className="text-2xl font-bold text-charcoal mb-3">
                                {program.title}
                            </h3>
                            <p className="text-warm-gray leading-relaxed text-sm md:text-base">
                                {program.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Smaller additions */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-4"
                >
                    {[
                        { title: "Workrooms", desc: "Dedicated research spaces" },
                        { title: "Founders' Brunch", desc: "Networking events" },
                        { title: "Starter Kits", desc: "Curated toolkits" },
                        { title: "Events", desc: "Talks & workshops" },
                    ].map((item) => (
                        <div
                            key={item.title}
                            className="bg-cream border border-border-warm rounded-xl p-5 text-center sm:text-left hover:border-terracotta/30 transition-colors"
                        >
                            <h4 className="font-semibold text-charcoal mb-1 text-sm md:text-base">{item.title}</h4>
                            <p className="text-xs text-warm-gray">{item.desc}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
