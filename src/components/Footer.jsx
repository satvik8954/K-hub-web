"use client";

import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer id="contact" className="bg-cream border-t border-border-warm pt-16 md:pt-24 pb-8">
            <div className="max-w-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12"
                >
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <h3 className="text-2xl font-bold tracking-tight text-charcoal mb-4">
                            K-Hub
                        </h3>
                        <p className="text-sm text-warm-gray leading-relaxed max-w-sm">
                            The deep-tech incubator and venture studio of KMIT Group of
                            Institutions. Learning by doing.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xs font-bold tracking-widest uppercase text-charcoal mb-5">
                            Quick Links
                        </h4>
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
                                            document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                                        }}
                                        className="text-sm font-medium text-warm-gray hover:text-terracotta transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Component */}
                    <div>
                        <h4 className="text-xs font-bold tracking-widest uppercase text-charcoal mb-5">
                            Contact
                        </h4>
                        <div className="space-y-3 text-sm text-warm-gray">
                            <p className="leading-relaxed">
                                SY No 32/A & 32/E2,<br />
                                Near NGIT College,<br />
                                Uppal, Hyderabad, Telangana – 500088
                            </p>
                            <div className="flex flex-col gap-1 mt-4">
                                <a href="tel:+919052906665" className="font-medium hover:text-terracotta transition-colors">
                                    +91 9052906665
                                </a>
                                <a href="mailto:pratham@k-hub.org.in" className="font-medium hover:text-terracotta transition-colors">
                                    pratham@k-hub.org.in
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-border-warm flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-warm-gray">
                        © {new Date().getFullYear()} K-Hub. All rights reserved.
                    </p>
                    <div className="text-xs text-warm-gray/70">
                        Deep-Tech Innovation Hub
                    </div>
                </div>
            </div>
        </footer>
    );
}
