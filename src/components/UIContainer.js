import './UIContainer.css'
import UI from './UI';
import React, { useState } from 'react'

function UIContainer() {

  const [inputText, setInputText] = useState("")
  const [binonicText, setBinonicText] = useState("")

  const textInputHandler = (e) => {
    setInputText(e.target.value)
  }

  const getBinonic = (message) => {
    return message.toUpperCase()
  }

  const reader_uis = [
    <UI
      reader_name="Input"
      keyValue="input"
      buttonNames={[
        "Font",
        "Theme",
        "Clear",
        "Timer",
        "Random",
        "Clear"
      ]}>
      <textarea
        className="textarea"
        onChange={textInputHandler}
        value={inputText}>
      </textarea>
    </UI>,
    <UI
      reader_name="RSVP"
      keyValue="rsvp"
      buttonNames={[
        "Font",
        "WPM",
        "Theme",
        "Clear",
        "Timer",
        "Random",
        "Clear"
      ]}>
      <div id="rsvp-div">{inputText}</div>
    </UI>,
    <UI
      reader_name="Binonic"
      keyValue="binonic"
      buttonNames={[
        "Font",
        "WPM",
        "Theme",
        "Clear",
        "Timer",
        "Random",
        "Clear"
      ]}>
      <div dangerouslySetInnerHTML={{__html: binonicText}} className="binonicTextDiv"></div>
    </UI>,
  ]

  const readerUIDict = {}
  for (const reader_ui of reader_uis) {
    readerUIDict[reader_ui.props.keyValue] = reader_ui
  }
  const readerUISelectOptions = []
  for (const [key, reader_ui] of Object.entries(readerUIDict)) {
    readerUISelectOptions.push(
      <option key={key} value={key}>{reader_ui.props.reader_name}</option>
    )
  }

  const firstKey = Object.keys(readerUIDict)[0]
  const [optionKey, setOptionKey] = useState(firstKey)
  
  const renderTab = () => {
    return readerUIDict[optionKey]
  }

  const selectHandler = async (e) => {
    const selectValue = e.target.value
    if (selectValue == "binonic") {
      await updateBinonic()
    }
    setOptionKey(selectValue)
  }

  const updateBinonic = async () => {
    const fetchurl = `https://readgood.azurewebsites.net/hello?message=${inputText}`
    fetch(fetchurl)
      // Sets reponse to take in the api as a json
      .then(response => response.json())
      // .textBlock refers to the json variable that was made in the Spring Boot API that takes in user input and alters it
      .then((response) => response.textBlock)
      //.then(json => { document.getElementById("displayContainer").innerHTML = json })
      .then(binonicResult => setBinonicText(binonicResult))
      .catch(err => console.log(err))
  }

  return (
    <main className='main'>
      <div>
        <label htmlFor="reader-ui-select"></label>
        <select className="readerdrop" name="reader-uis" id="reader-ui-select" onChange={selectHandler}>
          {readerUISelectOptions}
        </select>
      </div>
      {renderTab()}
    </main>
  )
}

export default UIContainer
