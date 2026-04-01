"use client";

import { motion } from "framer-motion";

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
        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
            {/* Decorative accent */}
            <div className="absolute top-20 right-[10%] w-72 h-72 bg-terracotta/[0.04] rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-20 left-[5%] w-96 h-96 bg-terracotta/[0.03] rounded-full blur-3xl pointer-events-none" />

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="relative z-10 max-w-4xl mx-auto px-6 md:px-10 text-center"
            >
                {/* Eyebrow */}
                <motion.p
                    variants={fadeUp}
                    className="text-[0.78rem] font-body font-medium tracking-[0.25em] uppercase text-terracotta mb-8"
                >
                    Deep-Tech Innovation Hub
                </motion.p>

                {/* Headline */}
                <motion.h1
                    variants={fadeUp}
                    className="font-display text-[clamp(2.6rem,6.5vw,5rem)] leading-[1.08] tracking-tight text-charcoal mb-8"
                >
                    Building the Future
                    <br />
                    <span className="text-warm-gray">Through Innovation</span>
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    variants={fadeUp}
                    className="text-lg md:text-xl text-warm-gray leading-relaxed max-w-2xl mx-auto mb-12 font-light"
                >
                    K-Hub is the deep-tech incubator of KMIT Group of Institutions,
                    empowering students to work on cutting-edge research in drug
                    discovery, cybersecurity, robotics, and beyond.
                </motion.p>

                {/* CTAs */}
                <motion.div variants={fadeUp} className="flex items-center justify-center gap-5 flex-wrap">
                    <button
                        onClick={() => scrollTo("#domains")}
                        className="group px-8 py-3.5 bg-charcoal text-cream text-sm font-medium tracking-wide rounded-full
                       hover:bg-terracotta transition-all duration-400 ease-out
                       hover:shadow-[0_8px_32px_rgba(196,93,62,0.25)]"
                    >
                        Explore Our Work
                    </button>
                    <button
                        onClick={() => scrollTo("#about")}
                        className="px-8 py-3.5 text-sm font-medium tracking-wide text-warm-gray
                       border border-border-warm rounded-full
                       hover:border-charcoal hover:text-charcoal transition-all duration-300"
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
                        className="w-5 h-8 border border-border-warm rounded-full flex items-start justify-center pt-1.5"
                    >
                        <div className="w-1 h-1.5 bg-warm-gray rounded-full" />
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}
