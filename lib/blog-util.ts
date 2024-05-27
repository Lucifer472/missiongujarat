import { blogs } from "@/types";
import { db } from "./db";

export const getBlog = async (options: any) => {
  const data = await db.blog.findUnique(options);

  return data as blogs;
};

export const getBlogs = async (options: any) => {
  const data = await db.blog.findMany(options);

  return data as blogs[];
};

export const getEditBlogs = async (options: any) => {
  const data = await db.blog.findMany(options);
  return data;
};

export const getBlogByCategory = async (category: string, page: number) => {
  const pageSize = 12;
  const data = await getBlogs({
    skip: (page - 1) * pageSize,
    take: pageSize,
    orderBy: {
      updatedAt: "desc",
    },
    where: {
      category: category,
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
      category: category,
    },
  });

  const NextNextPageData = await getBlogs({
    skip: (page + 1) * pageSize,
    take: 1,
    where: {
      category: category,
    },
  });

  const isNextPage = NextPageData.length === 1;
  const isNextNextPage = NextNextPageData.length === 1;

  if (data.length === 0) return null;
  return { data, isNextPage, isNextNextPage };
};

export const getBlogBySearch = async (search: string, page: number) => {
  const pageSize = 12;
  const data = await getBlogs({
    skip: (page - 1) * pageSize,
    take: pageSize,
    orderBy: {
      updatedAt: "desc",
    },
    where: {
      title: {
        contains: search,
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
      title: {
        contains: search,
      },
    },
  });

  const NextNextPageData = await getBlogs({
    skip: (page + 1) * pageSize,
    take: 1,
    where: {
      title: {
        contains: search,
      },
    },
  });

  const isNextPage = NextPageData.length === 1;
  const isNextNextPage = NextNextPageData.length === 1;

  if (data.length === 0) return null;
  return { data, isNextPage, isNextNextPage };
};