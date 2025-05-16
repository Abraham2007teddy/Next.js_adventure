export default function Basis_stanrard() {
  return (
    <>
      <div className="text-center text-[30px] my-4">
        We can also use tailwind's standard sizing method
      </div>
      <div className="flex flex-row gap-x-1 m-1">
        <div className="basis-2xs bg-indigo-600 rounded-lg text-center">02</div>
        <div className="basis-xs bg-indigo-600 rounded-lg text-center">03</div>
        <div className="basis-sm bg-indigo-600 rounded-lg text-center">04</div>
        <div className="basis-md bg-indigo-600 rounded-lg text-center">05</div>
        <div className="basis-lg bg-indigo-600 rounded-lg text-center">06</div>
        <div className="basis-xl bg-indigo-600 rounded-lg text-center">07</div>
        <div className="basis-2xl bg-indigo-600 rounded-lg text-center">08</div>
      </div>
    </>
  );
}
