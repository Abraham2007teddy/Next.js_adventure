export default function Min_width() {
  return (
    <div className="flex flex-col justify-center items-center gap-2 mb-[100px]">
      <h1 className="m-2">Min-width</h1>
      <p>We can give fixed minimum size to our elements</p>
      <div className="flex flex-col items-center gap-2">
        <div className="min-w-100 bg-indigo-500 flex items-center justify-center rounded-lg">
          min-w-100
        </div>
        <div className="min-w-75 bg-indigo-500 flex items-center justify-center rounded-lg">
          min-w-75
        </div>
        <div className="min-w-50 bg-indigo-500 flex items-center justify-center rounded-lg">
          min-w-50
        </div>
        <div className="min-w-25 bg-indigo-500 flex items-center justify-center rounded-lg">
          min-w-25
        </div>
        <div className="min-w-10 bg-indigo-500 flex items-center justify-center rounded-lg">
          min-w-10
        </div>
      </div>
      <p className="mt-4">We can use fractions to size our elements</p>
      <div className="w-[400px] flex flex-row justify-center p-2 gap-2">
        <div className="min-w-1/4 bg-indigo-500 flex items-center justify-center rounded-lg">
          min-w-1/4
        </div>
        <div className="min-w-3/4 bg-indigo-500 flex items-center justify-center rounded-lg">
          min-w-3/4
        </div>
      </div>
      <div className="w-[400px] flex flex-row justify-center p-2 gap-2">
        <div className="min-w-1/2 bg-indigo-500 flex items-center justify-center rounded-lg">
          min-w-1/2
        </div>
        <div className="min-w-1/2 bg-indigo-500 flex items-center justify-center rounded-lg">
          min-w-1/2
        </div>
      </div>
      <p className="mt-4">
        Or you can use standard xs, sm, md, lg, and xl for sizing
      </p>
      <div className="flex flex-col items-center gap-2">
        <div className="min-w-3xs bg-indigo-500 flex items-center justify-center rounded-lg">
          min-w-3xs
        </div>
        <div className="min-w-2xs bg-indigo-500 flex items-center justify-center rounded-lg">
          min-w-2xs
        </div>
        <div className="min-w-xs bg-indigo-500 flex items-center justify-center rounded-lg">
          min-w-xs
        </div>
        <div className="min-w-sm bg-indigo-500 flex items-center justify-center rounded-lg">
          min-w-sm
        </div>
        <div className="min-w-lg bg-indigo-500 flex items-center justify-center rounded-lg">
          min-w-lg
        </div>
        <div className="min-w-xl bg-indigo-500 flex items-center justify-center rounded-lg">
          min-w-xl
        </div>
        <div className="min-w-2xl bg-indigo-500 flex items-center justify-center rounded-lg">
          min-w-2xl
        </div>
      </div>
    </div>
  );
}
