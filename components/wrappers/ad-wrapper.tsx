"use client";

export const AdsWrapper = ({ id }: { id: string }) => {
  return (
    <div className="text-center flex w-full items-center justify-center flex-col">
      <span className="text-[10px]">SPONSORED</span>
      <ins
        className="adsbygoogle"
        style={{ display: "block", minWidth: "336px", minHeight: "280px" }}
        data-ad-client="ca-pub-7881445598590993"
        data-ad-slot={id}
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};
