export default function Smiley({name, isHappy}){
    return (
        <h1>{name} is {isHappy? "Happy 😁" : "notHappy 😔"}</h1>
    )
    
}