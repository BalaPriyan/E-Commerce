"use client";

import React, { useState } from "react";
import { Navigation } from "../SustainabilityLanding/components/Navigation";
import { FooterSection } from "../SustainabilityLanding/components/FooterSection";
import { HeartHandshake, Car, ClipboardList, Package, Phone, User, MapPin, CheckCircle2 } from "lucide-react";

const ROLES = [
    { icon: <Car className="w-7 h-7" />, title: "Food Driver", desc: "Pick up surplus food from donors and deliver it to shelters and distribution points.", tag: "Most Needed", bg: "bg-emerald-400" },
    { icon: <ClipboardList className="w-7 h-7" />, title: "Coordinator", desc: "Manage pickups, communicate with donors and recipients, ensure timely operations.", tag: "Remote Friendly", bg: "bg-blue-400" },
    { icon: <Package className="w-7 h-7" />, title: "Food Sorter", desc: "Help sort, pack, and label incoming food donations at collection hubs.", tag: "On-Site", bg: "bg-yellow-400" },
];

export default function VolunteerPage() {
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
                        <h2 className="text-3xl font-extrabold text-neutral-900 mb-4">Welcome to the Team!</h2>
                        <p className="text-neutral-500 font-medium leading-relaxed mb-8">We'll reach out within 24 hours to confirm your onboarding. Thank you for choosing to make a difference.</p>
                        <button onClick={() => setSubmitted(false)} className="bg-neutral-900 text-white rounded-full px-8 py-3 font-bold hover:bg-neutral-800 transition text-sm">Go Back</button>
                    </div>
                </div>
                <FooterSection />
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-white">
            <Navigation />
            <section className="relative pt-40 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute top-0 left-0 w-[480px] h-[480px] rounded-full bg-emerald-100/50 blur-[120px] -z-10 animate-float-slow pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-[360px] h-[360px] rounded-full bg-yellow-100/40 blur-[100px] -z-10 animate-float-medium pointer-events-none" />
                <div className="max-w-7xl mx-auto">
                    <div className="max-w-3xl mb-16">
                        <div className="inline-flex items-center gap-2 glass border border-emerald-200/50 text-emerald-800 px-4 py-2 rounded-full text-sm font-bold mb-6 shadow-sm">
                            <HeartHandshake className="w-4 h-4" /> Volunteer
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-neutral-900 leading-[1.05] mb-6">
                            Your time feeds<br />
                            <span className="text-emerald-600">a life.</span>
                        </h1>
                        <p className="text-neutral-500 font-medium text-xl leading-relaxed">
                            Join our growing network of community volunteers. No experience needed — just a willingness to help. Choose your role and set your own schedule.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                        {ROLES.map((role, i) => (
                            <div key={i} className={`${role.bg} rounded-[2rem] p-8 border-4 border-white shadow-md group hover:-translate-y-2 hover:shadow-xl transition-all duration-400 relative overflow-hidden`}>
                                <div className="absolute -top-8 -right-8 w-28 h-28 bg-white/15 rounded-full group-hover:scale-125 transition-transform duration-500" />
                                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/10 rounded-full" />
                                <div className="bg-white/30 backdrop-blur-sm p-3 rounded-2xl inline-flex mb-4">{role.icon}</div>
                                <h3 className="text-xl font-extrabold text-neutral-900 mb-2">{role.title}</h3>
                                <span className="text-xs font-bold bg-white/40 px-3 py-1 rounded-full text-neutral-900 inline-block mb-3">{role.tag}</span>
                                <p className="text-neutral-800/70 font-medium leading-relaxed text-sm">{role.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="max-w-2xl mx-auto bg-white rounded-[2.5rem] border border-neutral-100 shadow-xl p-10">
                        <h2 className="text-2xl font-extrabold text-neutral-900 mb-6">Volunteer Application</h2>
                        <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-neutral-600 flex items-center gap-1.5"><User className="w-3.5 h-3.5" /> Full Name</label>
                                    <input type="text" placeholder="Your Name" className="w-full bg-neutral-50 border border-neutral-200 text-neutral-900 text-sm rounded-2xl px-4 py-3 outline-none focus:border-emerald-500 focus:bg-white transition font-medium" required />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-neutral-600 flex items-center gap-1.5"><Phone className="w-3.5 h-3.5" /> Phone</label>
                                    <input type="tel" placeholder="+91 98765 43210" className="w-full bg-neutral-50 border border-neutral-200 text-neutral-900 text-sm rounded-2xl px-4 py-3 outline-none focus:border-emerald-500 focus:bg-white transition font-medium" required />
                                </div>
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-neutral-600">Preferred Role</label>
                                <select className="w-full bg-neutral-50 border border-neutral-200 text-neutral-900 text-sm rounded-2xl px-4 py-3 outline-none focus:border-emerald-500 focus:bg-white transition font-medium appearance-none">
                                    <option value="">Select a Role</option>
                                    <option>Food Driver</option>
                                    <option>Coordinator</option>
                                    <option>Food Sorter</option>
                                    <option>Open to Any</option>
                                </select>
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-neutral-600">Availability</label>
                                <div className="grid grid-cols-3 gap-3">
                                    {["Weekday Mornings", "Weekday Evenings", "Weekends"].map(d => (
                                        <label key={d} className="flex items-center gap-2 bg-neutral-50 border border-neutral-200 rounded-2xl px-4 py-3 cursor-pointer hover:border-emerald-400 transition">
                                            <input type="checkbox" className="accent-emerald-600 w-4 h-4" />
                                            <span className="text-sm font-medium text-neutral-700">{d}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-neutral-600 flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> Your Area / Locality</label>
                                <input type="text" placeholder="City, Area / Neighbourhood" className="w-full bg-neutral-50 border border-neutral-200 text-neutral-900 text-sm rounded-2xl px-4 py-3 outline-none focus:border-emerald-500 focus:bg-white transition font-medium" required />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-neutral-600">Why do you want to volunteer?</label>
                                <textarea rows={3} placeholder="Tell us a bit about yourself..." className="w-full bg-neutral-50 border border-neutral-200 text-neutral-900 text-sm rounded-2xl px-4 py-3 outline-none focus:border-emerald-500 focus:bg-white transition font-medium resize-none" />
                            </div>
                            <button type="submit" className="w-full bg-neutral-900 hover:bg-neutral-800 text-white rounded-full py-4 text-sm font-bold transition shadow-xl hover:-translate-y-0.5 transform">
                                Join as Volunteer
                            </button>
                        </form>
                    </div>
                </div>
            </section>
            <FooterSection />
        </main>
    );
}
