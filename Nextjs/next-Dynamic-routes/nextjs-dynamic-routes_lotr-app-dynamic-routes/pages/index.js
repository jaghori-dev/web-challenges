import Link from "next/link";
import { volumes } from "@/lib/data";
import { useRouter } from "next/router";

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}
export default function HomePage() {
  const router = useRouter();

  return (
    <div>
      <h1>The Lord of the rings</h1>
      <Link href="/volumes">Go to all volumes</Link>
      <br />
      <button
        type="button"
        onClick={() => {
          const randomVolume = getRandomElement(volumes);
          router.push(`/volumes/${randomVolume.slug}`);
        }}
      >
        Go to random volume
      </button>
    </div>
  );
}
