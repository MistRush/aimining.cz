import { Cpu, Globe, Lock, Shield, Zap } from "lucide-react";

export function Trust() {
    const partners = [
        { name: "NVIDIA Ecosystem", icon: Cpu },
        { name: "PyTorch Ready", icon: Zap },
        { name: "Supabase", icon: Globe },
        { name: "Stripe Secure", icon: Lock },
        { name: "SOC2 Compliant", icon: Shield },
    ];

    return (
        <section className="py-8 md:py-12 bg-black border-y border-white/5">
            <div className="container mx-auto px-4 text-center">
                <p className="text-xs md:text-sm text-gray-500 mb-6 md:mb-8 uppercase tracking-widest">
                    Technologie a standardy, na kterých stavíme
                </p>
                <div className="flex flex-wrap justify-center gap-6 md:gap-16 items-center opacity-60 hover:opacity-100 transition-opacity duration-500">
                    {partners.map((partner, index) => (
                        <div key={index} className="flex items-center gap-2 group">
                            <partner.icon className="w-5 h-5 md:w-6 md:h-6 text-gray-600 group-hover:text-orange-500 transition-colors" />
                            <span className="text-lg md:text-xl font-bold text-gray-600 group-hover:text-gray-300 transition-colors">
                                {partner.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
