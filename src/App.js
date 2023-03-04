import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <h1>Weather Search Engine</h1>

      <Weather />

      <footer>
        {" "}
        <a
          href="https://github.com/"
          target="_blank"
          rel="Juliet"
        >
          {" "}
          Open source code{" "}
        </a>
      </footer>
    </div>
  );
}

export default App;
