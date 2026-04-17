"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, Shield, Smartphone, Code } from "lucide-react";

const features = [
    {
        title: "Performa Kilat",
        desc: "Optimasi Next.js 15 membuat loading web super cepat di bawah 1 detik.",
        icon: <Zap className="text-blue-500" />,
    },
    {
        title: "Responsive Design",
        desc: "Tampilan otomatis menyesuaikan di semua perangkat, dari HP hingga monitor 4K.",
        icon: <Smartphone className="text-purple-500" />,
    },
    {
        title: "Kode Bersih",
        desc: "Ditulis dengan TypeScript dan Tailwind CSS yang sangat mudah dimodifikasi.",
        icon: <Code className="text-emerald-500" />,
    },
    {
        title: "Keamanan Tinggi",
        desc: "Arsitektur modern yang menjamin keamanan data dan stabilitas sistem.",
        icon: <Shield className="text-red-500" />,
    },
];

const Features = () => {
    return (
        // Tambahkan id="features" di sini
        <section id="features" className="py-24 bg-zinc-50 dark:bg-zinc-900/50 scroll-mt-20">
            <div className="container max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
                        Fitur Unggulan Template
                    </h2>
                    <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                        Segala yang Anda butuhkan untuk membangun website profesional dalam hitungan menit.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-2xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 hover:shadow-xl transition-shadow"
                        >
                            <div className="w-12 h-12 rounded-lg bg-zinc-100 dark:bg-zinc-700 flex items-center justify-center mb-6 text-2xl">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-zinc-900 dark:text-white">{item.title}</h3>
                            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;