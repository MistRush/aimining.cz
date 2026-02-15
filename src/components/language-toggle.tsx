"use client";

import * as React from "react";
import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function LanguageToggle() {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="flex items-center space-x-1 bg-secondary/50 p-1 rounded-sm border border-primary/20 backdrop-blur-sm">
            <Button
                variant={language === "cz" ? "default" : "ghost"}
                size="sm"
                onClick={() => setLanguage("cz")}
                className={language === "cz" ? "bg-primary text-primary-foreground shadow-[0_0_10px_rgba(211,84,0,0.4)]" : "text-slate-400 hover:text-foreground"}
            >
                CZ
            </Button>
            <Button
                variant={language === "en" ? "default" : "ghost"}
                size="sm"
                onClick={() => setLanguage("en")}
                className={language === "en" ? "bg-primary text-primary-foreground shadow-[0_0_10px_rgba(211,84,0,0.4)]" : "text-slate-400 hover:text-foreground"}
            >
                EN
            </Button>
        </div>
    );
}
