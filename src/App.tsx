import { useState } from 'react'
import './App.css'
import Icon from './components/Icon'
import JobCard from './components/JobCard'
import ApplicationForm, { ApplicationData } from './components/ApplicationForm'
import { jobs, Job } from './data/jobs'

function App() {
  const [selectedCountry, setSelectedCountry] = useState('')
  const [selectedSector, setSelectedSector] = useState('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedJob, setSelectedJob] = useState<Job | null>(null)

  const countries = [
    'Olanda', 
    'Polonia', 
    'Germania', 
    'Belgia', 
    'Franța', 
    'Spania', 
    'Austria'
  ]
  
  const sectors = [
    'Logistică', 
    'Producție', 
    'Auto', 
    'Agricultură', 
    'Construcții', 
    'Ospitalitate', 
    'Depozit', 
    'Alimentară',
    'Fabricare',
    'Retail',
    'Toate joburile'
  ]

  const filteredJobs = jobs.filter(job => {
    if (selectedCountry && job.country !== selectedCountry) return false
    if (selectedSector && selectedSector !== 'Toate joburile' && job.sector !== selectedSector) return false
    return true
  })

  const handleApply = (job: Job) => {
    setSelectedJob(job)
  }

  const handleFormSubmit = (data: ApplicationData) => {
    console.log('Application submitted:', data)
    // Aici poți adăuga logica de trimitere a aplicației
  }

  const handleSearchJobs = () => {
    window.scrollTo({ top: document.getElementById('jobs-section')?.offsetTop || 0, behavior: 'smooth' })
  }

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">ROSBERG WORK FORCE</div>
          <button 
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-icons">{mobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
          <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
            <li><a href="#find-job" onClick={() => setMobileMenuOpen(false)}>Găsește job</a></li>
            <li><a href="#job-seekers" onClick={() => setMobileMenuOpen(false)}>Candidați</a></li>
            <li><a href="#about" onClick={() => setMobileMenuOpen(false)}>Despre ROSBERG</a></li>
            <li><a href="#employers" onClick={() => setMobileMenuOpen(false)}>Pentru angajatori</a></li>
            <li><a href="#special" onClick={() => setMobileMenuOpen(false)}>Recrutare specială</a></li>
            <li><a href="#careers" onClick={() => setMobileMenuOpen(false)}>Cariere ROSBERG</a></li>
            <li><a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
            <li><a href="#login" onClick={() => setMobileMenuOpen(false)}>Login</a></li>
            <li className="language-selector">
              <select>
                <option>Română</option>
                <option>English</option>
                <option>Deutsch</option>
                <option>Polski</option>
              </select>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <h1 className="hero-title">Alege destinația și tipul de muncă</h1>
          
          <div className="job-filters">
            <div className="filter-group">
              <label>Țară</label>
              <div className="country-buttons">
                {countries.map(country => (
                  <button
                    key={country}
                    type="button"
                    className={`country-btn ${selectedCountry === country ? 'active' : ''}`}
                    onClick={() => setSelectedCountry(country)}
                  >
                    {country}
                  </button>
                ))}
              </div>
            </div>

            <div className="filter-group">
              <label>Sector</label>
              <div className="sector-buttons">
                {sectors.map(sector => (
                  <button
                    key={sector}
                    type="button"
                    className={`sector-btn ${selectedSector === sector ? 'active' : ''}`}
                    onClick={() => setSelectedSector(sector)}
                  >
                    {sector}
                  </button>
                ))}
              </div>
            </div>

            <button className="search-jobs-btn" onClick={handleSearchJobs}>
              Caută joburi ({filteredJobs.length} disponibile)
            </button>
          </div>
        </div>
      </section>

      {/* Why ROSBERG Section */}
      <section className="why-otto">
        <div className="container">
          <h2 className="section-title">DE CE ROSBERG WORK FORCE?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Icon name="payments" size={64} />
              </div>
              <h3>Plata corectă a salariului</h3>
              <p>întotdeauna la timp</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Icon name="description" size={64} />
              </div>
              <h3>Contracte clare de muncă</h3>
              <p>cu ore garantate</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Icon name="support_agent" size={64} />
              </div>
              <h3>Suport 24/7</h3>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Icon name="home" size={64} />
              </div>
              <h3>Cazare premium</h3>
              <p>gratuită</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Icon name="public" size={64} />
              </div>
              <h3>Nr. 1 agenție internațională</h3>
              <p>de recrutare</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Icon name="handshake" size={64} />
              </div>
              <h3>Colaborare cu cele mai mari</h3>
              <p>și cunoscute branduri</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Icon name="lightbulb" size={64} />
              </div>
              <h3>22 de ani</h3>
              <p>de experiență</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Icon name="groups" size={64} />
              </div>
              <h3>25.000 de oameni angajați</h3>
              <p>zilnic în Europa</p>
            </div>
          </div>
        </div>
      </section>

      {/* Jobs Section */}
      <section id="jobs-section" className="jobs-section">
        <div className="container">
          <h2 className="section-title">Locuri de muncă disponibile</h2>
          {filteredJobs.length === 0 ? (
            <div className="no-jobs">
              <p>Nu s-au găsit joburi pentru filtrele selectate. Te rugăm să încerci alte opțiuni.</p>
            </div>
          ) : (
            <div className="jobs-grid">
              {filteredJobs.map(job => (
                <JobCard key={job.id} job={job} onApply={handleApply} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Working With Partners Section */}
      <section className="partners-section">
        <div className="container">
          <h2 className="section-title">COLABORĂM CU</h2>
          <div className="partners-grid">
            <div className="partner-card">
              <div className="partner-logo">
                <img 
                  src="https://logo.clearbit.com/jumbo.com" 
                  alt="Jumbo"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'block';
                  }} 
                />
                <div className="logo-text-fallback" style={{ display: 'none' }}>JUMBO</div>
              </div>
              <p>Jumbo este unul dintre cele mai importante supermarketuri din Olanda, cu peste 600 de magazine în întreaga țară și un magazin online foarte popular. Clienții pot face cumpărături de acasă, iar angajații depozitului Jumbo Online cel mai apropiat colectează comenzile, le ambalează în coșuri și le pregătesc pentru livrare. Este o muncă foarte simplă și plăcută cu condiții de angajare foarte atractive.</p>
              <button className="partner-btn">Joburi la Jumbo</button>
            </div>
            <div className="partner-card">
              <div className="partner-logo">
                <img 
                  src="https://logo.clearbit.com/ah.nl" 
                  alt="Albert Heijn"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'block';
                  }} 
                />
                <div className="logo-text-fallback" style={{ display: 'none' }}>ALBERT HEIJN</div>
              </div>
              <p>Albert Heijn este cel mai mare lanț de supermarketuri din Olanda, cu aproximativ 1.000 de magazine în întreaga țară. ROSBERG Work Force furnizează personal pentru 6 centre de distribuție Albert Heijn, în care angajații noștri sunt responsabili pentru aprovizionarea magazinelor cu mărfuri, și 9 centre de distribuție online, din care produsele comandate online sunt livrate direct clienților.</p>
              <button className="partner-btn">Joburi la Albert Heijn</button>
            </div>
            <div className="partner-card">
              <div className="partner-logo">
                <img 
                  src="https://logo.clearbit.com/cevalogistics.com" 
                  alt="CEVA"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'block';
                  }} 
                />
                <div className="logo-text-fallback" style={{ display: 'none' }}>CEVA</div>
              </div>
              <p>CEVA este un furnizor mare de soluții logistice variate pentru clienții din Olanda. Compania acționează ca intermediar în distribuția mărfurilor pentru conturi mari și mici din minerit, medical, auto, construcții și multe alte industrii. Alte produse cu care lucrează angajații depozitelor CEVA includ electronice, mobilier de interior și cosmetice.</p>
              <button className="partner-btn">Joburi la CEVA</button>
            </div>
            <div className="partner-card">
              <div className="partner-logo">
                <img 
                  src="https://logo.clearbit.com/dhl.com" 
                  alt="DHL"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'block';
                  }} 
                />
                <div className="logo-text-fallback" style={{ display: 'none' }}>DHL</div>
              </div>
              <p>DHL este un gigant în sectorul serviciilor logistice internaționale. Datorită acoperirii sale globale și prezenței în peste 220 de țări, compania livrează peste 1,6 miliarde de expedieri pe an. ROSBERG Work Force cooperează cu centrele de distribuție DHL situate în toată Olanda și Polonia.</p>
              <button className="partner-btn">Joburi la DHL</button>
            </div>
            <div className="partner-card">
              <div className="partner-logo">
                <img 
                  src="https://logo.clearbit.com/hutchinson.com" 
                  alt="Hutchinson"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'block';
                  }} 
                />
                <div className="logo-text-fallback" style={{ display: 'none' }}>HUTCHINSON</div>
              </div>
              <p>Hutchinson este un lider în sisteme anti-vibrație, managementul transferului de fluide și soluții de etanșare. Compania are peste 40.000 de angajați în 25 de țări. Oferim locuri de muncă excelente în fabricile Hutchinson din Łódź, Gliwice și Żywiec.</p>
              <button className="partner-btn">Joburi la Hutchinson</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>Găsește un job</h4>
              <ul>
                <li><a href="#netherlands">Olanda</a></li>
                <li><a href="#poland">Polonia</a></li>
                <li><a href="#germany">Germania</a></li>
                <li><a href="#belgium">Belgia</a></li>
                <li><a href="#france">Franța</a></li>
                <li><a href="#spain">Spania</a></li>
                <li><a href="#austria">Austria</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Sector</h4>
              <ul>
                <li><a href="#production">Producție</a></li>
                <li><a href="#logistics">Logistică</a></li>
                <li><a href="#automotive">Auto</a></li>
                <li><a href="#agriculture">Agricultură</a></li>
                <li><a href="#construction">Construcții</a></li>
                <li><a href="#hospitality">Ospitalitate</a></li>
                <li><a href="#warehouse">Depozit</a></li>
                <li><a href="#food">Alimentară</a></li>
                <li><a href="#manufacturing">Fabricare</a></li>
                <li><a href="#retail">Retail</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Lucrează la ROSBERG</h4>
              <ul>
                <li><a href="#recruitment">Recrutare</a></li>
                <li><a href="#sales">Vânzări</a></li>
                <li><a href="#operations">Operațiuni</a></li>
                <li><a href="#it">Tehnologie informatică</a></li>
                <li><a href="#hr">Resurse umane</a></li>
                <li><a href="#marketing">Marketing</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Linkuri</h4>
              <ul>
                <li><a href="#gdpr">GDPR</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#corporate">Site corporativ</a></li>
              </ul>
              <div className="social-links">
                <a href="#youtube" aria-label="YouTube">
                  <img src="https://www.svgrepo.com/show/303299/youtube-icon-2-logo.svg" alt="YouTube" className="social-icon" />
                </a>
                <a href="#facebook" aria-label="Facebook">
                  <img src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg" alt="Facebook" className="social-icon" />
                </a>
                <a href="#linkedin" aria-label="LinkedIn">
                  <img src="https://www.svgrepo.com/show/303301/linkedin-icon-logo.svg" alt="LinkedIn" className="social-icon" />
                </a>
                <a href="#instagram" aria-label="Instagram">
                  <img src="https://www.svgrepo.com/show/303299/instagram-2016-logo.svg" alt="Instagram" className="social-icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 ROSBERG Work Force. Toate drepturile rezervate.</p>
          </div>
        </div>
      </footer>

      {/* Application Form Modal */}
      {selectedJob && (
        <ApplicationForm
          job={selectedJob}
          onClose={() => setSelectedJob(null)}
          onSubmit={handleFormSubmit}
        />
      )}
    </div>
  )
}

export default App
