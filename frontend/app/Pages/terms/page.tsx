import type { Metadata } from "next";
import React from "react";
import { Navigation } from "../SustainabilityLanding/components/Navigation";
import { FooterSection } from "../SustainabilityLanding/components/FooterSection";
import { FileText } from "lucide-react";

export const metadata: Metadata = {
    title: "Terms of Service",
    description: "Read the terms governing your use of FoodForNeed — covering donor responsibilities, volunteer conduct, prohibited uses, and liability.",
};

const SECTIONS = [
    {
        title: "1. Acceptance of Terms",
        content: `By accessing or using the FoodForNeed platform ("Service"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the platform.\n\nFoodForNeed is a non-profit, community-driven initiative. The Service is provided free of charge for the purpose of redistributing surplus food to those in need.`,
    },
    {
        title: "2. Who Can Use This Platform",
        content: `FoodForNeed is open to:
• Individuals or organisations wishing to donate surplus food.
• Verified recipients such as orphanages, shelters, care homes, community kitchens, and street outreach programs.
• Community volunteers who wish to assist with food collection and delivery.

You must provide accurate and honest information when registering or submitting forms on the platform.`,
    },
    {
        title: "3. Food Donation Responsibilities",
        content: `As a food donor, you agree that:
• All food you list is safe for human consumption at the time of posting.
• You will accurately describe the food type, quantity, and any allergens.
• You will be available during the stated pickup window.
• You will not list spoiled, contaminated, or unsafe food.

FoodForNeed does not guarantee the acceptance or use of any donation and cannot be held responsible for food handled or consumed after pickup.`,
    },
    {
        title: "4. Volunteer Conduct",
        content: `Volunteers agree to:
• Handle food with care and hygiene during collection and delivery.
• Treat donors and recipients with respect.
• Only accept pickups they are realistically able to complete.
• Report any food safety concerns to the platform immediately.

FoodForNeed reserves the right to remove volunteers from the platform for misconduct, repeated no-shows, or breach of these terms.`,
    },
    {
        title: "5. No Warranty",
        content: `FoodForNeed provides this platform on an "as is" basis. We make no warranties, express or implied, regarding the reliability, availability, or suitability of the platform for any particular purpose. We do not guarantee that all listed food will be collected, or that all requests will be fulfilled.`,
    },
    {
        title: "6. Limitation of Liability",
        content: `To the fullest extent permitted by law, FoodForNeed shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use the platform, including but not limited to illness resulting from food consumption, failed pickups, or loss of data.`,
    },
    {
        title: "7. Prohibited Uses",
        content: `You may not use FoodForNeed to:
• List, exchange, or promote any commercial goods or services.
• Collect or harvest personal data from other users.
• Impersonate any person or organization.
• Post false, misleading, or fraudulent food listings.
• Use the platform for any unlawful purpose.

Violations may result in immediate removal from the platform.`,
    },
    {
        title: "8. Modifications to the Service",
        content: `FoodForNeed reserves the right to modify, suspend, or discontinue the Service or any part of it at any time without notice. We are not liable to you or any third party for any such modification, suspension, or discontinuance.`,
    },
    {
        title: "9. Changes to These Terms",
        content: `We may revise these Terms of Service at any time. The updated version will be posted on this page with a revised effective date. Your continued use of the platform after such changes constitutes acceptance of the new terms.`,
    },
    {
        title: "10. Contact",
        content: `For questions about these Terms of Service, please contact:\n\nhello@foodforneed.org\n+91 98765 43210`,
    },
];

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navigation />

            <section className="relative pt-40 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute top-0 right-0 w-120 h-120 rounded-full bg-blue-100/40 blur-[120px] -z-10 pointer-events-none animate-float-slow" />
                <div className="max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 glass border border-blue-200/50 text-blue-800 px-4 py-2 rounded-full text-sm font-bold mb-6 shadow-sm">
                        <FileText className="w-4 h-4" /> Terms of Service
                    </div>
                    <h1 className="text-5xl font-extrabold text-neutral-900 tracking-tight mb-4">
                        Terms of Service
                    </h1>
                    <p className="text-neutral-500 font-medium text-lg leading-relaxed mb-4">
                        These terms govern your use of the FoodForNeed platform. By using FoodForNeed, you agree to act in good faith and in the interest of the community.
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
