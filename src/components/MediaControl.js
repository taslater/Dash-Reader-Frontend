import './MediaControl.css'
import reset_icon from '../static/icons/arrow-clockwise.svg'
import play_icon from '../static/icons/play-circle.svg'
import pause_icon from '../static/icons/pause-circle.svg'

function MediaControl() {
  return (
    <div className="rsvp-icons">
      <button className="rsvp-control-button">
        <img src={reset_icon} alt="Reset" width="36" height="36" className="rsvp-icon"></img>
      </button>
      <button className="rsvp-control-button">
        <img src={play_icon} alt="Play" width="32" height="32" className="rsvp-icon"></img>
      </button>
      <button className="rsvp-control-button">
        <img src={pause_icon} alt="Pause" width="32" height="32" className="rsvp-icon"></img>
      </button>
    </div>
  )
}

export default MediaControl

