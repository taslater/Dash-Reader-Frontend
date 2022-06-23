import React from 'react';
import './About.css';

function About() {

    return (
        <div className="modal-content">
            <div className="modal-header">
                <h4 className="modal-title">About our Tools</h4>
            </div>
            <div className="modal-body">
                <h5>Binonic Reader</h5>
                <br></br>
                <div>This is where the description of the binonic reader will go.</div>
                <br></br>
                <h5>RSVP Reader</h5>
                <br></br>
                <div>This is where the description of the RSVP reader will go.</div>
                <br></br>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            </div>
        </div>
    );
};

export default About