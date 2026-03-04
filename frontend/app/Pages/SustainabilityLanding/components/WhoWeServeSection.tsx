"use client";

import React from "react";
import { Building2, Baby, PersonStanding, HeartHandshake, HandHelping, Users } from "lucide-react";

export function WhoWeServeSection() {
    return (
        <section id="who-we-serve" className="py-24 bg-white relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-emerald-50 blur-[120px] -z-10 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-14">
                    <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-bold mb-4">
                        <HeartHandshake className="w-4 h-4" />
                        Who We Serve
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight mb-4">
                        Food for everyone<br />
                        <span className="text-emerald-600">who goes without.</span>
                    </h2>
                    <p className="text-neutral-500 font-medium text-base max-w-2xl mx-auto leading-relaxed">
                        We reach every corner of the community — from registered organizations to individuals on the pavement.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] gap-4">

                    <div className="col-span-1 row-span-2 bg-emerald-400 rounded-[2.5rem] p-7 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-xl transition-all duration-400 relative overflow-hidden">
                        <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/15 rounded-full group-hover:scale-125 transition-transform duration-500" />
                        <div className="bg-white/30 backdrop-blur-sm p-3 rounded-2xl inline-flex w-fit">
                            <Baby className="w-7 h-7 text-neutral-900" />
                        </div>
                        <div>
                            <h3 className="text-xl font-extrabold text-neutral-900 mb-2">Orphanages & Children's Homes</h3>
                            <p className="text-sm font-semibold text-neutral-800/80 leading-relaxed">Ensuring every child has a nutritious daily meal.</p>
                        </div>
                    </div>

                    <div className="col-span-2 row-span-1 bg-blue-400 rounded-[2.5rem] p-7 flex items-center gap-5 group hover:-translate-y-1 hover:shadow-xl transition-all duration-400 relative overflow-hidden">
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white/15 rounded-full group-hover:scale-150 transition-transform duration-500" />
                        <div className="bg-white/30 backdrop-blur-sm p-3 rounded-2xl shrink-0">
                            <Building2 className="w-7 h-7 text-neutral-900" />
                        </div>
                        <div>
                            <h3 className="text-lg font-extrabold text-neutral-900 mb-1">Night Shelters & Care Homes</h3>
                            <p className="text-sm font-semibold text-neutral-800/80">Fresh, regular deliveries from local donors to residents.</p>
                        </div>
                    </div>

                    <div className="col-span-1 row-span-1 bg-rose-400 rounded-[2.5rem] p-6 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-xl transition-all duration-400 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-16 h-16 bg-white/20 rounded-bl-full" />
                        <div className="bg-white/30 backdrop-blur-sm p-3 rounded-2xl inline-flex w-fit">
                            <PersonStanding className="w-6 h-6 text-neutral-900" />
                        </div>
                        <h3 className="text-base font-extrabold text-neutral-900">Street Individuals</h3>
                    </div>

                    <div className="col-span-1 row-span-1 bg-yellow-400 rounded-[2.5rem] p-6 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-xl transition-all duration-400 relative overflow-hidden">
                        <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/20 rounded-tr-full" />
                        <div className="bg-white/30 backdrop-blur-sm p-3 rounded-2xl inline-flex w-fit">
                            <Users className="w-6 h-6 text-neutral-900" />
                        </div>
                        <h3 className="text-base font-extrabold text-neutral-900">Community Kitchens</h3>
                    </div>

                    <div className="col-span-2 row-span-1 bg-orange-400 rounded-[2.5rem] p-7 flex items-center gap-5 group hover:-translate-y-1 hover:shadow-xl transition-all duration-400 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-20 h-20 bg-white/15 rounded-br-full group-hover:scale-125 transition-transform duration-500" />
                        <div className="bg-white/30 backdrop-blur-sm p-3 rounded-2xl shrink-0">
                            <HandHelping className="w-7 h-7 text-neutral-900" />
                        </div>
                        <div>
                            <h3 className="text-lg font-extrabold text-neutral-900 mb-1">Grassroots NGOs</h3>
                            <p className="text-sm font-semibold text-neutral-800/80">Small local NGOs tap our network entirely free of cost.</p>
                        </div>
                    </div>
                    <div className="col-span-2 md:col-span-4 row-span-1 bg-purple-400 rounded-[2.5rem] p-7 flex flex-row items-center gap-6 group hover:-translate-y-1 hover:shadow-xl transition-all duration-400 relative overflow-hidden">
                        <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-white/15 rounded-full group-hover:scale-125 transition-transform duration-500" />
                        <div className="bg-white/30 backdrop-blur-sm p-4 rounded-2xl shrink-0">
                            <HeartHandshake className="w-8 h-8 text-neutral-900" />
                        </div>
                        <div>
                            <h3 className="text-xl font-extrabold text-neutral-900 mb-1">Street Outreach Programs</h3>
                            <p className="text-sm font-semibold text-neutral-800/80 leading-relaxed max-w-2xl">Organized outreach teams use our platform to plan efficient food drives across city zones — reaching the most vulnerable people exactly where they are.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
