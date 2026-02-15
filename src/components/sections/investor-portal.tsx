"use client";

import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// Simple Input/Textarea components or just use standard HTML for now to speed up.
// Better to create proper components if we have time, but sticking to standard input with classes for speed as per requested "Lead Generation Tool" vibe.

export function InvestorPortal() {
    const { t } = useLanguage();

    return (
        <section id="investors" className="py-24 bg-gradient-to-t from-background to-secondary/10 relative">
            <div className="container px-4 md:px-6 max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 font-mono text-white">
                        {t.investors.title}
                    </h2>
                    <p className="text-slate-400">{t.investors.cta}</p>
                </div>

                <motion.form
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-secondary/20 p-8 rounded-2xl border border-white/5 backdrop-blur-md space-y-6"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-300 ml-1">{t.investors.form.name}</label>
                            <input
                                type="text"
                                className="w-full h-12 px-4 rounded-md bg-background/50 border border-white/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all text-white placeholder:text-slate-600"
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-300 ml-1">{t.investors.form.company}</label>
                            <input
                                type="text"
                                className="w-full h-12 px-4 rounded-md bg-background/50 border border-white/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all text-white placeholder:text-slate-600"
                                placeholder="Tech Ventures Ltd."
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300 ml-1">{t.investors.form.investment}</label>
                        <select className="w-full h-12 px-4 rounded-md bg-background/50 border border-white/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all text-white placeholder:text-slate-600">
                            <option className="bg-secondary text-slate-300" value="">Select range...</option>
                            <option className="bg-secondary" value="seed">$10k - $50k</option>
                            <option className="bg-secondary" value="angel">$50k - $200k</option>
                            <option className="bg-secondary" value="vc">$200k+</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300 ml-1">{t.investors.form.message}</label>
                        <textarea
                            className="w-full min-h-[120px] p-4 rounded-md bg-background/50 border border-white/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all text-white placeholder:text-slate-600 resize-y"
                            placeholder="Tell us about your interest..."
                        />
                    </div>

                    <Button size="lg" className="w-full h-12 text-lg font-bold shadow-[0_0_20px_rgba(211,84,0,0.2)] hover:shadow-[0_0_30px_rgba(211,84,0,0.4)]">
                        {t.investors.form.submit}
                    </Button>
                </motion.form>
            </div>

            <footer className="mt-24 text-center text-slate-600 text-sm">
                <div className="container">
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p>© {new Date().getFullYear()} AI Mining Network. {t.footer.rights}</p>
                        <a href="mailto:hello@aimining.cz" className="text-slate-400 hover:text-primary transition-colors">
                            {t.footer.contact}
                        </a>
                    </div>
                </div>
            </footer>
        </section>
    );
}
