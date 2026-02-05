"use client";

import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactPage() {
    return (
        <div className="bg-white min-h-[calc(100vh-64px)] flex items-center justify-center py-20 lg:py-0">
            <div className="max-w-6xl mx-auto px-4 lg:px-6 w-full">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    {/* Left Column: Contact Info */}
                    <div className="space-y-6 lg:order-1 order-2">
                        <div className="animate-fade-in text-center lg:text-left">
                            <span className="text-primary font-bold uppercase tracking-[0.2em] text-[10px]">Get In Touch</span>
                            <h1 className="mt-1 text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">Let's Talk</h1>
                            <p className="mt-2 text-sm lg:text-base text-slate-500 font-medium max-w-md mx-auto lg:mx-0">
                                Ready to scale? We're here to help you achieve your goals.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
                            <div className="flex items-center gap-3 group p-3 rounded-xl hover:bg-slate-50 transition-colors">
                                <div className="w-10 h-10 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-900 group-hover:bg-primary group-hover:text-white transition-all shadow-sm shrink-0">
                                    <Phone size={18} />
                                </div>
                                <div>
                                    <p className="text-[9px] uppercase tracking-widest font-black text-slate-400">Call</p>
                                    <p className="text-sm font-black text-slate-900">+1 (800) GROW-PRO</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 group p-3 rounded-xl hover:bg-slate-50 transition-colors">
                                <div className="w-10 h-10 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-900 group-hover:bg-primary group-hover:text-white transition-all shadow-sm shrink-0">
                                    <Mail size={18} />
                                </div>
                                <div>
                                    <p className="text-[9px] uppercase tracking-widest font-black text-slate-400">Email</p>
                                    <p className="text-sm font-black text-slate-900">office@consultingpro.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 group p-3 rounded-xl hover:bg-slate-50 transition-colors">
                                <div className="w-10 h-10 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-900 group-hover:bg-primary group-hover:text-white transition-all shadow-sm shrink-0">
                                    <MapPin size={18} />
                                </div>
                                <div>
                                    <p className="text-[9px] uppercase tracking-widest font-black text-slate-400">Visit</p>
                                    <p className="text-sm font-black text-slate-900">123 Innovation Dr, NYC</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="bg-white lg:bg-slate-50 p-6 lg:p-8 rounded-[1.5rem] lg:border border-slate-200/60 lg:shadow-xl relative animate-fade-in delay-100 lg:order-2 order-1">
                        <form className="space-y-3" onSubmit={(e) => { e.preventDefault(); alert('Message sent!'); }}>
                            <div className="grid grid-cols-2 gap-3">
                                <div className="space-y-1">
                                    <label className="text-[9px] uppercase tracking-widest font-black text-slate-400 ml-1">First Name</label>
                                    <input type="text" className="w-full bg-slate-50 lg:bg-white border-slate-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent px-3 py-2.5 transition-all outline-none text-slate-900 text-sm" placeholder="John" />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-[9px] uppercase tracking-widest font-black text-slate-400 ml-1">Last Name</label>
                                    <input type="text" className="w-full bg-slate-50 lg:bg-white border-slate-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent px-3 py-2.5 transition-all outline-none text-slate-900 text-sm" placeholder="Doe" />
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label className="text-[9px] uppercase tracking-widest font-black text-slate-400 ml-1">Email</label>
                                <input type="email" className="w-full bg-slate-50 lg:bg-white border-slate-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent px-3 py-2.5 transition-all outline-none text-slate-900 text-sm" placeholder="john@company.com" />
                            </div>
                            <div className="space-y-1">
                                <label className="text-[9px] uppercase tracking-widest font-black text-slate-400 ml-1">Budget</label>
                                <select className="w-full bg-slate-50 lg:bg-white border-slate-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent px-3 py-2.5 transition-all outline-none text-slate-900 text-sm appearance-none cursor-pointer">
                                    <option>$10k - $50k</option>
                                    <option>$50k - $100k</option>
                                    <option>$100k+</option>
                                </select>
                            </div>
                            <div className="space-y-1">
                                <label className="text-[9px] uppercase tracking-widest font-black text-slate-400 ml-1">Message</label>
                                <textarea rows={2} className="w-full bg-slate-50 lg:bg-white border-slate-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent px-3 py-2.5 transition-all outline-none text-slate-900 text-sm resize-none" placeholder="Project details..."></textarea>
                            </div>
                            <button className="w-full bg-primary text-white font-bold py-3.5 rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all active:scale-95 text-sm mt-1">
                                Send Request
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
