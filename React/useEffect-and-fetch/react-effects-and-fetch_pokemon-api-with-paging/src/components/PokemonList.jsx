import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [page , setPage ] = useState(0)
  function handlePage(){  
  }
  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${page}`
        );
        const data = await response.json();
        setPokemon(data.results);  
        console.log(data)
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [page]);

  return (
    <main>
      <button disabled={page === 0} onClick={()=> handlePage(setPage(page - 20))} type="button">Previous Page</button>
      <button onClick={()=> handlePage(setPage(page + 20))} type="button">Next Page</button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
