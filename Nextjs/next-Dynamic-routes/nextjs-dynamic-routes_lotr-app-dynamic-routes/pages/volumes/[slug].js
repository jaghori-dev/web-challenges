import { useRouter } from "next/router";
import { volumes } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
export default function Slug() {
  const router = useRouter();
  const { slug } = router.query;
  if (!router.isReady) {
    return null;
  }
  //   const volume = volumes.find((volume) => volume.slug === slug);
  const index = volumes.findIndex((volume) => volume.slug === slug);
  console.log(index);
  const volume = volumes[index];
  const previousVolume = volumes[index - 1];
  const nextVolume = volumes[index + 1];

  return (
    <>
      <Link href="/">Home</Link> <br />
      <Link href="/volumes">All volumes</Link>
      <h1>{volume.title}</h1>
      <p>{volume.description}</p>
      <ul>
        {volume.books.map((book) => {
          return (
            <li key={book.ordinal}>
              {book.ordinal} <strong>{book.title}</strong>
            </li>
          );
        })}
      </ul>
      <Image
        src={volume.cover}
        alt={`Cover image of ${volume.title}`}
        width={140}
        height={230}
      ></Image>
      <br />
      {previousVolume ? (
        <Link href={`/volumes/${previousVolume.slug}`}>
          ← Previous: {volume.title}
        </Link>
      ) : null}
      <br />
      {nextVolume ? (
        <Link href={`/volumes/${nextVolume.slug}`}>
          Next: {volume.title} →{" "}
        </Link>
      ) : null}
    </>
  );
}
