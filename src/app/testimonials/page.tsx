"use client";

import React from 'react';
import { Quote, Star } from 'lucide-react';

export default function TestimonialsPage() {
    const reviews = [
        {
            name: "Marcus Aurelius",
            role: "CEO, Imperium Tech",
            avatar: "https://i.pravatar.cc/150?u=marcus",
            quote: "ConsultingPro didn't just fix our problems; they fundamentally redesigned how we think about scale. The results were immediate and massive.",
            company: "Imperium",
            rating: 5
        },
        {
            name: "Elena Rodriguez",
            role: "Operations Director, Nexa",
            avatar: "https://i.pravatar.cc/150?u=elena",
            quote: "The level of precision in their financial auditing saved us nearly 2M in operational overhead within the first 90 days. Incredible partner.",
            company: "Nexa Corp",
            rating: 5
        },
        {
            name: "Jordan Smith",
            role: "Founder, Zenith Retail",
            avatar: "https://i.pravatar.cc/150?u=jordan",
            quote: "Easily the most professional group I've worked with. Their AI strategy moved us lightyears ahead of our competitors in the retail space.",
            company: "Zenith",
            rating: 5
        },
        {
            name: "Sarah Jenkins",
            role: "VP Marketing, FlowState",
            avatar: "https://i.pravatar.cc/150?u=sarah",
            quote: "We were struggling to convert leads. Their market analysis identified exactly where the drop-off was. Revenue is up 300% YoY.",
            company: "FlowState",
            rating: 5
        },
        {
            name: "David Chen",
            role: "CTO, BlockStream",
            avatar: "https://i.pravatar.cc/150?u=david",
            quote: "Technical debt was crushing our agility. ConsultingPro's team helped us modernize our stack without halting operations.",
            company: "BlockStream",
            rating: 5
        },
        {
            name: "Amanda Lowes",
            role: "HR Director, PeopleFirst",
            avatar: "https://i.pravatar.cc/150?u=amanda",
            quote: "The organizational restructuring plan they implemented has arguably saved our company culture. Retention is at an all-time high.",
            company: "PeopleFirst",
            rating: 5
        }
    ];

    return (
        <div className="bg-white min-h-screen pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in">
                    <span className="text-primary font-bold uppercase tracking-[0.2em] text-[10px]">Testimonials</span>
                    <h1 className="mt-2 text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">Voices of <span className="text-primary">Success</span></h1>
                    <p className="mt-6 text-lg text-slate-500 font-medium">
                        Don't just take our word for it. Here is what leading executives across the globe have to say about working with us.
                    </p>
                </div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {reviews.map((r, i) => (
                        <div key={i} className="break-inside-avoid p-8 bg-slate-50 border border-slate-100 rounded-[2rem] hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 hover:bg-white">
                            <div className="flex gap-1 text-yellow-400 mb-6">
                                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" className="text-yellow-400" />)}
                            </div>
                            <Quote className="text-primary/20 mb-4" size={32} />
                            <p className="text-slate-700 font-medium leading-relaxed mb-6 italic">"{r.quote}"</p>

                            <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-200/50">
                                <img src={r.avatar} alt={r.name} className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md" />
                                <div>
                                    <h4 className="font-bold text-slate-900 text-sm leading-tight">{r.name}</h4>
                                    <div className="flex items-center gap-2 mt-0.5">
                                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{r.role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Logo Cloud */}
                <div className="mt-32 pt-20 border-t border-slate-100 text-center">
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-10">Trusted By Industry Leaders</p>
                    <div className="flex flex-wrap justify-center gap-12 lg:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Simple Text Placeholders for Logos to avoid external dependencies or complex SVGs for now */}
                        {["ACME Corp", "Global Bank", "Nexa Systems", "Vertex Energy", "Starlight Media"].map((logo) => (
                            <div key={logo} className="text-2xl font-black text-slate-300 hover:text-slate-800 transition-colors cursor-default">
                                {logo}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
