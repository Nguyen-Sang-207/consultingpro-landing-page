"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Handle scroll behavior to hide/show navbar
    const controlNavbar = useCallback(() => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY && window.scrollY > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            setLastScrollY(window.scrollY);
        }
    }, [lastScrollY]);

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar);
        return () => window.removeEventListener('scroll', controlNavbar);
    }, [controlNavbar]);

    const navLinks = [
        { name: 'Services', href: '/services' },
        { name: 'Process', href: '/process' },
        { name: 'Testimonials', href: '/testimonials' },
        { name: 'About', href: '/about' },
    ];

    return (
        <header>
            <nav
                aria-label="Main Navigation"
                className={`fixed top-0 left-0 right-0 z-50 nav-transition border-b transition-all duration-500 ${isVisible ? 'translate-y-0' : '-translate-y-full'
                    } ${lastScrollY > 20 ? 'bg-white/90 backdrop-blur-md border-slate-200/60 shadow-sm py-3' : 'bg-transparent border-transparent py-5'}`}
            >
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        <Link href="/" className="flex items-center group" aria-label="Consulting Pro Home">
                            <span className="text-2xl font-black tracking-tighter text-slate-900 italic transition-transform group-hover:scale-105 duration-300">
                                Consulting<span className="text-primary not-italic">Pro</span>
                            </span>
                        </Link>

                        {/* Desktop Links */}
                        <div className="hidden md:flex items-center gap-10">
                            {navLinks.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-[13px] uppercase tracking-widest font-bold text-slate-600 hover:text-primary transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                className="bg-dark text-white text-xs uppercase tracking-widest font-bold px-7 py-3 rounded-full hover:bg-primary transition-all hover:shadow-lg hover:shadow-primary/20 active:scale-95 transform hover:-translate-y-0.5"
                            >
                                Book a Call
                            </Link>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="p-2 text-slate-900 hover:text-primary transition-colors"
                                aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
                            >
                                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-100 p-6 space-y-6 absolute top-full left-0 w-full shadow-2xl animate-in slide-in-from-top-2 h-screen">
                        {navLinks.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="block text-xl font-bold text-slate-900 border-b border-slate-50 pb-4 hover:text-primary transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            className="flex items-center justify-center w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 active:scale-95 transition-transform"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Book a Call
                        </Link>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Navbar;
