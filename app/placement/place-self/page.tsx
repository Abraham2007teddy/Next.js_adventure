export default function Place_self() {
  return (
    <div className="text-center mb-[100px]">
      <h1 className="m-2">Placement-self</h1>
      <p>place-self-start</p>
      <div className="grid h-48 grid-cols-2 place-items-center gap-4 bg-purple-700 p-2">
        <div className="size-10 bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
          1
        </div>
        <div className="place-self-start size-10 bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
          2
        </div>
        <div className="size-10 bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
          3
        </div>
        <div className="size-10 bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
          4
        </div>
      </div>
      <p>place-self-center</p>
      <div className="grid h-48 grid-cols-2 place-items-center gap-4 bg-purple-700 p-2">
        <div className="size-10 bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
          1
        </div>
        <div className="place-self-center size-10 bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
          2
        </div>
        <div className="size-10 bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
          3
        </div>
        <div className="size-10 bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
          4
        </div>
      </div>
      <p>place-self-end</p>
      <div className="grid h-48 grid-cols-2 place-items-center gap-4 bg-purple-700 p-2">
        <div className="size-10 bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
          1
        </div>
        <div className="place-self-end size-10 bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
          2
        </div>
        <div className="size-10 bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
          3
        </div>
        <div className="size-10 bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
          4
        </div>
      </div>
      <p>place-self-stretch</p>
      <div className="grid h-48 grid-cols-2 place-items-center gap-4 bg-purple-700 p-2">
        <div className="size-10 bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
          1
        </div>
        <div className="place-self-stretch bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
          2
        </div>
        <div className="size-10 bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
          3
        </div>
        <div className="size-10 bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
          4
        </div>
      </div>
    </div>
  );
}
