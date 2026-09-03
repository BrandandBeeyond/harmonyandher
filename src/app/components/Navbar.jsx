"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About Rupali", href: "/about-rupali" },
        { name: "Our Approach", href: "/our-approach" },
        { name: "Experiences", href: "/experiences" },
        { name: "Testimonials", href: "/testimonials" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <header className="absolute top-0 left-0 z-50 w-full">
            <div className="mx-auto w-full max-w-[1400px] py-3 px-6 sm:px-8 lg:px-12">
                <div className="flex h-[110px] items-center justify-between">

                    {/* ================= LOGO ================= */}
                    <Link
                        href="/"
                        className="relative z-50 flex flex-col items-center text-white"
                    >
                        {/* Replace this with your actual logo image */}
                        <Image
                            src="/images/logo/harmonyherlogo.png"
                            alt="Harmony & Her"
                            width={175}
                            height={175}
                            className="h-auto w-[175px] object-contain"
                            priority
                        />
                    </Link>

                    {/* ================= DESKTOP NAV ================= */}
                    <nav className="hidden items-center gap-8 lg:flex xl:gap-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="
                                    font-serif
                                    text-[20px]
                                    font-semibold
                                    text-white
                                    transition-all
                                    duration-300
                                    hover:text-white/70
                                "
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

          
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle navigation menu"
                        aria-expanded={mobileMenuOpen}
                        className="
                            relative
                            z-50
                            flex
                            h-11
                            w-11
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-white/40
                            bg-white/10
                            backdrop-blur-sm
                            lg:hidden
                        "
                    >
                        <div className="flex w-5 flex-col gap-[5px]">
                            <span
                                className={`block h-[2px] w-full bg-white transition-all duration-300 ${
                                    mobileMenuOpen
                                        ? "translate-y-[7px] rotate-45"
                                        : ""
                                }`}
                            />

                            <span
                                className={`block h-[2px] w-full bg-white transition-all duration-300 ${
                                    mobileMenuOpen
                                        ? "opacity-0"
                                        : ""
                                }`}
                            />

                            <span
                                className={`block h-[2px] w-full bg-white transition-all duration-300 ${
                                    mobileMenuOpen
                                        ? "-translate-y-[7px] -rotate-45"
                                        : ""
                                }`}
                            />
                        </div>
                    </button>
                </div>
            </div>

            <div
                className={`
                    absolute
                    left-0
                    top-0
                    w-full
                    overflow-hidden
                    bg-[#8d1559]/95
                    backdrop-blur-xl
                    transition-all
                    duration-500
                    lg:hidden
                    ${
                        mobileMenuOpen
                            ? "max-h-[600px] opacity-100"
                            : "max-h-0 opacity-0"
                    }
                `}
            >
                <div className="px-6 pb-8 pt-[110px]">
                    <nav className="flex flex-col">
                        {navLinks.map((link, index) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="
                                    border-b
                                    border-white/15
                                    py-4
                                    font-serif
                                    text-[20px]
                                    font-medium
                                    text-white
                                    transition-colors
                                    duration-300
                                    hover:text-white/70
                                "
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Navbar;