"use client";

import React from "react";
import Link from "next/link";
import { Leaf, Twitter, Instagram, Github, ArrowRight, Mail, Phone } from "lucide-react";

const PLATFORM_LINKS = [
    { label: "About FoodForNeed", href: "/Pages/about" },
    { label: "How We Work", href: "/#how-it-works" },
    { label: "Live Donations Map", href: "/Pages/map" },
    { label: "Impact Dashboard", href: "/Pages/impact" },
];

const GET_INVOLVED_LINKS = [
    { label: "Donate Food", href: "/Pages/donate" },
    { label: "Request Food", href: "/Pages/request" },
    { label: "Volunteer", href: "/Pages/volunteer" },
    { label: "Who We Serve", href: "/#who-we-serve" },
];

export function FooterSection() {
    return (
        <footer className="bg-neutral-950 pt-20 pb-10 w-full text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-5">
                            <div className="bg-emerald-500/20 p-2.5 rounded-full text-emerald-400">
                                <Leaf className="w-6 h-6" />
                            </div>
                            <span className="font-extrabold text-2xl tracking-tight text-white">FoodForNeed</span>
                        </div>
                        <p className="text-neutral-400 text-sm leading-relaxed mb-6 font-medium">
                            A 100% non-profit platform connecting food surplus with community need — at zero cost, run entirely by volunteers.
                        </p>
                        <div className="flex gap-3">
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white flex items-center justify-center transition border border-white/8">
                                <Twitter className="w-4 h-4" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white flex items-center justify-center transition border border-white/8">
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white flex items-center justify-center transition border border-white/8">
                                <Github className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-sm text-white mb-5 uppercase tracking-widest">Platform</h4>
                        <ul className="space-y-3">
                            {PLATFORM_LINKS.map(l => (
                                <li key={l.label}>
                                    <Link href={l.href} className="text-neutral-400 hover:text-white transition font-medium text-sm">
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-sm text-white mb-5 uppercase tracking-widest">Get Involved</h4>
                        <ul className="space-y-3">
                            {GET_INVOLVED_LINKS.map(l => (
                                <li key={l.label}>
                                    <Link href={l.href} className="text-neutral-400 hover:text-white transition font-medium text-sm">
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-sm text-white mb-5 uppercase tracking-widest">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-neutral-400 text-sm font-medium">
                                <Mail className="w-4 h-4 shrink-0 mt-0.5 text-emerald-500" />
                                <a href="mailto:hello@foodforneed.org" className="hover:text-white transition">
                                    hello@foodforneed.org
                                </a>
                            </li>
                            <li className="flex items-start gap-3 text-neutral-400 text-sm font-medium">
                                <Phone className="w-4 h-4 shrink-0 mt-0.5 text-emerald-500" />
                                <span>+91 00000 00000</span>
                            </li>
                        </ul>

                        <div className="mt-8">
                            <p className="text-xs font-bold text-neutral-500 mb-3 uppercase tracking-wider">Monthly Updates</p>
                            <div className="bg-white/5 border border-white/10 rounded-full overflow-hidden flex items-center p-1">
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    className="bg-transparent border-none text-white px-4 outline-none w-full text-sm placeholder:text-neutral-600 font-medium"
                                />
                                <button className="bg-emerald-600 hover:bg-emerald-500 text-white rounded-full p-2.5 transition shrink-0">
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/8 text-xs font-medium text-neutral-600">
                    <p>© 2026 FoodForNeed. All rights reserved. Non-profit · Zero advertising · Community powered.</p>
                    <div className="flex gap-6">
                        <Link href="/Pages/privacy" className="hover:text-white transition">Privacy Policy</Link>
                        <Link href="/Pages/terms" className="hover:text-white transition">Terms of Service</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}
