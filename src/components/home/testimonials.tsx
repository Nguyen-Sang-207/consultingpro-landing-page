"use client";

import React from 'react';
import Image from 'next/image';
import { Quote, ChevronRight, CheckCircle2 } from 'lucide-react';

interface TestimonialProps {
    name: string;
    role: string;
    avatar: string;
    quote: string;
    rating: number;
}

const Testimonials: React.FC = () => {
    const reviews: TestimonialProps[] = [
        {
            name: "Marcus A.",
            role: "CEO, Imperium",
            avatar: "https://i.pravatar.cc/150?u=marcus",
            quote: "Redesigned how we think about scale entirely.",
            rating: 5
        },
        {
            name: "Elena R.",
            role: "Director, Nexa",
            avatar: "https://i.pravatar.cc/150?u=elena",
            quote: "Saved us nearly 2M in operational overhead.",
            rating: 5
        },
        {
            name: "Jordan S.",
            role: "Founder, Zenith",
            avatar: "https://i.pravatar.cc/150?u=jordan",
            quote: "Moved us lightyears ahead of competitors.",
            rating: 5
        }
    ];

    return (
        <section id="testimonials" className="py-20 px-6 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div className="space-y-2">
                        <span className="text-primary font-bold uppercase tracking-[0.2em] text-[10px]">Testimonials</span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Trusted Voices</h2>
                    </div>
                    <div className="flex gap-2">
                        <button aria-label="Previous Testimonial" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors"><ChevronRight className="rotate-180" size={20} /></button>
                        <button aria-label="Next Testimonial" className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-primary transition-colors"><ChevronRight size={20} /></button>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {reviews.map((r, i) => (
                        <div key={i} className="p-8 bg-slate-50 rounded-[2rem] hover:bg-white border border-transparent hover:border-slate-100 hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-300">
                            <div className="flex gap-1 text-yellow-400 mb-4">
                                {[...Array(5)].map((_, i) => <CheckCircle2 key={i} size={14} fill="currentColor" className="text-yellow-400" aria-hidden="true" />)}
                            </div>
                            <p className="text-base text-slate-700 font-medium leading-relaxed mb-6">"{r.quote}"</p>
                            <div className="flex items-center gap-3">
                                <Image src={r.avatar} alt={r.name} width={40} height={40} className="rounded-full bg-slate-200 object-cover" />
                                <div>
                                    <h3 className="font-bold text-slate-900 text-sm">{r.name}</h3>
                                    <p className="text-[10px] text-slate-600 font-bold uppercase">{r.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
