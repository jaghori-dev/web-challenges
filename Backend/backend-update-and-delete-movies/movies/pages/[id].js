import { useRouter } from "next/router";
import useSWR from "swr";
import Image from "next/image";

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
  if(!movie) return <p>somthing went wrong </p>
  console.log(movie);
  return (
    <div className="container">
      <h1>{movie.title}</h1>
      <Image src={movie?.poster} alt={movie.title} width={200} height={260} />
      <p>{movie.directors}</p>
      <p>{movie.year}</p>
      <p>{movie.plot}</p>
    </div>
  );
}
