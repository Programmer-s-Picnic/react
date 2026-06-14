import { useState } from 'react'
import HomePage from './pages/HomePage.jsx'
import CalculatorPage from './pages/CalculatorPage.jsx'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  function openHomePage() {
    setCurrentPage('home')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function openCalculatorPage() {
    setCurrentPage('calculators')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <main className="app-shell">
      <nav className="site-nav" aria-label="Main navigation">
        <div className="brand-block">
          <span className="brand-mark">PP</span>
          <span>
            <strong>Programmer&apos;s Picnic</strong>
            <small>React Components Lab</small>
          </span>
        </div>

        <div className="nav-actions">
          <button
            className={currentPage === 'home' ? 'active-nav' : ''}
            onClick={openHomePage}
          >
            Home
          </button>

          <button
            className={currentPage === 'calculators' ? 'active-nav' : ''}
            onClick={openCalculatorPage}
          >
            Calculators
          </button>
        </div>
      </nav>

      {currentPage === 'home' ? (
        <HomePage onOpenCalculators={openCalculatorPage} />
      ) : (
        <CalculatorPage />
      )}
    </main>
  )
}

export default App
