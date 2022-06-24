import React from 'react';

function GitHubModal() {

    return (
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Our GitHub Repos</h4>
          </div>
          <div className="modal-body">
            <a href="https://github.com/taslater/Dash-Reader-Frontend"><h5>React Frontend</h5></a>
            <a href="https://github.com/AcademyPgh/S14-Reading-Assistance"><h5>Spring Boot Backend</h5></a>
            <a href="https://github.com/tobiasfunction/reading-tools-js"><h5>RSVP JavaScript Library</h5></a>
          <div className="modal-footer">
            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    );
};

export default GitHubModal