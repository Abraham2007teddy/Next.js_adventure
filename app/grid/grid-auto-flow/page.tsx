export default function Grid_auto_flow() {
  return (
    <div>
      <div className="flex flex-col items-center mb-4">
        <h1>Grid auto flow</h1>
        <p>Using grid-flow-col you can control auto placement</p>
      </div>
      <div className="grid grid-flow-col grid-rows-4 gap-4 p-4">
        <div className="col-span-2 bg-indigo-500 flex items-center justify-center rounded-lg">
          1
        </div>
        <div className="bg-indigo-500 flex items-center justify-center rounded-lg">
          2
        </div>
        <div className="bg-indigo-500 flex items-center justify-center rounded-lg">
          3
        </div>
        <div className="bg-indigo-500 flex items-center justify-center rounded-lg">
          4
        </div>
        <div className="bg-indigo-500 flex items-center justify-center rounded-lg">
          5
        </div>
        <div className="bg-indigo-500 flex items-center justify-center rounded-lg">
          6
        </div>
        <div className="bg-indigo-500 flex items-center justify-center rounded-lg">
          7
        </div>
        <div className="bg-indigo-500 flex items-center justify-center rounded-lg">
          8
        </div>
        <div className="row-span-2 bg-indigo-500 flex items-center justify-center rounded-lg">
          9
        </div>
        <div className="bg-indigo-500 flex items-center justify-center rounded-lg">
          10
        </div>
        <div className="bg-indigo-500 flex items-center justify-center rounded-lg">
          11
        </div>
        <div className="col-span-2 row-span-2 bg-indigo-500 flex items-center justify-center rounded-lg">
          12
        </div>
        <div className="bg-indigo-500 flex items-center justify-center rounded-lg">
          13
        </div>
        <div className="bg-indigo-500 flex items-center justify-center rounded-lg">
          14
        </div>
        <div className="bg-indigo-500 flex items-center justify-center rounded-lg">
          15
        </div>
      </div>
    </div>
  );
}
