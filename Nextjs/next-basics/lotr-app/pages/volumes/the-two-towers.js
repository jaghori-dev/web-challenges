import Link from "next/link";
import Image from "next/image";
import { volumes } from "@/lib/data";

export default function TwoTowers() {
  const volume = volumes.find(({ slug }) => slug === "the-two-towers");
  
  const volumeIndex = volumes.findIndex(
    ({ slug }) => slug === "the-two-towers"
  );

  const prevVolume = volumes[volumeIndex - 1];
  const nextVolume = volumes[volumeIndex + 1];
  //   console.log(volumeIndex)
  return (
    <>
      <Link href="/volumes">All volemes</Link>
      <h1>{volume.title}</h1>
      <p>{volume.description}</p>
      <ul>
        {volume.books.map((book) => {
          return (
            <li key={book.ordinal}>
              {book.ordinal} {book.title}
            </li>
          );
        })}
      </ul>
      <Image
        src={`/images/${volume.slug}.png`}
        width={140}
        height={230}
        alt={`${volume.title} cover`}
      ></Image>
      <br />
      {prevVolume && (
        <Link href={`/volumes/${prevVolume.slug}`}>⬅ {prevVolume.title}</Link>
      )}{" "}
      {nextVolume && (
        <Link href={`/volumes/${nextVolume.slug}`}>{nextVolume.title} ➡</Link>
      )}
    </>
  );
}
