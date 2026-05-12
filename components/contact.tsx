"use client"

import { useState } from "react"
import { MapPin, Facebook, Instagram, Linkedin, Send, CheckCircle } from "lucide-react"

const socialLinks = [
  {
    label: "Facebook",
    href: "https://facebook.com/profile.php?id=61556412617635",
    icon: Facebook,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/valleypressurewashing2024/",
    icon: Instagram,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/103378302/admin/feed/posts/?feedType=following",
    icon: Linkedin,
  },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", message: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest mb-4">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance mb-4">
            Ready to Clean Up?
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto text-pretty">
            Contact us now for a free, no-obligation quote. We&apos;ll respond within one business day.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Info panel */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <div className="bg-primary rounded-2xl p-8 text-white flex flex-col gap-6">
              <h3 className="font-bold text-xl">Valley Pressure Washing</h3>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-sky-300 shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Location</p>
                  <p className="text-white/70 text-sm mt-0.5">72 Laura Drive, Quispamsis, NB E2E 6B4</p>
                  <p className="text-white/70 text-sm">Canada (Greater Saint John Area)</p>
                </div>
              </div>

              {/* Service Area Map placeholder */}
              <div className="rounded-xl overflow-hidden aspect-video bg-primary-foreground/10 border border-white/20">
                <img
                  src="/placeholder.svg?height=200&width=360"
                  alt="Service area map placeholder"
                  className="w-full h-full object-cover opacity-50"
                />
                <div className="sr-only">Map showing 72 Laura Drive, Quispamsis, NB, Canada, E2E 6B4</div>
              </div>

              {/* Social links */}
              <div>
                <p className="text-sm font-semibold mb-3">Follow Us</p>
                <div className="flex gap-3">
                  {socialLinks.map(({ label, href, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/15 hover:bg-white/25 transition-colors text-white"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-card rounded-2xl border border-border p-8 shadow-sm">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center gap-4 text-center py-10">
                <CheckCircle className="w-14 h-14 text-primary" />
                <h3 className="text-xl font-bold text-foreground">Message Sent!</h3>
                <p className="text-muted-foreground text-sm max-w-xs">
                  Thanks for reaching out. We&apos;ll get back to you within one business day with your free quote.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", message: "" }) }}
                  className="mt-2 text-sm text-primary font-semibold underline underline-offset-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h3 className="font-bold text-foreground text-lg mb-1">Send Us a Message</h3>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Your Name <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Smith"
                    className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email Address <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@email.com"
                    className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message <span className="text-destructive">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your property and what you need cleaned..."
                    className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-all shadow-md"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>

                <p className="text-xs text-muted-foreground">
                  By submitting this form, you agree to be contacted regarding your pressure washing inquiry.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
