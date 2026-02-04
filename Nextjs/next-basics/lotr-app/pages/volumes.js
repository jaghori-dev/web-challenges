import Link from "next/link";
import Image from "next/image";
import { volumes, introduction } from "@/lib/data";

export default function Volumes() {
  return (
    <>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.slug}>
            <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>
      <div>
        <h2>All volumes</h2>
        <Image
          src="/images/the-fellowship-of-the-ring.png"
          width={140}
          height={230}
          alt="the fellowship of the ring cover"
        ></Image>
        <Image
          src="/images/the-return-of-the-king.png"
          width={140}
          height={230}
          alt="the return of the king cover"
        ></Image>
        <Image
          src="/images/the-two-towers.png"
          width={140}
          height={230}
          alt="the two towers cover"
        ></Image>
      </div>
    </>
  );
}
