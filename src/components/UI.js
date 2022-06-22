import './UI.css';

function UI(props) {
  const optionButtons = []
  for (const i in props.buttonNames) {
    const buttonName = props.buttonNames[i]
    optionButtons.push(
      <option key={i} className="dropdown-item">{buttonName}</option>
    )
  }
  return (
    <section className='uisection'>
      {props.children}
      {/* <section className='optionButtons'>{optionButtons}</section> */}

      <div className="dropdown">
        <select className="btn dropdown-toggle optionButtons" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{optionButtons}</select>
        {/* <div class="dropdown-menu" aria-labelledby="dropdownMenuButton"></div> */}
      </div>
    </section>
  )
}

export default UI