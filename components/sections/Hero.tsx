"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Button } from "../ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
    const fadeIn: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.8,
                ease: [0.21, 0.47, 0.32, 0.98]
            },
        }),
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white px-6">
            {/* Efek Cahaya Background - Pastikan z-index rendah */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/10 blur-[120px]" />
            </div>

            {/* Kontainer Utama - Naikkan z-index */}
            <div className="container relative z-20 max-w-5xl text-center flex flex-col items-center">
                <motion.div
                    custom={0}
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 bg-zinc-50 text-zinc-900 text-sm mb-6"
                >
                    <Sparkles size={14} className="text-blue-500" />
                    <span className="font-medium">Premium Template v1.0</span>
                </motion.div>

                <motion.h1
                    custom={1}
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-zinc-900"
                >
                    Website Modern <br /> Untuk Bisnis Masa Depan
                </motion.h1>

                <motion.p
                    custom={2}
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    className="text-lg md:text-xl text-zinc-600 mb-10 max-w-2xl mx-auto"
                >
                    Dibangun dengan Next.js, Framer Motion, dan Shadcn UI.
                    Solusi sempurna untuk landing page yang cepat dan elegan.
                </motion.p>

                <motion.div
                    custom={3}
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full"
                >
                    {/* Tombol dengan tambahan cursor-pointer dan z-index tinggi */}
                    <Button
                        size="lg"
                        className="h-12 px-8 text-md gap-2 bg-blue-600 hover:bg-blue-700 text-white border-none cursor-pointer relative z-30"
                        onClick={() => alert("Tombol 'Mulai' Aktif! 🚀")}
                    >
                        Mulai Sekarang <ArrowRight size={18} />
                    </Button>

                    <Button
                        size="lg"
                        variant="outline"
                        className="h-12 px-8 text-md border-zinc-200 cursor-pointer relative z-30 bg-white/50 backdrop-blur-sm"
                        onClick={() => window.open('https://github.com', '_blank')}
                    >
                        Lihat Demo
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;