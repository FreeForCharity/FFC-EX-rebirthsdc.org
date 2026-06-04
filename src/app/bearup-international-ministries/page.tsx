'use client'

import React, { useState, useEffect, useRef, FormEvent } from 'react'
import './bim.css'

const BimLogo = () => (
  <svg
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Bearup International Ministries emblem"
  >
    <circle cx="50" cy="50" r="49" fill="#2a6682" />
    <circle
      cx="50"
      cy="50"
      r="44.5"
      fill="none"
      stroke="#ffffff"
      strokeOpacity=".22"
      strokeWidth="1.5"
    />
    <g fill="none" stroke="#ffffff" strokeLinecap="round">
      <circle
        cx="50"
        cy="64"
        r="21"
        strokeOpacity=".5"
        strokeWidth="2"
        fill="#ffffff"
        fillOpacity=".06"
      />
      <ellipse cx="50" cy="64" rx="8.5" ry="21" strokeOpacity=".4" strokeWidth="1.6" />
      <path d="M30.4 57.5H69.6" strokeOpacity=".38" strokeWidth="1.6" />
      <path d="M31.6 71H68.4" strokeOpacity=".38" strokeWidth="1.6" />
    </g>
    <g fill="#e2a23b">
      <rect x="46.6" y="12" width="6.8" height="39" rx="2" />
      <rect x="38" y="24.6" width="24" height="6.8" rx="2" />
    </g>
  </svg>
)

export default function BearupInternationalMinistriesPage() {
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [formSent, setFormSent] = useState(false)

  const evTypeRef = useRef<HTMLSelectElement>(null)
  const evNameRef = useRef<HTMLInputElement>(null)
  const evPhoneRef = useRef<HTMLInputElement>(null)
  const evEmailRef = useRef<HTMLInputElement>(null)
  const evDateRef = useRef<HTMLInputElement>(null)
  const evGuestsRef = useRef<HTMLInputElement>(null)
  const evDetailsRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const openDrawer = () => setDrawerOpen(true)
  const closeDrawer = () => setDrawerOpen(false)

  const handleEventForm = (e: FormEvent) => {
    e.preventDefault()
    const type = evTypeRef.current?.value || ''
    const name = evNameRef.current?.value || ''
    const phone = evPhoneRef.current?.value || ''
    const email = evEmailRef.current?.value || ''
    const date = evDateRef.current?.value || ''
    const guests = evGuestsRef.current?.value || ''
    const details = evDetailsRef.current?.value || ''

    if (!type || !name || !email) return

    const subject = `Event Request: ${type} — ${name}`
    const lines = [
      `Event type: ${type}`,
      `Name: ${name || '—'}`,
      `Email: ${email || '—'}`,
      `Phone: ${phone || '—'}`,
      `Preferred date: ${date || '—'}`,
      `Estimated guests: ${guests || '—'}`,
      '',
      'Details:',
      details || '—',
    ]
    const href =
      'mailto:Info@bearupinternationalministries.org' +
      '?subject=' +
      encodeURIComponent(subject) +
      '&body=' +
      encodeURIComponent(lines.join('\n'))
    window.location.href = href
    setFormSent(true)
  }

  return (
    <div className="bim">
      {/* ============ HEADER ============ */}
      <header id="header" className={`bim-header${scrolled ? ' scrolled' : ''}`}>
        <div className="nav container">
          <a className="brand" href="#top" aria-label="Bearup International Ministries home">
            <span className="brand-mark">
              <BimLogo />
            </span>
            <span className="brand-name">
              Bearup International<span>Ministries</span>
            </span>
          </a>
          <nav>
            <ul className="menu">
              <li>
                <a href="#top" className="active">
                  Home
                </a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#visit">Visit</a>
              </li>
              <li>
                <a href="#ministries">Ministries</a>
              </li>
              <li>
                <a href="#schedule">Schedule</a>
              </li>
              <li>
                <a href="#leadership">Leadership</a>
              </li>
              <li>
                <a href="#board">Board</a>
              </li>
              <li>
                <a href="#give">Give</a>
              </li>
            </ul>
          </nav>
          <div className="nav-cta">
            <a href="#visit" className="btn btn-accent btn-sm">
              Plan Your Visit
            </a>
          </div>
          <button className="menu-toggle" aria-label="Open menu" onClick={openDrawer}>
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile scrim */}
      <div className={`bim-scrim${drawerOpen ? ' open' : ''}`} onClick={closeDrawer} />

      {/* Mobile drawer */}
      <aside className={`bim-drawer${drawerOpen ? ' open' : ''}`} aria-label="Mobile menu">
        <button className="bim-drawer-close" aria-label="Close menu" onClick={closeDrawer}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="6" y1="6" x2="18" y2="18" />
            <line x1="6" y1="18" x2="18" y2="6" />
          </svg>
        </button>
        <ul onClick={closeDrawer}>
          <li>
            <a href="#top">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#visit">Visit</a>
          </li>
          <li>
            <a href="#ministries">Ministries</a>
          </li>
          <li>
            <a href="#schedule">Schedule</a>
          </li>
          <li>
            <a href="#leadership">Leadership</a>
          </li>
          <li>
            <a href="#board">Board of Directors</a>
          </li>
          <li>
            <a href="#give">Give</a>
          </li>
        </ul>
        <a
          href="#visit"
          className="btn btn-accent"
          style={{ width: '100%', marginTop: 18 }}
          onClick={closeDrawer}
        >
          Plan Your Visit
        </a>
      </aside>

      <a id="top" />
      <main>
        {/* ============ HERO ============ */}
        <section id="hero">
          <div className="layer base" />
          <div className="layer strip" />
          <div className="layer orange" />
          <div className="hero-inner">
            <div className="hero-copy">
              <span className="hero-tag">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M4 19V5l8 4 8-4v14l-8-4-8 4z" />
                </svg>
                Non-Denominational · Bible-Believing · Spirit-Filled
              </span>
              <p className="hero-org">Bearup International Ministries</p>
              <h1>Bringing Jesus Christ to the World</h1>
              <p className="lead">
                A Spirit-filled family rooted in the Word and sent to the nations — worshipping
                together, growing as disciples, and carrying the hope of the Gospel to every
                community we touch.
              </p>
              <div className="hero-actions">
                <a href="#visit" className="btn btn-light">
                  Plan Your Visit
                </a>
                <a href="#give" className="btn btn-ghost-light">
                  Support the Mission
                </a>
              </div>
            </div>
            <div className="hero-art">
              <div className="disc">
                <div
                  className="ph"
                  data-label="Church / Congregation Photo"
                  style={{ width: '100%', height: '100%', borderRadius: '50%' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ============ SCRIPTURE BAND ============ */}
        <section id="scripture">
          <div className="container">
            <blockquote>
              &ldquo;Go therefore and make disciples of all nations, baptizing them in the name of
              the Father and of the Son and of the Holy Spirit.&rdquo;
              <cite>— Matthew 28:19</cite>
            </blockquote>
          </div>
        </section>

        {/* ============ ABOUT ============ */}
        <section id="about">
          <div className="wide grid">
            <div className="about-art">
              <div
                className="ph"
                data-label="Congregation / Pastor Photo"
                style={{ aspectRatio: '4/5', borderRadius: 20, boxShadow: 'var(--shadow)' }}
              />
              <div className="badge">
                <strong>Who we are</strong>
                <span>A family in Christ, sent to the nations</span>
              </div>
            </div>
            <div>
              <p className="eyebrow">Our Mission</p>
              <h2>One simple mission, eternal in its reach</h2>
              <div className="body">
                <p>
                  Bearup International Ministries exists to{' '}
                  <strong>bring Jesus Christ to the world</strong> — to know Him, to make Him known,
                  and to see lives transformed by the power of the Gospel in every community we
                  touch.
                </p>
                <p>
                  We are a <strong>non-denominational, Bible-believing church ministry</strong> — a
                  worshipping family rooted in Scripture and led by the Holy Spirit. Whether you are
                  exploring faith for the first time or have walked with the Lord for decades, there
                  is a place for you at our table.
                </p>
              </div>
              <div className="values">
                <div className="value">
                  <div className="ic">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M12 21s-7-4.5-9-9a5 5 0 0 1 9-3 5 5 0 0 1 9 3c-2 4.5-9 9-9 9z" />
                    </svg>
                  </div>
                  <h4>Worship</h4>
                  <p>Encountering God together with hearts wide open.</p>
                </div>
                <div className="value">
                  <div className="ic">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M4 19V5l8 4 8-4v14l-8-4-8 4z" />
                    </svg>
                  </div>
                  <h4>The Word</h4>
                  <p>Grounded in Scripture, growing as disciples.</p>
                </div>
                <div className="value">
                  <div className="ic">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
                    </svg>
                  </div>
                  <h4>The Nations</h4>
                  <p>Carrying the hope of the Gospel to all peoples.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* ============ PLAN YOUR VISIT ============ */}
        <section id="visit">
          <div className="wide v-grid">
            <div className="v-info">
              <p className="eyebrow">Plan Your Visit</p>
              <h2>We&rsquo;d love to welcome you home</h2>
              <p>
                However you come — curious, searching, or ready to worship — you&rsquo;ll find a
                warm family that&rsquo;s genuinely glad you&rsquo;re here. Here&rsquo;s what to
                expect on your first visit.
              </p>
              <ul className="expect">
                <li>
                  <span className="chk">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span>
                    <strong style={{ color: 'var(--ink)' }}>Come as you are.</strong> No dress code,
                    no pressure — just open hearts.
                  </span>
                </li>
                <li>
                  <span className="chk">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span>
                    <strong style={{ color: 'var(--ink)' }}>A welcome team</strong> will greet you
                    and help you find your way.
                  </span>
                </li>
                <li>
                  <span className="chk">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span>
                    <strong style={{ color: 'var(--ink)' }}>Care for the kids</strong> — a safe,
                    joyful space during service.
                  </span>
                </li>
              </ul>
              <div className="loc">
                <span className="ic">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <p>
                  <strong>Gathering Location</strong>
                  Family Bible Fellowship and Academy
                  <br />
                  41212 Sterling Highway, Soldotna, Alaska 99669
                </p>
              </div>
            </div>
            <div className="times">
              <div className="time-card schedule-cta">
                <div className="sc-ic">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </div>
                <div className="meta">
                  <h4>Service Times</h4>
                  <p>
                    Our gathering schedule varies by season. Please reach out and we&rsquo;ll share
                    current service times and let you know what&rsquo;s happening this week.
                  </p>
                </div>
              </div>
              <a href="tel:+19072628741" className="btn btn-primary" style={{ width: '100%' }}>
                Call (907) 262-8741
              </a>
              <a
                href="mailto:Info@bearupinternationalministries.org"
                className="btn btn-outline"
                style={{ width: '100%' }}
              >
                Email Us for the Schedule
              </a>
            </div>
          </div>
        </section>

        {/* ============ MINISTRIES ============ */}
        <section id="ministries">
          <div className="wide">
            <div className="section-head">
              <p className="eyebrow">Get Involved</p>
              <h2>Our Ministries</h2>
              <p>
                There&rsquo;s a place for every age and every season of life to belong, grow, and
                serve.
              </p>
            </div>
            <div className="cards">
              <article className="mcard">
                <div className="ph" data-label="Worship Photo" style={{ aspectRatio: '16/10' }} />
                <div className="pad">
                  <h3>Worship &amp; Prayer</h3>
                  <p>
                    Gathering weekly to lift up the name of Jesus through song, prayer, and the
                    presence of the Holy Spirit.
                  </p>
                  <a href="#visit">Join us Sunday →</a>
                </div>
              </article>
              <article className="mcard">
                <div
                  className="ph"
                  data-label="Small Group Photo"
                  style={{ aspectRatio: '16/10' }}
                />
                <div className="pad">
                  <h3>Discipleship</h3>
                  <p>
                    Small groups and Bible studies where we grow together in the Word and walk
                    closely as a community.
                  </p>
                  <a href="#visit">Find a group →</a>
                </div>
              </article>
              <article className="mcard">
                <div className="ph" data-label="Missions Photo" style={{ aspectRatio: '16/10' }} />
                <div className="pad">
                  <h3>Missions &amp; Outreach</h3>
                  <p>
                    Carrying the Gospel beyond our walls — locally and to the nations — through
                    service and compassion.
                  </p>
                  <a href="#give">Support missions →</a>
                </div>
              </article>
              <article className="mcard">
                <div
                  className="ph"
                  data-label="Children &amp; Youth"
                  style={{ aspectRatio: '16/10' }}
                />
                <div className="pad">
                  <h3>Children &amp; Youth</h3>
                  <p>
                    Safe, joyful spaces where the next generation discovers the love of Jesus in
                    age-appropriate ways.
                  </p>
                  <a href="#visit">Learn more →</a>
                </div>
              </article>
              <article className="mcard">
                <div className="ph" data-label="Prayer Ministry" style={{ aspectRatio: '16/10' }} />
                <div className="pad">
                  <h3>Prayer Ministry</h3>
                  <p>
                    A dedicated team ready to stand with you in prayer for healing, breakthrough,
                    and guidance.
                  </p>
                  <a href="#give">Request prayer →</a>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ============ SCHEDULE A WEDDING OR EVENT ============ */}
        <section id="schedule">
          <div className="wide s-grid">
            <div className="s-info">
              <p className="eyebrow">Weddings &amp; Events</p>
              <h2>Host your special occasion with us</h2>
              <p>
                From weddings to dedications to community gatherings, we&rsquo;d be honored to help
                you mark life&rsquo;s sacred moments. Tell us about your event and our team will
                follow up to walk through dates, details, and next steps.
              </p>
              <ul className="s-types">
                <li>
                  <span className="ic">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M12 21s-7-4.5-9-9a5 5 0 0 1 9-3 5 5 0 0 1 9 3c-2 4.5-9 9-9 9z" />
                    </svg>
                  </span>
                  Weddings &amp; vow renewals
                </li>
                <li>
                  <span className="ic">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M12 2v6M9 5h6M5 22V12a7 7 0 0 1 14 0v10" />
                    </svg>
                  </span>
                  Baptisms &amp; baby dedications
                </li>
                <li>
                  <span className="ic">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M3 21h18M6 21V8l6-4 6 4v13M10 21v-5h4v5" />
                    </svg>
                  </span>
                  Memorial &amp; celebration-of-life services
                </li>
                <li>
                  <span className="ic">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="9" cy="7" r="3" />
                      <circle cx="17" cy="9" r="2.5" />
                      <path d="M2 20a7 7 0 0 1 14 0M15 20a6 6 0 0 1 7-5.7" />
                    </svg>
                  </span>
                  Conferences, retreats &amp; community events
                </li>
              </ul>
              <p className="s-note">
                Prefer to talk it through? Email us anytime at{' '}
                <a href="mailto:Info@bearupinternationalministries.org">
                  Info@bearupinternationalministries.org
                </a>{' '}
                or call the church office at <a href="tel:+19072628741">(907) 262-8741</a>.
              </p>
            </div>

            <div className="s-form">
              <h3>Request a date</h3>
              <p className="hint">
                Share a few details and we&rsquo;ll be in touch to confirm availability.
              </p>
              <form id="eventForm" noValidate onSubmit={handleEventForm}>
                <div className="field">
                  <label htmlFor="ev-type">Type of event</label>
                  <select id="ev-type" name="type" required ref={evTypeRef}>
                    <option value="" disabled>
                      Select an event type…
                    </option>
                    <option>Wedding</option>
                    <option>Vow renewal</option>
                    <option>Baptism / Baby dedication</option>
                    <option>Memorial / Celebration of life</option>
                    <option>Conference / Retreat</option>
                    <option>Community event</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="field row">
                  <div className="field">
                    <label htmlFor="ev-name">Your name</label>
                    <input
                      id="ev-name"
                      name="name"
                      type="text"
                      placeholder="Full name"
                      required
                      ref={evNameRef}
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="ev-phone">Phone</label>
                    <input
                      id="ev-phone"
                      name="phone"
                      type="tel"
                      placeholder="(907) 000-0000"
                      ref={evPhoneRef}
                    />
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="ev-email">Email</label>
                  <input
                    id="ev-email"
                    name="email"
                    type="email"
                    placeholder="you@email.com"
                    required
                    ref={evEmailRef}
                  />
                </div>
                <div className="field row">
                  <div className="field">
                    <label htmlFor="ev-date">Preferred date</label>
                    <input id="ev-date" name="date" type="date" ref={evDateRef} />
                  </div>
                  <div className="field">
                    <label htmlFor="ev-guests">Estimated guests</label>
                    <input
                      id="ev-guests"
                      name="guests"
                      type="number"
                      min="1"
                      placeholder="e.g. 80"
                      ref={evGuestsRef}
                    />
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="ev-details">Tell us about your event</label>
                  <textarea
                    id="ev-details"
                    name="details"
                    placeholder="Share your vision, any timing preferences, and how we can serve you…"
                    ref={evDetailsRef}
                  />
                </div>
                <button type="submit" className="btn btn-primary s-submit">
                  Send Request
                </button>
                <p className={`s-ok${formSent ? ' visible' : ''}`}>
                  Thank you! Your email app should open with the request ready to send. We&rsquo;ll
                  be in touch soon.
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* ============ LEADERSHIP ============ */}
        <section id="leadership">
          <div className="wide">
            <div className="section-head">
              <p className="eyebrow">Meet the Team</p>
              <h2>Our Leadership</h2>
              <p>
                Shepherds and servants devoted to caring for this family and pointing every heart to
                Christ.
              </p>
            </div>
            <div className="team">
              <article className="tcard">
                <div
                  className="ph"
                  data-label="Dr. Thomas R. Bearup"
                  style={{ aspectRatio: '1' }}
                />
                <div className="pad">
                  <h3>Dr. Thomas R. Bearup</h3>
                  <div className="role">Senior Pastor &amp; Founder</div>
                  <a
                    className="ln"
                    href="https://www.linkedin.com/in/dr-tom-bearup-b00bb06/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8.5h4.56V23H.22V8.5zM8.34 8.5h4.37v1.98h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 6.99V23h-4.56v-6.99c0-1.67-.03-3.82-2.33-3.82-2.33 0-2.69 1.82-2.69 3.7V23H8.34V8.5z" />
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </article>
              <article className="tcard">
                <div
                  className="ph"
                  data-label="Dr. Patrick Bearup Sr."
                  style={{ aspectRatio: '1' }}
                />
                <div className="pad">
                  <h3>Dr. Patrick Bearup Sr.</h3>
                  <div className="role">Associate Pastor</div>
                </div>
              </article>
              <article className="tcard">
                <div className="ph" data-label="Adele M. Bearup" style={{ aspectRatio: '1' }} />
                <div className="pad">
                  <h3>Adele M. Bearup</h3>
                  <div className="role">Youth &amp; Women&rsquo;s Ministry</div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ============ BOARD OF DIRECTORS ============ */}
        <section id="board">
          <div className="wide">
            <div className="section-head">
              <p className="eyebrow">Governance</p>
              <h2>Board of Directors</h2>
              <p>
                The dedicated men and women who provide oversight, accountability, and prayerful
                direction for the ministry.
              </p>
            </div>
            <div className="board-grid">
              {[
                {
                  initial: 'T',
                  bg: 'var(--primary)',
                  name: 'Dr. Thomas R. Bearup',
                  role: 'Board Chair / President',
                },
                {
                  initial: 'A',
                  bg: 'var(--accent)',
                  name: 'Adele M. Bearup',
                  role: 'Secretary & Treasurer',
                },
                {
                  initial: 'P',
                  bg: 'var(--primary-deep)',
                  name: 'Dr. Patrick Bearup Sr.',
                  role: 'Director',
                },
                { initial: 'R', bg: 'var(--gold)', name: 'Robyn Faucheux', role: 'Director' },
                { initial: 'R', bg: '#5a8a6a', name: 'Rebekah Freeman', role: 'Director' },
              ].map((m) => (
                <article className="bcard" key={m.name}>
                  <span className="mono">
                    <div
                      style={{
                        width: 64,
                        height: 64,
                        borderRadius: '50%',
                        background: m.bg,
                        display: 'grid',
                        placeItems: 'center',
                        fontFamily: 'var(--font-display)',
                        fontSize: 22,
                        fontWeight: 600,
                        color: '#fff',
                      }}
                    >
                      {m.initial}
                    </div>
                  </span>
                  <div>
                    <h3>{m.name}</h3>
                    <div className="role">{m.role}</div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ============ GIVE ============ */}
        <section id="give">
          <div className="give-band">
            <div className="wide give-inner">
              <div>
                <p className="eyebrow" style={{ color: '#fff' }}>
                  Ways to Give
                </p>
                <h2>Partner with the mission</h2>
                <p>
                  Every gift fuels worship, discipleship, and the spread of the Gospel to the
                  nations. Thank you for sowing into Kingdom work that will outlast us all.
                </p>
                <p className="verse">
                  &ldquo;Each one must give as he has decided in his heart... for God loves a
                  cheerful giver.&rdquo; — 2 Corinthians 9:7
                </p>
              </div>
              <div className="give-actions">
                <a
                  href="https://www.zeffy.com/en-US/donation-form/support-this-ministry-3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-light"
                >
                  Give Online
                </a>
                <a
                  href="https://www.zeffy.com/en-US/donation-form/support-this-ministry-3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost-light"
                >
                  Set Up Recurring Giving
                </a>
                <p className="note">
                  Secure giving powered by Zeffy · 100% of your gift reaches the ministry
                </p>
                <div className="give-mail">
                  <span className="ic">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m2 6 10 7 10-7" />
                    </svg>
                  </span>
                  <div>
                    <div className="lbl">Give by Mail</div>
                    <p>
                      <span className="payee">Family Bible Fellowship and Academy</span>
                      <br />
                      PO Box 2763
                      <br />
                      Soldotna, AK 99669
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ FAQ ============ */}
        <section id="faq">
          <div className="wide">
            <div className="section-head">
              <p className="eyebrow">Questions</p>
              <h2>Frequently Asked Questions</h2>
            </div>
            <div className="acc">
              <details open>
                <summary>
                  What time are your services?
                  <span className="pm">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </summary>
                <div className="ans">
                  Our gathering schedule varies by season, so the best way to get current service
                  times is to reach out directly. Call us at{' '}
                  <a href="tel:+19072628741">(907) 262-8741</a> or email{' '}
                  <a href="mailto:Info@bearupinternationalministries.org">
                    Info@bearupinternationalministries.org
                  </a>{' '}
                  and we&rsquo;ll let you know when we&rsquo;re meeting this week.
                </div>
              </details>
              <details>
                <summary>
                  I&rsquo;m new to church — what should I expect?
                  <span className="pm">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </summary>
                <div className="ans">
                  Come exactly as you are. You&rsquo;ll find heartfelt worship, a clear message from
                  the Bible, and a warm family genuinely glad you came. There&rsquo;s no pressure —
                  just an open invitation to encounter Jesus.
                </div>
              </details>
              <details>
                <summary>
                  Is there something for my kids?
                  <span className="pm">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </summary>
                <div className="ans">
                  Yes! Our children &amp; youth ministry offers safe, joyful, age-appropriate spaces
                  during our services so the whole family can worship with peace of mind.
                </div>
              </details>
              <details>
                <summary>
                  How can I get involved or serve?
                  <span className="pm">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </summary>
                <div className="ans">
                  Join a small group, serve on a ministry team, or come alongside our missions and
                  outreach work. The best first step is to plan a visit and let us know you&rsquo;d
                  like to connect.
                </div>
              </details>
              <details>
                <summary>
                  How do you support missions?
                  <span className="pm">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </summary>
                <div className="ans">
                  Carrying Jesus to the nations is at the heart of who we are. Through giving,
                  short-term teams, and partnerships, we support Gospel work locally and around the
                  world.
                </div>
              </details>
            </div>
          </div>
        </section>
      </main>

      {/* ============ FOOTER ============ */}
      <footer className="site">
        <div className="wide f-grid">
          <div className="f-brand">
            <span className="brand-mark">
              <BimLogo />
            </span>
            <h3>Bearup International Ministries</h3>
            <p>
              A Spirit-filled family bringing Jesus Christ to the world — worshipping, growing, and
              going to the nations.
            </p>
          </div>
          <div>
            <h3>Explore</h3>
            <ul className="f-links">
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#visit">Plan Your Visit</a>
              </li>
              <li>
                <a href="#ministries">Ministries</a>
              </li>
              <li>
                <a href="#schedule">Weddings &amp; Events</a>
              </li>
              <li>
                <a href="#leadership">Leadership</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Contact</h3>
            <div className="contact-row">
              <span className="ic">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m2 6 10 7 10-7" />
                </svg>
              </span>
              <div>
                <div className="lbl">Email</div>
                <a href="mailto:Info@bearupinternationalministries.org">
                  Info@bearupinternationalministries.org
                </a>
              </div>
            </div>
            <div className="contact-row">
              <span className="ic">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="4" y="4" width="16" height="16" />
                  <path d="M4 9h16M9 4v5" />
                </svg>
              </span>
              <div>
                <div className="lbl">Mailing Address</div>
                <p>
                  PO Box 2763
                  <br />
                  Soldotna, AK 99669
                </p>
              </div>
            </div>
            <div className="contact-row">
              <span className="ic">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <div>
                <div className="lbl">Phone</div>
                <a href="tel:+19072628741">(907) 262-8741</a>
              </div>
            </div>
            <div className="contact-row">
              <span className="ic">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              <div>
                <div className="lbl">Gather With Us</div>
                <p>
                  Family Bible Fellowship and Academy
                  <br />
                  41212 Sterling Highway
                  <br />
                  Soldotna, Alaska 99669
                </p>
              </div>
            </div>
            <a href="#visit" className="btn btn-accent btn-sm" style={{ marginTop: 8 }}>
              Plan Your Visit
            </a>
          </div>
        </div>
        <div className="f-bottom">
          <p className="legal">
            Bearup International Ministries is a ministry of Family Bible Fellowship and Academy, a
            registered 501(c)(3) non-profit organization. All donations are tax-deductible to the
            fullest extent allowed by law.
          </p>
          <p>
            &copy; {new Date().getFullYear()} Bearup International Ministries. All rights reserved.
            &middot; Bringing Jesus Christ to the World
          </p>
        </div>
      </footer>
    </div>
  )
}
