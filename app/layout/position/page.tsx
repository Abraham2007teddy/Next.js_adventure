export default function Position() {
  return (
    <div className="flex flex-col text-center">
      <div className="px-[200px]">
        <h1 className="m-2">Position</h1>
        <div className="relative flex flex-row h-80 w-150 bg-linear-to-r from-blue-600 to-purple-500 rounded-lg p-10 gap-2">
          <h2>Relative parent</h2>
          <div className="static flex flex-row h-50 w-120 bg-linear-to-r from-indigo-600 to-pink-500 rounded-lg p-10 gap-2">
            <h2>Static parent</h2>
            <div className="size-18 static bg-blue-500 rounded-lg">
              <p>Static shild</p>
            </div>
            <div className="size-18 inline-block bg-blue-500 rounded-lg">
              <p>inline-block child</p>
            </div>
            <div className="size-18 absolute bg-blue-500 rounded-lg">
              <p>absolute child</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
