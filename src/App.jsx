import ButtonCalculator from './components/ButtonCalculator.jsx'
import RadioCalculator from './components/RadioCalculator.jsx'
import SelectCalculator from './components/SelectCalculator.jsx'
import CheckboxCalculator from './components/CheckboxCalculator.jsx'
import './App.css'

function App() {
  return (
    <main className="app-shell">
      <header className="hero-panel">
        <p className="eyebrow">React Components Practice</p>
        <h1>Three Number Calculator Components</h1>
        <p className="hero-text">
          This app uses separate React components for buttons, radio buttons,
          a select dropdown, and checkboxes. Each component takes three inputs
          and performs addition, subtraction, multiplication, and division.
        </p>
      </header>

      <section className="concept-panel">
        <h2>What this project teaches</h2>
        <div className="concept-grid">
          <span>useState</span>
          <span>controlled inputs</span>
          <span>onChange</span>
          <span>onClick</span>
          <span>radio buttons</span>
          <span>select dropdown</span>
          <span>checkbox arrays</span>
          <span>separate components</span>
        </div>
      </section>

      <ButtonCalculator />
      <RadioCalculator />
      <SelectCalculator />
      <CheckboxCalculator />
    </main>
  )
}

export default App
