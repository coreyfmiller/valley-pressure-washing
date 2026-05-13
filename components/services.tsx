import { Home, Droplets, Building2 } from 'lucide-react'

const services = [
  {
    icon: Home,
    title: 'House Washing',
    description:
      'Residential washing revitalizes homes with cutting-edge techniques. We safely remove dirt, mold, mildew, and algae from your siding, roof, and exterior surfaces.',
    features: ['Soft-wash technology', 'Eco-friendly solutions', 'Siding & roofs'],
    image: 'https://primary.jwwb.nl/public/g/j/h/temp-ixeezrybfvaorktfpdiz/landry-high.jpg?enable-io=true&enable=upscale&crop=828%2C995%2Cx0%2Cy57%2Csafe&width=600&height=720',
  },
  {
    icon: Droplets,
    title: 'Window Washing',
    description:
      'Our window cleaning brings back your shine and allows you to appreciate the beauty of the outdoors. Crystal clear results inside and out.',
    features: ['Streak-free finish', 'Interior & exterior', 'Residential & commercial'],
    image: 'https://primary.jwwb.nl/public/g/j/h/temp-ixeezrybfvaorktfpdiz/img_4302-high.jpg?enable-io=true&enable=upscale&crop=1920%2C2307%2Cx0%2Cy127%2Csafe&width=600&height=720',
  },
  {
    icon: Building2,
    title: 'Commercial Washing',
    description:
      'Commercial washing enhances business appeal with a professional clean. First impressions matter — let us make yours spotless.',
    features: ['Storefronts & lots', 'Scheduled maintenance', 'Minimal disruption'],
    image: 'https://primary.jwwb.nl/public/g/j/h/temp-ixeezrybfvaorktfpdiz/screenshot-2024-06-30-203446-high.png?enable-io=true&enable=upscale&crop=594%2C713%2Cx60%2Cy0%2Csafe&width=600&height=720',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-secondary text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            What We Do
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold text-foreground text-balance"
            style={{ fontFamily: 'var(--font-heading, var(--font-sans))' }}
          >
            Our Services
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto leading-relaxed text-pretty">
            From homes to businesses, we have the equipment and expertise to make every surface shine.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/30 group-hover:bg-primary/10 transition-colors" />
                  {/* Icon badge */}
                  <div className="absolute bottom-4 left-4 bg-secondary text-secondary-foreground p-3 rounded-xl shadow-md">
                    <Icon size={22} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3
                    className="text-xl font-bold text-foreground mb-2"
                    style={{ fontFamily: 'var(--font-heading, var(--font-sans))' }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>
                  <ul className="space-y-1.5">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-foreground/70">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
