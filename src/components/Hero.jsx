"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import OrbitRing from "./OrbitRing";

const CYCLING_WORDS = [
    "Drug Discovery",
    "Cybersecurity",
    "Robotics",
    "AI Research",
    "Deep Tech",
    "Innovation",
];

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
    const [wordIndex, setWordIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setWordIndex((prev) => (prev + 1) % CYCLING_WORDS.length);
        }, 2200);
        return () => clearInterval(interval);
    }, []);

    const scrollTo = (id) => {
        const el = document.querySelector(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <section className="relative min-h-[100dvh] flex items-center overflow-hidden pt-20">
            {/* Background accents */}
            <div className="absolute top-24 right-[5%] w-80 h-80 bg-primary/[0.05] rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-20 left-[4%] w-72 h-72 bg-primary/[0.04] rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-8">

                {/* LEFT — Text content */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="flex-1 flex flex-col items-start text-left max-w-xl"
                >
                    {/* Eyebrow */}
                    <motion.p
                        variants={fadeUp}
                        className="text-[0.72rem] font-body font-semibold tracking-[0.18em] uppercase text-primary mb-6"
                    >
                        Deep-Tech Innovation Hub
                    </motion.p>

                    {/* Headline with cycling word */}
                    <motion.h1
                        variants={fadeUp}
                        className="font-display text-[clamp(2rem,4vw,3.6rem)] font-bold leading-[1.1] tracking-tight text-on-surface mb-6"
                    >
                        Building the Future
                        <br />
                        Through{" "}
                        <span className="inline-block relative align-bottom" style={{ minWidth: "4px" }}>
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={wordIndex}
                                    initial={{ opacity: 0, y: 22, filter: "blur(6px)" }}
                                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                    exit={{ opacity: 0, y: -22, filter: "blur(6px)" }}
                                    transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                                    className="inline-block text-primary"
                                >
                                    {CYCLING_WORDS[wordIndex]}
                                </motion.span>
                            </AnimatePresence>
                        </span>
                    </motion.h1>

                    {/* Subtext */}
                    <motion.p
                        variants={fadeUp}
                        className="text-base md:text-lg text-on-surface-variant leading-relaxed mb-10 font-light"
                    >
                        K-Hub is the deep-tech incubator of KMIT Group of Institutions,
                        empowering students to work on cutting-edge research in drug
                        discovery, cybersecurity, robotics, and beyond.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div variants={fadeUp} className="flex items-center gap-5 flex-wrap">
                        <button
                            onClick={() => scrollTo("#domains")}
                            className="px-8 py-3.5 bg-gradient-to-r from-primary to-primary-container text-surface text-sm font-semibold tracking-tight rounded-lg
                                       hover:shadow-[0_20px_40px_rgba(0,108,81,0.18)] transition-all duration-300"
                        >
                            Explore Our Work
                        </button>
                        <button
                            onClick={() => scrollTo("#about")}
                            className="px-8 py-3.5 text-sm font-medium tracking-tight text-on-surface
                                       bg-surface-container-low hover:bg-surface-container-lowest transition-all duration-300 rounded-lg"
                        >
                            Learn More
                        </button>
                    </motion.div>
                </motion.div>

                {/* RIGHT — Orbit ring */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.88 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="flex-[1.2] flex items-center justify-center"
                >
                    <OrbitRing />
                </motion.div>
            </div>

            {/* Scroll hint */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-5 h-8 border border-outline-variant/30 rounded-full flex items-start justify-center pt-1.5"
                >
                    <div className="w-1 h-1.5 bg-on-surface-variant rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    );
}
