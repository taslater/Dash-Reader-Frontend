import './MediaControl.css'
import reset_icon from '../static/icons/arrow-clockwise.svg'
import play_icon from '../static/icons/play-circle.svg'
import pause_icon from '../static/icons/pause-circle.svg'
import React, { useState } from 'react'
import MediaStates from './MediaStates'

function MediaControl(props) {
  const [mediaState, setMediaState] = useState(0)

  const buttonTest = (_mediaState) => {
    setMediaState(_mediaState)
  }

  return (
    <div className="media-control">
      <div>{MediaStates[mediaState]}</div>
      <div className="rsvp-icons">
        <button className="rsvp-control-button" onClick={() => {buttonTest(0)}}>
          <img src={reset_icon} alt="Reset" width="36" height="36" className="rsvp-icon"></img>
        </button>
        <button className="rsvp-control-button" onClick={props.onPlay}>
          <img src={play_icon} alt="Play" width="32" height="32" className="rsvp-icon"></img>
        </button>
        <button className="rsvp-control-button" onClick={() => {buttonTest(2)}}>
          <img src={pause_icon} alt="Pause" width="32" height="32" className="rsvp-icon"></img>
        </button>
      </div>
    </div>
  )
}

export default MediaControl

