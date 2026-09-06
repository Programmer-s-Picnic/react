import React, { useMemo, useState } from 'react';
import {
  BriefcaseBusiness,
  Building2,
  ChevronRight,
  Clock3,
  Heart,
  Laptop2,
  MapPin,
  Menu,
  Search,
  SlidersHorizontal,
  Sparkles,
  Users,
  X,
} from 'lucide-react';

const jobs = [
  {
    id: 1,
    title: 'Frontend React Developer',
    company: 'PixelForge Labs',
    location: 'Bengaluru, India',
    type: 'Full-time',
    mode: 'Hybrid',
    salary: '₹10L – ₹16L',
    age: '2h ago',
    tags: ['React', 'JavaScript', 'CSS'],
    featured: true,
  },
  {
    id: 2,
    title: 'Product Designer',
    company: 'Northstar Digital',
    location: 'Remote',
    type: 'Full-time',
    mode: 'Remote',
    salary: '₹8L – ₹14L',
    age: '5h ago',
    tags: ['Figma', 'UX', 'Design Systems'],
  },
  {
    id: 3,
    title: 'Python Backend Engineer',
    company: 'DataSpring',
    location: 'Pune, India',
    type: 'Full-time',
    mode: 'On-site',
    salary: '₹12L – ₹20L',
    age: 'Today',
    tags: ['Python', 'Django', 'PostgreSQL'],
    featured: true,
  },
  {
    id: 4,
    title: 'Digital Marketing Executive',
    company: 'BrightReach Media',
    location: 'Varanasi, India',
    type: 'Full-time',
    mode: 'On-site',
    salary: '₹4L – ₹7L',
    age: '1d ago',
    tags: ['SEO', 'Social Media', 'Content'],
  },
  {
    id: 5,
    title: 'Data Analyst',
    company: 'InsightWorks',
    location: 'Hyderabad, India',
    type: 'Full-time',
    mode: 'Hybrid',
    salary: '₹7L – ₹12L',
    age: '1d ago',
    tags: ['SQL', 'Power BI', 'Python'],
  },
  {
    id: 6,
    title: 'Customer Success Specialist',
    company: 'CloudDesk',
    location: 'Remote',
    type: 'Contract',
    mode: 'Remote',
    salary: '₹45k – ₹70k / month',
    age: '2d ago',
    tags: ['Support', 'SaaS', 'Communication'],
  },
];

const categories = [
  ['Technology', '1,248 jobs', Laptop2],
  ['Design', '426 jobs', Sparkles],
  ['Marketing', '684 jobs', Users],
  ['Business', '812 jobs', BriefcaseBusiness],
];

function App() {
  const [mobileNav, setMobileNav] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [saved, setSaved] = useState([]);

  const filteredJobs = useMemo(() => {
    const k = keyword.trim().toLowerCase();
    const l = location.trim().toLowerCase();
    return jobs.filter((job) => {
      const matchesKeyword = !k || [job.title, job.company, ...job.tags].join(' ').toLowerCase().includes(k);
      const matchesLocation = !l || job.location.toLowerCase().includes(l) || job.mode.toLowerCase().includes(l);
      const matchesType = selectedType === 'All' || job.type === selectedType || job.mode === selectedType;
      return matchesKeyword && matchesLocation && matchesType;
    });
  }, [keyword, location, selectedType]);

  const toggleSaved = (id) => {
    setSaved((prev) => (prev.includes(id) ? prev.filter((jobId) => jobId !== id) : [...prev, id]));
  };

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="FlexJobs home">
          <span className="brand-mark"><BriefcaseBusiness size={22} /></span>
          <span>Flex<span>Jobs</span></span>
        </a>
        <nav className={`main-nav ${mobileNav ? 'open' : ''}`}>
          <a href="#jobs" onClick={() => setMobileNav(false)}>Find Jobs</a>
          <a href="#companies" onClick={() => setMobileNav(false)}>Companies</a>
          <a href="#resources" onClick={() => setMobileNav(false)}>Career Resources</a>
          <a href="#employers" onClick={() => setMobileNav(false)}>For Employers</a>
          <div className="mobile-actions">
            <button className="text-button">Sign in</button>
            <button className="primary-button">Post a Job</button>
          </div>
        </nav>
        <div className="desktop-actions">
          <button className="text-button">Sign in</button>
          <button className="primary-button">Post a Job</button>
        </div>
        <button className="menu-button" onClick={() => setMobileNav((v) => !v)} aria-label="Toggle menu">
          {mobileNav ? <X /> : <Menu />}
        </button>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <span className="eyebrow">SMARTER JOB SEARCH</span>
            <h1>Find work that fits your <span>ambition.</span></h1>
            <p>Discover verified opportunities from fast-growing companies and build the career you actually want.</p>
            <div className="search-bar">
              <label>
                <Search size={20} />
                <input value={keyword} onChange={(e) => setKeyword(e.target.value)} placeholder="Job title, skill or company" />
              </label>
              <span className="search-divider" />
              <label>
                <MapPin size={20} />
                <input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="City or remote" />
              </label>
              <a className="search-button" href="#jobs">Search jobs</a>
            </div>
            <div className="popular-searches">
              <span>Popular:</span>
              <button onClick={() => setKeyword('React')}>React</button>
              <button onClick={() => setKeyword('Python')}>Python</button>
              <button onClick={() => setLocation('Remote')}>Remote</button>
              <button onClick={() => setKeyword('Design')}>Design</button>
            </div>
          </div>
          <div className="hero-panel" aria-hidden="true">
            <div className="hero-orbit orbit-one" />
            <div className="hero-orbit orbit-two" />
            <div className="floating-card top-card">
              <span className="mini-icon"><Building2 size={20} /></span>
              <div><strong>3,800+</strong><small>Hiring companies</small></div>
            </div>
            <div className="hero-visual-card">
              <span className="visual-badge">NEW MATCH</span>
              <div className="visual-logo">PF</div>
              <h3>Senior UI Engineer</h3>
              <p>PixelForge Labs · Hybrid</p>
              <div className="skill-row"><span>React</span><span>TypeScript</span></div>
              <button>View opportunity <ChevronRight size={16} /></button>
            </div>
            <div className="floating-card bottom-card">
              <span className="mini-icon success"><Users size={20} /></span>
              <div><strong>24k+</strong><small>People hired</small></div>
            </div>
          </div>
        </section>

        <section className="trust-strip">
          <span>Trusted by teams at</span>
          <strong>ASTERIX</strong><strong>QUANTIVE</strong><strong>NOVA</strong><strong>PIXELFORGE</strong><strong>LOUDLY</strong>
        </section>

        <section className="section-block" id="companies">
          <div className="section-heading">
            <div><span className="eyebrow">EXPLORE CAREERS</span><h2>Jobs by category</h2></div>
            <a href="#jobs">Browse all categories <ChevronRight size={18} /></a>
          </div>
          <div className="category-row">
            {categories.map(([name, count, Icon]) => (
              <button className="category-card" key={name} onClick={() => setKeyword(name === 'Technology' ? 'React' : name)}>
                <span className="category-icon"><Icon size={24} /></span>
                <span className="category-text"><strong>{name}</strong><small>{count}</small></span>
                <ChevronRight size={20} />
              </button>
            ))}
          </div>
        </section>

        <section className="jobs-section" id="jobs">
          <aside className="filters">
            <div className="filter-title"><SlidersHorizontal size={18} /><strong>Filters</strong></div>
            <div className="filter-group">
              <span>Work arrangement</span>
              {['All', 'Remote', 'Hybrid', 'On-site'].map((type) => (
                <button key={type} className={selectedType === type ? 'active' : ''} onClick={() => setSelectedType(type)}>{type}</button>
              ))}
            </div>
            <div className="filter-note">
              <strong>Need better matches?</strong>
              <p>Create a profile and let employers discover you.</p>
              <button>Create profile</button>
            </div>
          </aside>

          <div className="job-results">
            <div className="results-header">
              <div><span className="eyebrow">CURATED FOR YOU</span><h2>Latest opportunities</h2></div>
              <span>{filteredJobs.length} jobs found</span>
            </div>

            <div className="job-list">
              {filteredJobs.map((job) => (
                <article className="job-card" key={job.id}>
                  <div className="company-avatar">{job.company.split(/\s+/).map((w) => w[0]).join('').slice(0,2)}</div>
                  <div className="job-info">
                    <div className="job-title-row">
                      <div>
                        <div className="job-heading-line"><h3>{job.title}</h3>{job.featured && <span>Featured</span>}</div>
                        <p>{job.company}</p>
                      </div>
                      <button className={`save-button ${saved.includes(job.id) ? 'saved' : ''}`} onClick={() => toggleSaved(job.id)} aria-label="Save job">
                        <Heart size={20} fill={saved.includes(job.id) ? 'currentColor' : 'none'} />
                      </button>
                    </div>
                    <div className="job-meta">
                      <span><MapPin size={15} />{job.location}</span>
                      <span><BriefcaseBusiness size={15} />{job.type}</span>
                      <span><Clock3 size={15} />{job.age}</span>
                    </div>
                    <div className="job-footer">
                      <div className="tags">{job.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                      <strong>{job.salary}</strong>
                    </div>
                  </div>
                </article>
              ))}
              {filteredJobs.length === 0 && <div className="empty-state"><Search size={34} /><h3>No matching jobs</h3><p>Try a broader keyword, location, or filter.</p></div>}
            </div>
          </div>
        </section>

        <section className="employer-cta" id="employers">
          <div>
            <span className="eyebrow">FOR EMPLOYERS</span>
            <h2>Great teams start with great hires.</h2>
            <p>Reach skilled candidates with a focused job post and a hiring experience built for speed.</p>
          </div>
          <div className="cta-actions">
            <button className="white-button">Post a job</button>
            <button className="outline-button">Talk to sales</button>
          </div>
        </section>

        <section className="resources" id="resources">
          <div className="section-heading">
            <div><span className="eyebrow">CAREER RESOURCES</span><h2>Move your career forward</h2></div>
          </div>
          <div className="resource-row">
            {[
              ['Resume guide', 'Make your experience easier to scan and harder to ignore.'],
              ['Interview prep', 'Build stronger answers for technical and behavioural interviews.'],
              ['Salary toolkit', 'Know what to ask for before you enter a negotiation.'],
            ].map(([title, desc], index) => (
              <article className="resource-card" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{desc}</p><a href="#top">Read guide <ChevronRight size={17} /></a></article>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <a className="brand footer-brand" href="#top"><span className="brand-mark"><BriefcaseBusiness size={20} /></span><span>Flex<span>Jobs</span></span></a>
        <p>A polished React job portal demonstration built primarily with CSS Flexbox.</p>
        <div className="footer-links"><a href="#jobs">Jobs</a><a href="#companies">Companies</a><a href="#resources">Resources</a><a href="#employers">Employers</a></div>
      </footer>
    </div>
  );
}

export default App;
