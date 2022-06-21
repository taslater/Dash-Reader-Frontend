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
      <h2>{props.reader_name}</h2>
      <section className='optionButtons'>{optionButtons}</section>
    </section>
  )
}

export default UI