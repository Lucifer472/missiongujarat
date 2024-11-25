"use server";

import { getBlogs } from "@/lib/blog-util";
import { db } from "@/lib/db";

export const getBlogsForClient = async () => {
  const productsCount = await db.blog.count();
  const skip = Math.floor(Math.random() * productsCount);

  return await getBlogs({
    take: 4,
    skip: skip,

    orderBy: {
      updatedAt: "desc",
    },
  });
};
