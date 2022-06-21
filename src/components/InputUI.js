import React from 'react'
import UI from './UI'

function InputUI(props) {
  return (
    <UI
      reader_name="Input"
      key="input"
      buttonNames={[
        "Input btn 1",
        "Input btn 2",
        "Input btn 3",
      ]}
    />
  )
}

export default InputUI