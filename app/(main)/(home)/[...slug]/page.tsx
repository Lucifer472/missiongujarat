import Link from "next/link";
import dynamic from "next/dynamic";

import { category, url } from "@/constant";

import { getBlog, getBlogByCategory, getBlogBySearch } from "@/lib/blog-util";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  Ad1,
  Ad2,
  Ad3,
  Ad4,
  Ad5,
  OutBrain2,
  OutBrain3,
} from "@/components/ads/ads";

import NoBlog from "@/components/etc/NoBlog";
import BlogList from "@/components/blogs/BlogList";
import Pagination from "@/components/etc/Pagination";

const slugPage = async ({ params }: { params: { slug: string[] } }) => {
  const params1 = params.slug[0];
  const page = parseInt(params.slug[1] || "1");

  const mainCategory = category.filter((f) => f.link.slice(1) === params1);

  if (mainCategory.length > 0) {
    const data = await getBlogByCategory(mainCategory[0].link, page);
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
          name: `${decodeURI(params.slug[0]).replace(/[-\s]/g, " ")}`,
          item: `${url}/${decodeURI(params.slug[0])}/`,
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
          <Ad1 />
          <BlogList title={`${mainCategory[0].label}`} data={data.data} />
          <Pagination
            currentPage={page}
            isNextPage={data.isNextPage}
            isSecondNextPage={data.isNextNextPage}
            pageUrl={`${encodeURIComponent(mainCategory[0].link)}/`}
          />
          <Ad2 />
        </div>
      </section>
    );
  }

  const blog = await getBlog({
    where: {
      url: params1,
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

  if (blog === null) {
    const searchTerm = params1;
    const data = await getBlogBySearch(searchTerm, page);

    if (data == null) return <NoBlog />;
    return (
      <section className="bg-slate-100 w-full h-full">
        <div className="global-container flex flex-col gap-4 py-4 bg-white">
          <Ad1 />
          <BlogList title={`Result for ${searchTerm}`} data={data.data} />
          <Ad3 />
          <Pagination
            currentPage={page}
            isNextPage={data.isNextPage}
            isSecondNextPage={data.isNextNextPage}
            pageUrl={`/${searchTerm}/`}
          />
        </div>
      </section>
    );
  }

  const faq = JSON.parse(blog.faq as string);

  const BlogMain = dynamic(() => import("@/components/blogs/BlogMain"), {
    ssr: true,
  });

  const RecentBlog = dynamic(() => import("@/components/etc/RecentBlog"), {
    ssr: true,
  });

  const jsonLD = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    image: [blog.img],
    datePublished: blog.createdAt,
    dateModified: blog.updatedAt,
    author: [
      {
        "@type": "Person",
        name: blog.Author.name,
        url: `${url}/author/${blog.author}`,
      },
    ],
  };

  const jsonLDBreadcrumb = {
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
        name: `${blog?.category.slice(1).replace("-", " ")}`,
        item: `${url}${blog?.category}/`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `${blog?.title}`,
        item: `${url}/blog/${params.slug}/`,
      },
    ],
  };

  return (
    <>
      <Ad4 />
      <div className="w-full padding md:py-4 bg-[#a03131] border-b border-gray-300/30 flex flex-wrap items-center justify-start">
        <div className="flex global-container flex-col">
          <div className="flex flex-wrap items-center justify-start">
            <Link href={"/"} className="text-[8px] underline text-gray-100">
              Home
            </Link>
            <span className="text-[8px] mx-1 text-gray-100">{`>>`}</span>
            <Link
              href={blog.category}
              className="text-[8px] underline capitalize text-gray-100"
            >
              {blog?.category.slice(1).replace("-", " ")}
            </Link>
            <span className="text-[8px] mx-1 text-gray-100">{`>>`}</span>
          </div>
          <h1 className="text-2xl leading-[1.2em] text-center text-white pt-4">
            {blog.title}
          </h1>
        </div>
      </div>
      <Ad5 />
      <div className="bg-white global-container w-full h-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLD) }}
        ></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLDBreadcrumb) }}
        ></script>
        <BlogMain blog={blog as any} link={blog.category} />
        <OutBrain2 />
        {faq && faq[0].question !== "" && (
          <Accordion
            type="single"
            collapsible
            className=" w-full mt-4 border-t border-gray-300"
          >
            <h2
              style={{
                fontSize: "1.5rem",
                margin: ".6em 0",
              }}
            >
              FAQ:
            </h2>
            {faq.map((f: any, index: number) => (
              <AccordionItem value={`${index}`} key={index}>
                <AccordionTrigger className="text-sm text-left">
                  {f.question}
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  {f.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
        <OutBrain3 />
        <RecentBlog
          options={{
            take: 3,
            orderBy: {
              updatedAt: "desc",
            },
            where: {
              category: blog?.category,
            },
            include: {
              Author: {
                select: {
                  name: true,
                  img: true,
                },
              },
            },
          }}
        />
      </div>
    </>
  );
};

export default slugPage;
