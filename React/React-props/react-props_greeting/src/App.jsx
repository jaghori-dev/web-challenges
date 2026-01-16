import Greeting from "./Greeting"
export default function App() {
  return (
    <div>
      <Greeting name="Klaus" isCoach={true} />
      <Greeting name = "Alex" isCoach={false}/>
      <Greeting name="Flix" isCoach={true} />
      <Greeting name="Ali" isCoach={false} />
    </div>
  )
}


