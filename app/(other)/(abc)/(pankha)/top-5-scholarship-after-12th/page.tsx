import { Ad1, Ad4, SmallAd2 } from "@/components/ads/ads";

import ExtraButton from "@/components/etc/button-extra";
import ArticleViewDemo from "@/components/views/article-view-demo";

import { getBlogFromUrl } from "@/lib/blog";

const link = "/scholarship-credit-status";

const bPage = async () => {
  const data = await getBlogFromUrl(
    "top-5-scholarship-after-12th-these-are-the-best-scholarships-for-12th-pass-students"
  );

  return (
    <section className="w-full mx-auto max-w-[420px]  flex flex-col rounded-2xl p-2 border-2 border-gray-700 demo">
      <div className="border-y-2 border-gray-700">
        <Ad4 />
      </div>
      <h2> क्या आप मजेदार वीडियो देखना चाहते है ? </h2>
      <ExtraButton href={link} className="bg-green-700 border-yellow-500">
        Yes ✅
      </ExtraButton>
      <ExtraButton
        href={link}
        className="bg-red-700 mt-4 mb-6 border-yellow-500"
      >
        No ❌
      </ExtraButton>
      <SmallAd2 />
      <ArticleViewDemo
        title={data?.title}
        blogData={data?.blog?.toString() as string}
      />
    </section>
  );
};

export default bPage;
