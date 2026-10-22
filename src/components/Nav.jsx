import { useEffect, useState } from 'react'
import { site } from '../data/site.js'

const LINKS = [
  ['projects', 'Projects'],
  ['hackathons', 'Hackathons'],
  ['skills', 'Skills'],
  ['about', 'About'],
  ['contact', 'Contact'],
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  useEffect(() => {
    const close = () => setOpen(false)
    window.addEventListener('hashchange', close)
    return () => window.removeEventListener('hashchange', close)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="nav-inner wrap">
        <a href="#top" className="monogram" aria-label={`${site.name}, back to top`}>
          {site.initials}
        </a>
        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          <span className={`burger ${open ? 'is-open' : ''}`} aria-hidden="true" />
        </button>
        <nav id="nav-links" className={`nav-links ${open ? 'is-open' : ''}`} aria-label="Main">
          {LINKS.map(([id, label]) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
