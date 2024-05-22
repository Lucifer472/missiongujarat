import {
  CardImage,
  category,
  description,
  keywords,
  title,
  url,
} from "@/constant";
import { db } from "@/lib/db";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string[] };
}): Promise<Metadata> {
  const params1 = params.slug[0];
  const page = parseInt(params.slug[1] || "1");

  const mainCategory = category.filter((f) => f.link.slice(1) === params1);

  if (mainCategory.length > 0) {
    return {
      title: `${mainCategory[0].label} | ${title}`,
      description: description,
      keywords: keywords,
      metadataBase: new URL(`${url}/${mainCategory[0].link}/${page}`),
      alternates: {
        canonical: `${url}/${mainCategory[0].link}/${page}`,
      },
      twitter: {
        card: "summary_large_image",
        site: title,
        title: `${mainCategory[0].label} | ${title}`,
        description: description,
        images: CardImage,
      },
      openGraph: {
        type: "website",
        siteName: `${title}`,
        description: description,
        url: `${url}/${mainCategory[0].label}`,
        images: CardImage,
      },
    };
  }

  const data = await db.blog.findUnique({
    where: {
      url: params1,
    },
    include: {
      Author: {
        select: {
          name: true,
          username: true,
        },
      },
    },
  });

  if (data === null || data.Author === null) return {};
  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    robots: "index follow",
    metadataBase: new URL(`${url}/${data.url}`),
    alternates: {
      canonical: `${url}/${data.url}`,
    },
    publisher: "Truepub Media",
    icons: "/favicon.ico",
    twitter: {
      card: "summary_large_image",
      site: title,
      title: data.title,
      description: data.description,
      images: data.img,
    },
    openGraph: {
      type: "website",
      siteName: `${title} Empowering Students`,
      description: data.description,
      url: url,
      countryName: "USA",
      images: data.img,
    },
  };
}

const blogs = ({ children }: { children: React.ReactNode }) => {
  return <main className="bg-slate-100">{children}</main>;
};

export default blogs;
