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
  const [count, setCount] = useState(0)
  const [firstNum, setFirstNum] = useState('')
  const [secNum, setSecNum] = useState('')
  const [sum, setSum] = useState('')
  const [display, setDisplay] = useState('')

  /**
   *
   * get first number =>
   *   conditions no double decimals, no zero zero at [0] unless decimal at [1].
   *
   *
   */
  function handleChange(e) {
    e.preventDefault()
    console.log((value += e.target.value))
    // setCount(e.target.value)
  }

  function handleClick(val) {
    let currentElem = val.target.value
    if (!opActive) {
      setFirstNum(firstNum + currentElem)
      setDisplay(display + currentElem)
      setCount(count + 1)
    } else if (opActive) {
      setSecNum(secNum + currentElem)
      setDisplay(secNum + currentElem)
    }

    // console.log(currentElem)
    // if (currentElem === '.' && count[count.length - 1] === '.') {
    //   return ''
    // }
    // if (currentElem == 0 && count[0] == 0) {
    //   return ''
    // } else setCount(count + val.target.value)
  }

  function handleOpClick(op) {
    let operator = op.target.value
    setFirstNum(firstNum + operator)
    setOpActive(true)

    setDisplay('')
    console.log('calculate', firstNum + operator)
  }

  function Display(props) {
    return (
      <div id="display">
        <p>{display}</p>
      </div>
    )
  }

  function clear() {
    // setCount('')
    setDisplay('')
    setFirstNum('')
    setSecNum('')
    setOpActive(false)
    // try {
    //   if (count == 'ERR') {
    //     return setCount('')
    //   } else return nsetCount(count.slice(0, -1))
    // } catch (error) {
    //   setCount('')
    // }
  }
  function calculate() {
    let calc = eval(firstNum + secNum)
    console.log(calc)
    setSum(eval(calc))
    setDisplay(calc)

    // try {
    //   if (!count) {
    //     return setCount(0)
    //   } else setCount(eval(count))
    // } catch (error) {
    //   setCount('ERR')
    // }
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
