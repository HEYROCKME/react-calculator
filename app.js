const numberStr = [
  'ZERO',
  'ONE',
  'TWO',
  'THREE',
  'FOUR',
  'FIVE',
  'SIX',
  'SEVEN',
  'EIGHT',
  'NINE',
]

function Button(props) {
  return (
    <button className={'btn ' + props.group} id={props.id} value={props.value}>
      {props.value}
    </button>
  )
}

function Display(props) {
  return (
    <div id="display" text="0">
      {props.text}
    </div>
  )
}

function Calculator() {
  return (
    <div className="calculator">
      <h3 className="device">Calc101</h3>
      <Display text="See you Calculator" />

      <div className="interface-btn">
        <div className="numbers">
          {numberStr.map((element, i) => {
            if (i > 0 && i <= 3) {
              return <Button key={i} group="row1" id={element} value={i} />
            }

            if (i > 3 && i <= 6) {
              return <Button key={i} group="row2" id={element} value={i} />
            }
            if (i > 6 && i <= 9) {
              return <Button key={i} group="row3" id={element} value={i} />
            }
          })}

          <Button id="CLEAR" value="CLR" />
          <Button key={0} class="row4" id={numberStr[0]} value="0" />
          <Button id="decimal" value="." />
          <Button id="equals" value="=" />
        </div>
        <div class="operators">
          <Button id="ADD" value="+" />
          <Button id="ADD" value="-" />
          <Button id="ADD" value="x" />
          <Button id="ADD" value="/" />
          <Button id="ADD" value="Flip" />
        </div>
      </div>
    </div>
  )
}

ReactDOM.render(
  <Calculator />,

  document.getElementById('app')
)
