import Link from "next/link";

export default function Grid() {
  return (
    <div className="flex flex-col gap-2 items-center">
      <h1 className="mb-4">This is page for learning Grid</h1>
      <Link href="grid/grid-template-cols">Grid template columns</Link>
      <Link href="grid/grid-column">Grid column</Link>
      <Link href="grid/grid-template-rows">Grid template rows</Link>
      <Link href="grid/grid-row">Grid row</Link>
      <Link href="grid/grid-auto-flow">Grid auto flow</Link>
      <Link href="grid/homework">Homework</Link>
    </div>
  );
}
