export default function Grid_template_columns() {
  return (
    <div>
      <div className="flex flex-col items-center p-4">
        <h1>Grid template columns</h1>
        <p>
          You can use grid-cols-5 to give how many columns should be in your
          content
        </p>
        <p>
          And also using grid-cols-subgrid, col-start, and col-span you can give
          order of your element
        </p>
        <p>
          Another cool thing is that you can use sm:, md:, or lg: to make your
          grid device responsible
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 p-4">
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
        <div className="bg-indigo-500 flex items-center justify-center rounded-lg">
          6
        </div>
        <div className="col-span-3 grid grid-cols-subgrid gap-4">
          <div className="col-start-1 col-span-3 bg-indigo-500 flex items-center justify-center rounded-lg">
            7
          </div>
        </div>
        <div className="bg-indigo-500 flex items-center justify-center rounded-lg">
          8
        </div>
      </div>
    </div>
  );
}
