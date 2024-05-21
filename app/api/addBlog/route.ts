import getCurrentUser from "@/lib/user-util";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  const user = await getCurrentUser();
  if (user === null) {
    return NextResponse.json({ Message: "Please Login Again!", status: 401 });
  }
  const { title, url, keywords, description, data, category, faq } =
    await req.json();

  const block = data.blocks;
  let img = " ";
  for (const e of block) {
    if (e.type === "image") {
      img = e.data.file.url;
      break;
    }
  }

  const isUrlNew = await db.blog.findUnique({
    where: {
      url: url.replace(/\s+/g, "-"),
    },
  });

  if (isUrlNew) {
    return NextResponse.json({
      Message: "Please Change the Url!",
      status: 301,
    });
  }

  try {
    await db.blog.create({
      data: {
        title,
        url: url.replace(/\s+/g, "-"),
        author: user.username,
        img,
        faq,
        keywords,
        description,
        blog: block,
        category,
        state: user.type === "user" ? "pending" : "approve",
      },
    });

    return NextResponse.json({
      Message: "Blog Successfully Created",
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      Message: "Unable to Create Blog",
      data: error,
      status: 500,
    });
  }
}
