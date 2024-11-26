"use client";

import { useEffect, useState } from "react";
import { PuffLoader } from "react-spinners";
import { GoogleAdSense } from "next-google-adsense";

const LoadingWrapper = () => {
  const [loading, setLoading] = useState(true);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setPercentage(0);
    const interval = setInterval(() => {
      setPercentage((prevPercentage) => {
        if (prevPercentage < 100) {
          return prevPercentage + 10;
        } else {
          clearInterval(interval);
          return 100;
        }
      });
    }, 8);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  useEffect(() => {
    setLoading(true);
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <GoogleAdSense publisherId="pub-7881445598590993" />
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
