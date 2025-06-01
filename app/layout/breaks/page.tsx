export default function Breaks() {
  return (
    <div className="flex flex-col text-center">
      <div className="px-[200px] gap-4">
        <p>Breaks</p>
        <p>Break after column</p>
        <div className="columns-2">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p className="break-after-column">
            Saepe iste autem harum reiciendis nam!{" "}
          </p>
          <p>
            Numquam eaque voluptatem suscipit vel id pariatur similique sunt
            dignissimos.
          </p>
          <p>Aliquam commodi ratione, cumque ipsum ab!</p>
        </div>
        <p>Break before column</p>
        <div className="columns-2">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p className="break-before-column">
            Saepe iste autem harum reiciendis nam!{" "}
          </p>
          <p>
            Numquam eaque voluptatem suscipit vel id pariatur similique sunt
            dignissimos.
          </p>
          <p>Aliquam commodi ratione, cumque ipsum ab!</p>
        </div>
        <p>Break inside avoid column</p>
        <div className="columns-2">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p className="break-inside-avoid-column">
            Saepe iste autem harum reiciendis nam!{" "}
          </p>
          <p>
            Numquam eaque voluptatem suscipit vel id pariatur similique sunt
            dignissimos.
          </p>
          <p>Aliquam commodi ratione, cumque ipsum ab!</p>
        </div>
      </div>
    </div>
  );
}
