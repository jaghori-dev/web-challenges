import Smiley from "./Smiley";
export default function App() {
  return (
    <div>
      <Smiley name ="alex" emoji={"😁"} isHappy={true} />
      <Smiley name ="ali" emoji={"😁"} isHappy={false} />
    </div>
  );
}
