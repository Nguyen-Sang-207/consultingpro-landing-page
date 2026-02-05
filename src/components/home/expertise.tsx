"use client";

import React from 'react';
import { BarChart3, TrendingUp, Cpu } from 'lucide-react';

interface FeatureProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

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
                        Transforming <span className="text-slate-500">Business Logic</span>
                    </h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((f, i) => (
                        <div key={i} className="group p-8 bg-slate-50 border border-slate-100 rounded-[2rem] hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1 hover:bg-white">
                            <div className="bg-white text-slate-900 w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors border border-slate-100 shadow-sm">
                                {f.icon}
                            </div>
                            <h3 className="text-lg font-bold mb-3 text-slate-900">{f.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed font-medium">{f.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Expertise;
