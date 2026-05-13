'use client'

import { useState } from 'react'
import { MapPin, Facebook, Instagram, Linkedin, Send, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // Redirect to their Google Form
    window.open(
      'https://docs.google.com/forms/d/e/1FAIpQLScYp7btptBTD2UjdV9-lhH4X8xZ7q8p16G6iwFjXN4kJigvhw/viewform?usp=sf_link',
      '_blank'
    )
    setSent(true)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-secondary text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Get In Touch
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold text-foreground text-balance"
            style={{ fontFamily: 'var(--font-heading, var(--font-sans))' }}
          >
            Ready to Clean Up?
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-pretty">
            Contact us today for a free, no-obligation quote. We serve Quispamsis, Rothesay, and the
            greater Saint John area.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Info panel */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {/* Location */}
            <div className="flex items-start gap-4">
              <div className="bg-secondary/10 text-secondary p-3 rounded-xl shrink-0">
                <MapPin size={22} />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">Location</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Quispamsis, New Brunswick
                  <br />
                  Greater Saint John Area
                </p>
              </div>
            </div>

            {/* Social */}
            <div>
              <h3 className="font-bold text-foreground mb-4">Follow Us</h3>
              <div className="flex gap-3">
                <a
                  href="https://facebook.com/profile.php?id=61556412617635"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="bg-card border border-border p-3 rounded-xl text-muted-foreground hover:text-secondary hover:border-secondary transition-colors"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://instagram.com/valleypressurewashing2024/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="bg-card border border-border p-3 rounded-xl text-muted-foreground hover:text-secondary hover:border-secondary transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://linkedin.com/company/103378302"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="bg-card border border-border p-3 rounded-xl text-muted-foreground hover:text-secondary hover:border-secondary transition-colors"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            {/* Quote CTA card */}
            <div className="bg-primary text-primary-foreground rounded-2xl p-6 flex flex-col gap-3">
              <h3 className="font-bold text-lg" style={{ fontFamily: 'var(--font-heading, var(--font-sans))' }}>
                Free Quote Form
              </h3>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">
                Prefer to fill out our detailed quote request form? We&apos;ll get back to you within 24 hours.
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScYp7btptBTD2UjdV9-lhH4X8xZ7q8p16G6iwFjXN4kJigvhw/viewform?usp=sf_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-accent transition-colors self-start"
              >
                Open Quote Form
              </a>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3 bg-card border border-border rounded-2xl p-8">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-12 text-center">
                <CheckCircle size={48} className="text-secondary" />
                <h3 className="text-xl font-bold text-foreground">
                  Thanks for reaching out!
                </h3>
                <p className="text-muted-foreground text-sm">
                  We&apos;ve opened our quote form in a new tab. We&apos;ll be in touch shortly.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="text-secondary text-sm hover:underline mt-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Name <span className="text-secondary">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="bg-background border border-input rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email <span className="text-secondary">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="bg-background border border-input rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message <span className="text-secondary">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your property and what you need cleaned..."
                    className="bg-background border border-input rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-8 py-3.5 rounded-full font-semibold hover:bg-accent transition-colors self-start"
                >
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
