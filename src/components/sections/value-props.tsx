"use client";

import { useLanguage } from "@/components/language-provider";
import { motion } from "framer-motion";
import { Cpu, Zap, DollarSign, Database, Server } from "lucide-react";
import { cn } from "@/lib/utils";

export function ValueProps() {
    const { t } = useLanguage();

    const features = [
        {
            role: "providers",
            icon: Server,
            title: t.valueProps.providers.title,
            headline: t.valueProps.providers.headline,
            description: t.valueProps.providers.description,
            gradient: "from-blue-500/10 to-cyan-500/10",
            border: "border-blue-500/20",
            iconColor: "text-blue-400",
        },
        {
            role: "developers",
            icon: Cpu,
            title: t.valueProps.developers.title,
            headline: t.valueProps.developers.headline,
            description: t.valueProps.developers.description,
            gradient: "from-primary/10 to-amber-500/10",
            border: "border-primary/20",
            iconColor: "text-primary",
        },
    ];

    return (
        <section className="py-24 bg-secondary/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.role}
                            initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className={cn(
                                "relative group p-8 rounded-xl border bg-background/50 backdrop-blur-sm overflow-hidden hover:border-opacity-50 transition-colors",
                                feature.border
                            )}
                        >
                            <div
                                className={cn(
                                    "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                                    feature.gradient
                                )}
                            ></div>

                            <div className="relative z-10">
                                <div className={cn("p-3 rounded-lg inline-flex mb-6 bg-background border", feature.border)}>
                                    <feature.icon className={cn("w-8 h-8", feature.iconColor)} />
                                </div>

                                <h3 className="text-sm font-mono uppercase tracking-widest text-slate-400 mb-2">
                                    {feature.title}
                                </h3>

                                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                    {feature.headline}
                                </h2>

                                <p className="text-slate-300 leading-relaxed text-lg">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
