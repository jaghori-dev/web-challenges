import { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0)
  function Counter(){
    console.log("🤩")
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button
          type="button"
          onClick={()=> Counter(setCount(count - 1))}
        >
          -
        </button>
        <button
          type="button"
          onClick={()=> Counter(setCount(count + 1))}
        >
          +
        </button>
      </div>
    </div>
  );
}
