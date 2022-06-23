import React, {useEffect} from 'react'
import MediaControl from './MediaControl';
import dashRSVP from '../lib/rsvp'
import '../lib/rsvp.css'
import './RsvpComponent.css'

function RsvpComponent(props) {
  useEffect(() => {
    dashRSVP.init("rsvp-text-container")
  });

  return (
    <div className='rsvp-react-container'>
      <div id="rsvp-text-container"></div>
      <MediaControl
        onPlay={()=>{dashRSVP.play(props.inputText)}}
        onPause={()=>{dashRSVP.pause()}}
        onRestart={()=>{dashRSVP.restart()}}
      />
    </div>
  )
}

export default RsvpComponent