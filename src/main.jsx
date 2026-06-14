import React from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'

function App() {
  return (
    <main className="page">
      <section className="card">
        <p className="eyebrow">React on GitHub Pages</p>
        <h1>Hello World</h1>
        <p className="lead">
          This React app is ready for deployment on your custom domain:
        </p>
        <a className="domain" href="https://react.learnwithchampak.live/">
          react.learnwithchampak.live
        </a>
        <div className="actions">
          <a href="https://learnwithchampak.live/" target="_blank" rel="noreferrer">
            Learn With Champak
          </a>
        </div>
      </section>
    </main>
  )
}

createRoot(document.getElementById('root')).render(<App />)
