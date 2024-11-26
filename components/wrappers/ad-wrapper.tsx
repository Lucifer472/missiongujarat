"use client";
import { AdUnit } from "next-google-adsense";

export const AdsWrapper = ({ id }: { id: string }) => {
  return (
    <div className="text-center flex w-full items-center justify-center flex-col">
      <span className="text-[10px]">SPONSORED</span>
      <AdUnit publisherId="pub-7881445598590993" slotId={id} layout="display" />
    </div>
  );
};
