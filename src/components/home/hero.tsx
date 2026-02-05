"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 px-6 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
        {/* Subtle Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
            <div className="absolute top-[-10%] right-[-5%] w-[35%] h-[35%] bg-blue-100/50 blur-[100px] rounded-full mix-blend-multiply"></div>
            <div className="absolute top-[10%] left-[-10%] w-[35%] h-[35%] bg-indigo-100/50 blur-[100px] rounded-full mix-blend-multiply"></div>
        </div>

        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                <div className="lg:w-1/2 space-y-8 text-center lg:text-left z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm text-slate-700 text-[11px] font-bold uppercase tracking-widest animate-fade-in">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Strategy 2026
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.15] tracking-tight">
                        Elevate Your <br className="hidden md:block" />
                        <span className="text-primary relative inline-block">
                            Business
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-blue-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none" aria-hidden="true">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                            </svg>
                        </span>
                    </h1>

                    <p className="text-base md:text-lg text-slate-600 font-medium max-w-lg mx-auto lg:mx-0 leading-relaxed">
                        High-impact consulting for ambitious companies. We combine data-driven strategy with digital innovation to help you dominate your market.
                    </p>

                    <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
                        <Link href="/contact" className="group bg-slate-900 text-white font-bold px-8 py-3.5 rounded-full hover:bg-primary hover:shadow-xl hover:shadow-primary/20 transition-all flex items-center gap-2 active:scale-95 text-sm">
                            Start Consulting
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link href="/services" className="group bg-white text-slate-900 border border-slate-200 font-bold px-8 py-3.5 rounded-full hover:border-primary/30 hover:bg-slate-50 transition-all shadow-sm text-sm flex items-center gap-2">
                            View Work
                            <ChevronRight size={18} className="text-slate-500 group-hover:text-primary transition-colors" />
                        </Link>
                    </div>

                    <div className="flex items-center justify-center lg:justify-start gap-8 pt-8 border-t border-slate-200/60">
                        <div>
                            <div className="text-2xl font-bold text-slate-900">500+</div>
                            <div className="text-[10px] uppercase tracking-widest font-bold text-slate-600 mt-1">Projects</div>
                        </div>
                        <div className="w-px h-10 bg-slate-200"></div>
                        <div>
                            <div className="text-2xl font-bold text-slate-900">98%</div>
                            <div className="text-[10px] uppercase tracking-widest font-bold text-slate-600 mt-1">Success</div>
                        </div>
                    </div>
                </div>

                <div className="lg:w-1/2 relative mt-8 lg:mt-0 w-full max-w-lg lg:max-w-none">
                    <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] group bg-white p-2 border border-slate-100">
                        <div className="rounded-[1.5rem] overflow-hidden relative aspect-[4/3] bg-slate-200">
                            <Image
                                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1000"
                                alt="Professional Consulting Team Strategy Meeting"
                                fill
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                                className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>

                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/20">
                                    <p className="text-slate-900 text-sm font-bold">"Growth is never by mere chance; it is the result of forces working together."</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Decorative shapes */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-400/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
                </div>
            </div>
        </div>
    </section>
);

export default Hero;
