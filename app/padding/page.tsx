export default function Padding() {
  return (
    <>
      <div className="flex flex-row justify-center">
        <div className="bg-red-500 w-[50px] h-[50px] p-3">
          <div className="bg-white w-[20px] h-[20px]"></div>
        </div>
        <div className="bg-blue-500 w-[50px] h-[50px] pt-2">
          <div className="bg-white w-[20px] h-[20px]"></div>
        </div>
        <div className="bg-yellow-500 w-[50px] h-[50px] pb-2">
          <div className="bg-white w-[20px] h-[20px]"></div>
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <div className="bg-purple-500 w-[50px] h-[50px] pl-2">
          <div className="bg-white w-[20px] h-[20px]"></div>
        </div>
        <div className="flex flex-row justify-end bg-orange-500 w-[50px] h-[50px] pr-2">
          <div className="bg-white w-[20px] h-[20px]"></div>
        </div>
        <div className="bg-gray-500 w-[50px] h-[50px] px-2">
          <div className="bg-white w-[20px] h-[20px]"></div>
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <div className="bg-indigo-500 w-[50px] h-[50px] py-2">
          <div className="bg-white w-[20px] h-[20px]"></div>
        </div>
        <div className="bg-green-500 w-[50px] h-[50px] ps-1">
          <div className="bg-white w-[20px] h-[20px]"></div>
        </div>
        <div className="flex flex-row justify-end bg-lime-500 w-[50px] h-[50px] pe-4">
          <div className="bg-white w-[20px] h-[20px]"></div>
        </div>
      </div>
    </>
  );
}
