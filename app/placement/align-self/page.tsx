export default function Align_self() {
  return (
    <div className="text-center flex flex-col items-center gap-4 mb-[100px]">
      <h1 className="m-2">Align-self</h1>
      <p>
        You can put item to top with self-start even if item-center is given
      </p>
      <div className="flex items-center gap-1">
        <div className="p-4 bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
          1
        </div>
        <div className="p-12 bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
          2
        </div>
        <div className="p-8 self-start bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
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
        You can put item to center with self-center even if item-start is given
      </p>
      <div className="flex items-start gap-1">
        <div className="p-4 bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
          1
        </div>
        <div className="p-12 bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
          2
        </div>
        <div className="p-8 self-center bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
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
      <p>You can put item to end with self-end even if item-center is given</p>
      <div className="flex items-center gap-1">
        <div className="p-4 bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
          1
        </div>
        <div className="p-12 bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
          2
        </div>
        <div className="p-8 self-end bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
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
