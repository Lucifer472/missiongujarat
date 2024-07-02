"use server";

import { db } from "@/lib/db";

export const getBlogsForSearch = async (key: string) => {
  if (key === "") return null;
  const data = await db.blog.findMany({
    where: {
      OR: [{ url: { contains: key } }, { title: { contains: key } }],
    },
    take: 10,
    select: {
      title: true,
      url: true,
    },
  });

  return data;
};
