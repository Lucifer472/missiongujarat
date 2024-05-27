"use client";
import { useEffect } from "react";

const AnchorAd = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.text = `window.googletag = window.googletag || { cmd: [] };
      let anchorSlot;

      googletag.cmd.push(() => {
        anchorSlot = googletag.defineOutOfPageSlot(
          "/23060189646/MSG_ANCHOR",googletag.enums.OutOfPageFormat.BOTTOM_ANCHOR,
        );
        if (anchorSlot) {
          anchorSlot.setTargeting("test", "anchor").addService(googletag.pubads());
        }

        // Enable SRA and services.
        // googletag.pubads().enableSingleRequest();
        googletag.enableServices();

        googletag.display(anchorSlot);
      });`;

    script.setAttribute("type", "module");

    document.head.appendChild(script);
  }, []);

  return <></>;
};

export default AnchorAd;
