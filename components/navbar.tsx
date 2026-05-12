"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Droplets } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="#home" className="flex items-center gap-2.5 group" aria-label="Valley Pressure Washing home">
          <span className={cn(
            "flex items-center justify-center w-9 h-9 rounded-lg transition-colors",
            scrolled ? "bg-primary text-primary-foreground" : "bg-white/20 text-white"
          )}>
            <Droplets className="w-5 h-5" />
          </span>
          <span className={cn(
            "font-bold text-lg leading-tight transition-colors",
            scrolled ? "text-foreground" : "text-white"
          )}>
            Valley<br />
            <span className={cn("font-normal text-sm", scrolled ? "text-muted-foreground" : "text-white/80")}>
              Pressure Washing
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors",
                scrolled
                  ? "text-foreground hover:text-primary"
                  : "text-white/90 hover:text-white"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className={cn(
            "hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all",
            scrolled
              ? "bg-primary text-primary-foreground hover:bg-primary/90"
              : "bg-white text-primary hover:bg-white/90"
          )}
        >
          Free Quote
        </a>

        {/* Mobile menu toggle */}
        <button
          className={cn(
            "md:hidden p-2 rounded-md transition-colors",
            scrolled ? "text-foreground" : "text-white"
          )}
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-white border-t border-border px-6 py-5 flex flex-col gap-4 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-foreground font-medium text-sm py-1 hover:text-primary transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="#contact"
            className="mt-2 inline-flex justify-center items-center px-5 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-semibold"
            onClick={() => setOpen(false)}
          >
            Get a Free Quote
          </a>
        </div>
      )}
    </header>
  )
}
