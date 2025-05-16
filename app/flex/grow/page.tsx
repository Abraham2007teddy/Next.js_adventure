export default function Grow() {
  return (
    <>
      <div className="text-center text-[30px] my-4">
        You can use grow so that yout item will fill any available space
      </div>
      <div className="flex flex-row gap-x-1 m-1">
        <div className="basis-64 flex-none bg-indigo-600 rounded-lg text-center">
          01
        </div>
        <div className="basis-64 grow min-w-[100px] bg-indigo-600 rounded-lg text-center">
          02
        </div>
        <div className="basis-64 flex-none bg-indigo-600 rounded-lg text-center">
          03
        </div>
      </div>

      {/* <div className="text-center text-[30px] my-4">
        You can give utilities to grow-number so that they will be grow
        proportionally
      </div>
      <div className="flex flex-row gap-x-1 m-1">
        <div className="basis-64 grow-6 bg-indigo-600 rounded-lg text-center">
          01
        </div>
        <div className="basis-64 grow-3 bg-indigo-600 rounded-lg text-center">
          02
        </div>
        <div className="basis-64 grow-3 bg-indigo-600 rounded-lg text-center">
          03
        </div>
      </div> */}

      {/* <div className="text-center text-[30px] my-4">
        You can use grow-0 so that item will not grow
      </div>
      <div className="flex flex-row gap-x-1 m-1">
        <div className="basis-64 grow-3 bg-indigo-600 rounded-lg text-center">
          01
        </div>
        <div className="basis-64 grow-0 bg-indigo-600 rounded-lg text-center">
          02
        </div>
        <div className="basis-64 grow-3 bg-indigo-600 rounded-lg text-center">
          03
        </div>
      </div> */}
    </>
  );
}
