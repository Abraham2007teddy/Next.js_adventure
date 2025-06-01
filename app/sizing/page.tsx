import Link from "next/link";

export default function Sizing() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="m-2">Sizing page</h1>
      <Link href="sizing/width">Width</Link>
      <Link href="sizing/min-width">Min-width</Link>
      <Link href="sizing/max-width">Max-width</Link>
      <Link href="sizing/height">Height</Link>
      <Link href="sizing/min-height">Min-height</Link>
      <Link href="sizing/max-height">Max-height</Link>
    </div>
  );
}
