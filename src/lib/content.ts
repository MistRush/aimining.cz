export const content = {
    cz: {
        nav: {
            investors: "Investoři",
            waitlist: "Zapsat se",
            cta: "Spustit aplikaci",
        },
        hero: {
            headline: "Těžební výkon pro AI revoluci.",
            subHeadline: "Pronajímejte nebo získávejte distribuovaný výkon GPU/CPU pro trénování modelů. Levněji, rychleji a bezpečně.",
            ctaPrimary: "Poskytnout výkon",
            ctaSecondary: "Získat výkon",
        },
        valueProps: {
            providers: {
                title: "Pro Poskytovatele",
                headline: "Váš hardware nespí, on vydělává.",
                description: "Získejte $AIM tokeny sdílením nevyužitého výkonu vašich GPU a CPU.",
            },
            developers: {
                title: "Pro Vývojáře",
                headline: "Výkon bez korporátních přirážek.",
                description: "Přístup k masivnímu distribuovanému výkonu o 40 % levněji než u AWS nebo Google.",
            },
        },
        tokenomics: {
            title: "Tokenomika $AIM",
            description: "Co je $AIM? $AIM je nativní utility token ekosystému AiMining. Slouží jako prostředek směny, motivace a řízení. Držitelé získávají podíl na poplatcích sítě, slevy na výpočetní výkon a hlasovací práva o budoucím směřování protokolu.",
        },
        roadmap: {
            title: "Plán rozvoje",
            q1: {
                title: "Q1: Launch & Angel Round",
                description: "Sběr kontaktů, Whitepaper, Angel investice.",
            },
            q2: {
                title: "Q2: Core Dev & Audit",
                description: "Vývoj Alpha verze, bezpečnostní audit $AIM.",
            },
            q3: {
                title: "Q3: Closed Beta",
                description: "Testnet pro prvních 100 vybraných těžařů.",
            },
            q4: {
                title: "1.1.2027: Mainnet Launch",
                description: "Ostrý start sítě, listing tokenu, plná integrace plateb.",
            },
        },
        investors: {
            title: "Angel Investoři & Partneři",
            cta: "Požádat o Pitch Deck / Early Access",
            form: {
                name: "Jméno",
                company: "Společnost",
                investment: "Plánovaná investice",
                message: "Zpráva",
                submit: "Odeslat poptávku",
            },
        },
        waitlist: {
            title: "Připojte se k revoluci",
            email: "Váš email",
            role: "Jsem...",
            roleProvider: "Poskytovatel hardwaru",
            roleDeveloper: "AI Vývojář",
            roleInvestor: "Investor",
            submit: "Zapsat se na čekací listinu",
        },
        footer: {
            rights: "Všechna práva vyhrazena.",
        }
    },
    en: {
        nav: {
            investors: "Investors",
            waitlist: "Join Waitlist",
            cta: "Launch App",
        },
        hero: {
            headline: "Mining Power for the AI Revolution.",
            subHeadline: "Rent or provide distributed GPU/CPU power for AI training. Cheaper, faster, and secure.",
            ctaPrimary: "Provide Power",
            ctaSecondary: "Get Power",
        },
        valueProps: {
            providers: {
                title: "For Providers",
                headline: "Your hardware doesn't sleep, it earns.",
                description: "Earn $AIM tokens by sharing idle GPU and CPU power.",
            },
            developers: {
                title: "For Developers",
                headline: "Power without the corporate markup.",
                description: "Access massive scale distributed compute at 40% lower cost than AWS/Google.",
            },
        },
        tokenomics: {
            title: "$AIM Tokenomics",
            description: "What is $AIM? $AIM is the native utility token of the AiMining ecosystem. It serves as a medium of exchange, incentive, and governance. Holders earn a share of network fees, discounts on computing power, and voting rights.",
        },
        roadmap: {
            title: "Roadmap",
            q1: {
                title: "Q1: Launch & Angel Round",
                description: "Contact collection, Whitepaper, Angel investment.",
            },
            q2: {
                title: "Q2: Core Dev & Audit",
                description: "Alpha development, $AIM security audit.",
            },
            q3: {
                title: "Q3: Closed Beta",
                description: "Testnet for the first 100 selected miners.",
            },
            q4: {
                title: "Jan 1, 2027: Mainnet Launch",
                description: "Official launch, token listing, full payment integration.",
            },
        },
        investors: {
            title: "Angel Investors & Partners",
            cta: "Apply for Early Access / Pitch Deck Request",
            form: {
                name: "Name",
                company: "Company",
                investment: "Planned Investment",
                message: "Message",
                submit: "Send Request",
            },
        },
        waitlist: {
            title: "Join the Revolution",
            email: "Your Email",
            role: "I am...",
            roleProvider: "Hardware Provider",
            roleDeveloper: "AI Developer",
            roleInvestor: "Investor",
            submit: "Join Waitlist",
        },
        footer: {
            rights: "All rights reserved.",
        }
    }
};

export type Content = typeof content.en;
export type Language = keyof typeof content;
