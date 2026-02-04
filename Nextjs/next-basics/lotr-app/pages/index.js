import Link from "next/link";
export default function HomePage() {
  return (
    <div>
      <h1>The Lord of the Rings</h1>
      <Link href="/volumes">All volumes overview</Link>
    </div>
  );
}
