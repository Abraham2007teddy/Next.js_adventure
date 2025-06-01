export default function Justify_self() {
  return (
    <div>
      <div className="text-center mb-[100px]">
        <h1 className="m-2">Justify-self</h1>
        <p>Justify-self-start</p>
        <div className="grid grid-cols-4 justify-items-stretch">
          <div className="min-w-[40px] bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
            1
          </div>
          <div className="justify-self-start min-w-[40px] bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
            2
          </div>
          <div className="min-w-[40px] bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
            3
          </div>
          <div className="min-w-[40px] bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
            4
          </div>
        </div>
        <p>Justify-self-center</p>
        <div className="grid grid-cols-4 justify-items-stretch">
          <div className="min-w-[40px] bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
            1
          </div>
          <div className="justify-self-center min-w-[40px] bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
            2
          </div>
          <div className="min-w-[40px] bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
            3
          </div>
          <div className="min-w-[40px] bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
            4
          </div>
        </div>
        <p>Justify-self-end</p>
        <div className="grid grid-cols-4 justify-items-stretch">
          <div className="min-w-[40px] bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
            1
          </div>
          <div className="justify-self-end min-w-[40px] bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
            2
          </div>
          <div className="min-w-[40px] bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
            3
          </div>
          <div className="min-w-[40px] bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
            4
          </div>
        </div>
        <p>Justify-self-stretch</p>
        <div className="grid grid-cols-4">
          <div className="min-w-[40px] bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
            1
          </div>
          <div className="justify-self-stretch min-w-[40px] bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
            2
          </div>
          <div className="min-w-[40px] bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
            3
          </div>
          <div className="min-w-[40px] bg-indigo-500 rounded-lg flex flex-col justify-center items-center">
            4
          </div>
        </div>
      </div>
    </div>
  );
}
