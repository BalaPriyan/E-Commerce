"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, HeartHandshake, PackageOpen, HandPlatter, Leaf, Star } from "lucide-react";
import { DonateModal } from "./DonateModal";

const PARTNERS = ["Green Basket", "FoodBridge", "Sunrise Farms", "CityBakers Co.", "HarvestHub", "PureFoods", "MealConnect", "Local Roots"];

export function HeroSection() {
    return (
        <section className="relative overflow-hidden pt-32 pb-20 px-4 sm:px-6 lg:px-8">

            <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
                <div className="absolute top-20 -left-20 w-120 h-120 rounded-full bg-emerald-200/50 blur-[100px] animate-float-slow" />
                <div className="absolute bottom-10 right-0 w-100 h-100 rounded-full bg-yellow-200/40 blur-[100px] animate-float-medium" style={{ animationDelay: "2s" }} />
                <div className="absolute top-1/3 left-1/3 w-[256px] h-64 rounded-full bg-blue-100/30 blur-[80px] animate-pulse-glow" />
            </div>

            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">

                    <div className="flex-1 space-y-8 max-w-2xl text-center lg:text-left animate-slide-up">
                        <div className="inline-flex items-center gap-2 glass border border-emerald-200/50 text-emerald-800 px-4 py-2 rounded-full text-sm font-bold shadow-sm">
                            <Leaf className="w-4 h-4 text-emerald-600" />
                            Non-Profit · Free · Community Powered
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-neutral-900 leading-[1.05]">
                            Reduce Food Waste. <br />
                            <span className="text-emerald-600">Feed People</span> <br />
                            in Need. <ArrowRight className="inline-block w-8 h-8 lg:w-12 lg:h-12 text-neutral-400 -rotate-45" />
                        </h1>

                        <p className="text-neutral-500 text-lg font-medium leading-relaxed max-w-xl">
                            We collect surplus food from restaurants, farms, and households — and deliver it directly to orphanages, shelters, and people on the streets.
                        </p>

                        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-3">
                            <DonateModal>
                                <button className="w-full sm:w-auto px-6 py-3.5 bg-neutral-900 hover:bg-neutral-800 text-white rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform flex items-center justify-center gap-2">
                                    <HandPlatter className="w-4 h-4" /> Donate Food
                                </button>
                            </DonateModal>
                            <Link href="/Pages/request">
                                <button className="w-full sm:w-auto px-6 py-3.5 bg-emerald-100 hover:bg-emerald-200 text-emerald-900 rounded-full font-bold transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5 transform">
                                    <PackageOpen className="w-4 h-4" /> Request Food
                                </button>
                            </Link>
                            <Link href="/Pages/volunteer">
                                <button className="w-full sm:w-auto px-6 py-3.5 bg-white border border-neutral-200 hover:bg-neutral-50 text-neutral-800 rounded-full font-bold transition-all flex items-center justify-center gap-2 shadow-sm hover:-translate-y-0.5 transform">
                                    <HeartHandshake className="w-4 h-4" /> Become Volunteer
                                </button>
                            </Link>
                        </div>

                        <div className="flex items-center justify-center lg:justify-start gap-3 pt-2">
                            <div className="flex -space-x-2">
                                {["/images/avatar_1.png", "/images/avatar_1.png", "/images/avatar_1.png"].map((_, i) => (
                                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-emerald-200 overflow-hidden">
                                        <div className={`w-full h-full ${["bg-emerald-400", "bg-orange-400", "bg-blue-400"][i]}`} />
                                    </div>
                                ))}
                            </div>
                            <div className="flex items-center gap-1 text-sm font-bold text-neutral-700 glass px-3 py-1.5 rounded-full">
                                <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                                <span>1,800+ volunteers joined</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 mt-12 lg:mt-0">

                        <div className="relative aspect-3/4 sm:aspect-auto sm:h-80 rounded-[2rem] overflow-hidden bg-yellow-400 group glow-yellow">
                            <Image src="/images/donation_3.png" alt="Fruit" fill className="object-cover opacity-90 mix-blend-multiply group-hover:scale-110 transition duration-700 ease-out" />
                            <div className="absolute top-4 left-4 w-8 h-8 bg-white/50 backdrop-blur-sm rounded-full flex items-center justify-center">
                                <div className="w-2 h-2 rounded-full border border-neutral-900" />
                            </div>
                            <div className="absolute top-4 right-4 bg-white/25 backdrop-blur-md border border-white/50 px-3 py-1 rounded-full text-xs font-bold text-neutral-900">Produce</div>
                            <div className="absolute bottom-4 left-4 right-4 glass p-3 rounded-2xl translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <p className="text-sm font-bold text-neutral-900 leading-tight">Fresh organic local fruits</p>
                            </div>
                        </div>

                        <div className="relative aspect-3/4 sm:aspect-auto sm:h-80 rounded-[2rem] overflow-hidden bg-orange-400 group sm:-mt-8">
                            <Image src="/images/donation_2.png" alt="Bakery" fill className="object-cover opacity-90 mix-blend-multiply group-hover:scale-110 transition duration-700 ease-out" />
                            <div className="absolute top-4 left-4 w-8 h-8 bg-white/50 backdrop-blur-sm rounded-full flex items-center justify-center text-neutral-900">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                            </div>
                            <div className="absolute top-4 right-4 bg-white/25 backdrop-blur-md border border-white/50 px-3 py-1 rounded-full text-xs font-bold text-neutral-900">Bakery</div>
                            <div className="absolute bottom-4 left-4 right-4 glass p-3 rounded-2xl translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <p className="text-sm font-bold text-neutral-900 leading-tight">Artisan bread daily surplus</p>
                            </div>
                        </div>

                        <div className="relative aspect-3/4 sm:aspect-auto sm:h-80 rounded-[2rem] overflow-hidden bg-emerald-400 group sm:mt-8 glow-emerald">
                            <Image src="/images/donation_1.png" alt="Vegetables" fill className="object-cover opacity-90 mix-blend-multiply group-hover:scale-110 transition duration-700 ease-out" />
                            <div className="absolute top-4 left-4 w-8 h-8 bg-white/50 backdrop-blur-sm rounded-full flex items-center justify-center">
                                <div className="w-3 h-3 border-2 border-neutral-900 rounded-sm" />
                            </div>
                            <div className="absolute top-4 right-4 bg-white/25 backdrop-blur-md border border-white/50 px-3 py-1 rounded-full text-xs font-bold text-neutral-900">Veggies</div>
                            <div className="absolute bottom-4 left-4 right-4 glass p-3 rounded-2xl translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <p className="text-sm font-bold text-neutral-900 leading-tight">Farm-fresh greens & roots</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="mt-20 border-t border-neutral-100 pt-8 overflow-hidden">
                    <p className="text-center text-xs font-bold text-neutral-400 uppercase tracking-widest mb-5">Trusted by local businesses & organizations</p>
                    <div className="flex gap-12 w-max animate-marquee">
                        {[...PARTNERS, ...PARTNERS].map((p, i) => (
                            <span key={i} className="text-sm font-extrabold text-neutral-400 whitespace-nowrap hover:text-neutral-600 transition">{p}</span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
