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
              <h5 className="text-dark h4">Wowa, surprise!</h5>
              <span className="text-muted">Yr glad u clicked</span>
            </div>
          </div>
          <nav className="navbar navbar-light bg-transparent float-right">
            <button className="navbar-toggler hamburger" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </nav>
        </div>
      </header>
      <UIContainer/>
      <footer>
        <p>Check out our <a href="https://readgood.azurewebsites.net/">API</a></p>
      </footer>
    </div>
  );
}

export default App;
