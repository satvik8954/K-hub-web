"use client";

import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer id="contact" className="border-t border-border-warm">
            <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-20">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16"
                >
                    {/* Brand */}
                    <div>
                        <p className="font-display text-2xl tracking-tight text-charcoal mb-4">
                            K-Hub
                        </p>
                        <p className="text-sm text-warm-gray leading-relaxed max-w-xs">
                            The deep-tech incubator and venture studio of KMIT Group of
                            Institutions. Learning by doing.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <p className="text-[0.72rem] font-medium tracking-[0.2em] uppercase text-warm-gray mb-5">
                            Quick Links
                        </p>
                        <ul className="space-y-3">
                            {[
                                { label: "About", href: "#about" },
                                { label: "Paradigms", href: "#domains" },
                                { label: "Programs", href: "#programs" },
                            ].map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            document
                                                .querySelector(link.href)
                                                ?.scrollIntoView({ behavior: "smooth", block: "start" });
                                        }}
                                        className="text-sm text-warm-gray hover:text-charcoal transition-colors duration-300"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <p className="text-[0.72rem] font-medium tracking-[0.2em] uppercase text-warm-gray mb-5">
                            Contact
                        </p>
                        <div className="space-y-3 text-sm text-warm-gray">
                            <p>
                                SY No 32/A & 32/E2, Near NGIT College,
                                <br />
                                Uppal, Hyderabad, Telangana&nbsp;–&nbsp;500088
                            </p>
                            <p>
                                <a
                                    href="tel:+919052906665"
                                    className="hover:text-charcoal transition-colors duration-300"
                                >
                                    +91 9052906665
                                </a>
                            </p>
                            <p>
                                <a
                                    href="mailto:pratham@k-hub.org.in"
                                    className="hover:text-charcoal transition-colors duration-300"
                                >
                                    pratham@k-hub.org.in
                                </a>
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Bottom bar */}
                <div className="mt-16 pt-8 border-t border-border-warm flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-warm-gray/70">
                        © {new Date().getFullYear()} K-Hub. All rights reserved.
                    </p>
                    <p className="text-xs text-warm-gray/50">
                        Deep-Tech Innovation Hub
                    </p>
                </div>
            </div>
        </footer>
    );
}
