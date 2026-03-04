"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, HandPlatter, MapPin, CalendarClock, Package, Phone, User } from "lucide-react";

export function DonateModal({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => { document.body.style.overflow = "unset"; };
    }, [isOpen]);

    return (
        <>
            <div onClick={() => setIsOpen(true)} className="inline-block w-full sm:w-auto cursor-pointer">
                {children}
            </div>

            {isOpen && mounted && createPortal(
                <div className="fixed inset-0 z-9999 flex items-center justify-center p-4 sm:p-6">
                  
                    <div
                        className="absolute inset-0 bg-neutral-900/60 backdrop-blur-sm transition-opacity"
                        onClick={() => setIsOpen(false)}
                    />

                    <div className="relative w-full max-w-lg bg-white rounded-[2.5rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-300 border border-white/50">

                        <div className="bg-emerald-50 px-8 py-6 flex justify-between items-center border-b border-emerald-100">
                            <div>
                                <h3 className="text-2xl font-extrabold text-neutral-900 tracking-tight flex items-center gap-2">
                                    <HandPlatter className="w-6 h-6 text-emerald-600" />
                                    Donate Food
                                </h3>
                                <p className="text-sm font-medium text-emerald-800 mt-1">Join the rescue network today.</p>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="bg-white/50 hover:bg-white text-neutral-500 hover:text-neutral-900 p-2 rounded-full transition shadow-sm border border-emerald-200/50"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="p-8 pb-10 max-h-[75vh] overflow-y-auto custom-scrollbar">
                            <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); setIsOpen(false); }}>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-neutral-600 flex items-center gap-1.5"><User className="w-3.5 h-3.5" /> Full Name</label>
                                        <input type="text" placeholder="John Doe" className="w-full bg-neutral-50 border border-neutral-200 text-neutral-900 text-sm rounded-2xl px-4 py-3 outline-none focus:border-emerald-500 focus:bg-white transition font-medium" required />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-neutral-600 flex items-center gap-1.5"><Phone className="w-3.5 h-3.5" /> Phone Number</label>
                                        <input type="tel" placeholder="+1 (555) 000-0000" className="w-full bg-neutral-50 border border-neutral-200 text-neutral-900 text-sm rounded-2xl px-4 py-3 outline-none focus:border-emerald-500 focus:bg-white transition font-medium" required />
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-neutral-600 flex items-center gap-1.5"><Package className="w-3.5 h-3.5" /> Food Details</label>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        <select className="w-full bg-neutral-50 border border-neutral-200 text-neutral-900 text-sm rounded-2xl px-4 py-3 outline-none focus:border-emerald-500 focus:bg-white transition font-medium appearance-none">
                                            <option value="">Select Food Type</option>
                                            <option value="produce">Fresh Produce</option>
                                            <option value="bakery">Bakery / Bread</option>
                                            <option value="meals">Prepared Meals</option>
                                            <option value="groceries">Packaged Groceries</option>
                                        </select>
                                        <input type="text" placeholder="Quantity (e.g. 50 Meals)" className="w-full bg-neutral-50 border border-neutral-200 text-neutral-900 text-sm rounded-2xl px-4 py-3 outline-none focus:border-emerald-500 focus:bg-white transition font-medium" required />
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-neutral-600 flex items-center gap-1.5"><CalendarClock className="w-3.5 h-3.5" /> Pickup Timing</label>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        <input type="time" className="w-full bg-neutral-50 border border-neutral-200 text-neutral-900 text-sm rounded-2xl px-4 py-3 outline-none focus:border-emerald-500 focus:bg-white transition font-medium" required title="Ready Time" />
                                        <input type="time" className="w-full bg-neutral-50 border border-neutral-200 text-neutral-900 text-sm rounded-2xl px-4 py-3 outline-none focus:border-emerald-500 focus:bg-white transition font-medium" required title="Deadline Time" />
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-neutral-600 flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> Pickup Location</label>
                                    <textarea rows={2} placeholder="Full address or business name..." className="w-full bg-neutral-50 border border-neutral-200 text-neutral-900 text-sm rounded-2xl px-4 py-3 outline-none focus:border-emerald-500 focus:bg-white transition font-medium resize-none" required></textarea>
                                </div>

                                <button type="submit" className="w-full mt-4 bg-neutral-900 hover:bg-neutral-800 text-white rounded-full py-4 text-sm font-bold transition shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transform">
                                    Submit Donation Form
                                </button>

                            </form>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </>
    );
}
