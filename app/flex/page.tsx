export default function Flex() {
  return (
    <>
      <div className="text-center text-[30px] my-4">
        You can also give row direction normal or reverse
        <br />
        normal row
      </div>
      <div className="flex flex-row gap-x-1 m-1">
        {/* <div className="text-center text-[30px] my-4">
      reverse row 
      </div> */}
        {/* <div className="flex flex-row-reverse gap-x-1 m-1"> */}

        {/* <div className="text-center text-[30px] my-4">
      Or make it column
      </div> */}
        {/* <div className="flex flex-col gap-y-1 m-1 h-20"> */}

        {/* <div className="text-center text-[30px] my-4">
      Or make reverse column
      </div> */}
        {/* <div className="flex flex-col-reverse gap-y-1 m-1 h-20"> */}

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
          <div className="basis-64 flex-none bg-indigo-600 rounded-lg text-center">
            04
          </div>
        </div>
      </div>
    </>
  );
}
