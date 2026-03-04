"use client";

import React from "react";
import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { WhoWeServeSection } from "./components/WhoWeServeSection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { ImpactSection } from "./components/ImpactSection";
import { LiveDonationsSection } from "./components/LiveDonationsSection";
import { WhyItMattersSection } from "./components/WhyItMattersSection";
import { CtaSection } from "./components/CtaSection";
import { FooterSection } from "./components/FooterSection";

export default function SustainabilityLanding() {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-emerald-200 text-neutral-900">
            <Navigation />
            <HeroSection />
            <WhoWeServeSection />
            <HowItWorksSection />
            <ImpactSection />
            <LiveDonationsSection />
            <WhyItMattersSection />
            <CtaSection />
            <FooterSection />
        </div>
    );
}
