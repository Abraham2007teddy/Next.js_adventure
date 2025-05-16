export default function Device_responsive() {
  return (
    <>
      <div className="text-center text-[30px] my-4">
        You can also make it device responsive
      </div>
      <div className="flex flex-row gap-x-1 m-1">
        <div className="basis-1/4 md:basis-1/3 bg-indigo-600 rounded-lg text-center">
          01
        </div>
        <div className="basis-1/4 md:basis-1/3 bg-indigo-600 rounded-lg text-center">
          02
        </div>
        <div className="basis-2/4 md:basis-1/3 bg-indigo-600 rounded-lg text-center">
          03
        </div>
      </div>
    </>
  );
}
