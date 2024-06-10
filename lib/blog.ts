import { db } from "./db";

export const getBlogFromUrl = async (url: string) => {
  const data = await db.blog.findUnique({
    where: {
      url,
    },
  });

  return data;
};
