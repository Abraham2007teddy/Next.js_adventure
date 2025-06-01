import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="m-2">Hello everybody</h1>
      <Link href="blogs">Blogs</Link>
      <Link href="padding">Padding</Link>
      <Link href="margin">Margin</Link>
      <Link href="flex">Flex</Link>
      <Link href="grid">Grid</Link>
      <Link href="sizing">Sizing</Link>
      <Link href="placement">Placement</Link>
      <Link href="layout">Layout</Link>
    </div>
  );
}
