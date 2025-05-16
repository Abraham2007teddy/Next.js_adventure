export default function Shrink() {
  return (
    <>
      <div className="text-center text-[30px] my-4">
        You can use shrink to make your item(s) shrink when needed
      </div>
      <div className="flex flex-row gap-x-1 m-1">
        <div className="basis-64 flex-none bg-indigo-600 rounded-lg text-center">
          01
        </div>
        <div className="basis-64 shrink bg-indigo-600 rounded-lg text-center">
          02
        </div>
        <div className="basis-64 flex-none bg-indigo-600 rounded-lg text-center">
          03
        </div>
      </div>

      {/* <div className="text-center text-[30px] my-4">
        Just like in grow you can use shrink-0 to disable shrinking
      </div>
      <div className="flex flex-row gap-x-1 m-1">
        <div className="basis-64 flex-none bg-indigo-600 rounded-lg text-center">
          01
        </div>
        <div className="basis-64 shrink-0 bg-indigo-600 rounded-lg text-center">
          02
        </div>
        <div className="basis-64 flex-none bg-indigo-600 rounded-lg text-center">
          03
        </div>
      </div> */}
    </>
  );
}
