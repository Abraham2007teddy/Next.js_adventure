export default function Align_items() {
  return (
    <div className="text-center flex flex-col items-center gap-4 mb-[100px]">
      <h1 className="m-2">Align-items</h1>
      <p>items-start</p>
      <div className="flex items-start gap-1">
        <div className="p-4 bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
          1
        </div>
        <div className="p-12 bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
          2
        </div>
        <div className="p-8 bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
          3
        </div>
        <div className="p-6 bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
          4
        </div>
        <div className="p-10 bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
          5
        </div>
        <div className="p-7 bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
          6
        </div>
      </div>
      <p>items-center</p>
      <div className="flex items-center gap-1">
        <div className="p-4 bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
          1
        </div>
        <div className="p-12 bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
          2
        </div>
        <div className="p-8 bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
          3
        </div>
        <div className="p-6 bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
          4
        </div>
        <div className="p-10 bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
          5
        </div>
        <div className="p-7 bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
          6
        </div>
      </div>
      <p>items-end</p>
      <div className="flex items-end gap-1">
        <div className="p-4 bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
          1
        </div>
        <div className="p-12 bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
          2
        </div>
        <div className="p-8 bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
          3
        </div>
        <div className="p-6 bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
          4
        </div>
        <div className="p-10 bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
          5
        </div>
        <div className="p-7 bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
          6
        </div>
      </div>
      <p>
        We can items-baseline to align items so that their baseline will be in
        same line
      </p>
      <div className="flex items-baseline gap-1">
        <div className="p-4 bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
          1
        </div>
        <div className="p-12 bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
          2
        </div>
        <div className="p-8 bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
          3
        </div>
        <div className="p-6 bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
          4
        </div>
        <div className="p-10 bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
          5
        </div>
        <div className="p-7 bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
          6
        </div>
      </div>
    </div>
  );
}
