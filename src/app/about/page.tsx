import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
    return (
        <div className="bg-white min-h-screen pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Hero Section */}
                <div className="flex flex-col lg:flex-row items-center gap-24 mb-32">
                    <div className="lg:w-1/2 relative animate-fade-in">
                        <div className="relative">
                            <div className="absolute inset-0 bg-primary rotate-3 rounded-[3rem] -z-10 opacity-10 translate-x-4 translate-y-4"></div>
                            <img
                                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
                                alt="Lead Consultant"
                                className="rounded-[3rem] shadow-2xl object-cover w-full h-[600px]"
                            />
                            <div className="absolute -bottom-8 -left-8 bg-dark text-white p-8 rounded-[2rem] shadow-2xl max-w-xs animate-float">
                                <div className="text-4xl font-black mb-1">100%</div>
                                <p className="text-xs uppercase tracking-widest font-bold text-slate-400">Client Satisfaction Rate Over A Decade</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 space-y-10 animate-fade-in">
                        <div className="space-y-4">
                            <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs">About Us</span>
                            <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
                                We Are The Architects of <span className="text-primary">Change</span>
                            </h1>
                        </div>

                        <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-medium">
                            <p>
                                Established in 2012, ConsultingPro began with a simple mission: to disrupt the traditional consulting model by prioritizing tangible results over theoretical advice.
                            </p>
                            <p>
                                Our team consists of former C-suite executives, data scientists, and industry veterans who understand the complexities of modern business from the inside out.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-8 pt-4">
                            <div className="flex gap-4 items-start">
                                <div className="mt-1 p-1 bg-primary/10 rounded-lg text-primary">
                                    <CheckCircle2 size={18} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Proven ROI</h4>
                                    <p className="text-sm text-slate-500 font-medium">Average 4.2x growth for clients in year one.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="mt-1 p-1 bg-primary/10 rounded-lg text-primary">
                                    <CheckCircle2 size={18} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Global Reach</h4>
                                    <p className="text-sm text-slate-500 font-medium">Consulted for firms in 15+ countries.</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6">
                            <Link href="/contact" className="inline-flex bg-slate-900 text-white font-bold px-10 py-5 rounded-full hover:bg-primary transition-all hover:shadow-xl hover:shadow-primary/20 items-center gap-3">
                                Join Our Team
                                <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Mission Section */}
                <div className="bg-slate-50 rounded-[3rem] p-12 md:p-24 text-center space-y-8">
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900">Our Mission</h2>
                    <p className="text-xl md:text-2xl font-medium text-slate-600 max-w-4xl mx-auto leading-relaxed">
                        "To empower ambitious organizations with the structural intelligence and strategic foresight needed to not just navigate the future, but to define it."
                    </p>
                </div>
            </div>
        </div>
    );
}
