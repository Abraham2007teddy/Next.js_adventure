export default function Gap() {
  return (
    <div className="flex flex-col items-center">
      <h1>Gap</h1>
      <p>
        With gap-x-number, gap-y-number, and gap-number we can give gap between
        items
      </p>
      {/* --------------------------------------------------------------- */}
      <h2 className="mt-2">gap-2</h2>
      <div className="grid grid-cols-2 gap-2">
        <div className="size-20 bg-indigo-500 rounded-lg">1</div>
        <div className="size-20 bg-indigo-500 rounded-lg">1</div>
        <div className="size-20 bg-indigo-500 rounded-lg">1</div>
        <div className="size-20 bg-indigo-500 rounded-lg">1</div>
        <div className="size-20 bg-indigo-500 rounded-lg">1</div>
        <div className="size-20 bg-indigo-500 rounded-lg">1</div>
      </div>
      {/* --------------------------------------------------------------- */}
      <h2 className="mt-2">gap-1 gap-x-4</h2>
      <div className="grid grid-cols-2 gap-1 gap-x-4">
        <div className="size-20 bg-indigo-500 rounded-lg">1</div>
        <div className="size-20 bg-indigo-500 rounded-lg">1</div>
        <div className="size-20 bg-indigo-500 rounded-lg">1</div>
        <div className="size-20 bg-indigo-500 rounded-lg">1</div>
        <div className="size-20 bg-indigo-500 rounded-lg">1</div>
        <div className="size-20 bg-indigo-500 rounded-lg">1</div>
      </div>
      {/* --------------------------------------------------------------- */}
      <h2 className="mt-2">gap-1 gap-y-4</h2>
      <div className="grid grid-cols-2 gap-1 gap-y-4">
        <div className="size-20 bg-indigo-500 rounded-lg">1</div>
        <div className="size-20 bg-indigo-500 rounded-lg">1</div>
        <div className="size-20 bg-indigo-500 rounded-lg">1</div>
        <div className="size-20 bg-indigo-500 rounded-lg">1</div>
        <div className="size-20 bg-indigo-500 rounded-lg">1</div>
        <div className="size-20 bg-indigo-500 rounded-lg">1</div>
      </div>
      {/* --------------------------------------------------------------- */}
      <h2 className="mt-2">gap-[20px]</h2>
      <div className="grid grid-cols-2 gap-[20px]">
        <div className="size-20 bg-indigo-500 rounded-lg">1</div>
        <div className="size-20 bg-indigo-500 rounded-lg">1</div>
        <div className="size-20 bg-indigo-500 rounded-lg">1</div>
        <div className="size-20 bg-indigo-500 rounded-lg">1</div>
        <div className="size-20 bg-indigo-500 rounded-lg">1</div>
        <div className="size-20 bg-indigo-500 rounded-lg">1</div>
      </div>
    </div>
  );
}
