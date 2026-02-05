"use client";

import React from 'react';
import { Search, Lightbulb, Cog, TrendingUp, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function ProcessPage() {
    const steps = [
        {
            id: "01",
            title: "Discovery & Analysis",
            description: "We dive deep into your existing infrastructure, market position, and internal data to identify hidden bottlenecks and opportunities.",
            icon: <Search className="w-6 h-6" />,
            color: "bg-blue-500"
        },
        {
            id: "02",
            title: "Strategic Planning",
            description: "Based on data, we craft a bespoke roadmap. No templates. Every strategy is engineered specifically for your organizational goals.",
            icon: <Lightbulb className="w-6 h-6" />,
            color: "bg-indigo-500"
        },
        {
            id: "03",
            title: "Implementation",
            description: "Our team integrates with yours to execute the strategy. We oversee the technical deployment and cultural adaptation required for change.",
            icon: <Cog className="w-6 h-6" />,
            color: "bg-violet-500"
        },
        {
            id: "04",
            title: "Optimization & Scale",
            description: "We don't just launch and leave. We continuously monitor KPIs, refining the process to ensure sustainable, long-term growth.",
            icon: <TrendingUp className="w-6 h-6" />,
            color: "bg-primary"
        }
    ];

    return (
        <div className="bg-white min-h-screen pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in">
                    <span className="text-primary font-bold uppercase tracking-[0.2em] text-[10px]">Methodology</span>
                    <h1 className="mt-2 text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">Our Deployment <span className="text-primary">Process</span></h1>
                    <p className="mt-6 text-lg text-slate-500 font-medium">
                        A rigorous, four-step framework designed to minimize risk and maximize ROI.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[45px] left-[10%] right-[10%] h-0.5 bg-slate-100 -z-10"></div>

                    <div className="grid lg:grid-cols-4 gap-12 lg:gap-8">
                        {steps.map((step, i) => (
                            <div key={i} className="relative group">
                                <div className="flex flex-col items-center text-center">
                                    <div className={`w-24 h-24 rounded-[2rem] ${step.color} text-white flex items-center justify-center shadow-xl shadow-slate-200/50 mb-8 group-hover:scale-110 transition-transform duration-300 relative z-10 border-4 border-white`}>
                                        {step.icon}
                                        <div className="absolute -top-3 -right-3 w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-white">
                                            {step.id}
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* FAQ / Details Section */}
                <div className="mt-32 grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <div className="absolute inset-0 bg-slate-100 rounded-[3rem] -z-10 rotate-3"></div>
                        <div className="bg-slate-900 text-white p-12 rounded-[3rem] shadow-2xl">
                            <h3 className="text-2xl font-bold mb-6">Why this works</h3>
                            <ul className="space-y-4">
                                {[
                                    "Data-First Decision Making",
                                    "Agile Implementation Cycles",
                                    "Full Stakeholder Alignment",
                                    "Continuous Performance Auditing"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3">
                                        <CheckCircle2 className="text-primary" size={20} />
                                        <span className="font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-8 pt-8 border-t border-white/10">
                                <p className="text-slate-400 text-sm italic">"The process is as valuable as the outcome."</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-slate-900">Precision Engineering for Business</h2>
                        <p className="text-slate-600 leading-relaxed text-lg">
                            Most consulting firms focus on theory. We focus on execution. Our process is designed to bridge the gap between "what we should do" and "it's done."
                        </p>
                        <div className="pt-4">
                            <Link href="/contact" className="text-primary font-bold hover:underline underline-offset-4">
                                Schedule a Discovery Call
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
