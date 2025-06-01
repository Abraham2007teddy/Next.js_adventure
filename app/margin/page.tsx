export default function Padding() {
  return (
    <>
      <div className="p-5 text-white text-center">
        <div className="flex flex-row justify-center">
          <div className="bg-red-500 w-[50px] h-[50px] m-4">m-4</div>
          <div className="bg-blue-500 w-[50px] h-[50px] mt-2">mt-2</div>
          <div className="bg-yellow-500 w-[50px] h-[50px] mb-2">mb-2</div>
        </div>
        <div className="flex flex-row justify-center">
          <div className="bg-purple-500 w-[50px] h-[50px] mr-2">mr-2</div>
          <div className="bg-orange-500 w-[50px] h-[50px] ml-2">ml-2</div>
          <div className="bg-gray-500 w-[50px] h-[50px] mx-2">mx-2</div>
        </div>
        <div className="flex flex-row justify-center">
          <div className="bg-indigo-500 w-[50px] h-[50px] my-2">my-2</div>
          <div className="bg-green-500 w-[50px] h-[50px] -m-2">-m-2</div>
          <div className="bg-lime-500 w-[50px] h-[50px]">default</div>
        </div>
      </div>
    </>
  );
}
