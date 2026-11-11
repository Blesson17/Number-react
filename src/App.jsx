import React, { useState } from "react";

function App() {
  const [randomNumber, setRandomNumber] = useState(null);

  function generateRandomNumber() {
    setRandomNumber(Math.floor(Math.random() * 100) + 1);
  }

  return (
    <main className="page">
      <section className="generator" aria-labelledby="page-title">
        <div className="dice" aria-hidden="true">
          🎲
        </div>
        <p className="eyebrow">A little luck, on demand</p>
        <h1 id="page-title">Random Number Generator</h1>
        <p className="description">Generate a number between 1 and 100.</p>

        <div className="number-display" aria-live="polite" aria-atomic="true">
          {randomNumber === null ? (
            <p className="placeholder">No number generated yet</p>
          ) : (
            <p className="number">{randomNumber}</p>
          )}
        </div>

        <button className="generate-button" onClick={generateRandomNumber}>
          Generate Random Number
        </button>
      </section>
    </main>
  );
}

export default App;
