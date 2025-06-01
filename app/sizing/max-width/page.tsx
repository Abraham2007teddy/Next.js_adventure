export default function Max_width() {
  return (
    <div className="flex flex-col justify-center items-center gap-2 p-2 mb-[100px]">
      <h1 className="mt-2">Max-width</h1>
      <p>We can give fixed maximum size to our elements</p>
      <div className="w-full max-w-200 bg-indigo-500 flex items-center justify-center rounded-lg">
        max-w-200
      </div>
      <div className="w-full max-w-150 bg-indigo-500 flex items-center justify-center rounded-lg">
        max-w-150
      </div>
      <div className="w-full max-w-125 bg-indigo-500 flex items-center justify-center rounded-lg">
        max-w-125
      </div>
      <div className="w-full max-w-100 bg-indigo-500 flex items-center justify-center rounded-lg">
        max-w-100
      </div>
      <div className="w-full max-w-75 bg-indigo-500 flex items-center justify-center rounded-lg">
        max-w-75
      </div>
      <p>In addition we can use fractions with maximum sizing</p>
      <div className="w-full max-w-1/5 bg-indigo-500 flex items-center justify-center rounded-lg">
        max-w-1/5
      </div>
      <div className="w-full max-w-1/4 bg-indigo-500 flex items-center justify-center rounded-lg">
        max-w-1/4
      </div>
      <div className="w-full max-w-1/3 bg-indigo-500 flex items-center justify-center rounded-lg">
        max-w-1/3
      </div>
      <div className="w-full max-w-1/2 bg-indigo-500 flex items-center justify-center rounded-lg">
        max-w-1/2
      </div>
      <div className="w-full max-w-1/1 bg-indigo-500 flex items-center justify-center rounded-lg">
        max-w-1/1
      </div>
      <p>In addition we can use standard sm, md, lg, and xl</p>
      <div className="w-full max-w-xs bg-indigo-500 flex items-center justify-center rounded-lg">
        max-w-xs
      </div>
      <div className="w-full max-w-sm bg-indigo-500 flex items-center justify-center rounded-lg">
        max-w-sm
      </div>
      <div className="w-full max-w-md bg-indigo-500 flex items-center justify-center rounded-lg">
        max-w-md
      </div>
      <div className="w-full max-w-lg bg-indigo-500 flex items-center justify-center rounded-lg">
        max-w-lg
      </div>
      <div className="w-full max-w-xl bg-indigo-500 flex items-center justify-center rounded-lg">
        max-w-xl
      </div>
    </div>
  );
}
