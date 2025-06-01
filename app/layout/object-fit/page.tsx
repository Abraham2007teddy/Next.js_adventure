export default function Object_fit() {
  return (
    <div className="flex flex-col text-center">
      <div className="px-[200px]">
        <h1 className="m-2">Object fit</h1>
        <h2 className="m-2">
          object-cover will fitt image according to container size
        </h2>
        <img
          className="h-60 w-90 object-cover rounded-lg"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
        />
        <h2 className="m-2">object-contain will fitt not losing its image</h2>
        <img
          className="h-60 w-50 object-contain rounded-lg"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
        />
        <h2 className="m-2">
          object-fill will occupy all free space with image
        </h2>
        <img
          className="h-60 w-120 object-fill rounded-lg"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
        />
        <h2 className="m-2">object-scale-down</h2>
        <img
          className="h-60 w-60 object-scale-down rounded-lg"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
        />
        <h2 className="m-2">object-none</h2>
        <img
          className="h-60 w-90 object-none rounded-lg"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
        />
      </div>
    </div>
  );
}
