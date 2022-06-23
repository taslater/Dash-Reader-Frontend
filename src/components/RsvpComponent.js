import React, {useEffect} from 'react'
import MediaControl from './MediaControl';
import dashRSVP from '../lib/rsvp'
import '../lib/rsvp.css'

function RsvpComponent(props) {
  useEffect(() => {
    dashRSVP.init("rsvp-display-container")
  });

  return (
    <div>
      <div id="rsvp-display-container"></div>
      <MediaControl
        onPlay={()=>{dashRSVP.play(props.inputText)}}
        onPause={()=>{dashRSVP.pause()}}
        onRestart={()=>{dashRSVP.restart()}}
      />
    </div>
  )
}

export default RsvpComponent