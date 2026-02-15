"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { content, Content, Language } from "@/lib/content";

type LanguageContextType = {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: Content;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguageState] = useState<Language>("cz");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem("language") as Language;
        if (saved && (saved === "cz" || saved === "en")) {
            setLanguageState(saved);
        } else {
            // Detect browser language? defaulting to CZ as per prompt emphasis on CZ main version
            setLanguageState("cz");
        }
        setMounted(true);
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem("language", lang);
        // document.documentElement.lang = lang; // handled in layout but dynamic update here is good too
    };

    const t = content[language];

    // Prevent hydration mismatch by rendering children only after mount (or just default to CZ server-side)
    // For SEO, it's better to match server output. Since we default to 'cz' in useState, 
    // if server renders 'cz' (default) and client has 'en', there is mismatch.
    // Suppress hydration warning on body/html is one way. 
    // Another is a simple effect.

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
