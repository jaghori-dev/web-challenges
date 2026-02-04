import { useRouter } from "next/router";
import { volumes } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
export default function Slug() {
  const router = useRouter();
  const { slug } = router.query;
  //   const volume = volumes.find((volume) => volume.slug === slug);
  const index = volumes.findIndex((volume) => volume.slug === slug);
  console.log(index);
  const volume = volumes[index];

  return (
    <>
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
        src={`/images/${volume.slug}.png`}
        alt={`Cover of book ${volume.title}`}
        width={140}
        height={230}
      ></Image>
    </>
  );
}
