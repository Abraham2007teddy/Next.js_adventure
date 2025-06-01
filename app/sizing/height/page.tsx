export default function Height() {
  return (
    <div className="flex flex-col items-center gap-2">
      <h1>Height</h1>
      <p>We can give height to our elements with h-number</p>
      <div className="flex flex-row items-center gap-2">
        <div className="h-75 bg-indigo-500 flex items-center justify-center rounded-lg">
          h-75
        </div>
        <div className="h-65 bg-indigo-500 flex items-center justify-center rounded-lg">
          h-65
        </div>
        <div className="h-55 bg-indigo-500 flex items-center justify-center rounded-lg">
          h-55
        </div>
        <div className="h-45 bg-indigo-500 flex items-center justify-center rounded-lg">
          h-45
        </div>
        <div className="h-35 bg-indigo-500 flex items-center justify-center rounded-lg">
          h-35
        </div>
        <div className="h-25 bg-indigo-500 flex items-center justify-center rounded-lg">
          h-25
        </div>
        <div className="h-15 bg-indigo-500 flex items-center justify-center rounded-lg">
          h-15
        </div>
        <div className="h-10 bg-indigo-500 flex items-center justify-center rounded-lg">
          h-10
        </div>
      </div>
      <p>Or use fractions</p>
      <div className="h-[200px] flex flex-row items-center gap-2">
        <div className="h-full bg-indigo-500 flex items-center justify-center rounded-lg">
          h-full
        </div>
        <div className="h-9/10 bg-indigo-500 flex items-center justify-center rounded-lg">
          h-9/10
        </div>
        <div className="h-8/10 bg-indigo-500 flex items-center justify-center rounded-lg">
          h-8/10
        </div>
        <div className="h-7/10 bg-indigo-500 flex items-center justify-center rounded-lg">
          h-7/10
        </div>
        <div className="h-6/10 bg-indigo-500 flex items-center justify-center rounded-lg">
          h-6/10
        </div>
        <div className="h-5/10 bg-indigo-500 flex items-center justify-center rounded-lg">
          h-5/10
        </div>
        <div className="h-4/10 bg-indigo-500 flex items-center justify-center rounded-lg">
          h-4/10
        </div>
        <div className="h-3/10 bg-indigo-500 flex items-center justify-center rounded-lg">
          h-3/10
        </div>
        <div className="h-2/10 bg-indigo-500 flex items-center justify-center rounded-lg">
          h-2/10
        </div>
        <div className="h-1/10 bg-indigo-500 flex items-center justify-center rounded-lg">
          h-1/10
        </div>
      </div>
      <p>
        We can use h-dvh so that our element's height will grow and shrink
        according to our device's screen
      </p>
      <div className="flex flex-row items-center gap-2">
        <div className="h-dvh bg-indigo-500 flex items-center justify-center rounded-lg">
          h-dvh
        </div>
      </div>
      <p>We can use h-lvh to get msximum empty space</p>
      <div className="flex flex-row items-center gap-2">
        <div className="h-lvh bg-indigo-500 flex items-center justify-center rounded-lg">
          h-lvh
        </div>
      </div>
      <p>Or svh to get minimum space</p>
      <div className="flex flex-row items-center gap-2">
        <div className="h-svh bg-indigo-500 flex items-center justify-center rounded-lg">
          h-svh
        </div>
      </div>
    </div>
  );
}
