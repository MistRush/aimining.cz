"use client";

import { submitWaitlist } from "@/app/actions";
import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { useActionState, useState } from "react";
import { useFormStatus } from "react-dom";

export function Waitlist() {
    const { t } = useLanguage();
    const [role, setRole] = useState<"provider" | "developer" | "investor">("provider");
    const [state, formAction] = useActionState(submitWaitlist, { message: "", success: false });

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

                    {/* Validation Message */}
                    {state.message && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`mb-6 p-3 rounded-md text-sm text-center ${state.success ? "bg-green-500/10 text-green-400 border border-green-500/20" : "bg-red-500/10 text-red-400 border border-red-500/20"}`}
                        >
                            {state.message}
                        </motion.div>
                    )}

                    <form className="max-w-md mx-auto space-y-6" action={formAction}>
                        <div className="space-y-4">
                            <div className="text-left">
                                <label className="text-sm font-medium text-slate-300 ml-1 mb-2 block">{t.waitlist.role}</label>
                                {/* Hidden input to pass state to server action */}
                                <input type="hidden" name="role" value={role} />
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
                                <Input type="email" name="email" placeholder="name@example.com" className="bg-background/80" required />
                            </div>
                        </div>

                        <SubmitButton label={t.waitlist.submit} />
                    </form>
                </motion.div>
            </div>
        </section>
    );
}

function SubmitButton({ label }: { label: string }) {
    const { pending } = useFormStatus();

    return (
        <Button disabled={pending} size="lg" className="w-full text-lg shadow-[0_0_15px_rgba(211,84,0,0.3)]">
            {pending ? "Odesílám..." : label}
        </Button>
    );
}

