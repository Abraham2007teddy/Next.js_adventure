export default function Wrap() {
  return (
    <>
      <div className="text-center text-[30px] my-4">
        Flex has wrap and nowrap methods wrap is to give space around item(s)
        <br />
        Nowrap
      </div>
      <div className="flex flex-nowrap">
        <div className="min-w-[400px] bg-indigo-600 rounded-lg text-center">
          01
        </div>
        <div className="min-w-[400px] bg-indigo-600 rounded-lg text-center">
          02
        </div>
        <div className="min-w-[400px] bg-indigo-600 rounded-lg text-center">
          03
        </div>
      </div>
      {/* <div className="text-center text-[30px] my-4">
        Flex has wrap and nowrap methods wrap is to give space around item(s)
        <br />
        Wrap
      </div>
      <div className="flex flex-wrap gap-1">
        <div className="w-[300px] bg-indigo-600 rounded-lg text-center">01</div>
        <div className="w-[300px] bg-indigo-600 rounded-lg text-center">02</div>
        <div className="w-[300px] bg-indigo-600 rounded-lg text-center">03</div>
      </div> */}
      {/* <div className="text-center text-[30px] my-4">
        Flex has wrap and nowrap methods wrap is to give space around item(s)
        <br />
        Reverse Wrap
      </div>
      <div className="flex flex-row-reverse flex-wrap-reverse gap-1">
        <div className="w-[300px] bg-indigo-600 rounded-lg text-center">01</div>
        <div className="w-[300px] bg-indigo-600 rounded-lg text-center">02</div>
        <div className="w-[300px] bg-indigo-600 rounded-lg text-center">03</div>
        <div className="flex flex-col">
          <span>blaablablaa</span>
          <span>blaablablaa</span>
        </div>
      </div> */}
    </>
  );
}
