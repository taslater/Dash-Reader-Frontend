import './App.css';
import UIContainer from './components/UIContainer';


function App() {
  return (
    <div className="App">
      <header className="header">
        <h1 className="title">--Dash Reader--</h1>
        <div className="pos-f-t">
          <div className="collapse hamburger-expand-container" id="navbarToggleExternalContent">
            <div className="hamburger-expand-div">
              <div className="text-dark h4" id="readerAbout">About the Readers</div>
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
