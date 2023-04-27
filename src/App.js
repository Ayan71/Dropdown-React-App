import "./App.css";
import Drop from "./component/Drop";

function App() {
  const options = ["Yes", "No", "Probably Not"];
  return (
    <div className="App">
      <h1>Should you use a dropdown</h1>
      <Drop options={options} />
    </div>
  );
}

export default App;
