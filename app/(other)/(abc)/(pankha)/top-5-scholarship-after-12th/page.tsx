import { Ad1 } from "@/components/ads/ads";

import ExtraButton from "@/components/etc/button-extra";
import ArticleViewDemo from "@/components/views/article-view-demo";
import { getBlog } from "@/lib/blog-util";

const link = "/scholarship-credit-status";

const bPage = async () => {
  const data = await getBlog({
    where: {
      url: "top-5-scholarship-after-12th-these-are-the-best-scholarships-for-12th-pass-students",
    },
  });
  return (
    <section className="w-full mx-auto max-w-[420px]  flex flex-col rounded-2xl p-2 border-2 border-gray-700 demo">
      <div className="border-y-2 border-gray-700">
        <Ad1 />
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
      <ArticleViewDemo blogData={data?.blog?.toString() as string} />
    </section>
  );
};

export default bPage;
