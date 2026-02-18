import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());
export default function Home() {
  const { data: movies, error, isLoading } = useSWR("/api/movies", fetcher);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (error) return <h1>somthing went wrong</h1>;
  console.log("movies", movies);

  if (!movies || movies.length === 0) {
    return <h1>no movies found</h1>;
  }

  return (
    <div>
      <h1>Movies</h1>
      {movies.map((movie) => (
        <div key={movie._id}>
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
        </div>
      ))}
    </div>
  );
}
