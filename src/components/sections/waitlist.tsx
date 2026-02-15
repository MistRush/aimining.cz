"use client";

import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { useState } from "react";

export function Waitlist() {
    const { t } = useLanguage();
    const [role, setRole] = useState<"provider" | "developer" | "investor">("provider");

    return (
        <section id="waitlist" className="py-24 bg-background relative border-t border-white/5">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-secondary/20 p-8 md:p-12 rounded-2xl border border-primary/20 backdrop-blur-md relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>

                    <h2 className="text-3xl md:text-4xl font-bold mb-6 font-mono text-white">
                        {t.waitlist.title}
                    </h2>

                    <form className="max-w-md mx-auto space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="space-y-4">
                            <div className="text-left">
                                <label className="text-sm font-medium text-slate-300 ml-1 mb-2 block">{t.waitlist.role}</label>
                                <div className="grid grid-cols-3 gap-2">
                                    {[
                                        { id: "provider", label: t.waitlist.roleProvider },
                                        { id: "developer", label: t.waitlist.roleDeveloper },
                                        { id: "investor", label: t.waitlist.roleInvestor }
                                    ].map((r) => (
                                        <button
                                            key={r.id}
                                            type="button"
                                            onClick={() => setRole(r.id as any)}
                                            className={`text-xs p-2 rounded border transition-all ${role === r.id ? "bg-primary text-primary-foreground border-primary" : "bg-background/50 border-white/10 text-slate-400 hover:border-primary/50"}`}
                                        >
                                            {r.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-2 text-left">
                                <label className="text-sm font-medium text-slate-300 ml-1">{t.waitlist.email}</label>
                                <Input type="email" placeholder="name@example.com" className="bg-background/80" />
                            </div>
                        </div>

                        <Button size="lg" className="w-full text-lg shadow-[0_0_15px_rgba(211,84,0,0.3)]">
                            {t.waitlist.submit}
                        </Button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
