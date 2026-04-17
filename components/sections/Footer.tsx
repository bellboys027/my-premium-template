"use client";

import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
    return (
        <footer className="py-12 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
            <div className="container max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

                {/* Branding */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center md:items-start"
                >
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                        PremiumTemplate
                    </span>
                    <p className="text-sm text-zinc-500 mt-2">
                        © {new Date().getFullYear()} Belly Saputra. All rights reserved.
                    </p>
                </motion.div>

                {/* Social Links */}
                <div className="flex gap-8 text-sm font-medium text-zinc-600 dark:text-zinc-400">
                    <a href="https://github.com/bellbooyss" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                        GitHub
                    </a>
                    <a href="#" className="hover:text-blue-600 transition-colors">
                        LinkedIn
                    </a>
                    <a href="#" className="hover:text-blue-600 transition-colors">
                        Instagram
                    </a>
                </div>

            </div>
        </footer>
    );
};

export default Footer;