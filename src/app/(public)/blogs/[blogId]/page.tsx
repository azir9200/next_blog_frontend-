import BlogDetailsCard from "@/components/modules/Blog/BlogDetailsCard";

const BlogDetailsPage = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const { blogId } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/post/${blogId} `
  );

  const { blog } = await res.json();
  console.log("object blog id", blog);
  return (
    <div className="py-30 px-4 max-w-7xl mx-auto">
      <BlogDetailsCard blog={blog} />
    </div>
  );
};

export default BlogDetailsPage;
