import { useRouter } from "next/router";
import useSWR from "swr";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function details() {
  const router = useRouter();
  const { id } = router.query;
  const {
    data: movie,
    isLoading,
    error,
  } = useSWR(`/api/movies/${id}`, fetcher);
  if (isLoading) return <h1>loading...</h1>;
  if (!movie) return <h1>Movie not found</h1>;
  console.log(movie);
  return (
    <div className={styles.main}>
      <div className={styles.card}>
        <h1>{movie.title}</h1>
        <Image src={movie?.poster} alt={movie.title} width={200} height={260} />
        <br />
        <p>{movie.year}</p>
      </div>
      <div className={styles.container}>
        <ul className={styles.card}>
          <h4>Directors</h4>
          {movie.directors?.map((name) => {
            return <li key={name}>{name}</li>;
          })}
        </ul>
        <ul className={styles.card}>
          <h4>Genres</h4>
          {movie.genres?.map((name) => {
            return <li key={name}>{name}</li>;
          })}
        </ul>
        <ul className={styles.card}>
          <h4>Writers</h4>
          {movie.writers?.map((name) => {
            return <li key={name}>{name}</li>;
          })}
        </ul>
        <p className={styles.card}>{movie.plot}</p>
      </div>
    </div>
  );
}
