"use client";

import { motion } from "framer-motion";

export default function Impact() {
    return (
        <section className="py-20 md:py-28 bg-surface-container-low">
            <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12">
                <div className="grid md:grid-cols-2 gap-20 md:gap-28 items-start">
                    {/* Left */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <p className="text-[0.75rem] font-body font-semibold tracking-[0.15em] uppercase text-primary mb-6">
                            Latest
                        </p>
                        <h2 className="font-display text-[clamp(1.8rem,4.5vw,3rem)] font-bold leading-[1.1] tracking-tight text-on-surface mb-6">
                            Paradigm
                            <br />
                            <span className="text-on-surface-variant">Chronicles</span>
                        </h2>
                        <p className="text-[0.95rem] text-on-surface-variant leading-relaxed mb-8 font-light">
                            Our newsletter captures the pulse of K-Hub — research
                            breakthroughs, student stories, and deep-tech developments across
                            all paradigms.
                        </p>
                        <div className="inline-flex items-center gap-3 bg-surface-container-lowest rounded-lg px-5 py-3">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                            <span className="text-sm text-on-surface font-medium">
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
                        <p className="text-[0.75rem] font-body font-semibold tracking-[0.15em] uppercase text-primary mb-6">
                            Campus Partners
                        </p>
                        <div className="space-y-3">
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
                                    className="flex items-center gap-4 bg-surface-container-lowest rounded-lg px-6 py-4
                             hover:shadow-[0_10px_20px_rgba(0,108,81,0.05)] transition-all duration-300"
                                >
                                    <span className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center text-sm font-display font-bold text-primary">
                                        {partner[0]}
                                    </span>
                                    <span className="font-medium text-on-surface">{partner}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
