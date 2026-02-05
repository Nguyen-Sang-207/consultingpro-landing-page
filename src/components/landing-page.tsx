"use client";

import React from 'react';
import {
    Quote, ChevronRight, CheckCircle2, ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { BarChart3, TrendingUp, Cpu } from 'lucide-react';

// --- Types ---
interface TestimonialProps {
    name: string;
    role: string;
    avatar: string;
    quote: string;
    rating: number;
}

interface FeatureProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

// --- Components ---

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
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm text-slate-600 text-[11px] font-bold uppercase tracking-widest animate-fade-in">
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
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-blue-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                            </svg>
                        </span>
                    </h1>

                    <p className="text-base md:text-lg text-slate-500 font-medium max-w-lg mx-auto lg:mx-0 leading-relaxed">
                        High-impact consulting for ambitious companies. We combine data-driven strategy with digital innovation to help you dominate your market.
                    </p>

                    <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
                        <Link href="/contact" className="group bg-slate-900 text-white font-bold px-8 py-3.5 rounded-full hover:bg-primary hover:shadow-xl hover:shadow-primary/20 transition-all flex items-center gap-2 active:scale-95 text-sm">
                            Start Consulting
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link href="/services" className="group bg-white text-slate-900 border border-slate-200 font-bold px-8 py-3.5 rounded-full hover:border-primary/30 hover:bg-slate-50 transition-all shadow-sm text-sm flex items-center gap-2">
                            View Work
                            <ChevronRight size={18} className="text-slate-400 group-hover:text-primary transition-colors" />
                        </Link>
                    </div>

                    <div className="flex items-center justify-center lg:justify-start gap-8 pt-8 border-t border-slate-200/60">
                        <div>
                            <div className="text-2xl font-bold text-slate-900">500+</div>
                            <div className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mt-1">Projects</div>
                        </div>
                        <div className="w-px h-10 bg-slate-200"></div>
                        <div>
                            <div className="text-2xl font-bold text-slate-900">98%</div>
                            <div className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mt-1">Success</div>
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
                                sizes="(max-width: 768px) 100vw, 50vw"
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

const Expertise: React.FC = () => {
    const features: FeatureProps[] = [
        {
            icon: <BarChart3 className="w-6 h-6" />,
            title: "Market Strategy",
            description: "Aggressive positioning to capture market share."
        },
        {
            icon: <TrendingUp className="w-6 h-6" />,
            title: "Revenue Growth",
            description: "Financial engineering designed to scale profitability."
        },
        {
            icon: <Cpu className="w-6 h-6" />,
            title: "AI Integration",
            description: "Leveraging AI to automate workflows effectively."
        }
    ];

    return (
        <section id="services" className="py-20 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
                    <span className="text-primary font-bold uppercase tracking-[0.2em] text-[10px]">What We Do</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                        Transforming <span className="text-slate-400">Business Logic</span>
                    </h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((f, i) => (
                        <div key={i} className="group p-8 bg-slate-50 border border-slate-100 rounded-[2rem] hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1 hover:bg-white">
                            <div className="bg-white text-slate-900 w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors border border-slate-100 shadow-sm">
                                {f.icon}
                            </div>
                            <h3 className="text-lg font-bold mb-3 text-slate-900">{f.title}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed font-medium">{f.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const About: React.FC = () => (
    <section id="about" className="py-20 bg-slate-50/50 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="lg:w-1/2 relative w-full">
                <div className="relative isolate">
                    {/* Back drop */}
                    <div className="absolute inset-0 bg-slate-200 rounded-[2rem] -z-10 translate-x-4 translate-y-4"></div>

                    <div className="rounded-[2rem] overflow-hidden shadow-2xl h-[400px] lg:h-[500px] bg-slate-300 relative">
                        <Image
                            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
                            alt="Lead Consultant Portrait"
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover object-[50%_20%]"
                        />
                    </div>

                    <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-[200px]">
                        <div className="text-3xl font-black text-primary mb-0.5">10+</div>
                        <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Years of Excellence</p>
                    </div>
                </div>
            </div>

            <div className="lg:w-1/2 space-y-8">
                <div className="space-y-3">
                    <span className="text-primary font-bold uppercase tracking-[0.2em] text-[10px]">Our Vision</span>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.1]">
                        Experience That Shapes <br /> Industries
                    </h2>
                </div>

                <div className="space-y-4 text-slate-600 text-base leading-relaxed font-medium">
                    <p>
                        ConsultingPro bridges the gap between abstract strategy and boots-on-the-ground execution. We don't just give advice; we build the future with you.
                    </p>
                    <p>
                        Our tailored approach ensures that every solution is specific to your unique challenges, driving measurable results from day one.
                    </p>
                </div>

                <div className="pt-4">
                    <Link href="/about" className="text-sm font-bold border-b-2 border-primary pb-1 hover:text-primary transition-colors inline-flex items-center gap-2">
                        Meet the Team <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </div>
    </section>
);

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
                                {[...Array(5)].map((_, i) => <CheckCircle2 key={i} size={14} fill="currentColor" className="text-yellow-400" />)}
                            </div>
                            <p className="text-base text-slate-700 font-medium leading-relaxed mb-6">"{r.quote}"</p>
                            <div className="flex items-center gap-3">
                                <Image src={r.avatar} alt={r.name} width={40} height={40} className="rounded-full bg-slate-200 object-cover" />
                                <div>
                                    <h4 className="font-bold text-slate-900 text-sm">{r.name}</h4>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase">{r.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-white font-sans text-slate-900">
            <Hero />
            <Expertise />
            <About />
            <Testimonials />
        </div>
    );
}
