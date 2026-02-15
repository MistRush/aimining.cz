"use client";

import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronRight, Server } from "lucide-react";
import Link from "next/link";

export function Hero() {
    const { t } = useLanguage();

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1B2631] via-[#0F1720] to-[#000000]">
            {/* Background Elements */}
            <div className="absolute inset-0 w-full h-full opacity-20">
                <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(211,84,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(211,84,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
            </div>

            {/* Spotlights */}
            <div className="absolute top-[-20%] left-[20%] w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full mix-blend-screen animate-pulse"></div>
            <div className="absolute bottom-[-10%] right-[10%] w-[400px] h-[400px] bg-accent/10 blur-[100px] rounded-full mix-blend-screen"></div>

            <div className="container mx-auto relative z-10 px-4 md:px-6 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary mb-8 text-sm font-mono tracking-wider"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    Next-Gen Computing
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold font-mono tracking-tight text-white mb-6 max-w-4xl"
                >
                    {t.hero.headline.split(" ").map((word, i) => (
                        <span key={i} className={i === t.hero.headline.split(" ").length - 2 ? "text-primary block md:inline" : "block md:inline"}>
                            {word}{" "}
                        </span>
                    ))}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="text-lg md:text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed"
                >
                    {t.hero.subHeadline}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                >
                    <Link href="#waitlist">
                        <Button size="lg" className="h-14 px-8 text-lg gap-2 shadow-[0_0_20px_rgba(211,84,0,0.3)]">
                            <Server className="w-5 h-5" />
                            {t.hero.ctaPrimary}
                        </Button>
                    </Link>
                    <Link href="#waitlist">
                        <Button size="lg" variant="outline" className="h-14 px-8 text-lg gap-2 border-slate-600 bg-transparent hover:bg-slate-800/50">
                            {t.hero.ctaSecondary}
                            <ChevronRight className="w-5 h-5" />
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
