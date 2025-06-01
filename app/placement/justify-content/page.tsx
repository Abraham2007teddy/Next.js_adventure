export default function Justify_content() {
  return (
    <div>
      <div className="flex flex-col text-center">
        <h1 className="m-2">Justify-content</h1>
        <p>Justify-start</p>
        <div className="flex justify-start">
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
        <p>Justify-center shows content at the center</p>
        <div className="flex justify-center">
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
        <p>Justify-center-safe shows content at the start</p>
        <div className="flex justify-center-safe">
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
        <p>Justify-end shows content at the end</p>
        <div className="flex justify-end">
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
        <p>Justify-end-safe shows content at the start</p>
        <div className="flex justify-end-safe">
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
        <p>Justify-between</p>
        <div className="flex justify-between">
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
        <p>Justify-around</p>
        <div className="flex justify-around">
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
        <p>Justify-evenly</p>
        <div className="flex justify-evenly">
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
        <p>Justify-normal</p>
        <div className="flex justify-normal gap-1">
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
      </div>
    </div>
  );
}
