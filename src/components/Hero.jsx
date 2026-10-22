import { useEffect, useState } from 'react'
import { site } from '../data/site.js'
import { usePrefersReducedMotion } from '../hooks.js'
import { Reveal } from './Common.jsx'

function TypedName({ text }) {
  const reduced = usePrefersReducedMotion()
  const [n, setN] = useState(reduced ? text.length : 0)
  useEffect(() => {
    if (reduced) {
      setN(text.length)
      return
    }
    setN(0)
    let i = 0
    let timer
    const tick = () => {
      i += 1
      setN(i)
      if (i < text.length) timer = setTimeout(tick, 55)
    }
    timer = setTimeout(tick, 250)
    return () => clearTimeout(timer)
  }, [reduced, text])

  const typed = text.slice(0, n)
  // Line break after the first two words, for an editorial look.
  const firstSpace = text.indexOf(' ')
  const breakAt = text.indexOf(' ', firstSpace + 1)
  return (
    <h1 className="hero-name" aria-label={text}>
      <span aria-hidden="true">
        {typed.slice(0, breakAt > 0 ? breakAt : typed.length)}
        {breakAt > 0 && n > breakAt && (
          <>
            <br />
            {typed.slice(breakAt + 1)}
          </>
        )}
        <span className="cursor" />
      </span>
    </h1>
  )
}

export default function Hero() {
  const { links } = site
  return (
    <section className="hero wrap" id="top" aria-label="Introduction">
      <div className="hero-main">
        <Reveal as="p" className="eyebrow mono">
          // {site.eyebrow}
        </Reveal>
        <TypedName text={site.name} />
        <Reveal as="p" className="hero-tagline" delay={150}>
          {site.tagline}
        </Reveal>
        <Reveal as="p" className="hero-intro" delay={250}>
          {site.intro}
        </Reveal>
        <Reveal className="hero-ctas" delay={350}>
          <a className="btn btn-accent" href="#projects">
            Explore projects <span aria-hidden="true">→</span>
          </a>
          <a className="btn" href={links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="btn" href={links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          {links.resume ? (
            <a className="btn" href={links.resume} download>
              Résumé
            </a>
          ) : (
            <span className="btn btn-muted" title="Résumé coming soon">
              Résumé · soon
            </span>
          )}
        </Reveal>
      </div>

      <Reveal as="aside" className="now-card" delay={450} aria-label="Currently">
        <p className="now-label mono">
          <span className="status-dot is-live" aria-hidden="true" /> {site.now.label}
        </p>
        <p className="now-title">
          <a href="#/work/raay">{site.now.title}</a>
        </p>
        <p className="now-detail">{site.now.detail}</p>
        <hr />
        <p className="now-label mono">Focus</p>
        <p className="now-detail">{site.focus}</p>
      </Reveal>
    </section>
  )
}
