import Link from 'next/link'

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
    <footer className="bg-gray-800 text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo & Tagline */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-heading font-bold text-white mb-3">
              PowerShade
            </h2>
            <p className="text-gray-400">
              Charging the future of beach days
            </p>
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
                    href={link.href}
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
                    href={link.href}
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
                    href={link.href}
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
