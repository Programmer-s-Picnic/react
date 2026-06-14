import { useState } from 'react'

function RadioCalculator() {
  const [firstNumber, setFirstNumber] = useState('')
  const [secondNumber, setSecondNumber] = useState('')
  const [thirdNumber, setThirdNumber] = useState('')
  const [operation, setOperation] = useState('+')
  const [result, setResult] = useState('Choose one radio button and calculate.')

  function calculate() {
    const a = Number(firstNumber)
    const b = Number(secondNumber)
    const c = Number(thirdNumber)

    if (operation === '+') {
      setResult(`${a} + ${b} + ${c} = ${a + b + c}`)
    }

    if (operation === '-') {
      setResult(`${a} - ${b} - ${c} = ${a - b - c}`)
    }

    if (operation === '*') {
      setResult(`${a} × ${b} × ${c} = ${a * b * c}`)
    }

    if (operation === '/') {
      if (b === 0 || c === 0) {
        setResult('Division is not possible because the second or third number is zero.')
        return
      }

      setResult(`${a} ÷ ${b} ÷ ${c} = ${a / b / c}`)
    }
  }

  return (
    <section className="calculator-card">
      <div className="card-heading">
        <p className="lesson-tag">Component 2</p>
        <h2>Calculator using Radio Buttons</h2>
        <p>Radio buttons are useful when the user must choose exactly one option.</p>
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

      <div className="choice-row" role="radiogroup" aria-label="Select one operation">
        <label className="choice-pill">
          <input
            type="radio"
            name="radioOperation"
            value="+"
            checked={operation === '+'}
            onChange={(event) => setOperation(event.target.value)}
          />
          Add
        </label>

        <label className="choice-pill">
          <input
            type="radio"
            name="radioOperation"
            value="-"
            checked={operation === '-'}
            onChange={(event) => setOperation(event.target.value)}
          />
          Subtract
        </label>

        <label className="choice-pill">
          <input
            type="radio"
            name="radioOperation"
            value="*"
            checked={operation === '*'}
            onChange={(event) => setOperation(event.target.value)}
          />
          Multiply
        </label>

        <label className="choice-pill">
          <input
            type="radio"
            name="radioOperation"
            value="/"
            checked={operation === '/'}
            onChange={(event) => setOperation(event.target.value)}
          />
          Divide
        </label>
      </div>

      <button type="button" onClick={calculate}>Calculate selected operation</button>

      <p className="result-box">{result}</p>
    </section>
  )
}

export default RadioCalculator
