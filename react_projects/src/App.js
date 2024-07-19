import './App.css';
import Accordion from './components/accordion';
import RandomColorGenerator from './components/color_generator';

function App() {
  return (
    <div className="App">
      {/* Accordion component */}
      <Accordion />

      {/* Random Color Generator */}
      <RandomColorGenerator />
    </div>
  );
}

export default App;
