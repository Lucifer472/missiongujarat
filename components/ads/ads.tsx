"use client";

import { AdsWrapper } from "@/components/wrappers/ad-wrapper";
import ClientWrapper from "@/components/wrappers/client-wrapper";
import { useAdState } from "@/state";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { DummyAd } from "./dummy";

export const Ad1 = () => {
  const adData = useAdState((state) => state.adCode);
  return (
    <ClientWrapper>
      <AdsWrapper
        id={adData[0].id}
        label={adData[0].label}
        size={adData[0].size}
      />
    </ClientWrapper>
  );
};

export const Ad2 = () => {
  const adData = useAdState((state) => state.adCode);
  return (
    <ClientWrapper>
      <AdsWrapper
        id={adData[1].id}
        label={adData[1].label}
        size={adData[1].size}
      />
    </ClientWrapper>
  );
};

export const Ad3 = () => {
  const adData = useAdState((state) => state.adCode);
  return (
    <ClientWrapper>
      <AdsWrapper
        id={adData[2].id}
        label={adData[2].label}
        size={adData[2].size}
      />
    </ClientWrapper>
  );
};

export const Ad4 = () => {
  return (
    <ClientWrapper>
      {/* <AdsWrapper
        id={adData[3].id}
        label={adData[3].label}
        size={adData[3].size}
      /> */}
      <DummyAd />
    </ClientWrapper>
  );
};

export const Ad5 = () => {
  const adData = useAdState((state) => state.adCode);
  return (
    <ClientWrapper>
      <AdsWrapper
        id={adData[4].id}
        label={adData[4].label}
        size={adData[4].size}
      />
    </ClientWrapper>
  );
};

export const Ad6 = () => {
  const adData = useAdState((state) => state.adCode);
  return (
    <ClientWrapper>
      <AdsWrapper
        id={adData[5].id}
        label={adData[5].label}
        size={adData[5].size}
      />
    </ClientWrapper>
  );
};

export const Ad7 = () => {
  const adData = useAdState((state) => state.adCode);
  return (
    <ClientWrapper>
      <AdsWrapper
        id={adData[6].id}
        label={adData[6].label}
        size={adData[6].size}
      />
    </ClientWrapper>
  );
};

export const LargeAd = () => {
  const adData = useAdState((state) => state.adCode);
  return (
    <ClientWrapper>
      <AdsWrapper
        id={adData[7].id}
        label={adData[7].label}
        size={adData[7].size}
        divSize={{
          x: parseInt(adData[7].size[0] as any),
          y: parseInt(adData[7].size[1] as any),
        }}
      />
    </ClientWrapper>
  );
};

export const SmallAd = () => {
  const adData = useAdState((state) => state.adCode);
  return (
    <ClientWrapper>
      <AdsWrapper
        id={adData[8].id}
        label={adData[8].label}
        size={adData[8].size}
        divSize={{
          x: parseInt(adData[8].size[0] as any),
          y: parseInt(adData[8].size[1] as any),
        }}
      />
    </ClientWrapper>
  );
};
