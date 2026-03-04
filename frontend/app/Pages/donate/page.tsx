"use client";

import React, { useState } from "react";
import { Navigation } from "../SustainabilityLanding/components/Navigation";
import { FooterSection } from "../SustainabilityLanding/components/FooterSection";
import { HandPlatter, MapPin, CalendarClock, Package, Phone, User, CheckCircle2 } from "lucide-react";

const BENEFITS = [
    { title: "Fast Response", desc: "A volunteer confirms within the hour." },
    { title: "Zero Cost", desc: "Pickup is always free. Always." },
    { title: "Food Goes Far", desc: "Directly to orphanages, shelters & streets." },
];

export default function DonatePage() {
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
                        <h2 className="text-3xl font-extrabold text-neutral-900 mb-4">Thank You for Donating!</h2>
                        <p className="text-neutral-500 font-medium leading-relaxed mb-8">A volunteer in your area will reach out to confirm the pickup. Your generosity feeds real people today.</p>
                        <button onClick={() => setSubmitted(false)} className="bg-neutral-900 text-white rounded-full px-8 py-3 font-bold hover:bg-neutral-800 transition text-sm">
                            Submit Another Donation
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
                <div className="absolute top-0 -left-20 w-120 h-120 rounded-full bg-emerald-100/50 blur-[120px] -z-10 animate-float-slow pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-90 h-90 rounded-full bg-yellow-100/40 blur-[100px] -z-10 animate-float-medium pointer-events-none" />

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    <div className="space-y-8">
                        <div>
                            <div className="inline-flex items-center gap-2 glass border border-emerald-200/50 text-emerald-800 px-4 py-2 rounded-full text-sm font-bold mb-6 shadow-sm">
                                <HandPlatter className="w-4 h-4" /> Donate Food
                            </div>
                            <h1 className="text-5xl font-extrabold tracking-tight text-neutral-900 leading-[1.05] mb-4">
                                Your surplus feeds<br />
                                <span className="text-emerald-600">someone's tomorrow.</span>
                            </h1>
                            <p className="text-neutral-500 font-medium text-lg leading-relaxed">
                                Have extra food from a party, restaurant, farm, or kitchen? Tell us what you have, when it's ready, and where — our volunteers handle the rest.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                            {BENEFITS.map((f, i) => (
                                <div key={i} className={`flex items-start gap-4 rounded-[2rem] p-5 border-4 border-white shadow-md relative overflow-hidden group hover:-translate-y-0.5 transition-all duration-300 ${["bg-emerald-400", "bg-blue-400", "bg-yellow-400"][i]}`}>
                                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/15 rounded-full group-hover:scale-125 transition-transform duration-500" />
                                    <div className="bg-white/30 backdrop-blur-sm w-2.5 h-2.5 rounded-full mt-1.5 shrink-0" />
                                    <div>
                                        <p className="font-extrabold text-neutral-900">{f.title}</p>
                                        <p className="text-sm text-neutral-800/70 font-medium">{f.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white rounded-[2.5rem] border border-neutral-100 shadow-xl p-8">
                        <h2 className="text-2xl font-extrabold text-neutral-900 mb-6">Donation Details</h2>
                        <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-neutral-600 flex items-center gap-1.5"><User className="w-3.5 h-3.5" /> Full Name</label>
                                    <input type="text" placeholder="John Doe" className="w-full bg-neutral-50 border border-neutral-200 text-neutral-900 text-sm rounded-2xl px-4 py-3 outline-none focus:border-emerald-500 focus:bg-white transition font-medium" required />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-neutral-600 flex items-center gap-1.5"><Phone className="w-3.5 h-3.5" /> Phone Number</label>
                                    <input type="tel" placeholder="+91 98765 43210" className="w-full bg-neutral-50 border border-neutral-200 text-neutral-900 text-sm rounded-2xl px-4 py-3 outline-none focus:border-emerald-500 focus:bg-white transition font-medium" required />
                                </div>
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-neutral-600 flex items-center gap-1.5"><Package className="w-3.5 h-3.5" /> Food Details</label>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <select className="w-full bg-neutral-50 border border-neutral-200 text-neutral-900 text-sm rounded-2xl px-4 py-3 outline-none focus:border-emerald-500 focus:bg-white transition font-medium appearance-none">
                                        <option value="">Select Food Type</option>
                                        <option>Fresh Produce</option>
                                        <option>Bakery / Bread</option>
                                        <option>Prepared Meals</option>
                                        <option>Packaged Groceries</option>
                                        <option>Beverages</option>
                                        <option>Other</option>
                                    </select>
                                    <input type="text" placeholder="Quantity (e.g. 50 Meals)" className="w-full bg-neutral-50 border border-neutral-200 text-neutral-900 text-sm rounded-2xl px-4 py-3 outline-none focus:border-emerald-500 focus:bg-white transition font-medium" required />
                                </div>
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-neutral-600 flex items-center gap-1.5"><CalendarClock className="w-3.5 h-3.5" /> Pickup Window</label>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <div>
                                        <p className="text-xs text-neutral-400 mb-1 font-medium">Ready From</p>
                                        <input type="time" className="w-full bg-neutral-50 border border-neutral-200 text-neutral-900 text-sm rounded-2xl px-4 py-3 outline-none focus:border-emerald-500 focus:bg-white transition font-medium" required />
                                    </div>
                                    <div>
                                        <p className="text-xs text-neutral-400 mb-1 font-medium">Latest By</p>
                                        <input type="time" className="w-full bg-neutral-50 border border-neutral-200 text-neutral-900 text-sm rounded-2xl px-4 py-3 outline-none focus:border-emerald-500 focus:bg-white transition font-medium" required />
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-neutral-600 flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> Pickup Address</label>
                                <textarea rows={3} placeholder="Full address, building name, landmark..." className="w-full bg-neutral-50 border border-neutral-200 text-neutral-900 text-sm rounded-2xl px-4 py-3 outline-none focus:border-emerald-500 focus:bg-white transition font-medium resize-none" required />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-neutral-600">Additional Notes</label>
                                <textarea rows={2} placeholder="Allergies, storage requirements, anything else..." className="w-full bg-neutral-50 border border-neutral-200 text-neutral-900 text-sm rounded-2xl px-4 py-3 outline-none focus:border-emerald-500 focus:bg-white transition font-medium resize-none" />
                            </div>
                            <button type="submit" className="w-full bg-neutral-900 hover:bg-neutral-800 text-white rounded-full py-4 text-sm font-bold transition shadow-xl hover:-translate-y-0.5 transform">
                                Submit Donation
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <FooterSection />
        </main>
    );
}
