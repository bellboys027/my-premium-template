"use client";

import React from "react";
import { motion } from "framer-motion";

const brands = [
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" },
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
    { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
];

const TrustedBy = () => {
    return (
        <section className="py-12 bg-white dark:bg-zinc-950 border-y border-zinc-100 dark:border-zinc-900">
            <div className="container max-w-6xl mx-auto px-6">
                <p className="text-center text-sm font-medium text-zinc-500 mb-10 tracking-widest uppercase">
                    Trusted by the world's most innovative teams
                </p>

                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50">
                    {brands.map((brand, index) => (
                        <motion.img
                            key={index}
                            src={brand.logo}
                            alt={brand.name}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustedBy;