import Card from "./components/Card";

export default function App() {
  const fruits = [
    { 
      id: 0,
      name: "Apple",
      color: "red",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis natus eum numquam recusandae adipisci exercitationem esse reprehenderit praesentium aliquam hic."
    },
    {
      id: 1,
      name: "Orange",
      color: "orange",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis natus eum numquam recusandae adipisci exercitationem esse reprehenderit praesentium aliquam hic."

    },
    {
      id: 2,
      name: "Banana",
      color: "yellow",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis natus eum numquam recusandae adipisci exercitationem esse reprehenderit praesentium aliquam hic."
    },
    {
      id: 3,
      name: "kiwi",
      color: "gray",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis natus eum numquam recusandae adipisci exercitationem esse reprehenderit praesentium aliquam hic."
    },
    {
      id: 4,
      name: "grap",
      color: "gold",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis natus eum numquam recusandae adipisci exercitationem esse reprehenderit praesentium aliquam hic."
    },
  ];

  return (
    <main className="app">
      <ul>
        {fruits.map((fruit) => {
          return (
            <li key={fruit.id}>
              <Card fruit={fruit} />
            </li>
          );
        })}
      </ul>
    </main>
  );
}
