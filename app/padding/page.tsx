export default function Padding() {
  return (
    <>
      <div className="p-5 text-black">
        <div className="flex flex-row justify-center">
          <div className="bg-red-500 w-[80px] h-[80px] p-3">
            <div className="bg-white w-[35px] h-[35px]">p-3</div>
          </div>
          <div className="bg-blue-500 w-[80px] h-[80px] pt-2">
            <div className="bg-white w-[35px] h-[35px]">pt-2</div>
          </div>
          <div className="bg-yellow-500 w-[80px] h-[80px] pb-2">
            <div className="bg-white w-[35px] h-[35px]">pb-2</div>
          </div>
        </div>
        <div className="flex flex-row justify-center">
          <div className="bg-purple-500 w-[80px] h-[80px] pl-2">
            <div className="bg-white w-[35px] h-[35px]">pl-2</div>
          </div>
          <div className="flex flex-row justify-end bg-orange-500 w-[80px] h-[80px] pr-2">
            <div className="bg-white w-[35px] h-[35px]">pr-2</div>
          </div>
          <div className="bg-gray-500 w-[80px] h-[80px] px-2">
            <div className="bg-white w-[35px] h-[35px]">px-2</div>
          </div>
        </div>
        <div className="flex flex-row justify-center">
          <div className="bg-indigo-500 w-[80px] h-[80px] py-2">
            <div className="bg-white w-[35px] h-[35px]">py-2</div>
          </div>
          <div className="bg-green-500 w-[80px] h-[80px] ps-1">
            <div className="bg-white w-[35px] h-[35px]">ps-1</div>
          </div>
          <div className="flex flex-row justify-end bg-lime-500 w-[80px] h-[80px] pe-4">
            <div className="bg-white w-[35px] h-[35px]">pe-4</div>
          </div>
        </div>
      </div>
    </>
  );
}
