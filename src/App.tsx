import { useState } from "react";

import "./App.css";

function App() {
  const [counter, setCounter] = useState<number>(0);

  const handleIncrease = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const handleDecrease = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };

  const handleReset = () => {
    setCounter(0);
  };

  return (
    <>
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <section className="app-section">
        <button className="app-button" onClick={handleIncrease}>
          Increase
        </button>
        <button className="app-button" onClick={handleDecrease}>
          Decrease
        </button>
        <button className="app-button" onClick={handleReset}>
          Reset
        </button>
      </section>
    </>
  );
}

export default App;
