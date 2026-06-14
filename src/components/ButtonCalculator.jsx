import { useState } from 'react'

function ButtonCalculator() {
  const [firstNumber, setFirstNumber] = useState('')
  const [secondNumber, setSecondNumber] = useState('')
  const [thirdNumber, setThirdNumber] = useState('')
  const [result, setResult] = useState('Enter three numbers and click an operation.')

  function readNumbers() {
    return [Number(firstNumber), Number(secondNumber), Number(thirdNumber)]
  }

  function calculate(operation) {
    const [a, b, c] = readNumbers()

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
        <p className="lesson-tag">Component 1</p>
        <h2>Calculator using Buttons</h2>
        <p>Each button sends a different operation to the same calculate function.</p>
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

      <div className="control-row">
        <button type="button" onClick={() => calculate('+')}>Add</button>
        <button type="button" onClick={() => calculate('-')}>Subtract</button>
        <button type="button" onClick={() => calculate('*')}>Multiply</button>
        <button type="button" onClick={() => calculate('/')}>Divide</button>
      </div>

      <p className="result-box">{result}</p>
    </section>
  )
}

export default ButtonCalculator
