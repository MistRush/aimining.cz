"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Cpu, DollarSign, Zap } from "lucide-react";

const GPU_DATA = [
    { model: "NVIDIA RTX 3090", hourlyRate: 0.20, vram: "24GB" },
    { model: "NVIDIA RTX 4090", hourlyRate: 0.45, vram: "24GB" },
    { model: "NVIDIA A100 (80GB)", hourlyRate: 1.50, vram: "80GB" },
    { model: "NVIDIA H100", hourlyRate: 3.00, vram: "80GB" },
];

export function EarningsCalculator() {
    const [selectedGpu, setSelectedGpu] = useState(GPU_DATA[1]); // Default to 4090
    const [hoursPerDay, setHoursPerDay] = useState(12);

    const dailyEarnings = selectedGpu.hourlyRate * hoursPerDay;
    const monthlyEarnings = dailyEarnings * 30;
    const yearlyEarnings = dailyEarnings * 365;

    return (
        <section className="py-24 bg-black relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                        Spočítejte si svůj <span className="text-orange-500">výdělek</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Váš hardware může vydělávat, když spíte. Pronajměte svůj výkon pro AI trénink.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
                    {/* Controls */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 space-y-8">
                        <div>
                            <label className="block text-gray-300 mb-4 font-medium">Vyberte váš model GPU</label>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {GPU_DATA.map((gpu) => (
                                    <button
                                        key={gpu.model}
                                        onClick={() => setSelectedGpu(gpu)}
                                        className={`p-4 rounded-xl border text-left transition-all ${selectedGpu.model === gpu.model
                                                ? "bg-orange-500/20 border-orange-500 text-white"
                                                : "bg-black/20 border-white/10 text-gray-400 hover:border-white/30"
                                            }`}
                                    >
                                        <div className="font-bold">{gpu.model}</div>
                                        <div className="text-xs opacity-70 flex items-center gap-1 mt-1">
                                            <Cpu size={12} /> {gpu.vram}
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between text-gray-300 mb-4">
                                <span className="font-medium">Dostupnost (hodin denně)</span>
                                <span className="text-orange-500 font-bold">{hoursPerDay}h</span>
                            </div>
                            <input
                                type="range"
                                min="1"
                                max="24"
                                step="1"
                                value={hoursPerDay}
                                onChange={(e) => setHoursPerDay(Number(e.target.value))}
                                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
                            />
                            <div className="flex justify-between text-xs text-gray-500 mt-2">
                                <span>1h</span>
                                <span>12h</span>
                                <span>24h</span>
                            </div>
                        </div>
                    </div>

                    {/* Results */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-400 rounded-2xl blur-xl opacity-20 animate-pulse" />
                        <div className="bg-black/80 backdrop-blur-md border border-orange-500/30 rounded-2xl p-8 relative">
                            <h3 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">
                                Potenciální příjem
                            </h3>

                            <div className="space-y-6">
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-400">Denně</span>
                                    <span className="text-2xl font-bold text-white flex items-center">
                                        <DollarSign className="w-5 h-5 text-orange-500" />
                                        {dailyEarnings.toFixed(2)}
                                    </span>
                                </div>

                                <div className="flex items-center justify-between">
                                    <span className="text-gray-400">Měsíčně</span>
                                    <span className="text-3xl font-bold text-orange-400 flex items-center">
                                        <DollarSign className="w-6 h-6" />
                                        {monthlyEarnings.toFixed(0)}
                                    </span>
                                </div>

                                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                                    <span className="text-gray-400 font-medium">Ročně</span>
                                    <span className="text-4xl font-bold text-white flex items-center">
                                        <DollarSign className="w-8 h-8 text-green-500" />
                                        {yearlyEarnings.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                                    </span>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-white/10">
                                <div className="flex items-start gap-3 text-sm text-gray-400">
                                    <Zap className="w-4 h-4 text-orange-500 mt-0.5" />
                                    <p>Odhad je založen na aktuálních tržních cenách. Skutečný výdělek se může lišit dle poptávky a ceny elektřiny.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
