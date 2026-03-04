"use client";

import React from "react";
import { ArrowDownRight, Handshake, Truck, HeartHandshake } from "lucide-react";

const STEPS = [
    {
        number: "01",
        icon: <Handshake className="w-8 h-8" />,
        title: "Donor Posts Extra Food",
        desc: "Restaurants, events, farms, or households list available fresh surplus food on our platform — specifying food type, quantity, and their pickup window.",
        accent: "bg-emerald-400",
        light: "bg-emerald-50",
        border: "border-emerald-200",
        text: "text-emerald-700",
        align: "left",
    },
    {
        number: "02",
        icon: <Truck className="w-8 h-8" />,
        title: "Volunteer Collects It",
        desc: "Nearby verified volunteers are alerted instantly. They coordinate pickup directly with the donor — no middlemen, no delay.",
        accent: "bg-blue-400",
        light: "bg-blue-50",
        border: "border-blue-200",
        text: "text-blue-700",
        align: "right",
    },
    {
        number: "03",
        icon: <HeartHandshake className="w-8 h-8" />,
        title: "Food Reaches Those in Need",
        desc: "Collected food is delivered directly to orphanages, shelters, community kitchens, or distributed on the street — same day, whenever possible.",
        accent: "bg-yellow-400",
        light: "bg-yellow-50",
        border: "border-yellow-200",
        text: "text-yellow-700",
        align: "left",
    },
];

export function HowItWorksSection() {
    return (
        <section id="how-it-works" className="py-24 bg-neutral-50 relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-100 h-75 rounded-full bg-emerald-50/80 blur-[100px] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="mb-20 text-center">
                    <div className="inline-block bg-emerald-100 px-3 py-1.5 rounded-full text-xs font-bold text-emerald-800 mb-4 border border-emerald-200">
                        Our Process
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight leading-none mb-4">
                        How We Work
                    </h2>
                    <p className="text-neutral-500 font-medium text-base leading-relaxed max-w-2xl mx-auto">
                        A lean, three-step pipeline that moves food from surplus to plate — in hours, not days.
                    </p>
                </div>

                <div className="relative space-y-8">
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-linear-to-b from-emerald-200 via-blue-200 to-yellow-200" />

                    {STEPS.map((step, i) => {
                        const isRight = step.align === "right";
                        return (
                            <div key={i} className={`relative flex flex-col md:flex-row items-center gap-8 ${isRight ? "md:flex-row-reverse" : ""}`}>

                                <div className={`flex-1 ${isRight ? "md:text-right" : "md:text-left"}`}>
                                    <div className={`inline-flex items-center gap-2 ${step.light} ${step.border} border px-3 py-1.5 rounded-full text-xs font-black ${step.text} mb-3`}>
                                        Step {step.number}
                                    </div>
                                    <h3 className="text-2xl font-extrabold text-neutral-900 mb-3">{step.title}</h3>
                                    <p className="text-neutral-500 font-medium leading-relaxed max-w-sm">{step.desc}</p>
                                </div>

                                <div className="relative z-10 shrink-0">
                                    <div className={`w-20 h-20 ${step.accent} rounded-[1.75rem] flex items-center justify-center text-neutral-900 shadow-xl rotate-3 group-hover:rotate-0 transition-transform border-4 border-white`}>
                                        {step.icon}
                                    </div>
                                    <span className="absolute -bottom-2 -right-2 bg-neutral-900 text-white text-xs font-black w-7 h-7 rounded-full flex items-center justify-center shadow-md">
                                        {i + 1}
                                    </span>
                                </div>

                                <div className="flex-1 hidden md:block" />

                                {i < STEPS.length - 1 && (
                                    <div className="hidden md:flex absolute -bottom-5 left-1/2 -translate-x-1/2 z-20">
                                        <div className="w-8 h-8 bg-white border-2 border-neutral-200 rounded-full flex items-center justify-center shadow-sm">
                                            <ArrowDownRight className="w-4 h-4 text-neutral-400" />
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
