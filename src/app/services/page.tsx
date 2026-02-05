import React from 'react';
import { BarChart3, TrendingUp, Cpu, ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface FeatureProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export default function ServicesPage() {
    const features: FeatureProps[] = [
        {
            icon: <BarChart3 className="w-7 h-7" />,
            title: "Market Strategy",
            description: "Comprehensive analysis and aggressive positioning to capture and maintain market share in volatile industries."
        },
        {
            icon: <TrendingUp className="w-7 h-7" />,
            title: "Revenue Growth",
            description: "Data-driven financial engineering designed to identify hidden margins and scale your profitability exponentially."
        },
        {
            icon: <Cpu className="w-7 h-7" />,
            title: "AI Integration",
            description: "Leveraging cutting-edge artificial intelligence to automate complex workflows and predict future consumer behavior."
        },
        {
            icon: <BarChart3 className="w-7 h-7" />,
            title: "Digital Transformation",
            description: "Modernizing legacy systems to improve agility and reduce technical debt across the entire enterprise."
        },
        {
            icon: <TrendingUp className="w-7 h-7" />,
            title: "Operational Efficiency",
            description: "Streamlining processes to maximize output and minimize waste, ensuring every resource is utilized effectively."
        },
        {
            icon: <Cpu className="w-7 h-7" />,
            title: "Data Analytics",
            description: "Transforming raw data into actionable insights that drive strategic decision-making and competitive advantage."
        }
    ];

    return (
        <div className="bg-white min-h-screen pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-20 animate-fade-in">
                    <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs">Our Expertise</span>
                    <h1 className="mt-4 text-5xl font-black text-slate-900 tracking-tight">
                        Services That <span className="text-primary">Drive Growth</span>
                    </h1>
                    <p className="mt-6 text-xl text-slate-600 font-medium">
                        We deliver end-to-end consulting solutions tailored to your unique business challenges.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((f, i) => (
                        <div key={i} className="group p-10 bg-slate-50 border border-slate-100 rounded-[2rem] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-2 hover:bg-white">
                            <div className="bg-white text-slate-900 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:shadow-lg group-hover:shadow-primary/20 border border-slate-100">
                                {f.icon}
                            </div>
                            <h3 className="text-2xl font-black mb-4 group-hover:text-primary transition-colors">{f.title}</h3>
                            <p className="text-slate-500 leading-relaxed font-medium">{f.description}</p>
                            <div className="pt-8 mt-8 border-t border-slate-200/60 flex items-center gap-2 text-primary font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0">
                                <Link href="/contact" className="flex items-center gap-2">
                                    Get Started <ChevronRight size={16} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
