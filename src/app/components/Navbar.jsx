"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Rupali", href: "/about-rupali" },
  { name: "Our Approach", href: "/our-approach" },
  { name: "Experiences", href: "/experiences" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
];

function MobileMenu({ onClose, pathname }) {
  const dialog = useRef(null);
  const [closing, setClosing] = useState(false);
  const requestClose = () => setClosing(true);
  useEffect(() => {
    const element = dialog.current;
    element.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const desktop = window.matchMedia("(min-width: 1024px)");
    const handleResize = () => { if (desktop.matches) onClose(); };
    desktop.addEventListener("change", handleResize);
    handleResize();
    return () => {
      desktop.removeEventListener("change", handleResize);
      element.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  return (
    <dialog ref={dialog} aria-label="Mobile navigation" onCancel={event => { event.preventDefault(); requestClose(); }} data-closing={closing} onAnimationEnd={event => { if (event.target === event.currentTarget && closing) onClose(); }} className="mobile-menu-curtain fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none overflow-hidden border-0 bg-[#8d1559] p-0 text-white backdrop:bg-transparent" data-lenis-prevent>
      <div className="flex h-full min-h-0 flex-col pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]">
        <div className="flex shrink-0 items-center justify-between gap-5 border-b border-white/15 px-6 py-4">
          <Link href="/" onClick={requestClose} aria-label="Harmony and Her home"><Image src="/images/logo/harmonyherlogo.png" alt="Harmony & Her" width={175} height={175} className="h-auto w-[112px] object-contain" /></Link>
          <button type="button" onClick={requestClose} aria-label="Close navigation menu" className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/40 bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"><X className="h-6 w-6" aria-hidden="true" /></button>
        </div>
        <nav aria-label="Mobile" className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-6 pb-8">
          {navLinks.map(link => <Link key={link.href} href={link.href} onClick={requestClose} aria-current={pathname === link.href ? "page" : undefined} className="block border-b border-white/20 py-4 font-serif text-[18px] font-medium leading-snug text-white transition-colors hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-white">{link.name}</Link>)}
        </nav>
      </div>
    </dialog>
  );
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), []);
  return (
    <header className="absolute top-0 left-0 z-50 w-full">
      <div className="mx-auto w-full max-w-[1400px] px-6 py-3 sm:px-8 lg:px-12">
        <div className="flex h-[110px] items-center justify-between">
          <Link href="/" className="flex flex-col items-center text-white"><Image src="/images/logo/harmonyherlogo.png" alt="Harmony & Her" width={175} height={175} className="h-auto w-[140px] object-contain lg:w-[175px]" priority /></Link>
          <nav aria-label="Main" className="hidden items-center gap-8 lg:flex xl:gap-10">{navLinks.map(link => <Link key={link.href} href={link.href} aria-current={pathname === link.href ? "page" : undefined} className="font-serif text-[20px] font-semibold text-white transition-colors duration-300 hover:text-white/70">{link.name}</Link>)}</nav>
          <button type="button" onClick={() => setMobileMenuOpen(true)} aria-label="Open navigation menu" aria-expanded={mobileMenuOpen} aria-haspopup="dialog" className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/40 bg-white/10 text-white backdrop-blur-sm lg:hidden"><Menu className="h-6 w-6" aria-hidden="true" /></button>
        </div>
      </div>
      {mobileMenuOpen && <MobileMenu onClose={closeMobileMenu} pathname={pathname} />}
    </header>
  );
}
