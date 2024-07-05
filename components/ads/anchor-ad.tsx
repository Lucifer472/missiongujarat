"use client";
import { useAdState } from "@/state";
import { useEffect } from "react";

const AnchorAd = () => {
  const adData = useAdState((state) => state.adCode);
  useEffect(() => {
    const script = document.createElement("script");
    script.text = `window.googletag = window.googletag || { cmd: [] };
      let anchorSlot;

      googletag.cmd.push(() => {
        anchorSlot = googletag.defineOutOfPageSlot(
          "${adData[9].label}",googletag.enums.OutOfPageFormat.BOTTOM_ANCHOR,
        );

        // Enable SRA and services.
        googletag.enableServices();

        googletag.display(anchorSlot);
      });`;

    script.setAttribute("type", "module");

    document.head.appendChild(script);
  }, [adData]);

  return <></>;
};

export default AnchorAd;
