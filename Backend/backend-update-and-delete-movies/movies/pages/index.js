import useSWR from "swr";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Head from "next/head";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data: movies, error, isLoading } = useSWR("/api/movies", fetcher);
  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <p>somthing went wrong</p>;
  if (!movies || movies.length === 0) return <h1>movie not found</h1>;
  console.log("movies", movies);
  return (
    <div className={styles.container}>
      <Head>
        <title>Movies</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Movies</h1>
        <ul className={styles.grid}>
          {movies.map((movie) => (
            <li key={movie._id} className={styles.card}>
              <Link href={`/${movie._id}`}>
                <h2 className={styles.title}>{movie.title}</h2>
              </Link>
              <Image
                src={movie.poster}
                alt={movie.title}
                width={260}
                height={300}
              />
              <p>{movie.year}</p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
