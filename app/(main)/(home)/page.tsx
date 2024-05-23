import { Ad1, Ad2, Ad3, Ad4, Ad5 } from "@/components/ads/ads";
import BlogListing from "@/components/blogs/BlogListing";
import MainBlogShowcase from "@/components/blogs/MainBlogShowcase";
import Authors from "@/components/etc/AuthorList";
import Faq from "@/components/etc/Faq";

import { category, url } from "@/constant";
import { getAuthorByNumber } from "@/lib/author-util";
import { getBlogs } from "@/lib/blog-util";

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
    category.map((l, index) => {
      return {
        "@type": "ListItem",
        position: index + 2,
        name: l.label,
        item: `${url}${l.link}`,
      };
    }),
  ],
};

export const revalidate = 0;
// Main Function
export default async function Home() {
  const authors = await getAuthorByNumber(4);

  const latestBlogs = await getBlogs({
    take: 4,
    orderBy: {
      createdAt: "desc",
    },
    include: {
      Author: true,
    },
  });

  const gov = await getBlogs({
    take: 4,
    where: {
      category: "/government-yojana",
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      Author: true,
    },
  });

  const mainBlog = await getBlogs({
    take: 10,
    where: {
      category: "/application",
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      Author: true,
    },
  });

  return (
    <section className="bg-slate-100 w-full h-full ">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLD) }}
      ></script>
      <div className="global-container flex flex-col gap-4 items-center justify-start bg-white px-4 py-2">
        <Ad1 />
        <BlogListing
          mainTitle={"Latest Blogs"}
          subTitle="Featured Section"
          blogData={latestBlogs}
        />{" "}
        <Ad2 />
        <MainBlogShowcase
          title={"Main Blog Showcase"}
          link={category[1].link}
          blogData={mainBlog}
        />
        <Ad3 />
        <BlogListing
          mainTitle={"Goverment Yojana"}
          subTitle="Featured Section"
          blogData={gov}
          reversed
        />
        <Ad5 />
        <Faq />
        <Ad4 />
        <div className="flex flex-col w-full border-b-4 border-main py-4">
          <h2 className="text-xl lg:text-2xl">Our Author&apos;s</h2>
        </div>
        <Authors authors={authors} />
      </div>
    </section>
  );
}
