const { useState } = React

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
    if (count == 0) {
      setFirstNum(currentElem)
      setDisplay(display + currentElem)
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
    console.log(operator, firstNum)
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
    setTotal('')
    setFirstNum('')
    setSecNum('')
    // try {
    //   if (count == 'ERR') {
    //     return setCount('')
    //   } else return nsetCount(count.slice(0, -1))
    // } catch (error) {
    //   setCount('')
    // }
  }
  function calculate() {
    // try {
    //   if (!count) {
    //     return setCount(0)
    //   } else setCount(eval(count))
    // } catch (error) {
    //   setCount('ERR')
    // }
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
