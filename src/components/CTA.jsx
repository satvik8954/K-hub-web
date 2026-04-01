"use client";

import { motion } from "framer-motion";

export default function CTA() {
    return (
        <section className="py-28 md:py-36">
            <div className="max-w-6xl mx-auto px-6 md:px-10">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="relative bg-charcoal rounded-3xl px-8 py-20 md:px-16 md:py-28 text-center overflow-hidden"
                >
                    {/* Ambient glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-terracotta/10 rounded-full blur-[120px] pointer-events-none" />
                    <div className="absolute bottom-0 right-0 w-[300px] h-[200px] bg-terracotta/5 rounded-full blur-[80px] pointer-events-none" />

                    <p className="relative text-[0.78rem] font-body font-medium tracking-[0.25em] uppercase text-terracotta mb-8">
                        Get Involved
                    </p>

                    <h2 className="relative font-display text-[clamp(2rem,5vw,3.6rem)] leading-[1.1] tracking-tight text-cream mb-6 max-w-2xl mx-auto">
                        Ready to Build Something
                        <br />
                        Extraordinary?
                    </h2>

                    <p className="relative text-[0.94rem] text-cream/60 leading-relaxed max-w-xl mx-auto mb-12">
                        Whether you&apos;re a student, researcher, or entrepreneur — K-Hub
                        offers the infrastructure, mentorship, and community to turn
                        deep-tech ideas into reality.
                    </p>

                    <motion.a
                        href="#contact"
                        onClick={(e) => {
                            e.preventDefault();
                            document
                                .querySelector("#contact")
                                ?.scrollIntoView({ behavior: "smooth", block: "start" });
                        }}
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.98 }}
                        className="relative inline-block px-10 py-4 bg-terracotta text-cream text-sm font-medium tracking-wide rounded-full
                       hover:bg-terracotta-dark transition-colors duration-300
                       shadow-[0_8px_32px_rgba(196,93,62,0.35)]"
                    >
                        Get in Touch
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
