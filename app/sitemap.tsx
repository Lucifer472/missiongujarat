import { category, footerLink, url } from "@/constant";
import { db } from "@/lib/db";
import { MetadataRoute } from "next";

export const revalidate = 0;
const getBlogUrl = async () => {
  const url = db.blog.findMany({
    take: 1000,
    select: {
      url: true,
    },
  });
  return url;
};

const getAuthorUrl = async () => {
  const url = db.user.findMany({
    take: 1000,
    select: {
      username: true,
    },
  });
  return url;
};

//@ts-ignore
export default async function sitemap(): MetadataRoute.Sitemap {
  const data: MetadataRoute.Sitemap = [
    {
      url: url,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
  ];

  for (let i = 0; i < category.length; i++) {
    const drivingUrl = `${url}${category[i].link}`; // Assuming the URLs follow this pattern
    const sitemapEntry = {
      url: drivingUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    };
    //@ts-ignore
    data.push(sitemapEntry);
  }

  for (let i = 0; i < footerLink.length; i++) {
    const drivingUrl = `${url}${footerLink[i].link}`; // Assuming the URLs follow this pattern
    const sitemapEntry = {
      url: drivingUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    };
    //@ts-ignore
    data.push(sitemapEntry);
  }

  const blogUrl = await getBlogUrl();
  for (let i = 0; i < blogUrl.length; i++) {
    const drivingUrl = `${url}/${blogUrl[i].url}`; // Assuming the URLs follow this pattern
    const sitemapEntry = {
      url: drivingUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    };
    //@ts-ignore
    data.push(sitemapEntry);
  }

  const authorUsername = await getAuthorUrl();
  for (let i = 0; i < authorUsername.length; i++) {
    const drivingUrl = `${url}/author/${authorUsername[i].username}`; // Assuming the URLs follow this pattern
    const sitemapEntry = {
      url: drivingUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    };
    //@ts-ignore
    data.push(sitemapEntry);
  }

  return data;
}
