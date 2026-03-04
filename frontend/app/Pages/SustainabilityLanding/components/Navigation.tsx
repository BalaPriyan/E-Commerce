"use client";

import React, { useState, useRef, useEffect } from "react";
import { Leaf, Menu, X, HandPlatter, HeartHandshake } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/Pages/about" },
    { name: "Request Food", href: "/Pages/request" },
    { name: "Map", href: "/Pages/map" },
    { name: "Impact", href: "/Pages/impact" },
];

export function Navigation() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });
    const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);

    const activeIndex = NAV_LINKS.findIndex(link =>
        link.href === "/" ? pathname === "/" : pathname.startsWith(link.href)
    );

    useEffect(() => {
        const targetIndex = hoveredIndex !== null ? hoveredIndex : activeIndex;
        if (linksRef.current[targetIndex]) {
            const el = linksRef.current[targetIndex];
            if (el) {
                setIndicatorStyle({ left: el.offsetLeft, width: el.offsetWidth, opacity: 1 });
            }
        } else {
            setIndicatorStyle(prev => ({ ...prev, opacity: 0 }));
        }
    }, [hoveredIndex, activeIndex]);

    return (
        <nav className="fixed top-6 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto bg-white/60 backdrop-blur-xl border border-white/80 shadow-sm rounded-full px-6 py-3 flex justify-between items-center">

                <Link href="/" className="flex items-center gap-2">
                    <div className="bg-emerald-100/80 backdrop-blur-md p-2 rounded-full text-emerald-800 border border-emerald-200/50">
                        <Leaf className="w-5 h-5" />
                    </div>
                    <span className="font-extrabold text-xl tracking-tight text-neutral-900">FoodForNeed</span>
                </Link>

                <div
                    className="hidden lg:flex items-center relative bg-white/40 backdrop-blur-md px-2 py-1.5 rounded-full border border-white/50"
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <div
                        className="absolute h-8 rounded-full pointer-events-none transition-all duration-300 ease-out"
                        style={{
                            left: `${indicatorStyle.left}px`,
                            width: `${indicatorStyle.width}px`,
                            opacity: indicatorStyle.opacity,
                            background: "rgba(255,255,255,0.18)",
                            backdropFilter: "blur(24px)",
                            WebkitBackdropFilter: "blur(24px)",
                            border: "1.5px solid rgba(255,255,255,0.85)",
                            boxShadow: "inset 0 1px 1px rgba(255,255,255,0.55), 0 2px 14px rgba(52,211,153,0.12)",
                        }}
                    />

                    {NAV_LINKS.map((link, index) => {
                        const isActive = activeIndex === index;
                        const isHovered = hoveredIndex === index;
                        const isHighlighted = isHovered || (hoveredIndex === null && isActive);

                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                ref={(el) => { linksRef.current[index] = el; }}
                                onMouseEnter={() => setHoveredIndex(index)}
                                className={`relative z-10 px-4 py-1.5 text-sm transition-colors duration-300 ${isHighlighted ? "font-bold text-neutral-900" : "font-medium text-neutral-500"}`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </div>

                <div className="hidden md:flex justify-end items-center space-x-3">
                    <Link href="/Pages/volunteer">
                        <button className="text-sm font-bold text-neutral-700 px-4 py-2 hover:bg-emerald-50 hover:text-emerald-800 rounded-full transition flex items-center gap-1.5">
                            <HeartHandshake className="w-4 h-4" /> Volunteer
                        </button>
                    </Link>
                    <Link href="/Pages/donate">
                        <button className="bg-neutral-900 hover:bg-neutral-800 text-white px-5 py-2.5 rounded-full text-sm font-bold transition shadow-sm flex items-center gap-1.5 hover:-translate-y-0.5 transform">
                            <HandPlatter className="w-4 h-4" /> Donate Food
                        </button>
                    </Link>
                </div>

                <div className="lg:hidden flex items-center">
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-neutral-900 p-2 bg-white/50 rounded-full border border-white/50">
                        {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>

            </div>

            {isMobileMenuOpen && (
                <div className="lg:hidden mt-2 mx-auto max-w-7xl bg-white/80 backdrop-blur-2xl border border-white/80 rounded-[2rem] p-6 shadow-xl relative animate-in slide-in-from-top-4 fade-in duration-300">
                    <div className="flex flex-col space-y-4">
                        {NAV_LINKS.map((link, index) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`text-sm transition block px-4 py-2 rounded-full ${activeIndex === index ? 'bg-white font-bold text-neutral-900 shadow-sm' : 'font-medium text-neutral-600 hover:text-neutral-900 hover:bg-white/50'}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <hr className="border-neutral-200/50 my-2" />
                        <div className="px-4 flex flex-col gap-3">
                            <Link href="/Pages/volunteer" onClick={() => setIsMobileMenuOpen(false)}>
                                <button className="text-sm font-bold text-neutral-700 text-center py-2.5 bg-emerald-50 hover:bg-emerald-100 rounded-full transition w-full flex items-center justify-center gap-2">
                                    <HeartHandshake className="w-4 h-4" /> Volunteer
                                </button>
                            </Link>
                            <Link href="/Pages/donate" onClick={() => setIsMobileMenuOpen(false)}>
                                <button className="bg-neutral-900 text-white px-4 py-3 rounded-full text-sm font-bold w-full text-center hover:bg-neutral-800 transition shadow-sm flex items-center justify-center gap-2">
                                    <HandPlatter className="w-4 h-4" /> Donate Food
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
