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

  useEffect(() => {
    // Prevent the back button from navigating away
    history.pushState(null, "", document.URL);

    const handlePopState = () => {
      // Force a reload of the current page
      window.location.href = window.location.href;
    };

    window.addEventListener("popstate", handlePopState);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

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
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgNNbSh6ysYoOTFK5ROPGb8d1qArB_mVRLxzv-Bl1xREKDtFUVjkMSWR1QJxH_fdcrqjJx5vpnJGFl3v7fsIcJ2OddddQdjlv0JMcaEUYwWfnI00YQvFGe_6xmGjYc9RLVnovgZ66P2ELe4y3h8GCn-BJr_qjvTAZN7uvj4LgPTTCwvbJMv2MqflWweuwty/w614-h640/Screenshot%202024-08-21%20at%209.18.40%E2%80%AFPM.png"
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
