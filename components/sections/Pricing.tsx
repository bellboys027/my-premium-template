"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "../ui/button";

const tiers = [
    {
        name: "Personal",
        price: "$29",
        desc: "Cocok untuk proyek portofolio pribadi.",
        features: ["Single License", "Next.js Source Code", "Tailwind Components", "Lifetime Updates"],
        buttonText: "Beli Sekarang",
        highlight: false,
    },
    {
        name: "Team",
        price: "$99",
        desc: "Terbaik untuk startup dan agensi kecil.",
        features: ["5 Licenses", "Priority Support", "Advanced Animations", "Custom Branding"],
        buttonText: "Pilih Team",
        highlight: true,
    },
];

const Pricing = () => {
    return (
        // Tambahkan id="pricing" dan scroll-mt-20 di sini
        <section id="pricing" className="py-24 bg-white dark:bg-zinc-950 scroll-mt-20">
            <div className="container max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-zinc-900 dark:text-white">Harga Transparan</h2>
                    <p className="text-zinc-600 dark:text-zinc-400">Pilih paket yang paling sesuai dengan kebutuhan bisnis Anda.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {tiers.map((tier, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className={`p-8 rounded-3xl border ${tier.highlight ? 'border-blue-500 ring-2 ring-blue-500/20' : 'border-zinc-200 dark:border-zinc-800'} flex flex-col bg-white dark:bg-zinc-900`}
                        >
                            <h3 className="text-xl font-bold mb-2 text-zinc-900 dark:text-white">{tier.name}</h3>
                            <div className="text-4xl font-bold mb-4 text-zinc-900 dark:text-white">{tier.price}</div>
                            <p className="text-zinc-500 dark:text-zinc-400 mb-8 text-sm">{tier.desc}</p>
                            <ul className="space-y-4 mb-8 flex-1">
                                {tier.features.map((f, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-300">
                                        <Check size={16} className="text-blue-500" /> {f}
                                    </li>
                                ))}
                            </ul>
                            <Button className={`w-full h-12 rounded-xl font-semibold transition-all ${tier.highlight ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-zinc-100 dark:text-zinc-900'}`}>
                                {tier.buttonText}
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;