import { Home, AppWindow, Building2, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Home,
    title: "House Washing",
    tagline: "Restore Your Home's Curb Appeal",
    description:
      "Residential washing revitalizes homes with cutting-edge soft wash and pressure washing techniques. We safely remove mold, mildew, algae, and grime from siding, roofs, driveways, and decks — leaving your home looking brand new.",
    features: ["Soft wash safe for all siding types", "Driveway & walkway cleaning", "Deck & patio restoration", "Roof washing"],
    image: "/placeholder.svg?height=480&width=640",
    imageAlt: "Clean suburban house after pressure washing",
  },
  {
    icon: AppWindow,
    title: "Window Washing",
    tagline: "Crystal Clear Every Time",
    description:
      "Our professional window cleaning brings back your shine and allows you to appreciate the beauty of the outdoors. From ground-level panes to multi-storey windows, we deliver streak-free results every time.",
    features: ["Streak-free finish", "Interior & exterior cleaning", "Screen cleaning included", "All window types"],
    image: "/placeholder.svg?height=480&width=640",
    imageAlt: "Sparkling clean windows on a home",
  },
  {
    icon: Building2,
    title: "Commercial Washing",
    tagline: "First Impressions Matter",
    description:
      "Commercial washing enhances business appeal with a professional clean. We work with storefronts, office buildings, warehouses, and parking lots — scheduling around your hours to minimize disruption.",
    features: ["Storefront & signage cleaning", "Parking lot & sidewalk washing", "Fleet & equipment cleaning", "Flexible scheduling"],
    image: "/placeholder.svg?height=480&width=640",
    imageAlt: "Clean commercial building exterior",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest mb-4">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto text-pretty">
            From single-family homes to large commercial properties, we deliver
            thorough, professional results every time.
          </p>
        </div>

        {/* Service cards */}
        <div className="flex flex-col gap-12">
          {services.map((service, index) => {
            const Icon = service.icon
            const isReversed = index % 2 !== 0
            return (
              <div
                key={service.title}
                className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 lg:gap-14 items-center rounded-2xl border border-border bg-card shadow-sm overflow-hidden`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2 aspect-[4/3] lg:aspect-auto lg:self-stretch relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="w-full h-full object-cover"
                  />
                  {/* Decorative overlay */}
                  <div className="absolute inset-0 bg-primary/10" aria-hidden="true" />
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col gap-5">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 text-primary">
                      <Icon className="w-5 h-5" />
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      {service.tagline}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed text-pretty">
                    {service.description}
                  </p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className="mt-2 inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
                  >
                    Request a Quote
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
