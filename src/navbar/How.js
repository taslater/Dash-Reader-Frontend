import React from 'react';
import './How.css';

function How() {

    return (
        <div className="modal-content">
            <div className="modal-body">
                <h4>How the Reader Works</h4>
                <br></br>
                <div>This site is a place where you can view text in different methods. Enter the text you wish to be altered in the text box below the dropdown box while it says input. <br></br><br></br>Once you've entered the text, select the type of reader you wish to utilize and it will return the text in that style. Check out the about section to learn about our readers!</div>
                <br></br>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            </div>
        </div>
    );
};

export default How