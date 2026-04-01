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
        const handleScroll = () => setScrolled(window.scrollY > 40);
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
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? "bg-surface/80 backdrop-blur-[20px]"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12">
                <div className="flex items-center justify-between h-16 md:h-18">
                    {/* Logo */}
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className="font-display text-2xl md:text-[1.75rem] font-bold tracking-tight text-on-surface hover:text-primary transition-colors duration-300"
                    >
                        K-Hub
                    </a>

                    {/* Desktop nav */}
                    <div className="hidden md:flex items-center gap-12">
                        {navLinks.map((link, i) => (
                            <motion.a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => handleLinkClick(e, link.href)}
                                initial={{ opacity: 0, y: -8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 + i * 0.06, duration: 0.5 }}
                                className="text-[0.875rem] font-body font-medium text-on-surface-variant hover:text-primary transition-colors duration-300 tracking-tight"
                            >
                                {link.label}
                            </motion.a>
                        ))}
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setMobileOpen((o) => !o)}
                        className="md:hidden relative w-6 h-5 flex flex-col justify-between"
                        aria-label="Toggle menu"
                    >
                        <span
                            className={`block w-full h-[2px] bg-on-surface transition-all duration-300 origin-center ${mobileOpen ? "rotate-45 translate-y-[8px]" : ""
                                }`}
                        />
                        <span
                            className={`block w-full h-[2px] bg-on-surface transition-all duration-300 ${mobileOpen ? "opacity-0 scale-0" : ""
                                }`}
                        />
                        <span
                            className={`block w-full h-[2px] bg-on-surface transition-all duration-300 origin-center ${mobileOpen ? "-rotate-45 -translate-y-[8px]" : ""
                                }`}
                        />
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="md:hidden overflow-hidden bg-surface/95 backdrop-blur-[20px]"
                    >
                        <div className="px-6 sm:px-8 py-6 flex flex-col gap-5 border-t border-surface-container-low">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.href}
                                    href={link.href}
                                    onClick={(e) => handleLinkClick(e, link.href)}
                                    initial={{ opacity: 0, x: -12 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.06 }}
                                    className="text-sm font-medium text-on-surface-variant hover:text-primary tracking-tight transition-colors"
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
