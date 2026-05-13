import { Leaf, Shield, Users } from 'lucide-react'

const pillars = [
  {
    icon: Leaf,
    title: 'Eco-Friendly',
    description: 'We use biodegradable, environmentally safe cleaning solutions that protect your landscape and local waterways.',
  },
  {
    icon: Shield,
    title: 'Fully Insured',
    description: 'Your property is in safe hands. We carry full liability insurance for every job, big or small.',
  },
  {
    icon: Users,
    title: 'Local Team',
    description: 'Proudly founded and operated by young entrepreneurs right here in the Greater Saint John area.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-muted/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-secondary text-sm font-semibold tracking-[0.2em] uppercase mb-3">
              Who We Are
            </p>
            <h2
              className="text-3xl md:text-5xl font-bold text-foreground leading-tight text-balance mb-6"
              style={{ fontFamily: 'var(--font-heading, var(--font-sans))' }}
            >
              Built on Hard Work &amp; Exceptional Service
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 text-pretty">
              Founded on the principles of hard work and exceptional service, Valley Pressure Washing
              is a proud local business in the Greater Saint John area led by young entrepreneurs
              passionate about making a difference in our community.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10 text-pretty">
              With a focus on using eco-friendly cleaning solutions and the latest pressure washing
              technology, we strive to deliver unparalleled results while protecting our environment.
              Our commitment to excellence ensures every project meets our high standards.
            </p>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScYp7btptBTD2UjdV9-lhH4X8xZ7q8p16G6iwFjXN4kJigvhw/viewform?usp=sf_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-full font-semibold hover:bg-secondary transition-colors"
            >
              Get a Free Quote
            </a>
          </div>

          {/* Pillars */}
          <div className="flex flex-col gap-6">
            {pillars.map((pillar) => {
              const Icon = pillar.icon
              return (
                <div
                  key={pillar.title}
                  className="flex items-start gap-5 bg-card p-6 rounded-2xl border border-border hover:shadow-md transition-shadow"
                >
                  <div className="bg-secondary/10 text-secondary p-3 rounded-xl shrink-0">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3
                      className="font-bold text-foreground mb-1"
                      style={{ fontFamily: 'var(--font-heading, var(--font-sans))' }}
                    >
                      {pillar.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
