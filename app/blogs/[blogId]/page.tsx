export default async function Blog_details({
  params,
}: {
  params: Promise<{ blogId: number }>;
}) {
  const { blogId } = await params;
  // const people = ["Ibrohim", "Yahyo"];

  return (
    <div>
      <h1>Details for blog {blogId}</h1>
      {blogId == 1 && <h2>SAlom men 1 chi blogman</h2>}
      {/* <h2>{people[blogId]}</h2> */}
    </div>
  );
}
