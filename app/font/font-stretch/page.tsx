export default function Font_stretch() {
  return (
    <>
      <div className="flex flex-col text-center text-[50px] pt-5 gap-y-2">
        <h1 className="font-stretch-extra-condensed">Font extra condensed</h1>
        <h1 className="font-stretch-condensed">Font condensed</h1>
        <h1 className="font-stretch-normal">Font normal</h1>
        <h1 className="font-stretch-expanded">Font expanded</h1>
        <h1 className="font-stretch-extra-expanded">Font extra expanded</h1>
        <h1 className="font-stretch-[20%]">Font stretch 20%</h1>
        <h1 className="font-stretch-[150%]">Font stretch 150%</h1>
      </div>
    </>
  );
}
