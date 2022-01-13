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
    <button className={'btn ' + props.class} id={props.id} value={props.value}>
      {props.value}
    </button>
  )
}

function Calculator() {
  return (
    <div className="calculator">
      <h1>See you Calculator</h1>
      <div className="numbers">
        {numberStr.map((element, i) => {
          if (i > 0 && i <= 3) {
            return <Button key={i} class="row1" id={element} value={i} />
          }

          if (i > 3 && i <= 6) {
            return <Button key={i} class="row2" id={element} value={i} />
          }
          if (i > 6 && i <= 9) {
            return <Button key={i} class="row3" id={element} value={i} />
          }
        })}
        <Button key={0} class="row4" id={numberStr[0]} value="0" />
      </div>
    </div>
  )
}

ReactDOM.render(
  <Calculator />,

  document.getElementById('app')
)
