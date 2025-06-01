export default function Grid_template_columns() {
  return (
    <div>
      <div className="flex flex-col items-center">
        <h1>Grid column</h1>
        <p>You can give column span using col-span-number</p>
      </div>
      <div className="grid grid-cols-5 gap-4 p-4">
        <div className="bg-indigo-500 flex items-center justify-center rounded-lg">
          1
        </div>
        <div className="col-span-3 bg-indigo-500 flex items-center justify-center rounded-lg">
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
        <div className="col-span-2 bg-indigo-500 flex items-center justify-center rounded-lg">
          7
        </div>
        <div className="col-span-2 bg-indigo-500 flex items-center justify-center rounded-lg">
          8
        </div>
        <div className="bg-indigo-500 flex items-center justify-center rounded-lg">
          9
        </div>
        <div className="bg-indigo-500 flex items-center justify-center rounded-lg">
          10
        </div>
      </div>

      <div className="flex flex-col items-center">
        <p>
          You can give column start and end points using col-start-number and
          col-end-number
        </p>
      </div>
      <div className="grid grid-cols-5 gap-4 p-4">
        <div className="bg-blue-500 flex items-center justify-center rounded-lg">
          1
        </div>
        <div className="col-start-3 bg-blue-500 flex items-center justify-center rounded-lg">
          2
        </div>
        <div className="bg-blue-500 flex items-center justify-center rounded-lg">
          3
        </div>
        <div className="bg-blue-500 flex items-center justify-center rounded-lg">
          4
        </div>
        <div className="bg-blue-500 flex items-center justify-center rounded-lg">
          5
        </div>
        <div className="col-start-2 col-end-6 bg-blue-500 flex items-center justify-center rounded-lg">
          6
        </div>
        <div className="col-span-2 col-start-1 bg-blue-500 flex items-center justify-center rounded-lg">
          7
        </div>
        <div className="col-span-2 col-end-6 bg-blue-500 flex items-center justify-center rounded-lg">
          8
        </div>
        <div className="bg-blue-500 flex items-center justify-center rounded-lg">
          9
        </div>
        <div className="bg-blue-500 flex items-center justify-center rounded-lg">
          10
        </div>
      </div>
    </div>
  );
}
