"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
    { src: "/logo-drugparadigm.webp", name: "Drugparadigm" },
    { src: "/logo-cyberparadigm.webp", name: "Cyberparadigm" },
    { src: "/logo-neuroparadigm.webp", name: "Neuroparadigm" },
    { src: "/logo-roboparadigm.webp", name: "Roboparadigm" },
    { src: "/logo-neutraparadigm.webp", name: "Neutraparadigm" },
    { src: "/logo-crystalparadigm.webp", name: "Crystalparadigm" },
];

const RADIUS = 270;
const LOGO_SIZE = 80;
const DURATION = 28;

export default function OrbitRing() {
    return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
            {/* Faint dashed orbit track */}
            <div
                className="absolute rounded-full border border-dashed border-outline-variant/20"
                style={{ width: RADIUS * 2, height: RADIUS * 2 }}
            />

            {/* Rotating ring — all logos spin as one */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: DURATION, repeat: Infinity, ease: "linear" }}
                style={{ position: "relative", width: RADIUS * 2, height: RADIUS * 2, flexShrink: 0 }}
            >
                {logos.map((logo, i) => {
                    const angle = (i * 360) / logos.length - 90;
                    const rad = (angle * Math.PI) / 180;
                    const cx = RADIUS + RADIUS * Math.cos(rad) - LOGO_SIZE / 2;
                    const cy = RADIUS + RADIUS * Math.sin(rad) - LOGO_SIZE / 2;

                    return (
                        <motion.div
                            key={logo.name}
                            animate={{ rotate: -360 }}
                            transition={{ duration: DURATION, repeat: Infinity, ease: "linear" }}
                            style={{
                                position: "absolute",
                                left: cx,
                                top: cy,
                                width: LOGO_SIZE,
                                height: LOGO_SIZE,
                            }}
                        >
                            <div
                                style={{
                                    width: LOGO_SIZE,
                                    height: LOGO_SIZE,
                                    borderRadius: "50%",
                                    background: "rgba(255,255,255,0.92)",
                                    border: "1.5px solid rgba(0,108,81,0.12)",
                                    boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
                                    overflow: "hidden",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    backdropFilter: "blur(4px)",
                                }}
                            >
                                <Image
                                    src={logo.src}
                                    alt={logo.name}
                                    width={LOGO_SIZE}
                                    height={LOGO_SIZE}
                                    loading="eager"
                                    priority={i === 0}
                                    style={{ objectFit: "contain", padding: 8 }}
                                />
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>
        </div>
    );
}
