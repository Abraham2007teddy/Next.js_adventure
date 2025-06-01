export default function Grid_template_rows() {
  return (
    <div>
      <div className="flex flex-col items-center">
        <h1>Grid template rows</h1>
        <p>
          Using grid-rows-number you can give how many elements should be in
          each row
        </p>
        <p>
          And you can use grid-rows-subgrid to give order to your element(s)
        </p>
      </div>
      <div className="grid grid-flow-col grid-rows-3 gap-4 p-4">
        <div className="bg-indigo-500 flex items-center justify-center rounded-lg">
          1
        </div>
        <div className="bg-indigo-500 flex items-center justify-center rounded-lg">
          2
        </div>
        <div className="bg-indigo-500 flex items-center justify-center rounded-lg">
          3
        </div>
        <div className="bg-indigo-500 flex items-center justify-center rounded-lg">
          4
        </div>
        <div className="bg-indigo-500 flex items-center justify-center rounded-lg">
          5
        </div>
        <div className="row-span-1 grid grid-rows-subgrid">
          <div className="row-start-1 bg-indigo-500 flex items-center justify-center rounded-lg">
            6
          </div>
        </div>
        <div className="bg-indigo-500 flex items-center justify-center rounded-lg">
          7
        </div>
        <div className="bg-indigo-500 flex items-center justify-center rounded-lg">
          8
        </div>
        <div className="bg-indigo-500 flex items-center justify-center rounded-lg">
          9
        </div>
        <div className="bg-indigo-500 flex items-center justify-center rounded-lg">
          10
        </div>
      </div>
    </div>
  );
}
