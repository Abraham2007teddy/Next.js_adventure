export default function Place_items() {
  return (
    <div className="text-center mb-[100px]">
      <h1 className="m-2">Placement-items</h1>
      <p>place-items-start</p>
      <div className="grid h-48 grid-cols-2 place-items-start gap-4 bg-purple-700 p-2">
        <div className="size-10 bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
          1
        </div>
        <div className="size-10 bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
          2
        </div>
        <div className="size-10 bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
          3
        </div>
        <div className="size-10 bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
          4
        </div>
      </div>
      <p>place-items-end</p>
      <div className="grid h-48 grid-cols-2 place-items-end gap-4 bg-purple-700 p-2">
        <div className="size-10 bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
          1
        </div>
        <div className="size-10 bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
          2
        </div>
        <div className="size-10 bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
          3
        </div>
        <div className="size-10 bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
          4
        </div>
      </div>
      <p>place-items-center</p>
      <div className="grid h-48 grid-cols-2 place-items-center gap-4 bg-purple-700 p-2">
        <div className="size-10 bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
          1
        </div>
        <div className="size-10 bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
          2
        </div>
        <div className="size-10 bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
          3
        </div>
        <div className="size-10 bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
          4
        </div>
      </div>
      <p>place-items-stretch</p>
      <div className="grid h-48 grid-cols-2 place-items-stretch gap-4 bg-purple-700 p-2">
        <div className="bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
          1
        </div>
        <div className="bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
          2
        </div>
        <div className="bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
          3
        </div>
        <div className="bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
          4
        </div>
      </div>
    </div>
  );
}
