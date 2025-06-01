export default function Box_sizing() {
  return (
    <div className="flex flex-col text-center items-center">
      <div className="px-[200px]">
        <p className="m-2">Box sizing</p>
        <p>Use box-border to create elements and give size and border</p>
        <div className="mb-5 box-border size-20 border-4 p-4 bg-indigo-600 rounded-lg"></div>
        <p>If you want to exclude border and padding use box-content</p>
        <div className="mb-5 box-content size-20 border-4 p-4 bg-indigo-600 rounded-lg"></div>
      </div>
    </div>
  );
}
