export default function Object_position() {
  return (
    <div className="flex flex-col text-center">
      <div className="px-[200px]">
        <h1 className="m-2">Object position</h1>
        <div className="grid grid-flow-col grid-rows-3 gap-2">
          <div>
            <p className="m-2">object-top-left</p>
            <img
              className="size-24 rounded-lg object-top-left"
              src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
            />
          </div>
          <div>
            <p className="m-2">object-top</p>
            <img
              className="size-24 rounded-lg object-top"
              src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
            />
          </div>
          <div>
            <p className="m-2">object-top-left</p>
            <img
              className="size-24 rounded-lg object-top-left"
              src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
            />
          </div>
          <div>
            <p className="m-2">object-center</p>
            <img
              className="size-24 rounded-lg object-center"
              src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
            />
          </div>
          <div>
            <p className="m-2">object-left</p>
            <img
              className="size-24 rounded-lg object-left"
              src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
            />
          </div>
          <div>
            <p className="m-2">object-right</p>
            <img
              className="size-24 rounded-lg object-right"
              src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
