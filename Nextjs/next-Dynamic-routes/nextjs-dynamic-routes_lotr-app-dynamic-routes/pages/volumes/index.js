import Link from "next/link";
import Image from "next/image";
import { introduction, volumes } from "../../lib/data";

export default function Volumes() {
  return (
    <>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <ul>
        {volumes.map((volume) => {
          return (
            <li key={volume.slug}>
              <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
            </li>
          );
        })}
      </ul>
      <ul>
        {volumes.map((volume) => {
          return (
            <Image
              key={volume.slug}
              src={`/images/${volume.slug}.png`}
              width={140}
              height={230}
              alt={`${volume.title}`}
            ></Image>
          );
        })}
      </ul>
    </>
  );
}
