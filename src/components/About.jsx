"use client";

import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stats = [
    { number: "399+", label: "Trained Learners" },
    { number: "5", label: "Deep-Tech Paradigms" },
    { number: "3", label: "Campus Partners" },
    { number: "8", label: "Programs" },
];

export default function About() {
    return (
        <section id="about" className="py-24 md:py-32 bg-surface">
            <div className="max-w-container">
                <div className="grid lg:grid-cols-2 gap-16 items-center lg:items-start">
                    {/* Left Text */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeUp}
                    >
                        <p className="text-sm font-bold tracking-widest uppercase text-terracotta mb-4">
                            What is K-Hub
                        </p>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal mb-6 leading-tight">
                            A Venture Studio for
                            <br className="hidden md:block" />
                            <span className="text-warm-gray"> Deep-Tech Research</span>
                        </h2>

                        <div className="space-y-4 text-base md:text-lg text-warm-gray leading-relaxed">
                            <p>
                                K-Hub is the deep-tech incubator and venture studio of KMIT
                                Group of Institutions. It incubates teams working across
                                multiple domains — drug discovery, cybersecurity, robotics,
                                materials science, and more.
                            </p>
                            <p>
                                By providing structured access to GPU infrastructure, technical
                                mentorship, business guidance, and continuous support, K-Hub
                                gives students early exposure to deep-tech research and a
                                startup-style working environment while they are still in their
                                second and third years.
                            </p>
                            <p className="font-semibold text-charcoal">
                                The philosophy is simple: learning by doing — applying computer
                                science across multiple domains.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Stats Grid */}
                    <div className="grid grid-cols-2 gap-4 sm:gap-6">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{
                                    delay: i * 0.1,
                                    duration: 0.5,
                                    ease: "easeOut",
                                }}
                                className="bg-cream border border-border-warm rounded-xl p-6 sm:p-8 flex flex-col justify-center text-center
                           shadow-sm hover:border-terracotta/40 transition-colors"
                            >
                                <div className="text-3xl sm:text-4xl font-extrabold text-charcoal mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-warm-gray">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
