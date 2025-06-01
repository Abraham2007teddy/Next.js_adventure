import Link from "next/link";

export default function Placement() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="m-2">Page to learn Placement</h1>
      <Link href="placement/gap">Gap</Link>
      <Link href="placement/justify-content">Justify-content</Link>
      <Link href="placement/justify-items">Justify-items</Link>
      <Link href="placement/justify-self">Justify-self</Link>
      <Link href="placement/align-content">Align-content</Link>
      <Link href="placement/align-items">Align-items</Link>
      <Link href="placement/align-self">Align-self</Link>
      <Link href="placement/place-content">Place-content</Link>
      <Link href="placement/place-items">Place-items</Link>
      <Link href="placement/place-self">Place-self</Link>
    </div>
  );
}
