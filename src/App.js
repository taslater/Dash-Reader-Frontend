import './App.css';
import UIContainer from './components/UIContainer';


function App() {
  // const reader_uis = [
  //   <UI
  //     reader_name="Input"
  //     keyValue="input"
  //     buttonNames={[
  //       "Font",
  //       "Theme",
  //       "Clear",
  //       "Timer",
  //       "Random",
  //       "Clear"
  //     ]}
  //     isInput={true}
  //     />,
  //   <UI
  //     reader_name="RSVP"
  //     keyValue="rsvp"
  //     buttonNames={[
  //       "Font",
  //       "WPM",
  //       "Theme",
  //       "Clear",
  //       "Timer",
  //       "Random",
  //       "Clear"
  //     ]}
  //     isInput={false}
  //     />,
  //   <UI
  //     reader_name="Binonic"
  //     keyValue="binonic"
  //     buttonNames={[
  //       "Font",
  //       "WPM",
  //       "Theme",
  //       "Clear",
  //       "Timer",
  //       "Random",
  //       "Clear"
  //     ]}
  //     isInput={false}
  //     />,
  // ]
  return (
    <div className="App">
      <header className="header">
        <h1 className="title">--Dash Reader--</h1>
        <div className="pos-f-t">
          <div className="collapse" id="navbarToggleExternalContent">
            <div className="bg-dark p-4">
              <h5 className="text-white h4">Collapsed content</h5>
              <span className="text-muted">Toggleable via the navbar brand.</span>
            </div>
          </div>
          <nav className="navbar navbar-dark bg-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
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
