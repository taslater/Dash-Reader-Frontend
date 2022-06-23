import './MediaControl.css'
import restart_icon from '../static/icons/arrow-clockwise.svg'
import play_icon from '../static/icons/play-circle.svg'
import pause_icon from '../static/icons/pause-circle.svg'
import React from 'react'
// import MediaStates from './MediaStates'

function MediaControl(props) {
  // const [mediaState, setMediaState] = useState(0)

  return (
    <div className="media-control">
      {/* <div>{MediaStates[mediaState]}</div> */}
      <div className="rsvp-icons">
        <button className="rsvp-control-button" onClick={props.onRestart}>
          <img src={restart_icon} alt="Restart" width="36" height="36" className="rsvp-icon"></img>
        </button>
        <button className="rsvp-control-button" onClick={props.onPlay}>
          <img src={play_icon} alt="Play" width="32" height="32" className="rsvp-icon"></img>
        </button>
        <button className="rsvp-control-button" onClick={props.onPause}>
          <img src={pause_icon} alt="Pause" width="32" height="32" className="rsvp-icon"></img>
        </button>
      </div>
    </div>
  )
}

export default MediaControl

