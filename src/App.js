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
      <h1 className="header">--Dash Reader--</h1>
      <UIContainer reader_uis={reader_uis}/>
    </div>
  );
}

export default App;
