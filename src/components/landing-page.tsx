"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import Hero from './home/hero';

// Dynamically import components below the fold to reduce initial bundle size and allow the browser to prioritize the Hero content.
const Expertise = dynamic(() => import('./home/expertise'), {
    loading: () => <div className="h-[500px] w-full bg-white text-slate-200 flex items-center justify-center">Loading Expertise...</div>
});

const About = dynamic(() => import('./home/about'), {
    loading: () => <div className="h-[600px] w-full bg-slate-50 text-slate-200 flex items-center justify-center">Loading About...</div>
});

const Testimonials = dynamic(() => import('./home/testimonials'), {
    loading: () => <div className="h-[400px] w-full bg-white text-slate-200 flex items-center justify-center">Loading Testimonials...</div>
});

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
