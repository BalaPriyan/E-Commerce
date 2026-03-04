"use client";

import React, { useState } from "react";
import { Navigation } from "../SustainabilityLanding/components/Navigation";
import { FooterSection } from "../SustainabilityLanding/components/FooterSection";
import { PackageOpen, Building2, Phone, User, MapPin, Users, CheckCircle2 } from "lucide-react";

const BENEFITS = [
    { title: "Verified Organizations Welcome", desc: "Shelters, orphanages, care homes, NGOs, street outreach programs.", bg: "bg-emerald-400" },
    { title: "Flexible Quantities", desc: "Whether you need for 5 or 500, we'll match what's available.", bg: "bg-blue-400" },
    { title: "Regular Schedules", desc: "Set up recurring requests for daily or weekly deliveries.", bg: "bg-yellow-400" },
];

export default function RequestPage() {
    const [submitted, setSubmitted] = useState(false);

    if (submitted) {
        return (
            <main className="min-h-screen bg-white flex flex-col">
                <Navigation />
                <div className="flex-1 flex items-center justify-center px-4 py-40">
                    <div className="text-center max-w-md">
                        <div className="flex justify-center mb-6">
                            <div className="w-20 h-20 bg-emerald-400 rounded-full border-4 border-white shadow-xl flex items-center justify-center">
                                <CheckCircle2 className="w-10 h-10 text-neutral-900" />
                            </div>
                        </div>
                        <h2 className="text-3xl font-extrabold text-neutral-900 mb-4">Request Received!</h2>
                        <p className="text-neutral-500 font-medium leading-relaxed mb-8">We'll match your request with available donations and have a volunteer coordinating delivery or pickup soon.</p>
                        <button onClick={() => setSubmitted(false)} className="bg-neutral-900 text-white rounded-full px-8 py-3 font-bold hover:bg-neutral-800 transition text-sm">
                            Submit Another Request
                        </button>
                    </div>
                </div>
                <FooterSection />
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-white">
            <Navigation />

            <section className="relative pt-40 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute top-0 right-0 w-[480px] h-[480px] rounded-full bg-emerald-100/50 blur-[120px] -z-10 animate-float-slow pointer-events-none" />
                <div className="absolute bottom-0 -left-20 w-[360px] h-[360px] rounded-full bg-blue-100/40 blur-[100px] -z-10 animate-float-medium pointer-events-none" />

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    <div className="space-y-8">
                        <div>
                            <div className="inline-flex items-center gap-2 glass border border-emerald-200/50 text-emerald-800 px-4 py-2 rounded-full text-sm font-bold mb-6 shadow-sm">
                                <PackageOpen className="w-4 h-4" /> Request Food
                            </div>
                            <h1 className="text-5xl font-extrabold tracking-tight text-neutral-900 leading-[1.05] mb-4">
                                Food for those<br />
                                <span className="text-emerald-600">who need it most.</span>
                            </h1>
                            <p className="text-neutral-500 font-medium text-lg leading-relaxed">
                                Are you running a shelter, orphanage, old-age home, or community kitchen? Submit a food request and we'll coordinate a delivery from nearby donors.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 gap-4">
                            {BENEFITS.map((f, i) => (
                                <div key={i} className={`${f.bg} rounded-[2rem] p-5 border-4 border-white shadow-md relative overflow-hidden group hover:-translate-y-0.5 transition-all duration-300`}>
                                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/15 rounded-full group-hover:scale-125 transition-transform duration-500" />
                                    <p className="font-extrabold text-neutral-900">{f.title}</p>
                                    <p className="text-sm text-neutral-800/70 font-medium mt-1">{f.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white rounded-[2.5rem] border border-neutral-100 shadow-xl p-8">
                        <h2 className="text-2xl font-extrabold text-neutral-900 mb-6">Food Request Form</h2>
                        <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-neutral-600 flex items-center gap-1.5"><User className="w-3.5 h-3.5" /> Contact Name</label>
                                    <input type="text" placeholder="Your Name" className="w-full bg-neutral-50 border border-neutral-200 text-neutral-900 text-sm rounded-2xl px-4 py-3 outline-none focus:border-emerald-500 focus:bg-white transition font-medium" required />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-neutral-600 flex items-center gap-1.5"><Phone className="w-3.5 h-3.5" /> Phone Number</label>
                                    <input type="tel" placeholder="+91 98765 43210" className="w-full bg-neutral-50 border border-neutral-200 text-neutral-900 text-sm rounded-2xl px-4 py-3 outline-none focus:border-emerald-500 focus:bg-white transition font-medium" required />
                                </div>
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-neutral-600 flex items-center gap-1.5"><Building2 className="w-3.5 h-3.5" /> Organization Name</label>
                                <input type="text" placeholder="e.g. Sunshine Children's Home" className="w-full bg-neutral-50 border border-neutral-200 text-neutral-900 text-sm rounded-2xl px-4 py-3 outline-none focus:border-emerald-500 focus:bg-white transition font-medium" required />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-neutral-600 flex items-center gap-1.5"><Building2 className="w-3.5 h-3.5" /> Organization Type</label>
                                <select className="w-full bg-neutral-50 border border-neutral-200 text-neutral-900 text-sm rounded-2xl px-4 py-3 outline-none focus:border-emerald-500 focus:bg-white transition font-medium appearance-none">
                                    <option value="">Select Type</option>
                                    <option>Orphanage / Children's Home</option>
                                    <option>Night Shelter</option>
                                    <option>Old Age Home</option>
                                    <option>Community Kitchen</option>
                                    <option>Street Outreach Program</option>
                                    <option>Other NGO</option>
                                </select>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-neutral-600 flex items-center gap-1.5"><Users className="w-3.5 h-3.5" /> People to Feed</label>
                                    <input type="number" placeholder="Number of people" min={1} className="w-full bg-neutral-50 border border-neutral-200 text-neutral-900 text-sm rounded-2xl px-4 py-3 outline-none focus:border-emerald-500 focus:bg-white transition font-medium" required />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-neutral-600">Preferred Meal Time</label>
                                    <select className="w-full bg-neutral-50 border border-neutral-200 text-neutral-900 text-sm rounded-2xl px-4 py-3 outline-none focus:border-emerald-500 focus:bg-white transition font-medium appearance-none">
                                        <option>Morning (6am – 10am)</option>
                                        <option>Afternoon (11am – 2pm)</option>
                                        <option>Evening (5pm – 8pm)</option>
                                        <option>Flexible</option>
                                    </select>
                                </div>
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-neutral-600 flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> Delivery Address</label>
                                <textarea rows={3} placeholder="Full address with nearby landmark..." className="w-full bg-neutral-50 border border-neutral-200 text-neutral-900 text-sm rounded-2xl px-4 py-3 outline-none focus:border-emerald-500 focus:bg-white transition font-medium resize-none" required />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-neutral-600">Special Dietary Needs</label>
                                <textarea rows={2} placeholder="Allergies, vegetarian only, no pork, etc." className="w-full bg-neutral-50 border border-neutral-200 text-neutral-900 text-sm rounded-2xl px-4 py-3 outline-none focus:border-emerald-500 focus:bg-white transition font-medium resize-none" />
                            </div>
                            <button type="submit" className="w-full bg-neutral-900 hover:bg-neutral-800 text-white rounded-full py-4 text-sm font-bold transition shadow-xl hover:-translate-y-0.5 transform">
                                Submit Food Request
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <FooterSection />
        </main>
    );
}
