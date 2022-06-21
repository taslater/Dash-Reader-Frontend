import './UI.css';

function UI(props) {
  const optionButtons = []
  for (const i in props.buttonNames) {
    const buttonName = props.buttonNames[i]
    optionButtons.push(
      <button key={i} className="optionButton">{buttonName}</button>
    )
  }
  return (
    <section className='uisection'>
      {props.isInput ?
        <textarea
          name=""
          id=""
          className="textarea"
          onChange={props.handleInput}
          value={props.initialValue}
        ></textarea> :
        <div id={props.keyValue}>{props.inputText}</div>
      }
      <section className='optionButtons'>{optionButtons}</section>
    </section>
  )
}

export default UI