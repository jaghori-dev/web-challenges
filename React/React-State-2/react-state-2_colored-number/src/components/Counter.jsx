import { useState } from "react";
import ColoredNumber from "./ColoredNumber";

export default function Counter() {
  const [count, setCount] = useState(0)
  function countIncrement(){
    setCount(count + 1)
    console.log(count)
  }
  function countDecrement(){
    setCount(count - 1)
    console.log(count)
  }
  return (
    <div className="counter">
      <h1>Colored Number</h1>
      <ColoredNumber value={count} />
      <div className="counter__buttons-container">
        <button
          onClick={countIncrement}
          type="button"
          className="counter__button"
          aria-label="increment count"
        >
          +
        </button>
        <button onClick={countDecrement}
          type="button"
          className="counter__button"
          aria-label="decrement count"
        >
          -
        </button>
      </div>
    </div>
  );
}
