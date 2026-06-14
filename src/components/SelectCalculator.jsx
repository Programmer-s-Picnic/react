import { useState } from 'react'

function SelectCalculator() {
  const [firstNumber, setFirstNumber] = useState('')
  const [secondNumber, setSecondNumber] = useState('')
  const [thirdNumber, setThirdNumber] = useState('')
  const [operation, setOperation] = useState('+')
  const [result, setResult] = useState('Select an operation from the dropdown.')

  function calculate() {
    const a = Number(firstNumber)
    const b = Number(secondNumber)
    const c = Number(thirdNumber)

    switch (operation) {
      case '+':
        setResult(`${a} + ${b} + ${c} = ${a + b + c}`)
        break

      case '-':
        setResult(`${a} - ${b} - ${c} = ${a - b - c}`)
        break

      case '*':
        setResult(`${a} × ${b} × ${c} = ${a * b * c}`)
        break

      case '/':
        if (b === 0 || c === 0) {
          setResult('Division is not possible because the second or third number is zero.')
        } else {
          setResult(`${a} ÷ ${b} ÷ ${c} = ${a / b / c}`)
        }
        break

      default:
        setResult('Please select a valid operation.')
    }
  }

  return (
    <section className="calculator-card">
      <div className="card-heading">
        <p className="lesson-tag">Component 3</p>
        <h2>Calculator using Select Dropdown</h2>
        <p>A select dropdown keeps many options compact and neat.</p>
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

      <div className="select-row">
        <label>
          Operation
          <select value={operation} onChange={(event) => setOperation(event.target.value)}>
            <option value="+">Add</option>
            <option value="-">Subtract</option>
            <option value="*">Multiply</option>
            <option value="/">Divide</option>
          </select>
        </label>

        <button type="button" onClick={calculate}>Calculate</button>
      </div>

      <p className="result-box">{result}</p>
    </section>
  )
}

export default SelectCalculator
