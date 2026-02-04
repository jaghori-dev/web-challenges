import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>The Lord of the rings</h1>
      <Link href="/volumes">Go to all volumes</Link>
    </div>
  );
}
