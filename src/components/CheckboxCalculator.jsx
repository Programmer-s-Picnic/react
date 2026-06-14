import { useState } from 'react'

function CheckboxCalculator() {
  const [firstNumber, setFirstNumber] = useState('')
  const [secondNumber, setSecondNumber] = useState('')
  const [thirdNumber, setThirdNumber] = useState('')
  const [operations, setOperations] = useState(['+'])
  const [results, setResults] = useState(['Choose one or more checkboxes and calculate.'])

  function toggleOperation(event) {
    const selectedOperation = event.target.value
    const isChecked = event.target.checked

    if (isChecked) {
      setOperations((currentOperations) => [...currentOperations, selectedOperation])
      return
    }

    setOperations((currentOperations) =>
      currentOperations.filter((operation) => operation !== selectedOperation),
    )
  }

  function calculateOne(operation, a, b, c) {
    if (operation === '+') {
      return `Addition: ${a} + ${b} + ${c} = ${a + b + c}`
    }

    if (operation === '-') {
      return `Subtraction: ${a} - ${b} - ${c} = ${a - b - c}`
    }

    if (operation === '*') {
      return `Multiplication: ${a} × ${b} × ${c} = ${a * b * c}`
    }

    if (operation === '/') {
      if (b === 0 || c === 0) {
        return 'Division: not possible because the second or third number is zero.'
      }

      return `Division: ${a} ÷ ${b} ÷ ${c} = ${a / b / c}`
    }

    return 'Unknown operation.'
  }

  function calculate() {
    if (operations.length === 0) {
      setResults(['Please select at least one checkbox.'])
      return
    }

    const a = Number(firstNumber)
    const b = Number(secondNumber)
    const c = Number(thirdNumber)

    setResults(operations.map((operation) => calculateOne(operation, a, b, c)))
  }

  return (
    <section className="calculator-card">
      <div className="card-heading">
        <p className="lesson-tag">Component 4</p>
        <h2>Calculator using Checkboxes</h2>
        <p>Checkboxes allow the user to run many operations at the same time.</p>
      </div>

      <div className="input-grid">
        <label>
          First number
          <input
            type="number"
            value={firstNumber}
            onChange={(event) => setFirstNumber(event.target.value)}
            placeholder="Example: 20"
          />
        </label>

        <label>
          Second number
          <input
            type="number"
            value={secondNumber}
            onChange={(event) => setSecondNumber(event.target.value)}
            placeholder="Example: 5"
          />
        </label>

        <label>
          Third number
          <input
            type="number"
            value={thirdNumber}
            onChange={(event) => setThirdNumber(event.target.value)}
            placeholder="Example: 2"
          />
        </label>
      </div>

      <div className="choice-row" aria-label="Select one or more operations">
        <label className="choice-pill">
          <input
            type="checkbox"
            value="+"
            checked={operations.includes('+')}
            onChange={toggleOperation}
          />
          Add
        </label>

        <label className="choice-pill">
          <input
            type="checkbox"
            value="-"
            checked={operations.includes('-')}
            onChange={toggleOperation}
          />
          Subtract
        </label>

        <label className="choice-pill">
          <input
            type="checkbox"
            value="*"
            checked={operations.includes('*')}
            onChange={toggleOperation}
          />
          Multiply
        </label>

        <label className="choice-pill">
          <input
            type="checkbox"
            value="/"
            checked={operations.includes('/')}
            onChange={toggleOperation}
          />
          Divide
        </label>
      </div>

      <button type="button" onClick={calculate}>Calculate selected checkboxes</button>

      <div className="result-list">
        {results.map((result, index) => (
          <p className="result-box" key={`${result}-${index}`}>{result}</p>
        ))}
      </div>
    </section>
  )
}

export default CheckboxCalculator
