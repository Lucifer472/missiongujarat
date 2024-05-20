import currentPage from "@/components/_components/CurrentPage";
import NoBlog from "@/components/_components/NoBlog";
import Pagination from "@/components/_components/Pagination";
import BlogList from "@/components/blogs/BlogList";
import { url } from "@/constant";
import { getBlogs } from "@/lib/blog-util";

const getBlogByCategory = async (page: number) => {
  const pageSize = 12;
  const data = await getBlogs({
    skip: (page - 1) * pageSize,
    take: pageSize,
    orderBy: {
      updatedAt: "desc",
    },
    where: {
      category: "Advice",
      state: {
        not: "pending",
      },
    },
    include: {
      Author: {
        select: {
          name: true,
          img: true,
        },
      },
    },
  });
  // Calculate if there is a next-next page (isNextNextPage) by fetching one additional result and checking if it exists.
  const NextPageData = await getBlogs({
    skip: page * pageSize,
    take: 1,
    where: {
      category: "Advice",
      state: {
        not: "pending",
      },
    },
  });

  const NextNextPageData = await getBlogs({
    skip: (page + 1) * pageSize,
    take: 1,
    where: {
      category: "Advice",
      state: {
        not: "pending",
      },
    },
  });

  const isNextPage = NextPageData.length === 1;
  const isNextNextPage = NextNextPageData.length === 1;

  if (data.length === 0) return null;
  return { data, isNextPage, isNextNextPage };
};

const page = async ({ params }: { params: { currentPage: string } }) => {
  const currentPageNumber = currentPage(decodeURI(params.currentPage));

  const data = await getBlogByCategory(currentPageNumber);

  if (data === null) return <NoBlog />;
  const jsonLD = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Homepage",
        item: url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: `Advice Page`,
        item: `${url}/advice/${currentPageNumber}`,
      },
    ],
  };
  return (
    <section className="bg-slate-100 w-full h-full ">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLD) }}
      ></script>
      <div className="global-container flex flex-col gap-4 items-center justify-start py-8 bg-white">
        <BlogList title={`Career Advice`} data={data.data} />
        <Pagination
          currentPage={currentPageNumber}
          isNextPage={data.isNextPage}
          isSecondNextPage={data.isNextNextPage}
          pageUrl={`/advice/`}
        />
      </div>
    </section>
  );
};

export default page;
