export default function Greeting({name}) {
  const coachs = ["Flix", "Roland", "Klaus"];
  return (
    <div>
      <h1>Hello, {coachs.includes(name) ? " Coach " + name : name} </h1>
    </div>
  );
}
