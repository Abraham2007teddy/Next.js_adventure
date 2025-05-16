export default async function Blog_details({
  params,
}: {
  params: Promise<{ name: any }>;
}) {
  const { name } = await params;
  // const people = ["Ibrohim", "Yahyo"];

  return (
    <div>
      <h1>Hello {name}</h1>
      {/* <h2>{people[blogId]}</h2> */}
    </div>
  );
}
