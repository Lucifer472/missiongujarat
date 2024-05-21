import Link from "next/link";
import dynamic from "next/dynamic";
import { url } from "@/constant";
import { getBlog } from "@/lib/blog-util";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { redirect } from "next/navigation";
import { Ad4, Ad5 } from "@/components/ads/ads";

const page = async ({ params }: { params: { slug: string } }) => {
  const blog = await getBlog({
    where: {
      url: params.slug,
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
    return redirect("/");
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
    <div className="bg-white global-container w-full h-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLD) }}
      ></script>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLDBreadcrumb) }}
      ></script>
      <div className="w-full padding border-b border-gray-300/30 flex flex-wrap items-center justify-start">
        <Link href={"/"} className="text-xs text-gray-500 underline">
          Home
        </Link>
        <span className="text-xs mx-1">/</span>
        <Link
          href={blog.category}
          className="text-xs text-gray-500 underline capitalize"
        >
          {blog?.category.slice(1).replace("-", " ")}
        </Link>
        <span className="text-xs mx-1">/</span>
        <div className="text-xs text-gray-500">{blog?.title}</div>
      </div>
      <Ad4 />
      <BlogMain blog={blog as any} link={blog.category} />
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
      <Ad5 />
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
  );
};

export default page;
