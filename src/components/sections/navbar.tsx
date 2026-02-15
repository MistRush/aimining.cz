"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language-provider";
import { LanguageToggle } from "@/components/language-toggle";
import { Button } from "@/components/ui/button";
import { Cpu } from "lucide-react";

export function Navbar() {
    const { t } = useLanguage();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center space-x-2">
                    <Cpu className="h-6 w-6 text-primary" />
                    <span className="text-xl font-bold tracking-wider font-mono">
                        AI<span className="text-primary">MINING</span>.CZ
                    </span>
                </Link>

                <div className="flex items-center gap-6">
                    <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
                        <a href="mailto:connect@aimining.cz" className="hover:text-primary transition-colors">
                            connect@aimining.cz
                        </a>
                        <Link href="#investors" className="hover:text-primary transition-colors">
                            {t.nav.investors}
                        </Link>
                    </div>

                    <div className="flex items-center gap-4">
                        <LanguageToggle />
                        <Link href="#waitlist">
                            <Button variant="cyber" className="hidden md:inline-flex">
                                {t.nav.waitlist}
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
