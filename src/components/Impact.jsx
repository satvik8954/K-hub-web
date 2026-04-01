"use client";

import { motion } from "framer-motion";

export default function Impact() {
    return (
        <section className="py-24 md:py-32">
            <div className="max-w-container">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                    {/* Newsletter */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-sm font-bold tracking-widest uppercase text-terracotta mb-4">
                            Latest
                        </p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal mb-6 leading-tight">
                            Paradigm
                            <br className="hidden md:block" />
                            <span className="text-warm-gray"> Chronicles</span>
                        </h2>
                        <p className="text-base md:text-lg text-warm-gray leading-relaxed mb-8">
                            Our newsletter captures the pulse of K-Hub — research
                            breakthroughs, student stories, and deep-tech developments across
                            all paradigms.
                        </p>
                        <div className="inline-flex items-center gap-3 bg-surface border border-border-warm rounded-full px-5 py-2.5 shadow-sm">
                            <span className="w-2.5 h-2.5 bg-terracotta rounded-full animate-pulse" />
                            <span className="text-sm font-medium text-charcoal">
                                Issue #1 — December 2025
                            </span>
                        </div>
                    </motion.div>

                    {/* Campus Partners */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                    >
                        <p className="text-sm font-bold tracking-widest uppercase text-terracotta mb-4">
                            Campus Partners
                        </p>
                        <div className="space-y-4">
                            {["KMIT", "NGIT", "KMEC"].map((partner, i) => (
                                <motion.div
                                    key={partner}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                                    className="flex items-center gap-4 bg-surface border border-border-warm rounded-xl p-5 hover:border-terracotta/30 transition-colors"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 bg-terracotta/10 text-terracotta font-bold text-lg rounded-lg flex items-center justify-center">
                                        {partner[0]}
                                    </div>
                                    <div className="font-semibold text-charcoal text-lg">{partner}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
