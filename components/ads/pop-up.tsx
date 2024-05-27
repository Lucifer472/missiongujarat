"use client";

import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";

const PopupAd = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const defTagSlot = `'/22725519965/OJAS_POPUP', [[250, 250], [300, 250], [336, 280]]`;
    const slipt = defTagSlot.split("', ");
    const unitID = slipt[0].replace(/^'|'$/g, "");
    const AdSize = JSON.parse(slipt[1].replace(/^'|'$/g, ""));
    window.googletag = window.googletag || { cmd: [] };
    googletag.cmd.push(function () {
      const slot = googletag.defineSlot(unitID, AdSize, "ad-popup");
      if (slot) {
        slot.addService(googletag.pubads());
        // googletag.pubads().enableSingleRequest();
        googletag.enableServices();
        //Listen for the 'slotRenderEnded' event
        googletag
          .pubads()
          .addEventListener("slotRenderEnded", function (event) {
            if (event.slot) {
              if (event.isEmpty) {
                console.log("Event is Empty : " + event.isEmpty);
                console.log("Ad slot is empty. No ad was loaded.");
                setOpen(false);
                setLoading(false);
              } else {
                console.log("Event is Empty : " + event.isEmpty);
                console.log(
                  "Ad slot has been rendered. Ad loaded successfully."
                );
                googletag.display("ad-popup");
                setLoading(false);
              }
            }
          });
      } else {
        setOpen(false);
        setLoading(false);
      }
    });
  }, []);

  return (
    <div
      className={cn(
        "w-full h-screen top-0 left-0 flex items-center justify-center bg-black bg-opacity-30 z-[999]",
        open ? "fixed" : "hidden"
      )}
    >
      <div className="min-w-[316px] min-h-[350px] bg-white rounded p-2">
        <div className="w-full flex items-center justify-between text-gray-500 py-2 h-10 border-b border-black">
          <button disabled={loading} onClick={() => setOpen(false)}>
            <X color="skyblue" />
          </button>
          <span className="font-semibold text-xs">Sponsored</span>
        </div>
        <div
          id="ad-popup"
          className="py-3 px-2 shadow-md rounded overflow-hidden min-w-[250px] min-h-[250px] w-full h-full max-w-[336px] max-h-[280px]"
        >
          {loading && (
            <div className="w-full h-[250px] flex items-center justify-center flex-col gap-y-8">
              <h2 className="text-xl font-medium">Loading...</h2>
              <ClipLoader
                cssOverride={{
                  borderWidth: "6px",
                }}
                size={60}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PopupAd;
