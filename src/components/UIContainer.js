import './UIContainer.css'
import React, { useState } from 'react'

function UIContainer(props) {

  const [inputText, setInputText] = useState("lorem lorem lorem")

  const readerUIDict = {}
  for (const reader_ui of props.reader_uis) {
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
        {/* <textarea name="" id="" className="textarea"></textarea> */}
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
