import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Alex Tremblay",
    location: "Quispamsis, NB",
    rating: 5,
    text: "Valley Pressure Washing transformed my house and concrete driveway, making them look brand new! The team's professionalism and attention to detail were truly impressive. Highly recommend!",
    service: "House & Driveway Washing",
  },
  {
    name: "Marie LeBlanc",
    location: "Rothesay, NB",
    rating: 5,
    text: "I hired them for our storefront windows and parking lot. The results were outstanding — my customers immediately noticed the difference. Fast, professional, and worth every penny.",
    service: "Commercial Washing",
  },
  {
    name: "Daniel Roy",
    location: "Grand Bay-Westfield, NB",
    rating: 5,
    text: "Our home siding was covered in green mold after last winter. One visit from Valley Pressure Washing and it looks absolutely pristine. Super responsive and great pricing too.",
    service: "House Washing",
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-amber-400 fill-amber-400" : "text-muted"}`}
          aria-hidden="true"
        />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest mb-4">
            Customer Reviews
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto text-pretty">
            Real reviews from real customers across the Greater Saint John area.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="bg-card border border-border rounded-2xl p-7 flex flex-col gap-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <Quote className="w-8 h-8 text-primary/20" aria-hidden="true" />
              <blockquote className="text-foreground text-sm leading-relaxed flex-1">
                {`"${t.text}"`}
              </blockquote>
              <div className="flex flex-col gap-2 pt-2 border-t border-border">
                <StarRating rating={t.rating} />
                <div>
                  <p className="font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.location} &middot; {t.service}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
