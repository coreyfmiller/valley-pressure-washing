import { Droplets, Facebook, Instagram, Linkedin } from "lucide-react"

const socialLinks = [
  { label: "Facebook", href: "https://facebook.com/profile.php?id=61556412617635", icon: Facebook },
  { label: "Instagram", href: "https://instagram.com/valleypressurewashing2024/", icon: Instagram },
  { label: "LinkedIn", href: "https://linkedin.com/company/103378302", icon: Linkedin },
]

const services = [
  { label: "House Washing", href: "#services" },
  { label: "Window Washing", href: "#services" },
  { label: "Commercial Washing", href: "#services" },
]

const links = [
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/15">
                <Droplets className="w-5 h-5 text-sky-300" />
              </span>
              <span className="font-bold text-white">
                Valley Pressure Washing
              </span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed mb-5 text-pretty">
              Professional pressure washing services in Quispamsis, New Brunswick.
              Proudly serving the Greater Saint John area.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-white"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white text-sm mb-4 uppercase tracking-wider">Services</h3>
            <ul className="flex flex-col gap-2.5">
              {services.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-white text-sm mb-4 uppercase tracking-wider">Company</h3>
            <ul className="flex flex-col gap-2.5">
              {links.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location */}
          <div>
            <h3 className="font-semibold text-white text-sm mb-4 uppercase tracking-wider">Location</h3>
            <address className="not-italic flex flex-col gap-1.5">
              <p className="text-sm text-white/60">Quispamsis, New Brunswick</p>
              <p className="text-sm text-white/60">Greater Saint John Area</p>
            </address>
            <a
              href="#contact"
              className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90 transition-all"
            >
              Get a Free Quote
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            &copy; {year} Valley Pressure Washing. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Quispamsis, New Brunswick, Canada
          </p>
        </div>
      </div>
    </footer>
  )
}
