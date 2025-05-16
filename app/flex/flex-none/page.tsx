export default function Flex_none() {
  return (
    <>
      <div className="text-center text-[30px] my-4">
        If you want that your object(s) to not change their size use flex-none
      </div>
      <div className="flex flex-row gap-x-1 m-1">
        <div className="w-16 flex-none bg-indigo-600 rounded-lg text-center">
          01
        </div>
        <div className="w-64 flex-none bg-indigo-600 rounded-lg text-center">
          02
        </div>
        <div className="w-32 flex-1 bg-indigo-600 rounded-lg text-center">
          03
        </div>
      </div>
    </>
  );
}
