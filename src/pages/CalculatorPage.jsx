import ButtonCalculator from '../components/ButtonCalculator.jsx'
import RadioCalculator from '../components/RadioCalculator.jsx'
import SelectCalculator from '../components/SelectCalculator.jsx'
import CheckboxCalculator from '../components/CheckboxCalculator.jsx'

function CalculatorPage() {
  return (
    <>
      <header className="hero-panel calculator-hero">
        <p className="eyebrow">React Components Practice</p>
        <h1>Three Number Calculator Components</h1>
        <p className="hero-text">
          This page shows four separate React calculator components. Each one
          uses three controlled input boxes and performs addition, subtraction,
          multiplication, and division in a different way.
        </p>
      </header>

      <section className="concept-panel">
        <h2>What this page teaches</h2>
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
    </>
  )
}

export default CalculatorPage
