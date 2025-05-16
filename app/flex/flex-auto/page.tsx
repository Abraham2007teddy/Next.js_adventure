export default function Flex_auto() {
  return (
    <>
      <div className="text-center text-[30px] my-4">
        Another cool method is flex-auto, which can grow and shrink according to
        objects' initial size
      </div>
      <div className="flex flex-row gap-x-1 m-1">
        <div className="w-16 flex-auto bg-indigo-600 rounded-lg text-center">
          01
        </div>
        <div className="w-64 flex-auto bg-indigo-600 rounded-lg text-center">
          02
        </div>
        <div className="w-32 flex-auto bg-indigo-600 rounded-lg text-center">
          03
        </div>
      </div>
    </>
  );
}
