import useSWR from "swr";
import Link from "next/link";
import Image from "next/image";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data: movies, error, isLoading } = useSWR("/api/movies", fetcher);
  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <p>somthing went wrong</p>;
  if (!movies || movies.length === 0) return <h1>movie not found</h1>;
  console.log("movies", movies);
  return (
    <main className="main">
      <h1 className="title">Movies</h1>
      <ul className="container">
        {movies.map((movie) => (
          <li key={movie._id} className="container">
            <Link href={`/${movie._id}`}>
              <h2 className="title">{movie.title}</h2>
            </Link>
            <Image
              src={movie?.poster}
              alt={movie.title}
              width={200}
              height={260}
            />
            <p>{movie.year}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
