import { Ad3, Ad4, SmallAd } from "../ads/ads";
import ExtraButton from "../etc/button-extra";
import ArticleViewDemoObject from "./article-view-demo-object";

const AbPage = ({
  link,
  data,
  title,
}: {
  link: string;
  data: any;
  title: string;
}) => {
  return (
    <section className="w-full mx-auto max-w-[420px]  flex flex-col rounded-2xl p-2 border-2 border-gray-700 demo">
      <div className="border-y-2 border-gray-700">
        {data.isIndex === "one" ? <Ad3 /> : <Ad4 />}
      </div>
      <h2>{title}</h2>
      <ExtraButton href={link} className="bg-green-700 border-yellow-500">
        {!data.btn1 ? "Yes ✅" : data.btn1}
      </ExtraButton>
      <ExtraButton
        href={link}
        className="bg-red-700 mt-4 mb-6 border-yellow-500"
      >
        {!data.btn2 ? "No ❌" : data.btn2}
      </ExtraButton>
      <SmallAd />
      <ArticleViewDemoObject blogData={data?.blog as any} title={data?.title} />
    </section>
  );
};

export default AbPage;
