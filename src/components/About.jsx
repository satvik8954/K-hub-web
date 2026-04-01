"use client";

import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
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
        <section id="about" className="py-28 md:py-36">
            <div className="max-w-6xl mx-auto px-6 md:px-10">
                <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
                    {/* Left — Text */}
                    <div>
                        <motion.p
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-60px" }}
                            className="text-[0.78rem] font-body font-medium tracking-[0.25em] uppercase text-terracotta mb-6"
                        >
                            What is K-Hub
                        </motion.p>

                        <motion.h2
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-60px" }}
                            className="font-display text-[clamp(2rem,4vw,3.2rem)] leading-[1.12] tracking-tight text-charcoal mb-8"
                        >
                            A Venture Studio for
                            <br />
                            <span className="text-warm-gray">Deep-Tech Research</span>
                        </motion.h2>

                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-60px" }}
                            className="space-y-5 text-warm-gray leading-[1.75] text-[0.98rem]"
                        >
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
                            <p className="text-charcoal font-medium">
                                The philosophy is simple: learning by doing — applying computer
                                science across multiple domains.
                            </p>
                        </motion.div>
                    </div>

                    {/* Right — Stats */}
                    <div className="grid grid-cols-2 gap-6 md:mt-16">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-40px" }}
                                transition={{
                                    delay: i * 0.1,
                                    duration: 0.6,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="bg-surface border border-border-warm rounded-2xl p-7 md:p-8
                           hover:border-terracotta/30 transition-colors duration-400"
                            >
                                <p className="font-display text-[clamp(2rem,3.5vw,2.8rem)] text-charcoal leading-none mb-2">
                                    {stat.number}
                                </p>
                                <p className="text-[0.8rem] text-warm-gray font-medium tracking-wide uppercase">
                                    {stat.label}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
