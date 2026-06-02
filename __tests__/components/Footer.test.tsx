import React from 'react'
import { render, screen } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import Footer from '../../src/components/footer'

// Extend Jest matchers
expect.extend(toHaveNoViolations)

describe('Footer component', () => {
  it('should render the footer', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    expect(footer).toBeInTheDocument()
  })

  it('should display the Contact & Location section', () => {
    render(<Footer />)
    expect(screen.getByText('Contact Us')).toBeInTheDocument()
  })

  it('should display the Legal section', () => {
    render(<Footer />)
    expect(screen.getByText('Legal')).toBeInTheDocument()
  })

  it('should display the Fair Housing section', () => {
    render(<Footer />)
    expect(screen.getAllByText(/Fair Housing/i).length).toBeGreaterThan(0)
  })

  it('should display the Project Rebirth copyright', () => {
    render(<Footer />)
    expect(screen.getAllByText(/Project Rebirth/i).length).toBeGreaterThan(0)
  })

  it('should have an email contact link', () => {
    render(<Footer />)
    const links = screen.getAllByRole('link')
    const emailLink = links.find((link) => link.getAttribute('href')?.includes('mailto:'))
    expect(emailLink).toBeDefined()
  })

  it('should have a phone contact link', () => {
    render(<Footer />)
    const links = screen.getAllByRole('link')
    const phoneLink = links.find((link) => link.getAttribute('href')?.includes('tel:'))
    expect(phoneLink).toBeDefined()
  })

  it('should not have accessibility violations', async () => {
    const { container } = render(<Footer />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
