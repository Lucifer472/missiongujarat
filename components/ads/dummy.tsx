"use client";

import { useAdState } from "@/state";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const DummyAd = () => {
  const adData = useAdState((state) => state.adCode);

  const pathname = usePathname();

  window.googletag = window.googletag || { cmd: [] };

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const [isGoogleReferrer, setIsGoogle] = useState(
    document.referrer.includes("google.com")
  );

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
        if (sl === e.slot) {
          console.log("Ads Loaded");
        } else {
          console.log(e.slot);
          console.log("Ad Was Not loaded :" + e.slot.getSlotElementId());
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
  }, [pathname, adData[3].id, adData[3].label, adData[3].size]);
  return (
    <>
      {isGoogleReferrer && isMobile ? (
        <div className="container">
          <div className="tfikn">
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
          <div className="content" id="content">
            <center>
              <img
                id="gambar"
                data-original-height="280"
                data-original-width="336"
                height="534"
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiY8OmpdgumghIiEcmnqMmpQ13fmzDHUd4QzKYv1Lt5Drc7s655yXCar9RQfivXoHAnyBEJbdU0CuNJ5xv_O1Ki-0LF4ZCYrTE5BM-FWOcPVTtTQTYwx5TaoufDjqVBB7-BCCuKF_h5xRArdvSoJ22qdKq85az3LO6pNPT9hDXKz8UMOCKpi6ZTwEUz3AE/s336/gif-wathemes-8.gif"
                width="640"
                style={{
                  display: "block",
                }}
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
