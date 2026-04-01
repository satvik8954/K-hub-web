"use client";

import { motion } from "framer-motion";

export default function Impact() {
    return (
        <section className="py-28 md:py-36 bg-surface">
            <div className="max-w-6xl mx-auto px-6 md:px-10">
                <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
                    {/* Left */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <p className="text-[0.78rem] font-body font-medium tracking-[0.25em] uppercase text-terracotta mb-6">
                            Latest
                        </p>
                        <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] leading-[1.12] tracking-tight text-charcoal mb-6">
                            Paradigm
                            <br />
                            <span className="text-warm-gray">Chronicles</span>
                        </h2>
                        <p className="text-[0.94rem] text-warm-gray leading-relaxed mb-8">
                            Our newsletter captures the pulse of K-Hub — research
                            breakthroughs, student stories, and deep-tech developments across
                            all paradigms.
                        </p>
                        <div className="inline-flex items-center gap-3 bg-cream border border-border-warm rounded-full px-6 py-3">
                            <span className="w-2 h-2 bg-terracotta rounded-full animate-pulse" />
                            <span className="text-sm text-charcoal font-medium">
                                Issue #1 — December 2025
                            </span>
                        </div>
                    </motion.div>

                    {/* Right — Campus Partners */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ delay: 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <p className="text-[0.78rem] font-body font-medium tracking-[0.25em] uppercase text-terracotta mb-6">
                            Campus Partners
                        </p>
                        <div className="space-y-4">
                            {["KMIT", "NGIT", "KMEC"].map((partner, i) => (
                                <motion.div
                                    key={partner}
                                    initial={{ opacity: 0, x: 16 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: 0.2 + i * 0.08,
                                        duration: 0.5,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    className="flex items-center gap-4 bg-cream border border-border-warm rounded-xl px-6 py-5
                             hover:border-terracotta/30 transition-colors duration-300"
                                >
                                    <span className="w-10 h-10 rounded-lg bg-terracotta/8 flex items-center justify-center text-sm font-display text-terracotta">
                                        {partner[0]}
                                    </span>
                                    <span className="font-medium text-charcoal">{partner}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
