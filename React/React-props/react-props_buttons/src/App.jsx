export default function App() {
  return <>
  <Button text="click me" color= "green" disable={false}/>
  <Button text="Submit" color= "blue"/>
  <Button text="danger" color= "red" disable={true}/>
  </>;
}

const Button = ({color, text, disable})=>{
  const handleClick = (text)=>{
    console.log("you clicked ", text)
  }
  return (
    <button onClick={()=> handleClick(text)} disabled={disable} style={{backgroundColor: color, width: '90px', height:'40px', margin: '10px'}}>{text}</button>
  )
}
