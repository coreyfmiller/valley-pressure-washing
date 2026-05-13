import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Image
              src="/logo.png"
              alt="Valley Pressure Washing logo"
              width={520}
              height={176}
              className="h-40 w-auto object-contain"
            />
            <p className="text-primary-foreground/60 text-sm leading-relaxed max-w-xs">
              Professional pressure washing services in Quispamsis and the Greater Saint John area.
              Local. Eco-friendly. Exceptional.
            </p>
            <div className="flex gap-3 mt-1">
              <a
                href="https://facebook.com/profile.php?id=61556412617635"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-primary-foreground/50 hover:text-secondary transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://instagram.com/valleypressurewashing2024/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-primary-foreground/50 hover:text-secondary transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://linkedin.com/company/103378302"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-primary-foreground/50 hover:text-secondary transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-sm tracking-widest uppercase text-primary-foreground/50 mb-4">
              Services
            </h3>
            <ul className="flex flex-col gap-2">
              {['House Washing', 'Window Washing', 'Commercial Washing'].map((s) => (
                <li key={s}>
                  <Link
                    href="#services"
                    className="text-primary-foreground/70 hover:text-secondary text-sm transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-sm tracking-widest uppercase text-primary-foreground/50 mb-4">
              Contact
            </h3>
            <ul className="flex flex-col gap-2 text-sm text-primary-foreground/70">
              <li>Quispamsis, New Brunswick</li>
              <li>Greater Saint John Area</li>
              <li>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScYp7btptBTD2UjdV9-lhH4X8xZ7q8p16G6iwFjXN4kJigvhw/viewform?usp=sf_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors"
                >
                  Get a Free Quote →
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-primary-foreground/40">
          <p>© {new Date().getFullYear()} Valley Pressure Washing. All rights reserved.</p>
          <p>Quispamsis, New Brunswick</p>
        </div>
      </div>
    </footer>
  )
}
