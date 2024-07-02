import getCurrentUser from "@/lib/user-util";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  const user = await getCurrentUser();
  if (user === null) {
    return NextResponse.json({ Message: "Please Login Again!", status: 401 });
  }
  const {
    title,
    url,
    keywords,
    description,
    data,
    category,
    faq,
    id,
    isIndex,
    connect,
    isPending,
    pageText,
  } = await req.json();

  const block = data.blocks;
  let img = "https://images.drivingexamexpert.com/blogs/6683d1444482e.png";
  for (const e of block) {
    if (e.type === "image") {
      img = e.data.file.url;
      break;
    }
  }

  try {
    const blog = await db.blog.update({
      where: {
        id: id,
      },
      data: {
        title,
        url: url.replace(/\s+/g, "-"),
        author: user.username,
        img,
        keywords,
        description,
        blog: block,
        category,
        faq,
        isIndex,
        isPending: isPending === "true" ? true : false,
        connect,
        pageText: pageText === "" ? null : pageText,
      },
    });

    if (blog) {
      return NextResponse.json({
        Message: "Blog Successfully Updated!",
        status: 200,
      });
    }
  } catch (error) {
    return NextResponse.json({
      Message: "An Error has Occurred!",
      data: error,
      status: 301,
    });
  }
}
