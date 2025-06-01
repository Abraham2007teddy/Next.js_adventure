export default function Width() {
  return (
    <div className="flex flex-col mb-[100px] gap-5">
      <div className="flex flex-col justify-center items-center gap-2">
        <h1 className="m-2">Width</h1>
        <p>We can give standard sizing to our elements with w-number</p>
        <div className="w-100 bg-indigo-500 flex items-center justify-center rounded-lg">
          w-300
        </div>
        <div className="w-75 bg-indigo-500 flex items-center justify-center rounded-lg">
          w-75
        </div>
        <div className="w-50 bg-indigo-500 flex items-center justify-center rounded-lg">
          w-50
        </div>
        <div className="w-25 bg-indigo-500 flex items-center justify-center rounded-lg">
          w-25
        </div>
        <div className="w-10 bg-indigo-500 flex items-center justify-center rounded-lg">
          w-10
        </div>
      </div>
      {/* ----------------------------------------------------------------------- */}
      <div className="flex flex-col justify-center items-center gap-2">
        <p>
          We can use fractions such as w-1/2 so that our elements will uccupy
          parts of space
        </p>
        <div className="flex flex-row w-[500px] gap-2">
          <div className="w-1/2 bg-indigo-500 flex items-center justify-center rounded-lg">
            w-1/2
          </div>
          <div className="w-1/2 bg-indigo-500 flex items-center justify-center rounded-lg">
            w-1/2
          </div>
        </div>
        <div className="flex flex-row w-[500px] gap-2">
          <div className="w-2/5 bg-indigo-500 flex items-center justify-center rounded-lg">
            w-2/5
          </div>
          <div className="w-3/5 bg-indigo-500 flex items-center justify-center rounded-lg">
            w-3/5
          </div>
        </div>
        <div className="flex flex-row w-[500px] gap-2">
          <div className="w-1/3 bg-indigo-500 flex items-center justify-center rounded-lg">
            w-1/3
          </div>
          <div className="w-2/3 bg-indigo-500 flex items-center justify-center rounded-lg">
            w-2/3
          </div>
        </div>
        <div className="flex flex-row w-[500px] gap-2">
          <div className="w-1/4 bg-indigo-500 flex items-center justify-center rounded-lg">
            w-1/4
          </div>
          <div className="w-3/4 bg-indigo-500 flex items-center justify-center rounded-lg">
            w-3/4
          </div>
        </div>
        <div className="flex flex-row w-[500px] gap-2">
          <div className="w-1/5 bg-indigo-500 flex items-center justify-center rounded-lg">
            w-1/5
          </div>
          <div className="w-4/5 bg-indigo-500 flex items-center justify-center rounded-lg">
            w-4/5
          </div>
        </div>
        <div className="flex flex-row w-[500px] gap-2">
          <div className="w-1/6 bg-indigo-500 flex items-center justify-center rounded-lg">
            w-1/6
          </div>
          <div className="w-5/6 bg-indigo-500 flex items-center justify-center rounded-lg">
            w-5/6
          </div>
        </div>
        <div className="flex flex-row w-[500px] gap-2">
          <div className="w-full bg-indigo-500 flex items-center justify-center rounded-lg">
            w-full
          </div>
        </div>
      </div>
      {/* ----------------------------------------------------- */}
      <div className="flex flex-col justify-center items-center gap-2">
        <p>
          We can give another standard sizing such as sm, md, lg, and xl for our
          elements
        </p>
        <div className="w-xl bg-indigo-500 flex items-center justify-center rounded-lg">
          w-xl
        </div>
        <div className="w-lg bg-indigo-500 flex items-center justify-center rounded-lg">
          w-lg
        </div>
        <div className="w-md bg-indigo-500 flex items-center justify-center rounded-lg">
          w-md
        </div>
        <div className="w-sm bg-indigo-500 flex items-center justify-center rounded-lg">
          w-sm
        </div>
        <div className="w-xs bg-indigo-500 flex items-center justify-center rounded-lg">
          w-xs
        </div>
      </div>
      {/* ----------------------------------------------------- */}
      <div className="flex flex-col justify-center items-center gap-2">
        <p>
          We can use size-number to give our elements vertical and horizontal
          size
        </p>
        <div className="flex flex-row gap-4">
          <div className="size-16 bg-indigo-500 flex items-center justify-center rounded-lg">
            size-16
          </div>
          <div className="size-20 bg-indigo-500 flex items-center justify-center rounded-lg">
            size-20
          </div>
          <div className="size-24 bg-indigo-500 flex items-center justify-center rounded-lg">
            size-24
          </div>
          <div className="size-28 bg-indigo-500 flex items-center justify-center rounded-lg">
            size-28
          </div>
          <div className="size-32 bg-indigo-500 flex items-center justify-center rounded-lg">
            size-32
          </div>
          <div className="size-60 bg-indigo-500 flex items-center justify-center rounded-lg">
            size-60
          </div>
        </div>
      </div>
    </div>
  );
}
