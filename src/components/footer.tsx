import React from 'react';
import { Facebook, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';

const Footer: React.FC = () => (
    <footer className="bg-slate-900 pt-32 pb-16 px-6 text-slate-400">
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row justify-between gap-16 mb-24">
                <div className="max-w-sm space-y-8">
                    <Link href="/" className="inline-block">
                        <span className="text-3xl font-black tracking-tighter text-white italic">
                            Consulting<span className="text-primary not-italic">Pro</span>
                        </span>
                    </Link>
                    <p className="text-lg font-medium leading-relaxed">
                        Revolutionizing how companies scale and adapt in the digital age. Your ambition, our strategy.
                    </p>
                    <div className="flex gap-4">
                        {[Facebook, Twitter, Linkedin].map((Icon, idx) => (
                            <a key={idx} href="https://twitter.com" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all group hover:scale-110">
                                <Icon size={20} />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-24">
                    <div className="space-y-6">
                        <h4 className="text-xs uppercase tracking-[0.3em] font-black text-white">Platform</h4>
                        <ul className="space-y-4 font-bold text-sm">
                            <li><Link href="/about" className="hover:text-white transition-colors hover:underline decoration-primary underline-offset-4">Our Approach</Link></li>
                            <li><Link href="/testimonials" className="hover:text-white transition-colors hover:underline decoration-primary underline-offset-4">Success Stories</Link></li>
                            <li><Link href="/services" className="hover:text-white transition-colors hover:underline decoration-primary underline-offset-4">Strategic Labs</Link></li>
                            <li><Link href="/about" className="hover:text-white transition-colors hover:underline decoration-primary underline-offset-4">Executive Team</Link></li>
                        </ul>
                    </div>
                    <div className="space-y-6">
                        <h4 className="text-xs uppercase tracking-[0.3em] font-black text-white">Solutions</h4>
                        <ul className="space-y-4 font-bold text-sm">
                            <li><Link href="/services" className="hover:text-white transition-colors hover:underline decoration-primary underline-offset-4">Enterprise Scale</Link></li>
                            <li><Link href="/services" className="hover:text-white transition-colors hover:underline decoration-primary underline-offset-4">Digital Audit</Link></li>
                            <li><Link href="/services" className="hover:text-white transition-colors hover:underline decoration-primary underline-offset-4">Market Research</Link></li>
                            <li><Link href="/services" className="hover:text-white transition-colors hover:underline decoration-primary underline-offset-4">Custom AI</Link></li>
                        </ul>
                    </div>
                    <div className="space-y-6 hidden md:block">
                        <h4 className="text-xs uppercase tracking-[0.3em] font-black text-white">Legal</h4>
                        <ul className="space-y-4 font-bold text-sm">
                            <li><Link href="/privacy" className="hover:text-white transition-colors hover:underline decoration-primary underline-offset-4">Privacy</Link></li>
                            <li><Link href="/terms" className="hover:text-white transition-colors hover:underline decoration-primary underline-offset-4">Terms</Link></li>
                            <li><Link href="/cookies" className="hover:text-white transition-colors hover:underline decoration-primary underline-offset-4">Cookie Policy</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs font-bold uppercase tracking-widest gap-6">
                <p>© 2026 ConsultingPro Services LLC. All rights reserved.</p>
                <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    Systems Operational
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
