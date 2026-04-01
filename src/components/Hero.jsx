"use client";

import { motion } from "framer-motion";

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
    const scrollTo = (id) => {
        const el = document.querySelector(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-12 overflow-hidden">
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="max-w-container w-full text-center relative z-10"
            >
                {/* Eyebrow */}
                <motion.p
                    variants={fadeUp}
                    className="text-sm font-semibold tracking-[0.15em] uppercase text-terracotta mb-6"
                >
                    Deep-Tech Innovation Hub
                </motion.p>

                {/* Headline */}
                <motion.h1
                    variants={fadeUp}
                    className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-charcoal mb-6 leading-[1.1]"
                >
                    Building the Future
                    <br className="hidden sm:block" />
                    <span className="text-warm-gray"> Through Innovation</span>
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    variants={fadeUp}
                    className="text-lg md:text-xl text-warm-gray leading-relaxed max-w-2xl mx-auto mb-10"
                >
                    K-Hub is the deep-tech incubator of KMIT Group of Institutions,
                    empowering students to work on cutting-edge research in drug
                    discovery, cybersecurity, robotics, and beyond.
                </motion.p>

                {/* CTAs */}
                <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                        onClick={() => scrollTo("#domains")}
                        className="w-full sm:w-auto px-8 py-3.5 bg-charcoal text-surface font-medium rounded-lg
                       hover:bg-terracotta transition-colors duration-300 shadow-sm"
                    >
                        Explore Our Work
                    </button>
                    <button
                        onClick={() => scrollTo("#about")}
                        className="w-full sm:w-auto px-8 py-3.5 bg-transparent text-charcoal font-medium rounded-lg
                       border border-border-warm hover:border-charcoal transition-colors duration-300"
                    >
                        Learn More
                    </button>
                </motion.div>
            </motion.div>
        </section>
    );
}
