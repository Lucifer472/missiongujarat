import { getBlogs } from "@/lib/blog-util";
import { blogs } from "@/types";
import dynamic from "next/dynamic";
import BlogArticle from "../blogs/BlogArticle";

const RecentBlog = async ({ options }: { options: any }) => {
  const data = await getBlogs(options);
  if (data === null || data.length === 0) return null;

  return (
    <section className="w-full h-full">
      <div className="global-container bg-white rounded-md padding flex flex-col w-full">
        <div className="w-full py-2 flex items-start justify-start border-b-2 border-gray-500">
          <h1 className="text-xl font-medium text-black">
            Recently Added Blogs:
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 py-2 items-center justify-center">
          {data.map((b: blogs) => (
            <BlogArticle
              key={b.id}
              title={b.title}
              img={b.img}
              link={`/${b.url}`}
              authorImg={b.Author?.img}
              authorName={b.Author?.name}
              updatedAt={b.updatedAt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentBlog;
