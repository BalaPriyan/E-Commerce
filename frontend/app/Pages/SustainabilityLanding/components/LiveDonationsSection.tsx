"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin, Package, ArrowRight } from "lucide-react";

const DONATIONS = [
    { imageSrc: "/images/donation_1.png", foodName: "Rice Meals", qty: "40 Meals", location: "Trichy", pickupTime: "8 PM", tag: "Prepared", color: "bg-emerald-400" },
    { imageSrc: "/images/donation_2.png", foodName: "Bakery Surplus", qty: "15 Boxes", location: "Chennai", pickupTime: "7 PM", tag: "Bakery", color: "bg-orange-400" },
    { imageSrc: "/images/hero.png", foodName: "Mixed Groceries", qty: "50 kg", location: "Madurai", pickupTime: "6 PM", tag: "Groceries", color: "bg-blue-400" },
    { imageSrc: "/images/donation_3.png", foodName: "Fresh Produce", qty: "20 Boxes", location: "Coimbatore", pickupTime: "9 PM", tag: "Produce", color: "bg-yellow-400" },
];

function DonationCard({ data, featured = false }: { data: typeof DONATIONS[0], featured?: boolean }) {
    return (
        <div className={`relative rounded-[2rem] overflow-hidden group shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${featured ? "row-span-2" : "row-span-1"}`}>
            <div className={`relative w-full h-full min-h-[200px] ${featured ? "min-h-[420px]" : "min-h-[200px]"}`}>
                <Image
                    src={data.imageSrc}
                    alt={data.foodName}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/10 to-transparent" />

                <div className={`absolute top-4 left-4 ${data.color} px-3 py-1 rounded-full text-xs font-extrabold text-neutral-900`}>
                    {data.tag}
                </div>

                <div className="absolute top-4 right-4 glass px-3 py-1.5 rounded-full text-xs font-bold text-neutral-900 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" /> {data.pickupTime}
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-extrabold text-lg leading-tight mb-2 drop-shadow">{data.foodName}</p>
                    <div className="flex items-center gap-2 flex-wrap">
                        <span className="glass-dark text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1.5">
                            <Package className="w-3 h-3" /> {data.qty}
                        </span>
                        <span className="glass-dark text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1.5">
                            <MapPin className="w-3 h-3" /> {data.location}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function LiveDonationsSection() {
    return (
        <section id="map" className="py-24 bg-neutral-50 relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-[400px] h-[300px] rounded-full bg-emerald-50/80 blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header row */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
                    <div>
                        <div className="inline-flex items-center gap-2 bg-emerald-100 border border-emerald-200 text-emerald-800 px-3 py-1.5 rounded-full text-xs font-bold mb-4">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            Live Now
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight leading-none">
                            Live Donations<br />
                            <span className="text-emerald-600">Preview</span>
                        </h2>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-3">
                        <p className="text-neutral-500 font-medium text-sm max-w-xs text-right leading-relaxed">
                            Real-time surplus food waiting to be collected by volunteers right now.
                        </p>
                        <Link href="/Pages/map">
                            <button className="flex items-center gap-2 text-sm font-bold text-neutral-900 border border-neutral-200 hover:bg-neutral-100 px-5 py-2.5 rounded-full transition">
                                View Full Map <ArrowRight className="w-4 h-4" />
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4" style={{ gridTemplateRows: "220px 200px" }}>
                    <div className="col-span-1 row-span-2">
                        <DonationCard data={DONATIONS[0]} featured />
                    </div>
                    <div className="col-span-1 row-span-1">
                        <DonationCard data={DONATIONS[1]} />
                    </div>
                    <div className="col-span-2 row-span-1">
                        <DonationCard data={DONATIONS[2]} />
                    </div>
                    <div className="col-span-1 row-span-1">
                        <DonationCard data={DONATIONS[3]} />
                    </div>
                    <div className="col-span-1 row-span-1 bg-neutral-900 rounded-[2rem] p-6 flex flex-col justify-between">
                        <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center">
                            <Package className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <p className="text-white font-extrabold text-base mb-1">Have food to share?</p>
                            <p className="text-neutral-400 text-xs font-medium mb-3">Post a listing in under 2 minutes.</p>
                            <Link href="/Pages/donate">
                                <button className="text-xs font-bold text-emerald-400 flex items-center gap-1 hover:gap-2 transition-all">
                                    Post now <ArrowRight className="w-3.5 h-3.5" />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
