"use client";

import { getAllAdsFromServer } from "@/action/get-all-ads";
import { useAdState } from "@/state";
import { useEffect, useState } from "react";
import { PuffLoader } from "react-spinners";

const LoadingWrapper = () => {
  const [loading, setLoading] = useState(true);
  const [percentage, setPercentage] = useState(0);

  const setAds = useAdState((state) => state.setAdCode);
  useEffect(() => {
    getAllAdsFromServer().then((a) => {
      const data = a.map((a) => ({
        id: a.adId,
        label: a.label,
        size: a.size as googletag.GeneralSize,
      }));

      setAds(data);
    });
  }, [setAds]);

  useEffect(() => {
    setPercentage(0);
    const interval = setInterval(() => {
      // Increment the percentage by 1 every 20 milliseconds
      setPercentage((prevPercentage) => {
        if (prevPercentage < 100) {
          return prevPercentage + 1;
        } else {
          clearInterval(interval);
          return 100;
        }
      });
    }, 15);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  useEffect(() => {
    setLoading(true);
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      {loading && (
        <div className="w-full h-full min-h-screen bg-main fixed flex items-center justify-center flex-col gap-y-2 z-[9999] overflow-hidden">
          <span className="text-white leading-[2em] text-center text-3xl">
            Loading...
          </span>
          <div className="flex items-center justify-center w-full">
            <PuffLoader color="#ffffff" />
          </div>
          <span className="text-white leading-[2em] text-center text-3xl">
            {percentage}%
          </span>
          <div className="mt-[100px] h-2 w-full"></div>
        </div>
      )}
    </>
  );
};

export default LoadingWrapper;
