import type { Metadata } from "next";
import React from "react";
import { Navigation } from "../SustainabilityLanding/components/Navigation";
import { FooterSection } from "../SustainabilityLanding/components/FooterSection";
import { MapPin, Clock, Package, Filter } from "lucide-react";

export const metadata: Metadata = {
    title: "Live Food Map",
    description: "View real-time available food donations near you. Find surplus food ready for volunteer pickup from restaurants, farms, and households.",
};

const MOCK_PINS = [
    { id: 1, type: "Produce", location: "MG Road, Bengaluru", time: "Ready by 2 PM", color: "bg-yellow-400", x: "22%", y: "38%" },
    { id: 2, type: "Bakery", location: "Koramangala, Bengaluru", time: "Ready by 12 PM", color: "bg-orange-400", x: "55%", y: "55%" },
    { id: 3, type: "Meals", location: "Indiranagar, Bengaluru", time: "Ready by 6 PM", color: "bg-emerald-500", x: "72%", y: "30%" },
    { id: 4, type: "Groceries", location: "HSR Layout, Bengaluru", time: "Ready by 4 PM", color: "bg-blue-400", x: "40%", y: "68%" },
    { id: 5, type: "Produce", location: "Jayanagar, Bengaluru", time: "Ready by 1 PM", color: "bg-yellow-400", x: "62%", y: "72%" },
];

export default function MapPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navigation />

            <section className="relative pt-40 pb-6 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute top-0 left-0 w-120 h-120 rounded-full bg-emerald-100/50 blur-[120px] -z-10 animate-float-slow pointer-events-none" />
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
                        <div>
                            <div className="inline-flex items-center gap-2 glass border border-emerald-200/50 text-emerald-800 px-4 py-2 rounded-full text-sm font-bold mb-4 shadow-sm">
                                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                <MapPin className="w-4 h-4" /> Live Map
                            </div>
                            <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900">Live Food Availability</h1>
                            <p className="text-neutral-500 font-medium mt-2">Real-time view of surplus food ready for pickup in your city.</p>
                        </div>
                        <div className="flex items-center gap-3 flex-wrap">
                            {["All Types", "Produce", "Bakery", "Meals", "Groceries"].map(f => (
                                <button key={f} className={`px-4 py-2 rounded-full text-sm font-bold transition border ${f === "All Types" ? "bg-neutral-900 text-white border-neutral-900" : "bg-white text-neutral-600 border-neutral-200 hover:border-neutral-400"}`}>{f}</button>
                            ))}
                            <button className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold border border-neutral-200 hover:border-neutral-400 transition text-neutral-600">
                                <Filter className="w-4 h-4" /> Filters
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-20">
                <div className="flex flex-col lg:flex-row gap-6">

                    <div className="flex-1 relative bg-emerald-50 rounded-[2.5rem] overflow-hidden border border-emerald-100 shadow-sm min-h-125">
                        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(to right, #6b7280 1px, transparent 1px), linear-gradient(to bottom, #6b7280 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
                        <div className="absolute inset-0">
                            <div className="absolute top-[40%] left-0 right-0 h-0.5 bg-white opacity-60" />
                            <div className="absolute top-[65%] left-0 right-0 h-0.5 bg-white opacity-40" />
                            <div className="absolute left-[35%] top-0 bottom-0 w-0.5 bg-white opacity-60" />
                            <div className="absolute left-[68%] top-0 bottom-0 w-0.5 bg-white opacity-40" />
                        </div>
                        <p className="absolute top-5 left-1/2 -translate-x-1/2 text-xs font-bold text-neutral-400 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-white/60">
                            Bengaluru, Karnataka — Interactive map coming soon
                        </p>
                        {MOCK_PINS.map(pin => (
                            <div key={pin.id} className="absolute group" style={{ left: pin.x, top: pin.y }}>
                                <div className={`w-10 h-10 ${pin.color} rounded-full border-4 border-white shadow-lg flex items-center justify-center cursor-pointer hover:scale-125 transition-transform`}>
                                    <Package className="w-4 h-4 text-white" />
                                </div>
                                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 glass rounded-2xl px-4 py-3 shadow-xl min-w-40 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-10">
                                    <p className="font-extrabold text-neutral-900 text-sm">{pin.type}</p>
                                    <p className="text-xs text-neutral-500 font-medium mt-0.5">{pin.location}</p>
                                    <p className="text-xs text-emerald-600 font-bold mt-1 flex items-center gap-1"><Clock className="w-3 h-3" />{pin.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="w-full lg:w-80 space-y-3">
                        <h3 className="font-extrabold text-neutral-900 text-lg px-1">5 Active Donations</h3>
                        {MOCK_PINS.map(pin => (
                            <div key={pin.id} className="bg-white rounded-2xl border border-neutral-100 p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer">
                                <div className="flex items-start gap-3">
                                    <div className={`w-3 h-3 rounded-full mt-1.5 shrink-0 ${pin.color}`} />
                                    <div>
                                        <p className="font-extrabold text-neutral-900">{pin.type}</p>
                                        <p className="text-xs text-neutral-500 font-medium mt-0.5 flex items-center gap-1"><MapPin className="w-3 h-3" />{pin.location}</p>
                                        <p className="text-xs text-emerald-600 font-bold mt-1 flex items-center gap-1"><Clock className="w-3 h-3" />{pin.time}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <FooterSection />
        </main>
    );
}
