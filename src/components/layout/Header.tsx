'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSpring, animated } from '@react-spring/web'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'Our Product' },
  { href: '/uses', label: 'Use Cases' },
  { href: '/shop', label: 'Shop' },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuSpring = useSpring({
    opacity: isMenuOpen ? 1 : 0,
    transform: isMenuOpen ? 'translateY(0)' : 'translateY(-20px)',
    config: { tension: 300, friction: 30 },
  })

  const line1Spring = useSpring({
    transform: isMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'rotate(0deg) translate(0px, 0px)',
    config: { tension: 300, friction: 20 },
  })

  const line2Spring = useSpring({
    opacity: isMenuOpen ? 0 : 1,
    config: { tension: 300, friction: 20 },
  })

  const line3Spring = useSpring({
    transform: isMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'rotate(0deg) translate(0px, 0px)',
    config: { tension: 300, friction: 20 },
  })

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white shadow-md'
      }`}
    >
      <div className="container">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-2xl font-heading font-bold text-ocean-500 hover:text-ocean-600 transition-colors"
          >
            PowerShade
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || 
                (link.href !== '/' && pathname.startsWith(link.href))
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                      isActive
                        ? 'text-ocean-500 bg-ocean-50'
                        : 'text-gray-600 hover:text-ocean-500 hover:bg-ocean-50/50'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <animated.span
                style={line1Spring}
                className="block w-full h-0.5 bg-gray-700 origin-center"
              />
              <animated.span
                style={line2Spring}
                className="block w-full h-0.5 bg-gray-700"
              />
              <animated.span
                style={line3Spring}
                className="block w-full h-0.5 bg-gray-700 origin-center"
              />
            </div>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <animated.div
            style={menuSpring}
            className="md:hidden absolute left-0 right-0 top-full bg-white shadow-lg border-t"
          >
            <ul className="py-4 px-4 space-y-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || 
                  (link.href !== '/' && pathname.startsWith(link.href))
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block px-4 py-3 rounded-lg font-medium transition-all ${
                        isActive
                          ? 'text-ocean-500 bg-ocean-50'
                          : 'text-gray-600 hover:text-ocean-500 hover:bg-ocean-50/50'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </animated.div>
        )}
      </div>
    </header>
  )
}
