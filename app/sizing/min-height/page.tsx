export default function Min_height() {
  return (
    <div className="flex flex-col items-center p-2 gap-4 mb-[100px]">
      <h1>Minimum height</h1>
      <p>Just like in width we can give min height</p>
      <div className="flex flex-row items-center p-2 gap-2">
        <div className="min-h-70 bg-indigo-500 flex items-center justify-center rounded-lg">
          min-h-70
        </div>
        <div className="min-h-60 bg-indigo-500 flex items-center justify-center rounded-lg">
          min-h-60
        </div>
        <div className="min-h-50 bg-indigo-500 flex items-center justify-center rounded-lg">
          min-h-50
        </div>
        <div className="min-h-40 bg-indigo-500 flex items-center justify-center rounded-lg">
          min-h-40
        </div>
      </div>
      <p>Or use fractions</p>
      <div className="h-[250px] flex flex-row items-center p-2 gap-2">
        <div className="min-h-full bg-indigo-500 flex items-center justify-center rounded-lg">
          min-h-full
        </div>
        <div className="min-h-3/4 bg-indigo-500 flex items-center justify-center rounded-lg">
          min-h-3/4
        </div>
        <div className="min-h-1/2 bg-indigo-500 flex items-center justify-center rounded-lg">
          min-h-1/2
        </div>
        <div className="min-h-1/5 bg-indigo-500 flex items-center justify-center rounded-lg">
          min-h-1/5
        </div>
      </div>
    </div>
  );
}
