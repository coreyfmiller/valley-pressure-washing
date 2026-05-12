import { Leaf, Users, Award, MapPin } from "lucide-react"

const values = [
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "We use biodegradable, environmentally responsible cleaning solutions that are safe for your family, pets, and the surrounding ecosystem.",
  },
  {
    icon: Users,
    title: "Local Entrepreneurs",
    description: "Founded and run by passionate young entrepreneurs from the Greater Saint John area — we genuinely care about our community.",
  },
  {
    icon: Award,
    title: "Meticulous Standards",
    description: "Every project is held to our high internal standards. We don't leave until the job is done right and you're fully satisfied.",
  },
  {
    icon: MapPin,
    title: "Proudly Local",
    description: "Based in Quispamsis, New Brunswick, we serve the entire Greater Saint John area with fast response times and personal service.",
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row gap-14 lg:gap-20 items-center">
          {/* Image side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
              <img
                src="/placeholder.svg?height=600&width=800"
                alt="Valley Pressure Washing team at work"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-4 md:right-6 bg-white rounded-xl shadow-xl px-6 py-4 flex items-center gap-3 border border-border">
              <span className="text-3xl font-bold text-primary">100%</span>
              <span className="text-sm text-muted-foreground font-medium leading-tight">
                Satisfaction<br />Guaranteed
              </span>
            </div>
          </div>

          {/* Text side */}
          <div className="w-full lg:w-1/2">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest mb-5">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance mb-5">
              Local Passion. Professional Results.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 text-pretty">
              Founded on the principles of hard work and exceptional service, Valley Pressure Washing
              is a proud local business in the Greater Saint John area led by young entrepreneurs
              passionate about making a difference in our community. With a focus on using eco-friendly
              cleaning solutions and the latest pressure washing technology, we strive to deliver
              unparalleled results while protecting our environment.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex flex-col gap-2">
                  <div className="flex items-center gap-2.5">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary shrink-0">
                      <Icon className="w-4 h-4" />
                    </span>
                    <h3 className="font-semibold text-foreground text-sm">{title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed pl-10">
                    {description}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-10 inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all shadow-md"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
