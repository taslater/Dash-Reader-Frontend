import './UI.css';

function UI(props) {
  const optionButtons = []
  for (const i in props.buttonNames) {
    const buttonName = props.buttonNames[i]
    optionButtons.push(
      <button key={i} className="dropdown-item">{buttonName}</button>
    )
  }
  return (
    <section className='uisection'>
      {props.children}
      {/* <section className='optionButtons'>{optionButtons}</section> */}
      <div class="dropdown">
        <button class="btn dropdown-toggle optionButtons" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Options Menu
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          {optionButtons}
        </div>
      </div>
    </section>
  )
}

export default UI