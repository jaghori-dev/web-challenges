import { Fragment } from "react/jsx-runtime";
import "./Card.css";

export default function Card({ fruit}) {
  const {name, color, description} = fruit
  return (
    <section className={color === "red"? "card card--red":"" || color === "yellow"? " card card--yellow": "card"} >
      <h1>{name}</h1>
      <p>{color}</p>
      <p>{description}</p>
    </section>
  );
}
