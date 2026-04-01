"use client";

import { motion } from "framer-motion";

export default function CTA() {
    return (
        <section className="py-16 md:py-24 bg-surface">
            <div className="max-w-container">
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className="bg-charcoal rounded-3xl p-10 md:p-16 lg:p-24 text-center relative overflow-hidden shadow-2xl"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-terracotta/10 to-transparent pointer-events-none" />

                    <div className="relative z-10 max-w-2xl mx-auto">
                        <p className="text-sm font-bold tracking-widest uppercase text-terracotta/90 mb-6">
                            Get Involved
                        </p>
                        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
                            Ready to Build Something Extraordinary?
                        </h2>
                        <p className="text-base md:text-lg text-white/70 mb-10 leading-relaxed">
                            Whether you're a student, researcher, or entrepreneur — K-Hub
                            offers the infrastructure, mentorship, and community to turn
                            deep-tech ideas into reality.
                        </p>
                        <motion.a
                            href="#contact"
                            onClick={(e) => {
                                e.preventDefault();
                                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                            }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block bg-terracotta text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-terracotta-dark transition-colors"
                        >
                            Get in Touch
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
