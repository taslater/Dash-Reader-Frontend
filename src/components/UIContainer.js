import './UIContainer.css'
import UI from './UI';
import React, { useState } from 'react'

function UIContainer() {

  const [inputText, setInputText] = useState("")

  const textInputHandler = (e) => {
    setInputText(e.target.value)
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
      ]}
      isInput={true}
      handleInput={textInputHandler}
      initialValue={inputText}
      />,
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
      ]}
      isInput={false}
      inputText={inputText}
      />,
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
      ]}
      isInput={false}
      inputText={inputText}
      />,
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

  const selectHandler = (e) => {
    setOptionKey(e.target.value)
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
