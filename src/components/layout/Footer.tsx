import { Link } from 'react-router-dom'

const footerLinks = {
  shop: [
    { href: '/shop#umbrellas', label: 'PowerShade Umbrellas' },
    { href: '/shop#accessories', label: 'Accessories' },
    { href: '/shop#bundles', label: 'Bundles' },
  ],
  company: [
    { href: '/about', label: 'About Us' },
  ],
  support: [
    { href: '/shop#faq', label: 'FAQ' },
    { href: '/shop#faq', label: 'Shipping' },
    { href: '/shop#faq', label: 'Returns' },
  ],
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-800 text-white border-t border-slate-700">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo & Tagline */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-heading font-bold text-white mb-3">
              PowerShade
            </h2>
            <p className="text-gray-400 mb-4">
              Charging the future of beach days
            </p>
            <a
              href="https://www.linkedin.com/company/powershadeumbrellas"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-ocean-500 text-white hover:bg-ocean-400 transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-ocean-300 focus:ring-offset-2 focus:ring-offset-slate-800"
              aria-label="Follow PowerShade on LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold text-ocean-200 mb-4">
              Shop
            </h3>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold text-ocean-200 mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold text-ocean-200 mb-4">
              Support
            </h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={link.href + index}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container py-6">
          <p className="text-center text-gray-400 text-sm">
            &copy; {currentYear} PowerShade. All rights reserved. Proudly based in Michigan.
          </p>
        </div>
      </div>
    </footer>
  )
}
