import React from 'react';
import "./App.css";
import Footer from "./Footer";
import Weather from "./Weather";

function App() {
  return (
    <div class="App">
      <div class="container-wrapper">
        <h1>🌏 Weather Forecast</h1>
        <div class="content">
          <Weather />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
