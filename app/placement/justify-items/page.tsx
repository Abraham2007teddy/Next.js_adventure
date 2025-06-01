export default function Justify_items() {
  return (
    <div>
      <div className="text-center mb-[100px]">
        <h1 className="m-2">Justify-items</h1>
        <p>Justify-items-start</p>
        <div className="grid justify-items-start">
          <div className="size-15 bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
            1
          </div>
          <div className="size-15 bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
            2
          </div>
          <div className="size-15 bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
            3
          </div>
          <div className="size-15 bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
            4
          </div>
        </div>
        <p>Justify-items-end</p>
        <div className="grid grid-flow-col justify-items-end">
          <div className="size-15 bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
            1
          </div>
          <div className="size-15 bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
            2
          </div>
          <div className="size-15 bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
            3
          </div>
          <div className="size-15 bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
            4
          </div>
        </div>
        <p>Justify-items-center</p>
        <div className="grid grid-flow-col justify-items-center">
          <div className="size-15 bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
            1
          </div>
          <div className="size-15 bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
            2
          </div>
          <div className="size-15 bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
            3
          </div>
          <div className="size-15 bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
            4
          </div>
        </div>
        <p>Justify-items-stretch</p>
        <div className="grid grid-flow-col justify-items-stretch">
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
    </div>
  );
}
