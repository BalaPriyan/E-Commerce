"use client";

import React from "react";
import Link from "next/link";
import { HeartHandshake, HandPlatter, ArrowRight, Leaf, Users, MapPin } from "lucide-react";
import { DonateModal } from "./DonateModal";

const QUICK_STATS = [
    { icon: <Leaf className="w-4 h-4" />, value: "600k+", label: "Meals Redistributed" },
    { icon: <Users className="w-4 h-4" />, value: "1,800+", label: "Volunteers Active" },
    { icon: <MapPin className="w-4 h-4" />, value: "12", label: "Cities Covered" },
];

export function CtaSection() {
    return (
        <section className="py-24 bg-white px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-125 h-100 rounded-full bg-emerald-100/60 blur-[140px] pointer-events-none -z-10" />
            <div className="absolute bottom-0 right-0 w-100 h-75 rounded-full bg-yellow-100/50 blur-[120px] pointer-events-none -z-10" />

            <div className="max-w-7xl mx-auto">

                <div className="w-full bg-neutral-950 rounded-[3rem] relative overflow-hidden">

                    <div className="absolute inset-0 opacity-5"
                        style={{ backgroundImage: "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)", backgroundSize: "48px 48px" }} />

                    <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-emerald-500/15 blur-[80px]" />
                    <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-yellow-500/10 blur-[80px]" />

                    <div className="relative z-10 flex flex-col lg:flex-row">

                        <div className="flex-1 p-10 md:p-16 space-y-8">
                            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 text-white px-4 py-2 rounded-full text-sm font-bold">
                                <Leaf className="w-4 h-4 text-emerald-400" />
                                Non-Profit · Free · Community Powered
                            </div>

                            <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-[1.05] tracking-tight">
                                Ready to make<br />
                                <span className="text-emerald-400">a real impact</span><br />
                                today?
                            </h2>

                            <p className="text-neutral-400 font-medium text-lg leading-relaxed max-w-md">
                                Whether you have extra food to give, time to volunteer, or a family to feed — FoodForNeed connects you to your community instantly.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <DonateModal>
                                    <button className="w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-neutral-900 rounded-full font-extrabold transition shadow-lg hover:shadow-emerald-500/30 hover:-translate-y-0.5 transform flex items-center justify-center gap-2 text-base">
                                        <HandPlatter className="w-5 h-5" /> Donate Food
                                    </button>
                                </DonateModal>
                                <Link href="/Pages/volunteer">
                                    <button className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/15 backdrop-blur-md text-white border border-white/20 rounded-full font-extrabold transition flex items-center justify-center gap-2 text-base">
                                        <HeartHandshake className="w-5 h-5" /> Join Volunteers
                                    </button>
                                </Link>
                                <Link href="/Pages/request">
                                    <button className="w-full sm:w-auto px-8 py-4 text-neutral-400 hover:text-white transition font-bold flex items-center justify-center gap-1.5 text-base">
                                        Request Food <ArrowRight className="w-4 h-4" />
                                    </button>
                                </Link>
                            </div>
                        </div>

                        <div className="lg:w-80 border-t lg:border-t-0 lg:border-l border-white/10 p-10 md:p-12 flex flex-col justify-between gap-8">
                            <p className="text-neutral-400 text-xs font-bold uppercase tracking-widest">Our Impact So Far</p>

                            <div className="space-y-6">
                                {QUICK_STATS.map((stat, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-emerald-400 border border-white/10">
                                            {stat.icon}
                                        </div>
                                        <div>
                                            <p className="text-2xl font-black text-white leading-none">{stat.value}</p>
                                            <p className="text-xs font-semibold text-neutral-500 mt-0.5">{stat.label}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                                <p className="text-white font-bold text-sm mb-1">🌿 100% Non-Profit</p>
                                <p className="text-neutral-500 text-xs leading-relaxed">Every resource goes toward operations. Zero profit. Zero advertising. Just food redistribution.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
