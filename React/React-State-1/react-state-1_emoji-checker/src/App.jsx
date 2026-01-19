import { useState } from "react";
import "./styles.css";

export default function App() {
  let [code, setCode] = useState("")

  const validCode = "🐡🐠🐋";

  function handleClick(emoji) {
    setCode(code + emoji);
    console.log(emoji);
    console.log(code);
  }
  function resetCode(){
    setCode("")
  }

  return (
    <div className="container">
      <div className="button-container">
        <button
          type="button"
          onClick={() => {
            handleClick("🐡");
          }}
        >
          <span role="img" aria-label="Pufferfish">
            🐡
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            handleClick("🐋");
          }}
        >
          <span role="img" aria-label="Whale">
            🐋
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            handleClick("🐠");
          }}
        >
          <span role="img" aria-label="Clownfish">
            🐠
          </span>
        </button>
      </div>

      <button
        type="button"
        onClick={resetCode}
      >
        Reset
      </button>

      {code === validCode && <p>Valid code! 🎉</p>}
    </div>
  );
}
