export default function Display() {
  return (
    <div className="flex flex-col text-center">
      <div className="px-[200px]">
        <h1 className="m-2">Display</h1>
        <p className="px-[50px]">
          Lorem ipsum dolor, sit amet consectetur{" "}
          <span className="inline bg-gray-700">display: inline</span> Aliquid
          quisquam nam ratione eos sapiente deserunt sunt tenetur id nulla, ut
          dolore fugiat asperiores voluptatibus in quaerat, inventore minima
          deleniti hic.
        </p>
        <p className="px-[50px]">
          Lorem ipsum dolor, sit amet consectetur{" "}
          <span className="inline-block bg-gray-700">
            display: inline-block
          </span>{" "}
          Aliquid quisquam nam ratione eos sapiente deserunt sunt tenetur id
          nulla, ut dolore fugiat asperiores voluptatibus in quaerat, inventore
          minima deleniti hic.
        </p>
        <p className="px-[50px]">
          Lorem ipsum dolor, sit amet consectetur{" "}
          <span className="block bg-gray-700">display: block</span> Aliquid
          quisquam nam ratione eos sapiente deserunt sunt tenetur id nulla, ut
          dolore fugiat asperiores voluptatibus in quaerat, inventore minima
          deleniti hic.
        </p>
      </div>
    </div>
  );
}
