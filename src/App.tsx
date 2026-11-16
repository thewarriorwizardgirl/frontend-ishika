import { NavLink, Route, Routes } from 'react-router-dom'
import './App.css'

const pages = [
  { label: 'Home', to: '/' },
  { label: 'Professional Experience', to: '/experience' },
  { label: 'Arts Corner', to: '/arts' },
  { label: 'Say Hello', to: '/hello' },
]
const currentYear = new Date().getFullYear()

const experience = [
  {
    period: 'May 2021 — Present',
    company: 'Amazon India',
    role: 'Program & Business Product Management',
    highlights: [
      {
        title: 'GenAI & enterprise automation',
        points: [
          'Owned product strategy and go-to-market for an internal GenAI platform serving 3,000+ users, strengthening governance, delivery throughput, tool reliability, and automation accuracy.',
          'Advanced a hybrid LLM and deterministic automation platform toward agentic workflows, with an integration strategy spanning 90+ tools.',
          'Delivered $9M in annual operating expense savings through account-management workflow automation; set automation delivery goals for a 1,000+ member operations team.',
        ],
      },
      {
        title: 'Product, advertising & seller experience',
        points: [
          'Led the launch strategy for programmatic brand video ads on Amazon.in, activating 5,000+ sellers.',
          'Defined and launched a seller–agency CRM tool with Zoho and cross-functional partners; reached 97% adoption across 250+ account managers and 4+ agencies, reduced activation turnaround by 66%, and saved 80 hours per week.',
          'Piloted automated video tools with 100+ sellers and supported size-chart and installation experiences across 8+ automotive categories.',
        ],
      },
      {
        title: 'Business operations & leadership',
        points: [
          'Led packaging-cost programs across 8 business units, saving ₹26 Cr annually, and reduced concessions by ₹3 Cr through policy and order-control improvements.',
          'Managed a 15+ person cross-functional team and budgets for 100+ agency contests and seller incentive programs.',
          'Organized a 50+ team automation hackathon and a GenAI summit for 1,500+ attendees; authored seller and partner playbooks.',
        ],
      },
    ],
    recognition:
      'Extra Mile Award (2022) · DAY 1 Award (2024) · Promoted to L6 (2025)',
  },
  {
    period: 'July 2016 — June 2019',
    company: 'Samsung India',
    role: 'Engineer, B2B Enterprise Platform Group',
    highlights: [
      {
        title: 'Enterprise platform engineering',
        points: [
          'Led end-to-end development of 6+ modules for Samsung B2B FLIP, including handwriting recognition features.',
          'Co-developed core platform features with global teams at Samsung headquarters in South Korea.',
          'Ranked among the top 15 of 10,000+ engineers in Samsung’s internal software certification program.',
        ],
      },
    ],
    recognition:
      'Quarterly Award for Outstanding Performance (2018) · Sport Award (2017)',
  },
]

const education = [
  {
    period: '2021',
    school: 'Management Development Institute, Gurgaon',
    qualification: 'PGDM (MBA)',
  },
  {
    period: '2016',
    school: 'Delhi Technological University',
    qualification: 'B.Tech, Information Technology',
  },
]

function Header() {
  return (
    <header className="site-header">
      <NavLink className="wordmark" to="/" aria-label="Ishika's World home">
        Ishika&apos;s World
      </NavLink>
      <nav className="site-nav" aria-label="Main navigation">
        {pages.map(({ label, to }) => (
          <NavLink
            className={({ isActive }) =>
              `nav-link${isActive ? ' nav-link-active' : ''}`
            }
            end={to === '/'}
            key={to}
            to={to}
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <span>© {currentYear} Ishika&apos;s World</span>
      <span>Made with care.</span>
    </footer>
  )
}

function HomePage() {
  return (
    <section className="landing-page" aria-labelledby="landing-quote">
      <div className="quote-panel">
        <p className="eyebrow">A THOUGHT TO CARRY WITH YOU</p>
        <blockquote id="landing-quote">
          Life shrinks or expands in proportion to one&apos;s courage.
        </blockquote>
        <p className="quote-credit">— Anaïs Nin</p>
      </div>
      <figure className="portrait-frame">
        <img
          alt="Ishika"
          className="portrait"
          src={`${import.meta.env.BASE_URL}ishika-photo.jpg`}
        />
      </figure>
    </section>
  )
}

function ExperiencePage() {
  return (
    <section className="experience-page" aria-labelledby="experience-title">
      <div className="experience-intro">
        <p className="eyebrow">THE PATH SO FAR</p>
        <h1 id="experience-title">Professional Experience</h1>
        <p className="page-intro">
          Product leader working at the intersection of AI, technology, and
          business—turning complex challenges into useful products and
          measurable outcomes.
        </p>
        <div className="expertise">
          <p className="eyebrow">FOCUS AREAS</p>
          <ul className="expertise-list">
            <li>AI & automation</li>
            <li>Product strategy</li>
            <li>AdTech</li>
            <li>P&amp;L management</li>
          </ul>
        </div>
      </div>

      <div className="experience-content">
        <div className="timeline-section">
          <div className="timeline-heading">
            <h2>Experience</h2>
            <span>2016 — Now</span>
          </div>
          <ol className="experience-timeline">
            {experience.map((entry) => (
              <li className="timeline-entry" key={entry.company}>
                <div className="timeline-date">{entry.period}</div>
                <article className="timeline-content">
                  <details>
                    <summary className="timeline-summary">
                      <span className="timeline-summary-title">
                        <span className="timeline-company">{entry.company}</span>
                        <span className="timeline-role">{entry.role}</span>
                      </span>
                      <span className="expand-hint">
                        <span className="expand-icon" aria-hidden="true" />
                        <span className="expand-hint-closed">Expand to see full</span>
                        <span className="expand-hint-open">Collapse details</span>
                      </span>
                    </summary>
                    <div className="timeline-details">
                      <div className="highlight-groups">
                        {entry.highlights.map((group) => (
                          <section
                            className="highlight-group"
                            key={group.title}
                            aria-label={group.title}
                          >
                            <h4>{group.title}</h4>
                            <ul>
                              {group.points.map((point) => (
                                <li key={point}>{point}</li>
                              ))}
                            </ul>
                          </section>
                        ))}
                      </div>
                      <p className="recognition">
                        <span className="eyebrow">RECOGNITION</span>
                        {entry.recognition}
                      </p>
                    </div>
                  </details>
                </article>
              </li>
            ))}
          </ol>
        </div>

        <section className="education-section" aria-labelledby="education-title">
          <div className="timeline-heading">
            <h2 id="education-title">Education</h2>
          </div>
          <ol className="education-timeline">
            {education.map((item) => (
              <li className="education-entry" key={item.school}>
                <span className="education-date">{item.period}</span>
                <div>
                  <h3>{item.school}</h3>
                  <p>{item.qualification}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </section>
  )
}

function ArtsPage() {
  return (
    <section className="interior-page arts-page" aria-labelledby="arts-title">
      <p className="eyebrow">A SPACE TO MAKE THINGS</p>
      <h1 id="arts-title">Arts Corner</h1>
      <p className="page-intro">
        Sketches, experiments, and little things made just for the joy of it.
      </p>
      <figure className="arts-coming-soon">
        <img
          alt="A minimalist grayscale illustration reading coming soon"
          src={`${import.meta.env.BASE_URL}arts-coming-soon.svg`}
        />
        <figcaption>
          <p className="eyebrow">IN THE WORKS</p>
          <h2>Coming soon</h2>
          <p>A little collection of sketches and creative experiments is on its way.</p>
        </figcaption>
      </figure>
    </section>
  )
}

function HelloPage() {
  return (
    <section className="interior-page hello-page" aria-labelledby="hello-title">
      <p className="eyebrow">GOOD THINGS START WITH HELLO</p>
      <h1 id="hello-title">Say Hello</h1>
      <p className="page-intro">
        A note, a question, or an idea — this is where the conversation begins.
      </p>
      <ul className="contact-list" aria-label="Contact Ishika">
        <li>
          <span className="contact-label">WHATSAPP</span>
          <a
            href="https://wa.me/919873176370?text=Hi%20Ishika%2C%20I%20found%20your%20portfolio%20and%20would%20love%20to%20connect."
            rel="noreferrer"
            target="_blank"
          >
            +91 98731 76370 <span aria-hidden="true">↗</span>
          </a>
        </li>
        <li>
          <span className="contact-label">EMAIL</span>
          <a href="mailto:ishikajain.mdi.2021@gmail.com">
            ishikajain.mdi.2021@gmail.com <span aria-hidden="true">↗</span>
          </a>
        </li>
      </ul>
    </section>
  )
}

function NotFoundPage() {
  return (
    <section className="interior-page" aria-labelledby="not-found-title">
      <p className="eyebrow">404</p>
      <h1 id="not-found-title">This page isn&apos;t here.</h1>
      <NavLink className="back-link" to="/">
        Back to Home <span aria-hidden="true">→</span>
      </NavLink>
    </section>
  )
}

function App() {
  return (
    <div className="site-shell">
      <Header />
      <main className="site-main">
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<ExperiencePage />} path="/experience" />
          <Route element={<ArtsPage />} path="/arts" />
          <Route element={<HelloPage />} path="/hello" />
          <Route element={<NotFoundPage />} path="*" />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
