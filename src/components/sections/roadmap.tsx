"use client";

import { useLanguage } from "@/components/language-provider";
import { motion } from "framer-motion";

export function Roadmap() {
    const { t } = useLanguage();

    const quarters = [
        t.roadmap.q1,
        t.roadmap.q2,
        t.roadmap.q3,
        t.roadmap.q4,
    ];

    return (
        <section className="py-24 bg-gradient-to-b from-background to-secondary/20 relative">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center font-mono">
                    {t.roadmap.title}
                </h2>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-[20px] md:left-1/2 md:-translate-x-[0.5px] top-0 bottom-0 w-px bg-primary/30"></div>

                    <div className="space-y-12">
                        {quarters.map((q, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                            >
                                {/* Content */}
                                <div className="md:w-1/2 pl-12 md:pl-0 md:px-12">
                                    <div className={`p-6 rounded-xl border border-white/5 bg-secondary/30 backdrop-blur-sm hover:border-primary/50 transition-colors ${i % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                                        <h3 className="text-xl font-bold text-primary mb-2 font-mono">{q.title.split(":")[0]}</h3>
                                        <h4 className="text-white font-semibold mb-2">{q.title.split(":")[1]}</h4>
                                        <p className="text-slate-400 text-sm">{q.description}</p>
                                    </div>
                                </div>

                                {/* Timeline Dot */}
                                <div className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 top-6 w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_rgba(211,84,0,0.8)] z-10">
                                    <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75"></div>
                                </div>

                                {/* Empty Space for alignment */}
                                <div className="hidden md:block md:w-1/2"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
