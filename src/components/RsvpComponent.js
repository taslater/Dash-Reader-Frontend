import React from 'react'
import MediaControl from './MediaControl';
import startRsvp from '../lib/rsvp'
import '../lib/rsvp.css'

function RsvpComponent(props) {
  return (
    <div>
      <div id="reader-display"></div>
      <MediaControl onPlay={()=>{startRsvp("reader-display", props.inputText)}}/>
    </div>
  )
}

export default RsvpComponent