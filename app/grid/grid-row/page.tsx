export default function Grid_row() {
  return (
    <div>
      <div className="flex flex-col items-center mb-4">
        <h1>Grid column</h1>
        <p>
          Amazing thing in grid is that you can use col-span and row-span
          together{" "}
        </p>
      </div>
      <div className="grid grid-flow-col grid-rows-3 gap-4 p-4">
        <div className="row-span-3 bg-indigo-500 flex items-center justify-center rounded-lg">
          1
        </div>
        <div className="col-span-2 row-span-2 bg-indigo-500 flex items-center justify-center rounded-lg">
          2
        </div>
        <div className="col-span-2 bg-indigo-500 flex items-center justify-center rounded-lg">
          3
        </div>
      </div>
      <div className="flex flex-col items-center mb-4">
        <p>You can also use row-start and row-end</p>
      </div>
      <div className="grid grid-flow-col grid-rows-3 gap-4 p-4">
        <div className="row-start-1 row-end-4 bg-indigo-500 flex items-center justify-center rounded-lg">
          1
        </div>
        <div className="row-span-2 row-start-2 bg-indigo-500 flex items-center justify-center rounded-lg">
          2
        </div>
        <div className="row-span-2 bg-indigo-500 flex items-center justify-center rounded-lg">
          3
        </div>
        <div className="bg-indigo-500 flex items-center justify-center rounded-lg">
          4
        </div>
        <div className="row-end-3 bg-indigo-500 flex items-center justify-center rounded-lg">
          5
        </div>
      </div>
    </div>
  );
}
