"use client";

import { motion } from "framer-motion";
import OrbitRing from "./OrbitRing";

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
    const scrollTo = (id) => {
        const el = document.querySelector(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20">
            {/* Decorative accent */}
            <div className="absolute top-32 right-[8%] w-96 h-96 bg-primary/[0.06] rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-20 left-[6%] w-80 h-80 bg-primary/[0.04] rounded-full blur-3xl pointer-events-none" />

            {/* Orbiting paradigm logos */}
            <OrbitRing />

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12 text-center"
            >
                {/* Eyebrow */}
                <motion.p
                    variants={fadeUp}
                    className="text-[0.75rem] font-body font-semibold tracking-[0.15em] uppercase text-primary mb-8"
                >
                    Deep-Tech Innovation Hub
                </motion.p>

                {/* Headline */}
                <motion.h1
                    variants={fadeUp}
                    className="font-display text-[clamp(2.8rem,7vw,4.5rem)] font-bold leading-[1.05] tracking-tight text-on-surface mb-6"
                >
                    Building the Future
                    <br />
                    <span className="text-on-surface-variant">Through Innovation</span>
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    variants={fadeUp}
                    className="text-base md:text-lg text-on-surface-variant leading-relaxed max-w-2xl mx-auto mb-12 font-light"
                >
                    K-Hub is the deep-tech incubator of KMIT Group of Institutions,
                    empowering students to work on cutting-edge research in drug
                    discovery, cybersecurity, robotics, and beyond.
                </motion.p>

                {/* CTAs */}
                <motion.div variants={fadeUp} className="flex items-center justify-center gap-6 flex-wrap">
                    <button
                        onClick={() => scrollTo("#domains")}
                        className="group relative px-8 py-3.5 bg-gradient-to-r from-primary to-primary-container text-surface text-sm font-semibold tracking-tight rounded-lg
                       hover:shadow-[0_20px_40px_rgba(0,108,81,0.15)] transition-all duration-400 ease-out"
                    >
                        Explore Our Work
                    </button>
                    <button
                        onClick={() => scrollTo("#about")}
                        className="px-8 py-3.5 text-sm font-medium tracking-tight text-on-surface
                       bg-surface-container-low hover:bg-surface-container-lowest transition-all duration-300"
                    >
                        Learn More
                    </button>
                </motion.div>

                {/* Scroll hint */}
                <motion.div
                    variants={fadeUp}
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
            </motion.div>
        </section>
    );
}
