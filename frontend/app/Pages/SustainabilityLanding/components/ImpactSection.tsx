"use client";

import React from "react";
import { TrendingUp, HandPlatter, Users, MapPin, Leaf } from "lucide-react";
import Link from "next/link";

const STATS = [
    { value: "600k+", label: "Meals Saved", icon: <HandPlatter className="w-5 h-5" />, color: "text-emerald-600", bg: "bg-emerald-100" },
    { value: "2,400+", label: "Food Donors", icon: <Leaf className="w-5 h-5" />, color: "text-yellow-600", bg: "bg-yellow-100" },
    { value: "1,800+", label: "Volunteers", icon: <Users className="w-5 h-5" />, color: "text-blue-600", bg: "bg-blue-100" },
    { value: "12", label: "Cities Served", icon: <MapPin className="w-5 h-5" />, color: "text-orange-600", bg: "bg-orange-100" },
];

const BARS = [
    { label: "Meals Saved This Month", value: 82, color: "bg-emerald-500" },
    { label: "Volunteer Pickups Completed", value: 67, color: "bg-blue-500" },
    { label: "Donor Listings Fulfilled", value: 91, color: "bg-yellow-500" },
    { label: "Community Reach Growth", value: 54, color: "bg-orange-500" },
];

export function ImpactSection() {
    return (
        <section id="impact" className="py-24 bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[400px] rounded-full bg-yellow-50/80 blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
                    <div>
                        <div className="inline-flex items-center gap-2 bg-emerald-100 border border-emerald-200 text-emerald-800 px-3 py-1.5 rounded-full text-xs font-bold mb-4">
                            <TrendingUp className="w-3.5 h-3.5" /> Live Dashboard
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight leading-none">
                            Our Living<br />
                            <span className="text-emerald-600">Impact Tracker</span>
                        </h2>
                    </div>
                    <p className="text-neutral-500 font-medium max-w-xs leading-relaxed">
                        Every number below represents a real meal saved, a volunteer's effort, or a family fed.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    <div className="grid grid-cols-2 gap-4">
                        {STATS.map((s, i) => (
                            <div key={i} className={`rounded-[2rem] p-7 border-4 border-white shadow-md relative overflow-hidden group hover:-translate-y-1.5 hover:shadow-xl transition-all duration-400 ${["bg-emerald-400", "bg-yellow-400", "bg-blue-400", "bg-orange-400"][i]}`}>
                                <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/15 rounded-full group-hover:scale-125 transition-transform duration-500" />
                                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/10 rounded-full" />
                                <div className="bg-white/30 backdrop-blur-sm p-2.5 rounded-xl inline-flex mb-4">
                                    {s.icon}
                                </div>
                                <p className="text-4xl font-black text-neutral-900 leading-none mb-1">{s.value}</p>
                                <p className="text-sm font-bold text-neutral-800">{s.label}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-neutral-50 rounded-[2rem] p-8 border border-neutral-100 flex flex-col justify-between gap-6">
                        <div>
                            <p className="text-xs font-black text-neutral-400 uppercase tracking-widest mb-6">Monthly Progress</p>
                            <div className="space-y-6">
                                {BARS.map((bar, i) => (
                                    <div key={i}>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-sm font-bold text-neutral-700">{bar.label}</span>
                                            <span className="text-sm font-black text-neutral-900">{bar.value}%</span>
                                        </div>
                                        <div className="h-2.5 bg-neutral-200 rounded-full overflow-hidden">
                                            <div className={`h-2.5 ${bar.color} rounded-full`} style={{ width: `${bar.value}%` }} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="border-t border-neutral-200 pt-5 flex items-center justify-between">
                            <p className="text-sm font-semibold text-neutral-500">Updated daily from live data</p>
                            <Link href="/Pages/impact">
                                <button className="text-sm font-bold text-emerald-700 hover:text-emerald-900 flex items-center gap-1 transition">
                                    Full Report →
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
