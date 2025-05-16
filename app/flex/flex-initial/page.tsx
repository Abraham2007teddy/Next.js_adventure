export default function Flex_initial() {
  return (
    <>
      <div className="text-center text-[30px] my-4">
        If you give flex-1 it will ignore its initial size and lets shrink and
        grow as needed
      </div>
      <div className="flex flex-row gap-x-1 m-1">
        <div className="w-[300px] flex-none bg-indigo-600 rounded-lg text-center">
          01
        </div>
        <div className="w-[16px] flex-1 bg-indigo-600 rounded-lg text-center">
          02
        </div>
        <div className="w-[16px] flex-1 bg-indigo-600 rounded-lg text-center">
          03
        </div>
      </div>

      {/* <div className="text-center text-[30px] my-4">
        You can use flex-initial it can shrink to small sizes but when 
        there is big space it will save initial size and won't grow
        </div>
        <div className="w-32 flex-none bg-indigo-600 rounded-lg text-center">
          01
        </div>
        <div className="w-64 flex-initial bg-indigo-600 rounded-lg text-center">
          02
        </div>
        <div className="w-64 flex-initial bg-indigo-600 rounded-lg text-center">
          03
        </div>  */}
    </>
  );
}
