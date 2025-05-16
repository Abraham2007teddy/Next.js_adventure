export default function Font_size() {
  return (
    <>
      <div className="flex flex-col text-center pt-5 gap-y-2">
        <h1 className="text-sm">Text size small</h1>
        <h1 className="text-base">Text size base</h1>
        <h1 className="text-lg">Text size large</h1>
        <h1 className="text-xl">Text size xl</h1>
        <h1 className="text-4xl">Text size 4xl</h1>
        <h1 className="text-sm/8">Text size small/8</h1>
        <h1 className="text-[50px]">Text size 50px</h1>
      </div>
    </>
  );
}
