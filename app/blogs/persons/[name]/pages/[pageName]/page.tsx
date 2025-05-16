export default async function Blog_details({
  params,
}: {
  params: Promise<{ name: any; pageName: any }>;
}) {
  const { name, pageName } = await params;
  // const people = ["Ibrohim", "Yahyo"];

  return (
    <div>
      <h1>Hello {name}</h1>
      <p>This is {pageName} page</p>
      {/* <h2>{people[blogId]}</h2> */}
    </div>
  );
}
