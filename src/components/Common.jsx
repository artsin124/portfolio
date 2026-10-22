import { useInView } from '../hooks.js'

export function Reveal({ as: Tag = 'div', className = '', delay = 0, children, ...rest }) {
  const [ref, inView] = useInView()
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'is-in' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export function SectionHead({ index, title, aside }) {
  return (
    <Reveal className="section-head">
      <h2>
        <span className="section-num">{index} —</span> {title}
      </h2>
      {aside && <span className="section-aside">{aside}</span>}
    </Reveal>
  )
}

export function Status({ status, live }) {
  return (
    <span className="status">
      <span className={`status-dot ${live ? 'is-live' : ''}`} aria-hidden="true" />
      {status}
    </span>
  )
}

export function Chips({ items }) {
  return (
    <ul className="chips" aria-label="Technologies">
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  )
}

// A tiny 8×8 board drawn in CSS, used as the Beat the Bot cover (no screenshots exist).
const FILLED = new Set([0, 1, 8, 9, 16, 24, 25, 26, 33, 40, 41, 48, 49, 50, 51, 56, 57, 58, 59, 60, 61, 52, 44, 45, 6, 7, 15, 23])
const PICK = new Set([29, 30, 37, 38])
export function MiniBoard() {
  return (
    <div className="mini-board" aria-hidden="true">
      {Array.from({ length: 64 }, (_, i) => (
        <span key={i} className={PICK.has(i) ? 'pick' : FILLED.has(i) ? 'fill' : ''} />
      ))}
    </div>
  )
}
