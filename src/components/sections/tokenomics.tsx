"use client";

import { useLanguage } from "@/components/language-provider";
import { motion } from "framer-motion";
import { Coins, Zap, ShieldCheck } from "lucide-react";

export function Tokenomics() {
    const { t } = useLanguage();

    return (
        <section className="py-24 bg-background relative border-t border-white/5">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6 text-sm font-mono tracking-wider"
                    >
                        <Coins className="w-4 h-4" />
                        <span>$AIM Utility</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold mb-6 font-mono"
                    >
                        {t.tokenomics.title}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-slate-300 leading-relaxed"
                    >
                        {t.tokenomics.description}
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: Zap,
                            title: "Payment",
                            desc: "Discounted compute",
                        },
                        {
                            icon: Coins,
                            title: "Rewards",
                            desc: "Provider earnings",
                        },
                        {
                            icon: ShieldCheck,
                            title: "Governance",
                            desc: "Network voting rights",
                        }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + i * 0.1 }}
                            className="flex flex-col items-center text-center p-6 rounded-xl border border-white/5 bg-secondary/20 hover:border-primary/30 transition-colors"
                        >
                            <div className="p-4 rounded-full bg-primary/10 text-primary mb-4">
                                <item.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                            <p className="text-slate-400">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
