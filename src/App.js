import "./App.css";
import Footer from "./Footer";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container-wrapper">
        <h1>🌏 Weather Forecast</h1>
        <div className="content">
          <Weather />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
