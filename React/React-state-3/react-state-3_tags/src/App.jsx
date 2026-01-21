import { useState } from "react";
import "./styles.css";
import Form from "./components/Form";
import List from "./components/List";

export default function App() {
  const [tags, setTags] = useState(["JavaScript", "React", "CSS", "HTML"]);
  function addTag(data){
    console.log(data)
    setTags([...tags , data])
  }
  function onDeleteTag(input){
    const newTags = tags.filter((tag)=> tag !== input)
    console.log(newTags)
    setTags(newTags)
  }
  return (
    <main className="app">
      <Form onAddTag={addTag} />
      <List tags={tags} onDeleteTag={onDeleteTag}/>
    </main>
  );
}
