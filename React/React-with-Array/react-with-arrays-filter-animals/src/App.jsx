import React from "react";
import "./styles.css";
import { useState } from "react";
import { uid } from "uid";

const animals = [
  { id: "1", name: "Dog", habitat: "Domestic Animal", emoji: "🐕" },
  { id: "2", name: "Cat", habitat: "Domestic Animal", emoji: "🐈" },
  { id: "3", name: "Hamster", habitat: "Domestic Animal", emoji: "🐹" },
  { id: "4", name: "Parrot", habitat: "Domestic Animal", emoji: "🦜" },
  { id: "5", name: "Fish", habitat: "Domestic Animal", emoji: "🐠" },

  { id: "6", name: "Fox", habitat: "Forest", emoji: "🦊" },
  { id: "7", name: "Bear", habitat: "Forest", emoji: "🐻" },
  { id: "8", name: "Owl", habitat: "Forest", emoji: "🦉" },
  { id: "9", name: "Deer", habitat: "Forest", emoji: "🦌" },
  { id: "10", name: "Hedgehog", habitat: "Forest", emoji: "🦔" },

  { id: "11", name: "Whale", habitat: "Ocean", emoji: "🐋" },
  { id: "12", name: "Dolphin", habitat: "Ocean", emoji: "🐬" },
  { id: "13", name: "Crab", habitat: "Ocean", emoji: "🦀" },
  { id: "14", name: "Lobster", habitat: "Ocean", emoji: "🦞" },
  { id: "15", name: "Shark", habitat: "Ocean", emoji: "🦈" },

  { id: "16", name: "Eagle", habitat: "Mountains", emoji: "🦅" },
  { id: "17", name: "Goat", habitat: "Mountains", emoji: "🐐" },
  { id: "18", name: "Wolf", habitat: "Mountains", emoji: "🐺" },
  { id: "19", name: "Snow Leopard", habitat: "Mountains", emoji: "🐆" },
  { id: "20", name: "Yak", habitat: "Mountains", emoji: "🐃" },
];

const habitats = ["Mountains", "Ocean", "Forest", "Domestic Animal"];

export default function App() {
  const [habitat, setHabitat ] = useState(animals)
  function handelFilter(input){
    setHabitat(animals.filter((animal)=> animal.habitat === input))
  }
  return (
    <main className="main">
      <ul>
      {habitats.map((habitat)=> {
        return (
          <div key={uid(3)}>
            <button onClick={()=>handelFilter(habitat)} className="button" style={ {backgroundColor: "lightblue"}}>{habitat}</button>
          </div>
        )
      })}
      </ul>
      <ul>
      {habitat.map((animal)=> {
        return (
          <li key={animal.id}>
            <h1>{animal.name}</h1>
            <span>{animal.emoji}</span>
            <p>{animal.habitat}</p>
          </li> 
        )
      })
      }
      </ul>
    </main>  
   
  )
}
