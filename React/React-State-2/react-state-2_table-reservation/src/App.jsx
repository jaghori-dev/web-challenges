import { useState } from "react";
import Counter from "./components/Counter";
import "./styles.css";

export default function App() {
  const [people, setPeople ] = useState(0)
  function addPeople(){
    setPeople(prev => prev + 1)
  }
  function deletPople(){
    setPeople(prev => Math.max(0, prev - 1))
  }
  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter value={people} handleAdd={addPeople} handleDelet={deletPople} />
      <p>You are going to reserve a table for {people} people.</p>
    </div>
  );
}
