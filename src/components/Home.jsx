import { projects, otherWork } from '../data/projects.js'
import { events, skills, about, beyond } from '../data/about.js'
import { site } from '../data/site.js'
import { useInView } from '../hooks.js'
import { Reveal, SectionHead, Status, Chips, MiniBoard } from './Common.jsx'
import Hero from './Hero.jsx'

function ProjectCard({ p, i }) {
  return (
    <Reveal as="article" className="card" delay={(i % 2) * 120}>
      <a href={`#/work/${p.slug}`} className="card-link" aria-label={`${p.name}: read the case study`}>
        <div className={`card-cover cover-${p.coverStyle || 'board'}`}>
          {p.cover ? <img src={p.cover} alt={p.coverAlt} loading="lazy" /> : <MiniBoard />}
        </div>
        <div className="card-body">
          <div className="card-top">
            <h3>{p.name}</h3>
            <Status status={p.status} live={p.live} />
          </div>
          <p className="card-line">{p.cardLine}</p>
          <p className="card-meta mono">{p.tech.slice(0, 3).join(' · ')}</p>
          <span className="card-more mono">
            Case study <span aria-hidden="true">→</span>
          </span>
        </div>
      </a>
    </Reveal>
  )
}

function Timeline() {
  const [ref, inView] = useInView({ threshold: 0.1 })
  return (
    <ol ref={ref} className={`timeline ${inView ? 'is-in' : ''}`}>
      {events.map((e, i) => (
        <Reveal as="li" key={e.name} delay={i * 90} className="tl-item">
          <span className="tl-marker" aria-hidden="true" />
          <div className="tl-head">
            <h3>{e.name}</h3>
            <span className="tl-kind mono">{e.kind}</span>
          </div>
          <p className="tl-where mono">{e.where}</p>
          <p className="tl-detail">{e.detail}</p>
        </Reveal>
      ))}
    </ol>
  )
}

export default function Home() {
  const { links } = site
  return (
    <main id="main" tabIndex={-1}>
      <Hero />

      <section className="section wrap" id="projects" aria-labelledby="projects-h">
        <SectionHead index="01" title={<span id="projects-h">Selected work</span>} aside={`${projects.length} projects`} />
        <div className="card-grid">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} p={p} i={i} />
          ))}
        </div>
        <Reveal as="p" className="ai-note">
          These projects were built with AI assistance. I lead the product, the design decisions and the testing, and each
          case study says exactly what I did.
        </Reveal>

        <Reveal as="h3" className="sub-head mono">
          Other work
        </Reveal>
        <ul className="other-list">
          {otherWork.map((w, i) => (
            <Reveal as="li" key={w.name} delay={i * 60} className="other-item">
              <div>
                <h4>{w.name}</h4>
                <p>{w.line}</p>
              </div>
              <span className="other-kind mono">{w.kind}</span>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="section wrap" id="hackathons" aria-labelledby="hack-h">
        <SectionHead index="02" title={<span id="hack-h">Hackathons and events</span>} />
        <Timeline />
      </section>

      <section className="section wrap" id="skills" aria-labelledby="skills-h">
        <SectionHead index="03" title={<span id="skills-h">Skills</span>} />
        <div className="skills-grid">
          {skills.map((s, i) => (
            <Reveal key={s.tier} className="skill-col" delay={i * 80}>
              <h3>{s.tier}</h3>
              <p className="skill-note mono">{s.note}</p>
              <ul>
                {s.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section wrap" id="about" aria-labelledby="about-h">
        <SectionHead index="04" title={<span id="about-h">About</span>} />
        <div className="about-grid">
          <Reveal className="portrait">
            <img src={site.photo} alt="Portrait of Arth Shalabh Sinha, smiling, wearing glasses and a dark shirt" loading="lazy" />
          </Reveal>
          <div className="about-text">
            {about.map((para, i) => (
              <Reveal as="p" key={i} delay={i * 100}>
                {para}
              </Reveal>
            ))}
            <Reveal as="dl" className="facts" delay={300}>
              <div>
                <dt className="mono">Studying</dt>
                <dd>B.Tech, Information Technology · VESIT</dd>
              </div>
              <div>
                <dt className="mono">Aiming for</dt>
                <dd>Backend software development</dd>
              </div>
              <div>
                <dt className="mono">Based in</dt>
                <dd>Maharashtra, India</dd>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal as="h3" className="sub-head mono">
          Beyond the screen
        </Reveal>
        <ul className="beyond-grid">
          {beyond.map((b, i) => (
            <Reveal as="li" key={b.title} delay={i * 70} className="beyond-item">
              <h4>{b.title}</h4>
              <p>{b.line}</p>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="section wrap contact" id="contact" aria-labelledby="contact-h">
        <SectionHead index="05" title={<span id="contact-h">Contact</span>} />
        <Reveal className="contact-inner">
          <p className="contact-lead">Internships, hackathon teams, or just talking about backends — my inbox is open.</p>
          <a className="contact-email" href={`mailto:${links.email}`}>
            {links.email}
          </a>
          <ul className="contact-links">
            <li>
              <a href={links.github} target="_blank" rel="noreferrer">GitHub ↗</a>
            </li>
            <li>
              <a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
            </li>
            <li>
              <a href={links.x} target="_blank" rel="noreferrer">X ↗</a>
            </li>
            <li>
              {links.resume ? (
                <a href={links.resume} download>Résumé ↓</a>
              ) : (
                <span className="muted">Résumé · coming soon</span>
              )}
            </li>
          </ul>
        </Reveal>
      </section>
    </main>
  )
}
