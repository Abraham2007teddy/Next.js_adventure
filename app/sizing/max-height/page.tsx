export default function Max_height() {
  return (
    <div className="flex flex-col items-center p-2 gap-4 mb-[100px]">
      <h1>Maximum height</h1>
      <p>You can give maximum height for your elements with max-h-number</p>
      <div className="h-80 flex flex-row items-end p-2 gap-2">
        <div className="h-full max-h-80 bg-indigo-500 flex items-center justify-center rounded-lg">
          max-h-80
        </div>
        <div className="h-full max-h-60 bg-indigo-500 flex items-center justify-center rounded-lg">
          max-h-60
        </div>
        <div className="h-full max-h-50 bg-indigo-500 flex items-center justify-center rounded-lg">
          max-h-50
        </div>
        <div className="h-full max-h-20 bg-indigo-500 flex items-center justify-center rounded-lg">
          max-h-20
        </div>
      </div>
      <p>If you want you can use fractions</p>
      <div className="h-200 flex flex-row items-end p-2 gap-2">
        <div className="h-full max-h-full bg-indigo-500 flex items-center justify-center rounded-lg">
          max-h-full
        </div>
        <div className="h-full max-h-3/4 bg-indigo-500 flex items-center justify-center rounded-lg">
          max-h-3/4
        </div>
        <div className="h-full max-h-1/2 bg-indigo-500 flex items-center justify-center rounded-lg">
          max-h-1/2
        </div>
        <div className="h-full max-h-1/5 bg-indigo-500 flex items-center justify-center rounded-lg">
          max-h-1/5
        </div>
      </div>
    </div>
  );
}
