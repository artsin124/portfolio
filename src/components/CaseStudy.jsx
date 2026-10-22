import { projects } from '../data/projects.js'
import { Reveal, Status, Chips, MiniBoard } from './Common.jsx'

function Block({ label, children, delay = 0 }) {
  return (
    <Reveal className="cs-block" delay={delay}>
      <h2 className="cs-label mono">{label}</h2>
      <div className="cs-content">{children}</div>
    </Reveal>
  )
}

function List({ items }) {
  return (
    <ul className="cs-list">
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  )
}

export default function CaseStudy({ slug }) {
  const idx = projects.findIndex((p) => p.slug === slug)
  if (idx === -1) {
    return (
      <main id="main" tabIndex={-1} className="wrap cs">
        <p className="cs-back">
          <a href="#projects">← All projects</a>
        </p>
        <h1 className="cs-title">Project not found</h1>
        <p>That case study doesn't exist. Head back to the project list.</p>
      </main>
    )
  }
  const p = projects[idx]
  const next = projects[(idx + 1) % projects.length]

  return (
    <main id="main" tabIndex={-1} className="wrap cs">
      <p className="cs-back">
        <a href="#projects">← All projects</a>
      </p>

      <header className="cs-header">
        <Reveal as="p" className="eyebrow mono">
          // {p.category}
        </Reveal>
        <Reveal as="h1" className="cs-title" delay={60}>
          {p.name}
        </Reveal>
        <Reveal as="p" className="cs-tagline" delay={120}>
          {p.tagline}
        </Reveal>
        <Reveal className="cs-meta" delay={180}>
          <Status status={p.status} live={p.live} />
          <span className="cs-note mono">{p.statusNote}</span>
        </Reveal>
        <Reveal delay={220}>
          <Chips items={p.tech} />
        </Reveal>
        <Reveal className="cs-links mono" delay={260}>
          {p.repo ? (
            <a href={p.repo} target="_blank" rel="noreferrer">Repository ↗</a>
          ) : (
            <span className="muted">Repository · coming soon</span>
          )}
          {p.demo ? (
            <a href={p.demo} target="_blank" rel="noreferrer">Live demo ↗</a>
          ) : (
            <span className="muted">Live demo · not available yet</span>
          )}
        </Reveal>
      </header>

      {p.gallery.length > 0 ? (
        <Reveal as="section" className={`gallery gallery-${p.galleryStyle}`} aria-label="Screenshots">
          {p.gallery.map((g) => (
            <figure key={g.src}>
              <a href={g.src} target="_blank" rel="noreferrer" aria-label={`Open full-size: ${g.caption}`}>
                <img src={g.src} alt={g.alt} loading="lazy" />
              </a>
              <figcaption className="mono">{g.caption}</figcaption>
            </figure>
          ))}
        </Reveal>
      ) : (
        <Reveal as="section" className="gallery-empty" aria-label="Illustration">
          <MiniBoard />
          <p className="mono muted">Illustration of the 8×8 puzzle board. Screenshots and a replay are coming soon.</p>
        </Reveal>
      )}

      <div className="cs-body">
        <Block label="Overview">
          <p>{p.overview}</p>
        </Block>
        <Block label="Problem">
          <p>{p.problem}</p>
        </Block>
        <Block label="Solution">
          <p>{p.solution}</p>
        </Block>
        <Block label="My role">
          <p>{p.role}</p>
        </Block>
        <Block label="Key features">
          <List items={p.features} />
        </Block>
        <Block label="Engineering notes">
          <List items={p.engineering} />
        </Block>
        {p.goodToKnow?.length > 0 && (
          <Block label="Good to know">
            <List items={p.goodToKnow} />
          </Block>
        )}
      </div>

      <nav className="cs-next" aria-label="Next project">
        <a href={`#/work/${next.slug}`}>
          <span className="mono muted">Next project</span>
          <span className="cs-next-name">
            {next.name} <span aria-hidden="true">→</span>
          </span>
        </a>
      </nav>
    </main>
  )
}
