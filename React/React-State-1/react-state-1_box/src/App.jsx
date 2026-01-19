import { isValidElement, useState } from "react";
import "./styles.css";

export default function App() {
  let [isActive, setActive] = useState(false)

  function handleClick() {
    console.log(isActive);
    setActive (!isActive);
    // Check that the value changes correctly.
    
  }

  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button onClick={ handleClick}>{isActive ? "Active": "notActive"}</button>
    </main>
  );
}
