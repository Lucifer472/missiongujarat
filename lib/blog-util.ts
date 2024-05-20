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
