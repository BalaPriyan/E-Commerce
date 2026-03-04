"use client";

import React from "react";
import { Trash2, Clock, ShieldCheck, Leaf } from "lucide-react";

const FACTS = [
    {
        icon: <Trash2 className="w-7 h-7" />,
        stat: "1/3",
        label: "of global food is wasted",
        desc: "Every year, 1.3 billion tonnes of edible food goes to landfill while 800 million people go hungry.",
        color: "bg-rose-100 text-rose-600",
    },
    {
        icon: <Clock className="w-7 h-7" />,
        stat: "48h",
        label: "average food lifespan wasted",
        desc: "Freshly prepared food has a narrow window. Our platform ensures it moves in hours, not days.",
        color: "bg-amber-100 text-amber-600",
    },
    {
        icon: <ShieldCheck className="w-7 h-7" />,
        stat: "100%",
        label: "food quality verified",
        desc: "All donations are flagged for freshness before pickup. No unsafe food is ever distributed.",
        color: "bg-emerald-100 text-emerald-600",
    },
    {
        icon: <Leaf className="w-7 h-7" />,
        stat: "62%",
        label: "lower carbon per meal",
        desc: "Redistributing food instead of discarding it dramatically cuts carbon emissions per saved meal.",
        color: "bg-blue-100 text-blue-600",
    },
];

export function WhyItMattersSection() {
    return (
        <section className="py-24 bg-neutral-950 text-white relative overflow-hidden">
            {/* Ambient glows on dark bg */}
            <div className="absolute top-0 left-0 w-[500px] h-[400px] rounded-full bg-emerald-500/10 blur-[160px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[300px] rounded-full bg-yellow-500/8 blur-[140px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-14">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-bold mb-4 border border-white/10">
                        <Leaf className="w-4 h-4 text-emerald-400" />
                        Why It Matters
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4">
                        The crisis is real.<br />
                        <span className="text-emerald-400">The solution exists.</span>
                    </h2>
                    <p className="text-neutral-400 font-medium max-w-2xl mx-auto leading-relaxed">
                        Food waste and hunger exist side by side. Not because there isn't enough food — but because there's no bridge. We are that bridge.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {FACTS.map((f, i) => (
                        <div key={i} className="glass-dark rounded-[2rem] p-8 hover:bg-white/15 transition-colors group">
                            <div className={`inline-flex p-3.5 rounded-2xl ${f.color} mb-5 group-hover:scale-110 transition-transform`}>
                                {f.icon}
                            </div>
                            <p className="text-5xl font-black text-white mb-1">{f.stat}</p>
                            <p className="text-emerald-400 font-bold text-sm mb-3">{f.label}</p>
                            <p className="text-neutral-400 font-medium text-sm leading-relaxed">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
