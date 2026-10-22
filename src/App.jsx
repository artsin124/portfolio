import { useEffect } from 'react'
import { useRoute } from './hooks.js'
import { projects } from './data/projects.js'
import { site } from './data/site.js'
import Nav from './components/Nav.jsx'
import Home from './components/Home.jsx'
import CaseStudy from './components/CaseStudy.jsx'

export default function App() {
  const route = useRoute()

  // Scroll to the right place whenever the route changes.
  useEffect(() => {
    if (route.page === 'work') {
      window.scrollTo(0, 0)
      const p = projects.find((x) => x.slug === route.slug)
      document.title = p ? `${p.name} — ${site.name}` : site.name
      return
    }
    document.title = `${site.name} — IT student building projects`
    if (route.section && route.section !== 'top') {
      // Wait a frame so the home page has rendered after leaving a case study.
      requestAnimationFrame(() => document.getElementById(route.section)?.scrollIntoView())
    } else if (route.section === 'top') {
      window.scrollTo(0, 0)
    }
  }, [route.page, route.slug, route.section])

  return (
    <>
      <a className="skip-link" href="#main" onClick={(e) => { e.preventDefault(); document.getElementById('main')?.focus() }}>
        Skip to content
      </a>
      <Nav />
      {route.page === 'work' ? <CaseStudy slug={route.slug} /> : <Home />}
      <footer className="wrap">
        <div className="footer-inner">
          <span className="mono">© {new Date().getFullYear()} {site.name}</span>
          <span className="mono muted">Built with React and Vite</span>
        </div>
      </footer>
    </>
  )
}
