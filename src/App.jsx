import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [color, setColor] = useState("olive");

  const addValue = () => {
    if (counter < 20) setCounter((prevCount) => prevCount + 1);
  };
  const decreaseValue = () => {
    if (counter > 0) {
      setCounter((prevCount) => prevCount - 1);
    }
  };

  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      <h1 className="bg-slate-500 p-5 inline-block mr-2 rounded">
        Counter value {counter}
      </h1>
      <button className="mr-5 mt-4 border-4 p-3" onClick={addValue}>
        Add value
      </button>
      <button className="mt-4 border-4 p-3" onClick={decreaseValue}>
        Decrease value
      </button>
    </div>
  );
}

export default App;
