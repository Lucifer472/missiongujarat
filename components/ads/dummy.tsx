"use client";

import { useAdState } from "@/state";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const DummyAd = () => {
  const adData = useAdState((state) => state.adCode);

  const pathname = usePathname();

  window.googletag = window.googletag || { cmd: [] };

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const referrer = [
    "https://l.facebook.com/",
    "https://l.instagram.com/",
    "https://www.google.com/",
  ];
  const isGoogleReferrer = referrer.includes(document.referrer.toLowerCase());
  console.log(isGoogleReferrer);
  console.log(isMobile);
  // const isGoogleReferrer = true;

  const [isAd, setIsAd] = useState(true);

  history.pushState(null, "", document.URL);
  window.addEventListener("popstate", () => {
    window.location.href = window.location.href;
  });

  useEffect(() => {
    let sl: googletag.Slot | null;

    googletag.cmd.push(function () {
      sl = googletag.defineSlot(adData[3].label, adData[3].size, adData[3].id);
      if (sl !== null) {
        sl.addService(googletag.pubads());
      }
      // googletag.pubads().enableSingleRequest();
      googletag.enableServices();
      googletag.pubads().addEventListener("slotOnload", (e) => {
        console.log(e);
        if (e.slot) {
          setIsAd(true);
        } else {
          setIsAd(false);
        }
      });
      googletag.display(adData[3].id);
    });
    return () => {
      if (googletag && sl !== null) {
        googletag.cmd.push(function () {
          googletag.destroySlots([sl as googletag.Slot]);
        });
      }
    };
  }, [pathname, adData]);
  return (
    <>
      {isGoogleReferrer && isMobile && isAd ? (
        <div className="relative max-w-[600px]">
          <div className="absolute top-0 left-0 w-full text-center z-[1] opacity-[0.01]">
            <div className="adsbygoogle">
              <div
                id={adData[3].id}
                style={{
                  minWidth: "336px",
                  minHeight: "280px",
                }}
              ></div>
            </div>
          </div>
          <div className="relative text-center">
            <center>
              <Image
                alt="blogger"
                width={336}
                height={280}
                className="mt-[20px] w-full h-auto"
                src="https://us.modzverse.com/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-23-at-5.17.53-PM.jpeg"
              />
            </center>
          </div>
        </div>
      ) : (
        <div
          id={adData[3].id}
          style={{
            minWidth: "336px",
            minHeight: "280px",
          }}
        ></div>
      )}
    </>
  );
};
