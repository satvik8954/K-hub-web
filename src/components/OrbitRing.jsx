"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const logos = [
    { src: "/logo-drugparadigm.webp", name: "Drugparadigm" },
    { src: "/logo-cyberparadigm.webp", name: "Cyberparadigm" },
    { src: "/logo-neuroparadigm.webp", name: "Neuroparadigm" },
    { src: "/logo-roboparadigm.webp", name: "Roboparadigm" },
    { src: "/logo-neutraparadigm.webp", name: "Neutraparadigm" },
    { src: "/logo-crystalparadigm.webp", name: "Crystalparadigm" },
];

const RADIUS = 230;
const LOGO_SIZE = 76;
const DURATION = 28;

export default function OrbitRing() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div className="relative flex items-center justify-center" style={{ width: RADIUS * 2 + LOGO_SIZE, height: RADIUS * 2 + LOGO_SIZE }}>
            {/* Faint dashed orbit track */}
            <div
                className="absolute rounded-full border border-dashed border-outline-variant/25"
                style={{ width: RADIUS * 2, height: RADIUS * 2 }}
            />

            {/* Center glow */}
            <div
                className="absolute rounded-full bg-primary/[0.06] blur-2xl pointer-events-none"
                style={{ width: RADIUS * 0.9, height: RADIUS * 0.9 }}
            />

            {/* Rotating ring */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: DURATION, repeat: Infinity, ease: "linear" }}
                style={{ position: "absolute", width: RADIUS * 2, height: RADIUS * 2 }}
            >
                {logos.map((logo, i) => {
                    const angle = (i * 360) / logos.length - 90;
                    const rad = (angle * Math.PI) / 180;
                    const cx = RADIUS + RADIUS * Math.cos(rad) - LOGO_SIZE / 2;
                    const cy = RADIUS + RADIUS * Math.sin(rad) - LOGO_SIZE / 2;
                    const isHovered = hoveredIndex === i;

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
                                cursor: "pointer",
                                zIndex: isHovered ? 10 : 1,
                            }}
                            onHoverStart={() => setHoveredIndex(i)}
                            onHoverEnd={() => setHoveredIndex(null)}
                        >
                            <motion.div
                                animate={isHovered ? { scale: 1.45 } : { scale: 1 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                style={{
                                    width: LOGO_SIZE,
                                    height: LOGO_SIZE,
                                    borderRadius: "50%",
                                    background: "rgba(255,255,255,0.95)",
                                    border: isHovered
                                        ? "2px solid rgba(0,108,81,0.45)"
                                        : "1.5px solid rgba(0,108,81,0.12)",
                                    boxShadow: isHovered
                                        ? "0 8px 40px rgba(0,108,81,0.22), 0 2px 12px rgba(0,0,0,0.1)"
                                        : "0 4px 24px rgba(0,0,0,0.07)",
                                    overflow: "hidden",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    backdropFilter: "blur(4px)",
                                    transition: "border 0.2s ease, box-shadow 0.2s ease",
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
                            </motion.div>

                            {/* Tooltip on hover */}
                            {isHovered && (
                                <motion.div
                                    initial={{ opacity: 0, y: 6 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.18 }}
                                    style={{
                                        position: "absolute",
                                        bottom: -28,
                                        left: "50%",
                                        transform: "translateX(-50%)",
                                        whiteSpace: "nowrap",
                                        fontSize: "0.65rem",
                                        fontWeight: 600,
                                        letterSpacing: "0.06em",
                                        color: "rgba(0,108,81,0.85)",
                                        background: "rgba(255,255,255,0.9)",
                                        border: "1px solid rgba(0,108,81,0.15)",
                                        borderRadius: 6,
                                        padding: "2px 8px",
                                        pointerEvents: "none",
                                    }}
                                >
                                    {logo.name}
                                </motion.div>
                            )}
                        </motion.div>
                    );
                })}
            </motion.div>
        </div>
    );
}
