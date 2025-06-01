import Link from "next/link";

export default function Layout_page() {
  return (
    <div className="flex flex-col text-center gap-1 mb-[100px]">
      <h1 className="m-2 mb-4">Layout page</h1>
      <Link href="layout/aspect-ratio">Aspect-ratio</Link>
      <Link href="layout/columns">Columns</Link>
      <Link href="layout/breaks">Breaks</Link>
      <Link href="layout/box-decor">Box decoration break</Link>
      <Link href="layout/box-sizing">Box sizing</Link>
      <Link href="layout/display">Display</Link>
      <Link href="layout/float">Float</Link>
      <Link href="layout/clear">Clear</Link>
      <Link href="layout/object-fit">Object-fit</Link>
      <Link href="layout/object-position">Object-position</Link>
      <Link href="layout/overflow">Overflow</Link>
      <Link href="layout/overscroll">Overscoll</Link>
      <Link href="layout/position">Position</Link>
    </div>
  );
}
