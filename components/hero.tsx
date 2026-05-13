import Image from 'next/image'
import { ArrowDown } from 'lucide-react'

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background image */}
      <Image
        src="/hero.png"
        alt="Professional pressure washing technician at work"
        fill
        className="object-cover object-center"
        priority
        quality={90}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-primary/60" />

      {/* Subtle blue bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-primary/80 to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-secondary text-sm font-semibold tracking-[0.2em] uppercase mb-4">
          Quispamsis &amp; Greater Saint John Area
        </p>
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight text-balance mb-6"
          style={{ fontFamily: 'var(--font-heading, var(--font-sans))' }}
        >
          Restore Your Property's{' '}
          <span className="text-secondary">True Shine</span>
        </h1>
        <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10 text-pretty">
          Valley Pressure Washing rejuvenates your home or business exterior with the highest quality
          pressure washing services — powered by passionate local entrepreneurs.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-secondary text-secondary-foreground px-8 py-4 rounded-full text-base font-semibold hover:bg-accent transition-colors shadow-lg"
          >
            Get a Free Quote
          </a>
          <a
            href="#services"
            className="border border-primary-foreground/40 text-primary-foreground px-8 py-4 rounded-full text-base font-semibold hover:bg-white/10 transition-colors"
          >
            Our Services
          </a>
        </div>

        {/* Scroll cue */}
        <div className="mt-16 flex flex-col items-center gap-2 text-primary-foreground/50">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown size={16} className="animate-bounce" />
        </div>
      </div>
    </section>
  )
}
