import { Ad1, Ad4, SmallAd } from "@/components/ads/ads";

import ExtraButton from "@/components/etc/button-extra";
import ArticleViewDemoObject from "@/components/views/article-view-demo-object";

import { getBlogFromUrl } from "@/lib/blog";

const link = "/nrega-job-card-list-2024-25-download";

const bPage = async () => {
  const data = await getBlogFromUrl(
    "solar-rooftop-yojana-2024-(free)-apply-online-"
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
      <SmallAd />
      <ArticleViewDemoObject
        title={data?.title}
        blogData={data?.blog as object[]}
      />
    </section>
  );
};

export default bPage;
