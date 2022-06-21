import './App.css';
import UI from './components/UI';
import InputUI from './components/InputUI';
import UIContainer from './components/UIContainer';


function App() {
  const reader_uis = [
    // <InputUI />,
    <UI
      reader_name="Input"
      key="input"
      buttonNames={[
        "Input btn 1",
        "Input btn 2",
        "Input btn 3",
      ]}/>,
    <UI
      reader_name="RSVP"
      key="rsvp"
      buttonNames={[
        "RSVP btn 1",
        "RSVP btn 2",
        "RSVP btn 3",
        "RSVP btn 4",
      ]}/>,
    <UI
      reader_name="Binonic"
      key="binonic"
      buttonNames={[
        "Binonic btn 1",
        "Binonic btn 2",
        "Binonic btn 3",
        "Binonic btn 4",
        "Binonic btn 5",
      ]}/>,
  ]
  return (
    <div className="App">
      <h1>--Dash Reader--</h1>
      <UIContainer reader_uis={reader_uis}/>
    </div>
  );
}

export default App;
