import type { Metadata } from "next";
import React from "react";
import { Navigation } from "../SustainabilityLanding/components/Navigation";
import { FooterSection } from "../SustainabilityLanding/components/FooterSection";
import { TrendingUp, Users, MapPin, Leaf, HandPlatter } from "lucide-react";

export const metadata: Metadata = {
    title: "Our Impact",
    description: "See the real numbers behind FoodForNeed — meals saved, volunteers active, cities covered, and community stories from donors and recipients.",
};

const STATS = [
    { label: "Meals Saved", value: "48,200+", icon: <HandPlatter className="w-5 h-5" />, progress: 82, bg: "bg-emerald-400" },
    { label: "Food Donors", value: "1,340+", icon: <Leaf className="w-5 h-5" />, progress: 67, bg: "bg-yellow-400" },
    { label: "Active Volunteers", value: "862", icon: <Users className="w-5 h-5" />, progress: 54, bg: "bg-blue-400" },
    { label: "Cities Served", value: "14", icon: <MapPin className="w-5 h-5" />, progress: 40, bg: "bg-orange-400" },
];

const MILESTONES = [
    { year: "2023", title: "Program Launch", desc: "FoodForNeed launched in Bengaluru with 12 volunteers and 3 partner restaurants." },
    { year: "2023", title: "5,000 Meals Reached", desc: "First major milestone achieved in under 6 months of operations." },
    { year: "2024", title: "Expanded to 5 Cities", desc: "Reached Chennai, Hyderabad, Mumbai, and Pune with local volunteer chapters." },
    { year: "2024", title: "20,000 Meals & 500 Volunteers", desc: "Doubled volunteer base and reached families in 8 registered orphanages." },
    { year: "2025", title: "48,000+ Meals Saved", desc: "Currently serving 14 cities with over 1,300 regular donors." },
];

const STORIES = [
    { name: "Green Basket Restaurant", role: "Food Donor", story: "\"We used to throw out 40 meals a day. Now every last plate goes to someone who needs it. It takes us 5 minutes to fill in the form.\"" },
    { name: "Priya K.", role: "Volunteer Driver", story: "\"I do two pickups every Saturday with my scooter. It's incredibly simple and I know exactly where the food ends up.\"" },
    { name: "Little Stars Orphanage", role: "Food Recipient", story: "\"Three times a week we receive fresh meals for our 40 children. This platform has been a genuine blessing for us.\"" },
];

export default function ImpactPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navigation />

            <section className="relative pt-40 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute top-0 left-0 w-120 h-120 rounded-full bg-emerald-100/50 blur-[120px] -z-10 animate-float-slow pointer-events-none" />
                <div className="absolute top-20 right-0 w-90 h-90 rounded-full bg-yellow-100/40 blur-[100px] -z-10 animate-float-medium pointer-events-none" />
                <div className="max-w-7xl mx-auto">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 glass border border-emerald-200/50 text-emerald-800 px-4 py-2 rounded-full text-sm font-bold mb-6 shadow-sm">
                            <TrendingUp className="w-4 h-4" /> Our Impact
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-neutral-900 leading-[1.05] mb-6">
                            Real numbers,<br />
                            <span className="text-emerald-600">real change.</span>
                        </h1>
                        <p className="text-neutral-500 font-medium text-xl leading-relaxed">
                            Every meal redistributed is a statistic that matters — a child fed, food waste averted, and a volunteer empowered.
                        </p>
                    </div>
                </div>
            </section>

            <section className="pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
                    {STATS.map((stat, i) => (
                        <div key={i} className={`${stat.bg} rounded-[2rem] p-7 border-4 border-white shadow-md group hover:-translate-y-2 hover:shadow-xl transition-all duration-400 relative overflow-hidden`}>
                            <div className="absolute -top-6 -right-6 w-20 h-20 bg-white/15 rounded-full group-hover:scale-125 transition-transform duration-500" />
                            <div className="absolute -bottom-4 -left-4 w-14 h-14 bg-white/10 rounded-full" />
                            <div className="bg-white/30 backdrop-blur-sm p-2.5 rounded-xl inline-flex mb-4">{stat.icon}</div>
                            <p className="text-4xl font-black text-neutral-900 mb-1 leading-none">{stat.value}</p>
                            <p className="text-sm font-bold text-neutral-800 mb-4">{stat.label}</p>
                            <div className="h-2 bg-white/30 rounded-full overflow-hidden">
                                <div className="h-2 bg-neutral-900/30 rounded-full" style={{ width: `${stat.progress}%` }} />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
                    <div>
                        <div className="inline-flex items-center gap-2 bg-emerald-100 border border-emerald-200 text-emerald-800 px-3 py-1.5 rounded-full text-xs font-bold mb-6">Our Journey</div>
                        <div className="relative border-l-4 border-emerald-100 pl-10 space-y-10">
                            {MILESTONES.map((m, i) => (
                                <div key={i} className="relative group">
                                    <div className="absolute -left-[3.1rem] top-1.5 w-5 h-5 rounded-full bg-emerald-400 border-4 border-white shadow group-hover:scale-110 transition-transform" />
                                    <span className="text-xs font-black text-emerald-600 uppercase tracking-widest">{m.year}</span>
                                    <h3 className="text-xl font-extrabold text-neutral-900 mt-1 mb-2">{m.title}</h3>
                                    <p className="text-neutral-500 font-medium leading-relaxed">{m.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <div className="inline-flex items-center gap-2 bg-emerald-100 border border-emerald-200 text-emerald-800 px-3 py-1.5 rounded-full text-xs font-bold mb-6">Community Stories</div>
                        <div className="space-y-4">
                            {STORIES.map((s, i) => (
                                <div key={i} className={`rounded-[2rem] p-7 border-4 border-white shadow-md relative overflow-hidden group hover:-translate-y-0.5 transition-all duration-300 ${["bg-emerald-400", "bg-yellow-400", "bg-blue-400"][i]}`}>
                                    <div className="absolute -top-6 -right-6 w-20 h-20 bg-white/15 rounded-full group-hover:scale-125 transition-transform duration-500" />
                                    <p className="text-neutral-900 font-medium leading-relaxed text-sm mb-4 italic relative z-10">{s.story}</p>
                                    <div className="relative z-10">
                                        <p className="font-extrabold text-neutral-900">{s.name}</p>
                                        <p className="text-xs text-neutral-800/70 font-bold">{s.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <FooterSection />
        </main>
    );
}
