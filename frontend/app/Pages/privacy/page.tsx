import type { Metadata } from "next";
import React from "react";
import { Navigation } from "../SustainabilityLanding/components/Navigation";
import { FooterSection } from "../SustainabilityLanding/components/FooterSection";
import { ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "Learn how FoodForNeed collects, uses, and protects your personal information. We collect only what is necessary to coordinate food distribution.",
};

const SECTIONS = [
    {
        title: "1. Information We Collect",
        content: `When you use FoodForNeed, we may collect the following information:
• Your name and phone number when submitting a food donation or request form.
• Your address or general location for coordinating pickups and deliveries.
• Voluntary information you provide in description fields (e.g., food details, dietary notes).
We do not collect payment information, identity documents, or any data beyond what is strictly necessary to coordinate food distribution.`,
    },
    {
        title: "2. How We Use Your Information",
        content: `We use the information you provide solely to:
• Match food donors with nearby volunteers and recipients.
• Coordinate safe and timely food pickups and deliveries.
• Send you updates about a donation or request you submitted (via phone/SMS where applicable).
• Improve the reliability and reach of our platform.
We never sell, rent, or share your personal information with third parties for commercial purposes.`,
    },
    {
        title: "3. Data Retention",
        content: `We retain your submission data only as long as necessary to fulfil an active donation or food request. Completed records may be retained in anonymised form for impact reporting (e.g., number of meals distributed). You may request deletion of your personal data at any time by contacting us at hello@foodforneed.org.`,
    },
    {
        title: "4. Cookies & Tracking",
        content: `FoodForNeed does not use advertising cookies or third-party tracking tools. We may use basic session cookies to maintain the functionality of the site (e.g., form state). No analytics or profiling cookies are used.`,
    },
    {
        title: "5. Data Security",
        content: `We take reasonable precautions to protect the data you submit. Our platform is served over HTTPS and access to form data is restricted to platform administrators and volunteer coordinators directly involved in fulfilling your request.`,
    },
    {
        title: "6. Children's Privacy",
        content: `FoodForNeed does not knowingly collect information from children under the age of 13. If you believe a child has submitted data through our platform, please contact us immediately and we will delete it promptly.`,
    },
    {
        title: "7. Changes to This Policy",
        content: `We may update this Privacy Policy from time to time. Changes will be reflected on this page with an updated effective date. Continued use of the platform after changes constitutes acceptance of the revised policy.`,
    },
    {
        title: "8. Contact",
        content: `If you have any questions about how we handle your personal information, please reach out to us at:\n\nhello@foodforneed.org\n+91 98765 43210`,
    },
];

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navigation />

            <section className="relative pt-40 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute top-0 left-0 w-120 h-120 rounded-full bg-emerald-100/40 blur-[120px] -z-10 pointer-events-none animate-float-slow" />
                <div className="max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 glass border border-emerald-200/50 text-emerald-800 px-4 py-2 rounded-full text-sm font-bold mb-6 shadow-sm">
                        <ShieldCheck className="w-4 h-4" /> Privacy Policy
                    </div>
                    <h1 className="text-5xl font-extrabold text-neutral-900 tracking-tight mb-4">
                        Your Privacy Matters
                    </h1>
                    <p className="text-neutral-500 font-medium text-lg leading-relaxed mb-4">
                        FoodForNeed is a non-profit food redistribution platform. We collect only what is necessary to connect donors, volunteers, and recipients — nothing more.
                    </p>
                    <p className="text-xs text-neutral-400 font-semibold uppercase tracking-widest">Effective Date: March 2026</p>
                </div>
            </section>

            <section className="pb-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto space-y-8">
                    {SECTIONS.map((s, i) => (
                        <div key={i} className="bg-neutral-50 rounded-[2rem] p-8 border border-neutral-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                            <h2 className="text-lg font-extrabold text-neutral-900 mb-4">{s.title}</h2>
                            <p className="text-neutral-600 font-medium leading-relaxed text-sm whitespace-pre-line">{s.content}</p>
                        </div>
                    ))}
                </div>
            </section>

            <FooterSection />
        </main>
    );
}
