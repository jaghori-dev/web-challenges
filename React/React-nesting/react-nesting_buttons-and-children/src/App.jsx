import React from "react";
import "./styles.css";

export default function App() {
  function click(text, emoji) {
    console.log("clicked", text, emoji);
  }
  return (
    <main>
      {/* <Button text="next" emoji="👏" callback={click} />
      <Button text="previous" emoji="👀" callback={click}/>
      <Button text="up" emoji="☠️" callback={click}/>
      <Button text="down" callback={click} emoji="👺"/>
       */}
      <button>button 1</button>
      <button>button 2</button>
      <button>button 3</button>
      <button>button 4</button>
    </main>
  );
}

// function Button({text, emoji, callback}) {
//   return (
//     <button className="button" type="button" onClick={()=>callback(text, emoji)}>
//       {text}
//     </button>
//   );
// }

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
