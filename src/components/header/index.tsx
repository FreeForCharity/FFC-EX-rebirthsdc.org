'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FiMenu, FiChevronDown } from 'react-icons/fi'
import { RxCross2 } from 'react-icons/rx'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from '@/components/project-rebirth/Logo'
import { NAV, type NavItem } from '@/data/project-rebirth/site'

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const pathname = usePathname()
  const prevPathname = useRef(pathname)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menus on route change — use callback to avoid set-state-in-effect lint warning
  const closeMenus = useCallback(() => {
    setIsMobileMenuOpen(false)
    setOpenDropdown(null)
  }, [])

  useEffect(() => {
    if (prevPathname.current !== pathname) {
      prevPathname.current = pathname
      closeMenus()
    }
  }, [pathname, closeMenus])

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href))

  const linkClass = (href: string) =>
    `flex items-center gap-1 px-3 py-2 text-[13px] font-nav font-semibold uppercase tracking-wide transition-colors duration-200 ${
      isActive(href) ? 'text-[var(--pr-maroon)]' : 'text-[#2a2f3a] hover:text-[var(--pr-maroon)]'
    }`

  return (
    <header
      id="header"
      className={`w-full bg-white shadow-sm fixed top-0 left-0 right-0 z-50 flex items-center border-b-2 border-[var(--pr-maroon)] transition-all duration-300 ${
        isScrolled ? 'h-[64px]' : 'h-[84px]'
      }`}
    >
      <div className="pr-container w-full flex items-center justify-between">
        <Logo compact={isScrolled} />

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-2" aria-label="Main navigation">
          {/* Skip to content link — accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded focus:bg-[var(--pr-maroon)] focus:px-4 focus:py-2 focus:text-white focus:text-sm focus:font-bold"
          >
            Skip to main content
          </a>
          <ul className="flex items-center" role="list">
            {NAV.map((item: NavItem) => (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => item.children && setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={linkClass(item.href)}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  aria-haspopup={item.children ? 'true' : undefined}
                  aria-expanded={item.children ? openDropdown === item.label : undefined}
                >
                  {item.label}
                  {item.children && <FiChevronDown className="h-3.5 w-3.5" aria-hidden="true" />}
                </Link>

                {item.children && (
                  <AnimatePresence>
                    {openDropdown === item.label && (
                      <motion.ul
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18 }}
                        className="absolute left-0 top-full w-72 bg-white shadow-xl border-t-2 border-[var(--pr-maroon)] py-2"
                        role="menu"
                      >
                        {item.children.map((child) => (
                          <li key={child.label} role="none">
                            <Link
                              href={child.href}
                              className="block px-4 py-2 text-[13px] text-[#2a2f3a] hover:bg-[var(--pr-blueprint)] hover:text-[var(--pr-maroon)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--pr-maroon)] focus-visible:outline-offset-[-2px]"
                              role="menuitem"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                )}
              </li>
            ))}
          </ul>

          {/* Donate button in header */}
          <a
            href="https://www.zeffy.com/en-US/donation-form/project-rebirth-uniting-communities-to-eradicate-homelessness"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 inline-flex items-center gap-1.5 rounded-md bg-[var(--pr-maroon)] px-4 py-2 text-[12px] font-nav font-bold uppercase tracking-wide text-white transition-all hover:bg-[var(--pr-maroon-dark)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--pr-maroon)]"
          >
            Donate
          </a>
        </nav>

        {/* Mobile: donate + hamburger */}
        <div className="lg:hidden flex items-center gap-2">
          <a
            href="https://www.zeffy.com/en-US/donation-form/project-rebirth-uniting-communities-to-eradicate-homelessness"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md bg-[var(--pr-maroon)] px-3 py-1.5 text-[11px] font-nav font-bold uppercase tracking-wide text-white"
          >
            Donate
          </a>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-[var(--pr-maroon)] focus-visible:outline-2 focus-visible:outline-[var(--pr-maroon)] focus-visible:rounded"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? (
              <RxCross2 className="h-6 w-6" aria-hidden="true" />
            ) : (
              <FiMenu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className={`lg:hidden absolute left-0 w-full overflow-hidden z-40 ${
              isScrolled ? 'top-[62px]' : 'top-[82px]'
            }`}
          >
            <nav
              className="mx-auto px-6 py-4 bg-white border-t-2 border-[var(--pr-maroon)] shadow-lg max-h-[80vh] overflow-auto"
              aria-label="Mobile navigation"
            >
              <ul className="space-y-1" role="list">
                {NAV.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className={`block px-4 py-2 rounded text-sm font-nav font-semibold uppercase tracking-wide focus-visible:outline-2 focus-visible:outline-[var(--pr-maroon)] ${
                        isActive(item.href)
                          ? 'bg-[var(--pr-blueprint)] text-[var(--pr-maroon)]'
                          : 'text-[#2a2f3a] hover:bg-gray-100'
                      }`}
                      aria-current={isActive(item.href) ? 'page' : undefined}
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <ul className="ml-4 mt-1 space-y-1 border-l border-[var(--pr-maroon)]/30 pl-3">
                        {item.children.map((child) => (
                          <li key={child.label}>
                            <Link
                              href={child.href}
                              className="block px-2 py-1.5 text-[13px] text-[#4a4f5a] hover:text-[var(--pr-maroon)] focus-visible:outline-2 focus-visible:outline-[var(--pr-maroon)] focus-visible:rounded"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
