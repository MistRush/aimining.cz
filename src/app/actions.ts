"use server";

import { supabase } from "@/lib/supabase";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitWaitlist(prevState: any, formData: FormData) {
    const email = formData.get("email") as string;
    const role = formData.get("role") as string;

    if (!email || !role) {
        return { message: "Vyplňte prosím všechna pole.", success: false };
    }

    // Validation for missing keys
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.RESEND_API_KEY) {
        return { message: "Server configuration missing (API Keys).", success: false };
    }

    try {
        // 1. Save to Supabase
        const { error: dbError } = await supabase
            .from("waitlist")
            .insert([{ email, role }]);

        if (dbError) throw dbError;

        // 2. Send Notification to Admin
        await resend.emails.send({
            from: "AiMining <connect@aimining.cz>",
            to: "connect@aimining.cz",
            subject: `New Waitlist Signup: ${email}`,
            html: `<p>New user joined the waitlist:</p>
                   <p><strong>Email:</strong> ${email}</p>
                   <p><strong>Role:</strong> ${role}</p>`,
        });

        // 3. Send Confirmation to User
        await resend.emails.send({
            from: "AiMining <connect@aimining.cz>",
            to: email,
            subject: "Vítejte v revoluci AiMining",
            html: `<h1>Vítejte v AiMining!</h1>
                   <p>Děkujeme za registraci na čekací listinu. Budeme vás informovat, jakmile se otevře přístup.</p>
                   <p>S pozdravem,</p>
                   <p>Tým AiMining</p>`,
        });

        return { message: "Úspěšně zapsáno! Zkontrolujte svůj email.", success: true };
    } catch (error) {
        console.error("Waitlist Error:", error);
        return { message: "Něco se pokazilo. Zkuste to prosím znovu.", success: false };
    }
}

export async function submitInvestorQuery(prevState: any, formData: FormData) {
    const name = formData.get("name") as string;
    const company = formData.get("company") as string;
    const investment = formData.get("investment") as string;
    const message = formData.get("message") as string;
    const email = formData.get("email") as string; // Ideally add email field to investor form too

    if (!name || !message) {
        return { message: "Vyplňte prosím povinná pole.", success: false };
    }

    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.RESEND_API_KEY) {
        return { message: "Server configuration missing (API Keys).", success: false };
    }

    try {
        // 1. Save to Supabase
        const { error: dbError } = await supabase
            .from("investor_inquiries")
            .insert([{ name, company, investment_amount: investment, message, email }]);

        if (dbError) throw dbError;

        // 2. Send Notification to Admin
        await resend.emails.send({
            from: "AiMining <connect@aimining.cz>",
            to: "connect@aimining.cz",
            subject: `New Investor Lead: ${name}`,
            html: `<h1>New Investor Inquiry</h1>
                   <p><strong>Name:</strong> ${name}</p>
                   <p><strong>Company:</strong> ${company}</p>
                   <p><strong>Investment:</strong> ${investment}</p>
                   <p><strong>Message:</strong> ${message}</p>`,
        });

        return { message: "Poptávka odeslána. Ozveme se vám brzy.", success: true };
    } catch (error) {
        console.error("Investor Error:", error);
        return { message: "Chyba při odesílání. Zkuste to znovu.", success: false };
    }
}
