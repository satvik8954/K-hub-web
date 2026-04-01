"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Domains", href: "#domains" },
    { label: "Programs", href: "#programs" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleLinkClick = (e, href) => {
        e.preventDefault();
        setMobileOpen(false);
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? "bg-cream/90 backdrop-blur-md border-b border-border-warm py-4"
                    : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-container flex items-center justify-between">
                {/* Logo */}
                <a
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="text-xl font-bold tracking-tight text-charcoal hover:text-terracotta transition-colors"
                >
                    K-Hub
                </a>

                {/* Desktop nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link, i) => (
                        <motion.a
                            key={link.href}
                            href={link.href}
                            onClick={(e) => handleLinkClick(e, link.href)}
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 + i * 0.05, duration: 0.5 }}
                            className="text-sm font-medium text-warm-gray hover:text-charcoal transition-colors tracking-wide"
                        >
                            {link.label}
                        </motion.a>
                    ))}
                </div>

                {/* Mobile hamburger */}
                <button
                    onClick={() => setMobileOpen((o) => !o)}
                    className="md:hidden relative w-6 h-5 flex flex-col justify-between focus:outline-none"
                    aria-label="Toggle menu"
                >
                    <span
                        className={`block w-full h-[2px] bg-charcoal rounded transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[9px]" : ""
                            }`}
                    />
                    <span
                        className={`block w-full h-[2px] bg-charcoal rounded transition-all duration-300 ${mobileOpen ? "opacity-0" : ""
                            }`}
                    />
                    <span
                        className={`block w-full h-[2px] bg-charcoal rounded transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[9px]" : ""
                            }`}
                    />
                </button>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden overflow-hidden bg-cream/95 backdrop-blur-md border-b border-border-warm"
                    >
                        <div className="max-w-container py-6 flex flex-col gap-6">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.href}
                                    href={link.href}
                                    onClick={(e) => handleLinkClick(e, link.href)}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    className="text-base font-medium text-charcoal"
                                >
                                    {link.label}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
