export default function Font_numeric_variant() {
  return (
    <>
      <div className="flex flex-col text-center text-[50px] pt-5 gap-y-2">
        <h1 className="ordinal">1st 2nd 3rd 4th</h1>
        <h1 className="oldstyle-nums">0123456789</h1>
        <h1 className="diagonal-fractions">1/2</h1>
        <h1 className="slashed-zero">0</h1>
        <h1 className="lining-nums">0123456789</h1>
      </div>
      <dl className="text-[20px] px-[60vh]">
        <dt className="...">Subtotal</dt>
        <dd className="text-right slashed-zero tabular-nums ...">$100.00</dd>
        <hr />
        <dt className="...">Tax</dt>
        <dd className="text-right slashed-zero tabular-nums ...">$14.50</dd>
        <hr />
        <dt className="...">Total</dt>
        <dd className="text-right slashed-zero tabular-nums ...">$114.50</dd>
        <hr />
      </dl>
    </>
  );
}
