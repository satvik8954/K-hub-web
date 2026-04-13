"use client";

import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

const logos = [
    { src: "/logo-drugparadigm.webp", name: "Drugparadigm" },
    { src: "/logo-cyberparadigm.webp", name: "Cyberparadigm" },
    { src: "/logo-neuroparadigm.webp", name: "Neuroparadigm" },
    { src: "/logo-roboparadigm.webp", name: "Roboparadigm" },
    { src: "/logo-neutraparadigm.webp", name: "Neutraparadigm" },
    { src: "/logo-crystalparadigm.webp", name: "Crystalparadigm" },
];

const RADIUS = 240;
const LOGO_SIZE =110;
const NORMAL_DURATION = 28;
const SLOW_DURATION = 120;

export default function OrbitRing() {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [isOrbitHovered, setIsOrbitHovered] = useState(false);

    const ringControls = useAnimation();
    const counterControls = useAnimation();

    useEffect(() => {
        ringControls.start({ rotate: 360, transition: { duration: NORMAL_DURATION, repeat: Infinity, ease: "linear" } });
        counterControls.start({ rotate: -360, transition: { duration: NORMAL_DURATION, repeat: Infinity, ease: "linear" } });
    }, []);

    useEffect(() => {
        const dur = isOrbitHovered ? SLOW_DURATION : NORMAL_DURATION;
        ringControls.start({ rotate: 360, transition: { duration: dur, repeat: Infinity, ease: "linear" } });
        counterControls.start({ rotate: -360, transition: { duration: dur, repeat: Infinity, ease: "linear" } });
    }, [isOrbitHovered]);

    const containerSize = RADIUS * 2 + LOGO_SIZE + 40;

    return (
        <div
            className="relative flex items-center justify-center select-none"
            style={{ width: containerSize, height: containerSize }}
            onMouseEnter={() => setIsOrbitHovered(true)}
            onMouseLeave={() => { setIsOrbitHovered(false); setHoveredIndex(null); }}
        >
            {/* Outer faint decorative ring */}
            <div
                className="absolute rounded-full border border-dashed border-outline-variant/10"
                style={{ width: RADIUS * 2 + 58, height: RADIUS * 2 + 58 }}
            />

            {/* Main orbit track */}
            <div
                className="absolute rounded-full border border-dashed border-outline-variant/22"
                style={{ width: RADIUS * 2, height: RADIUS * 2 }}
            />

            {/* Compass accent dots */}
            {[0, 90, 180, 270].map((angle) => {
                const rad = (angle * Math.PI) / 180;
                const x = RADIUS * Math.cos(rad);
                const y = RADIUS * Math.sin(rad);
                return (
                    <div
                        key={angle}
                        className="absolute rounded-full bg-primary/25"
                        style={{ width: 5, height: 5, transform: `translate(${x - 2.5}px, ${y - 2.5}px)` }}
                    />
                );
            })}

            {/* Center glow */}
            <div
                className="absolute rounded-full bg-primary/[0.07] blur-3xl pointer-events-none"
                style={{ width: RADIUS, height: RADIUS }}
            />

            {/* Center K-Hub logo */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 80, damping: 14, delay: 0.3 }}
                style={{ position: "absolute", zIndex: 20 }}
            >
                <motion.div
                    animate={isOrbitHovered ? { scale: 1.08 } : { scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 18 }}
                    style={{
                        width: 125,
                        height: 125,
                        borderRadius: "50%",
                        background: "rgba(255,255,255,0.97)",
                        border: isOrbitHovered ? "2px solid rgba(0,108,81,0.28)" : "1.5px solid rgba(0,108,81,0.13)",
                        boxShadow: isOrbitHovered
                            ? "0 8px 40px rgba(0,108,81,0.15), 0 2px 12px rgba(0,0,0,0.09)"
                            : "0 6px 32px rgba(0,0,0,0.09), 0 1.5px 6px rgba(0,108,81,0.08)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backdropFilter: "blur(8px)",
                        transition: "border 0.3s ease, box-shadow 0.3s ease",
                    }}
                >
                    <Image src="/logo-khub.png" alt="K-Hub" width={86} height={86} priority style={{ objectFit: "contain" }} />
                </motion.div>
            </motion.div>

            {/* Rotating ring */}
            <motion.div
                animate={ringControls}
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
                            animate={counterControls}
                            style={{ position: "absolute", left: cx, top: cy, width: LOGO_SIZE, height: LOGO_SIZE }}
                        >
                            {/* Burst from center on mount — each logo pops out with stagger */}
                            <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ type: "spring", stiffness: 60, damping: 14, delay: 0.5 + i * 0.1 }}
                                style={{ width: LOGO_SIZE, height: LOGO_SIZE, cursor: "pointer" }}
                                onHoverStart={() => setHoveredIndex(i)}
                                onHoverEnd={() => setHoveredIndex(null)}
                            >
                                {/* Hover scale + visual */}
                                <motion.div
                                    animate={isHovered ? { scale: 1.42 } : { scale: 1 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    style={{
                                        width: LOGO_SIZE,
                                        height: LOGO_SIZE,
                                        borderRadius: "50%",
                                        background: "rgba(255,255,255,0.95)",
                                        border: isHovered ? "2px solid rgba(0,108,81,0.45)" : "1.5px solid rgba(0,108,81,0.12)",
                                        boxShadow: isHovered
                                            ? "0 8px 40px rgba(0,108,81,0.22), 0 2px 12px rgba(0,0,0,0.1)"
                                            : "0 4px 24px rgba(0,0,0,0.07)",
                                        overflow: "hidden",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        backdropFilter: "blur(4px)",
                                        position: "relative",
                                        zIndex: isHovered ? 10 : 1,
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

                                {/* Tooltip */}
                                {isHovered && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 6 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.18 }}
                                        style={{
                                            position: "absolute",
                                            bottom: -45,
                                            left: "50%",
                                            transform: "translateX(-50%)",
                                            whiteSpace: "nowrap",
                                            fontSize: "0.65rem",
                                            fontWeight: 600,
                                            letterSpacing: "0.06em",
                                            color: "rgba(0,108,81,0.85)",
                                            background: "rgba(255,255,255,0.92)",
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
                        </motion.div>
                    );
                })}
            </motion.div>
        </div>
    );
}
