import type { Metadata } from "next";
import React from "react";
import { Navigation } from "../SustainabilityLanding/components/Navigation";
import { FooterSection } from "../SustainabilityLanding/components/FooterSection";
import { Leaf, HeartHandshake, Globe, Users } from "lucide-react";

export const metadata: Metadata = {
    title: "About Us",
    description: "Learn about FoodForNeed — a 100% non-profit food redistribution platform connecting surplus food with shelters, orphanages, and people in need.",
};

const VALUES = [
    { icon: <HeartHandshake className="w-7 h-7" />, title: "100% Non-Profit", desc: "Every rupee saved goes toward operations, never profit.", bg: "bg-emerald-400" },
    { icon: <Globe className="w-7 h-7" />, title: "Community Driven", desc: "Powered by local donors and unpaid volunteers who care.", bg: "bg-blue-400" },
    { icon: <Users className="w-7 h-7" />, title: "Inclusive Reach", desc: "We serve orphanages, shelters, care homes, and street individuals.", bg: "bg-yellow-400" },
    { icon: <Leaf className="w-7 h-7" />, title: "Eco-Conscious", desc: "Surplus food redistribution dramatically reduces landfill waste.", bg: "bg-orange-400" },
];

const HOW_WE_OPERATE = [
    { step: "01", title: "Donors Register Surplus", desc: "Restaurants, farms, events, and households post available food via our simple form — specifying quantity, type, and pickup window." },
    { step: "02", title: "Volunteers Coordinate Pickup", desc: "Our verified volunteer network takes on pickups near them. No payment, no hierarchy — just neighbours helping neighbours." },
    { step: "03", title: "Food Reaches People in Need", desc: "Collected food is delivered directly to orphanages, care homes, night shelters, or distributed on the street. Same-day whenever possible." },
];

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navigation />

            <section className="relative pt-40 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute top-0 -left-20 w-[480] h-[480] rounded-full bg-emerald-100/60 blur-[120px] pointer-events-none -z-10 animate-float-slow" />
                <div className="absolute top-20 right-0 w-90 h-90 rounded-full bg-yellow-100/40 blur-[100px] pointer-events-none -z-10 animate-float-medium" />
                <div className="max-w-7xl mx-auto">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 glass border border-emerald-200/50 text-emerald-800 px-4 py-2 rounded-full text-sm font-bold mb-6 shadow-sm">
                            <Leaf className="w-4 h-4 text-emerald-600" /> About FoodForNeed
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-neutral-900 leading-[1.05] mb-6">
                            We fight hunger,<br />
                            <span className="text-emerald-600">not waste.</span>
                        </h1>
                        <p className="text-neutral-500 text-xl leading-relaxed font-medium max-w-2xl">
                            FoodForNeed is a non-profit food redistribution platform connecting restaurants, farms, bakeries and households with shelters, orphanages, and people on the streets — entirely free of charge.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-neutral-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-emerald-100 border border-emerald-200 text-emerald-800 px-3 py-1.5 rounded-full text-xs font-bold mb-4">Our Mission</div>
                            <h2 className="text-4xl font-extrabold text-neutral-900 mb-6 leading-tight">Why we exist</h2>
                            <p className="text-neutral-600 text-lg leading-relaxed font-medium mb-6">
                                Every day, enormous quantities of food go to waste — while millions go to sleep hungry. FoodForNeed bridges that gap by coordinating real-time food pickups and deliveries, powered entirely by community volunteers.
                            </p>
                            <p className="text-neutral-600 text-lg leading-relaxed font-medium">
                                We believe that no edible food should go to the bin when there are people in need — in orphanages, care homes, on street corners — just down the road.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {VALUES.map((v, i) => (
                                <div key={i} className={`${v.bg} rounded-[2rem] p-6 border-4 border-white shadow-md group hover:-translate-y-1 hover:shadow-xl transition-all duration-400 relative overflow-hidden`}>
                                    <div className="absolute -top-6 -right-6 w-20 h-20 bg-white/15 rounded-full group-hover:scale-125 transition-transform duration-500" />
                                    <div className="bg-white/30 backdrop-blur-sm p-3 rounded-2xl inline-flex mb-4">{v.icon}</div>
                                    <h3 className="font-extrabold text-neutral-900 text-base mb-1">{v.title}</h3>
                                    <p className="text-neutral-800/70 text-sm font-medium leading-relaxed">{v.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-emerald-100 border border-emerald-200 text-emerald-800 px-3 py-1.5 rounded-full text-xs font-bold mb-4">Our Process</div>
                    <h2 className="text-4xl font-extrabold text-neutral-900">How We Operate</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {HOW_WE_OPERATE.map((item, i) => (
                        <div key={i} className="relative bg-neutral-50 rounded-[2rem] p-8 border border-neutral-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-400 group overflow-hidden">
                            <span className="text-7xl font-black text-neutral-100 absolute top-4 right-6 select-none group-hover:scale-110 transition-transform">{item.step}</span>
                            <h3 className="text-xl font-extrabold text-neutral-900 mb-3 relative z-10">{item.title}</h3>
                            <p className="text-neutral-500 font-medium leading-relaxed relative z-10">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <FooterSection />
        </main>
    );
}
