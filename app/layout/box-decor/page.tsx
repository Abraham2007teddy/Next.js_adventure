export default function Box_decoration() {
  return (
    <div className="flex flex-col text-center">
      <div className="px-[200px]">
        <p className="m-2">Box decoration break</p>
        <span className="box-decoration-slice bg-linear-to-r from-indigo-600 to-pink-500">
          Hello, <br />
          Ibrohim
        </span>
        <br />
        <span className="box-decoration-clone bg-linear-to-r from-indigo-600 to-pink-500">
          Hello, <br />
          Ibrohim
        </span>
      </div>
    </div>
  );
}
