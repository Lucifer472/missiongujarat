import { Ad3, SmallAd1 } from "@/components/ads/ads";

import ExtraButton from "@/components/etc/button-extra";
import ArticleViewDemoObject from "@/components/views/article-view-demo-object";

import { getBlogFromUrl } from "@/lib/blog";

const link = "/top-5-scholarship-after-12th";

const aPage = async () => {
  const data = await getBlogFromUrl("iibf-jaiib-result-2024");

  return (
    <section className="w-full mx-auto max-w-[420px]  flex flex-col rounded-2xl p-2 border-2 border-gray-700 demo">
      <div className="border-y-2 border-gray-700">
        <Ad3 />
      </div>
      <h2>क्या आपकी उम्र 13 साल से ज्यादा है ?</h2>
      <ExtraButton href={link} className="bg-green-700 border-yellow-500">
        Yes ✅
      </ExtraButton>
      <ExtraButton
        href={link}
        className="bg-red-700 mt-4 mb-6 border-yellow-500"
      >
        No ❌
      </ExtraButton>
      <SmallAd1 />
      <ArticleViewDemoObject blogData={data?.blog as any} title={data?.title} />
    </section>
  );
};

export default aPage;
