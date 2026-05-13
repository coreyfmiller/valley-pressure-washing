import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Alex Tremblay',
    location: 'Quispamsis, NB',
    rating: 5,
    text: 'Valley Pressure Washing transformed my house and concrete driveway, making them look brand new! The team\'s professionalism and attention to detail were truly impressive. Highly recommend!',
  },
  {
    name: 'Marie-Claire Boucher',
    location: 'Rothesay, NB',
    rating: 5,
    text: 'Exceptional service from start to finish. My windows have never been cleaner. The crew was punctual, friendly, and left everything spotless. Will absolutely be calling them again next season.',
  },
  {
    name: 'David Landry',
    location: 'Saint John, NB',
    rating: 5,
    text: 'Used them for our commercial property and the results were outstanding. Our storefront looks incredible — customers have even commented on how clean everything looks. Great local business!',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-secondary text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Customer Reviews
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold text-primary-foreground text-balance"
            style={{ fontFamily: 'var(--font-heading, var(--font-sans))' }}
          >
            What Our Clients Say
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white/5 border border-white/10 rounded-2xl p-7 flex flex-col gap-4 hover:bg-white/10 transition-colors"
            >
              {/* Stars */}
              <div className="flex gap-1" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-secondary text-secondary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-primary-foreground/80 text-sm leading-relaxed flex-1">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-3 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-secondary/30 flex items-center justify-center text-secondary font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-primary-foreground text-sm font-semibold">{t.name}</p>
                  <p className="text-primary-foreground/50 text-xs">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
