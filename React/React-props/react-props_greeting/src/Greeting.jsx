export default function Greeting({name, isCoach}){
  return (
    <div >
      <h1>Hello, {isCoach ? " Coach " + name: name } </h1>

    </div>
  )
}