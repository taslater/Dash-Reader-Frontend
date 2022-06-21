import './App.css';
import UI from './components/UI';
import UIContainer from './components/UIContainer';


function App() {
  const reader_uis = [
    <UI
      reader_name="Input"
      key="input"
      buttonNames={[
        "Font",
        "Theme",
        "Clear",
        "Timer",
        "Random",
        "Clear"
      ]}/>,
    <UI
      reader_name="RSVP"
      key="rsvp"
      buttonNames={[
        "Font",
        "WPM",
        "Theme",
        "Clear",
        "Timer",
        "Random",
        "Clear"
      ]}/>,
    <UI
      reader_name="Binonic"
      key="binonic"
      buttonNames={[
        "Font",
        "WPM",
        "Theme",
        "Clear",
        "Timer",
        "Random",
        "Clear"
      ]}/>,
  ]
  return (
    <div className="App">
      <header className="header">
        <h1 className='title'>--Dash Reader--</h1>
        <div class="pos-f-t">
          <div class="collapse" id="navbarToggleExternalContent">
            <div class="bg-dark p-4">
              <h5 class="text-white h4">Collapsed content</h5>
              <span class="text-muted">Toggleable via the navbar brand.</span>
            </div>
          </div>
          <nav class="navbar navbar-dark bg-dark">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          </nav>
        </div>
      </header>
      <UIContainer reader_uis={reader_uis}/>
      <footer>
        <p>Check out our <a href="https://readgood.azurewebsites.net/">API</a></p>
      </footer>
    </div>
  );
}

export default App;
