"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

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
                        <p className="text-[10px] uppercase tracking-widest font-bold text-slate-600">Years of Excellence</p>
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

export default About;
