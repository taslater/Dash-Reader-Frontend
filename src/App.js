import './App.css';
import UIContainer from './components/UIContainer';
import About from './navbar/About';
import How from './navbar/How';


function App() {
  return (
    <div className="App">
      <header className="header">
        <h1 className="title">--Dash Reader--</h1>
        <div className="pos-f-t">
          <div className="collapse hamburger-expand-container" id="navbarToggleExternalContent">
            <div className="hamburger-expand-div">
              <button className="btn" data-toggle="modal" data-target="#howModal"><div className="text-dark h4" id="readerAbout">How it Works</div></button>
              <button className="btn" data-toggle="modal" data-target="#aboutModal"><div className="text-dark h4" id="readerAbout">About</div></button>
              <a href="https://github.com/taslater/Dash-Reader-Frontend" target="_blank" rel="noopener noreferrer"><div className="text-dark h4" id="githubLink">Github</div></a>
            </div>
          </div>
          <nav className="navbar navbar-light bg-transparent float-right">
            <button className="navbar-toggler hamburger" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </nav>
        </div>
      </header>
      <div id="aboutModal" className="modal fade" role="dialog">
        <div class="modal-dialog">
          <About />
        </div>
      </div>
      <div id="howModal" className="modal fade" role="dialog">
        <div class="modal-dialog">
          <How />
        </div>
      </div>
      <UIContainer />
      <footer>
        <a href="https://readgood.azurewebsites.net/" target="_blank" rel="noopener noreferrer">
          <p className='footer-api-link'>
            Check out our API
          </p>
        </a>
      </footer>
    </div>
  );
}

export default App;
