import { ArrowRight, ShieldCheck, Leaf, Star } from "lucide-react"

const badges = [
  { icon: ShieldCheck, label: "Fully Insured" },
  { icon: Leaf, label: "Eco-Friendly Solutions" },
  { icon: Star, label: "5-Star Rated" },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image placeholder */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-accent-blue"
        aria-hidden="true"
      >
        {/* Simulated overlay texture */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>

      {/* Placeholder image representation */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <img
          src="/placeholder.svg?height=1080&width=1920"
          alt=""
          className="w-full h-full object-cover opacity-20 mix-blend-overlay"
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-primary/60" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10 text-center">
        <span className="inline-block mb-5 px-4 py-1.5 rounded-full bg-white/15 text-white/90 text-xs font-semibold uppercase tracking-widest border border-white/20">
          Greater Saint John Area
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight text-balance mb-6">
          Professional Pressure<br />
          <span className="text-sky-300">Washing Services</span>
        </h1>

        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed mb-10 text-pretty">
          We rejuvenate your home or business exterior with the highest quality pressure
          washing in Quispamsis, New Brunswick. Powered by local entrepreneurs dedicated
          to meticulous results.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-white text-primary font-bold text-sm hover:bg-white/90 transition-all shadow-xl"
          >
            Get a Free Quote
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-transparent text-white font-semibold text-sm border-2 border-white/40 hover:border-white/80 transition-all"
          >
            Our Services
          </a>
        </div>

        {/* Trust badges */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
          {badges.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2.5 text-white/80">
              <Icon className="w-4 h-4 text-sky-300 shrink-0" />
              <span className="text-sm font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-background to-transparent"
        aria-hidden="true"
      />
    </section>
  )
}
