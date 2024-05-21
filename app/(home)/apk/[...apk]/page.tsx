import currentPage from "@/components/etc/CurrentPage";
import NoBlog from "@/components/etc/NoBlog";
import Pagination from "@/components/etc/Pagination";
import BlogList from "@/components/blogs/BlogList";
import { category, url } from "@/constant";
import { getBlogs } from "@/lib/blog-util";

const getBlogByCountry = async (apkString: string, page: number) => {
  const pageSize = 12;
  const data = await getBlogs({
    skip: (page - 1) * pageSize,
    take: pageSize,
    orderBy: {
      updatedAt: "desc",
    },
    where: {
      category: apkString,
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
      category: apkString,
      state: {
        not: "pending",
      },
    },
  });

  const NextNextPageData = await getBlogs({
    skip: (page + 1) * pageSize,
    take: 1,
    where: {
      category: apkString,
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

const page = async ({ params }: { params: { apk: string[] } }) => {
  // const apkString = category[category.indexOf(decodeURI(params.apk[0]))];
  // const currentPageNumber = currentPage(decodeURI(params.apk[1]));

  // const data = await getBlogByCountry(apkString, currentPageNumber);

  // if (apkString === undefined || data === null) return <NoBlog />;

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
        name: `${decodeURI(params.apk[0]).replace(/[-\s]/g, " ")}`,
        item: `${url}/driving/${decodeURI(params.apk[0])}/`,
      },
    ],
  };

  return (
    <section className="bg-slate-100 w-full h-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLD) }}
      ></script>
      <div className="global-container flex flex-col gap-4 items-center justify-start bg-white py-4">
        {/* <BlogList
          title={`${decodeURI(params.apk[0]).replace(/[-\s]/g, " ")}`}
          data={data.data}
        />
        <Pagination
          currentPage={currentPageNumber}
          isNextPage={data.isNextPage}
          isSecondNextPage={data.isNextNextPage}
          pageUrl={`/driving/${decodeURI(params.apk[0])}/`}
        /> */}
      </div>
    </section>
  );
};

export default page;
