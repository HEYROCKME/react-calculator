const { useState, useEffect } = React

const numberStr = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
]

const regex = [/([.]\B)|([.]{2,}])|[.+](\d+[.+])\b/g]

const operators = ['+', '-', '*', '/']
const operatorNames = ['add', 'subtract', 'multiply', 'divide']

function Button(props) {
  return (
    <button
      className={'btn ' + props.group}
      id={props.id}
      onClick={props.onClick}
      value={props.value}
    >
      {props.value}
    </button>
  )
}

function Calculator() {
  const [opActive, setOpActive] = useState(false)
  const [dot, setDot] = useState(false)
  const [firstNum, setFirstNum] = useState(0)
  const [secNum, setSecNum] = useState('')
  const [sum, setSum] = useState('')
  const [display, setDisplay] = useState(0)

  function Display(props) {
    return (
      <div id="display">
        <p>{display}</p>
      </div>
    )
  }

  let uiDisplay = document.getElementById('display')

  useEffect(() => {
    uiDisplay = `${display}`
  }, [display])

  function handleDots(input) {
    if (input && !dot) {
      console.log('newDot')
      setDot(true)
      return input
    } else {
      return ''
    }
  }

  function handleClick(val) {
    let currentElem = val.target.value

    if (currentElem === '.') {
      currentElem = handleDots(currentElem)

      setFirstNum(currentElem)
      return setDisplay(currentElem)
    }

    if (!opActive) {
      setFirstNum(firstNum + currentElem)
      setDisplay(display + currentElem)
    } else if (opActive) {
      setSecNum(secNum + currentElem)
      setDisplay(secNum + currentElem)
    }
  }

  function handleOpClick(op) {
    let operator = op.target.value

    if (firstNum || opActive) {
      setOpActive(false)
      setFirstNum(firstNum + operator)
    } else {
      setFirstNum(firstNum + operator)
      setOpActive(true)
    }

    setDisplay('')
    setDot(false)
  }

  function clear() {
    setDisplay(0)
    setFirstNum('')
    setSecNum('')
    setOpActive(false)
  }
  function calculate() {
    if (!secNum) {
      setSecNum('0')
    }
    let calc = firstNum + secNum
    calc.replace()
    console.log('calced ' + calc)
    setSum(eval(calc))
    setDisplay(eval(calc))
    setFirstNum(calc)
    setSecNum('')
    setOpActive(false)
  }

  function update() {
    setDisplay(sum)
  }

  return (
    <div className="calculator">
      <h3 className="device">Calc101</h3>
      <Display />

      <div className="interface-btn">
        <div className="numbers">
          {numberStr.map((element, i) => {
            if (i > 0 && i <= 3) {
              return (
                <Button
                  key={i}
                  group="row1"
                  id={element}
                  value={i}
                  onClick={(e) => handleClick(e)}
                />
              )
            }

            if (i > 3 && i <= 6) {
              return (
                <Button
                  key={i}
                  group="row2"
                  id={element}
                  value={i}
                  onClick={(e) => handleClick(e)}
                />
              )
            }
            if (i > 6 && i <= 9) {
              return (
                <Button
                  key={i}
                  group="row3"
                  id={element}
                  value={i}
                  onClick={(e) => handleClick(e)}
                />
              )
            }
          })}

          <Button id="clear" value="CLR" onClick={() => clear()} />
          <Button
            key={0}
            className="row4"
            id={numberStr[0]}
            value={0}
            onClick={(e) => handleClick(e)}
          />
          <Button id="decimal" value="." onClick={(e) => handleClick(e)} />
          <Button id="equals" value="=" onClick={() => calculate()} />
        </div>

        <div className="operators">
          {operators.map((item, i) => {
            return (
              <Button
                key={item}
                id={operatorNames[i]}
                value={item}
                onClick={(e) => handleOpClick(e)}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

ReactDOM.render(
  <Calculator />,

  document.getElementById('app')
)
