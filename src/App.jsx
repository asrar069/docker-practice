import { useState, useEffect } from "react";



function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
  console.log("HELLOOOOO");
  },[count]);

  // separate functions
  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(0);

  return (
    <>
      <h1 className="headOne">Counter = {count}</h1>
      <button onClick={increment} className="btn">Increment</button>
      <button onClick={decrement} className="btn">Decrement</button>
      <button onClick={reset} className="btn">Reset</button>
    </>
  );
}

export default App;
