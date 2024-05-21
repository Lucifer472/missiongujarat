"use client";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="fixed w-10 h-10 bg-transparent border-2 border-black rounded-sm bottom-[10px] right-[10px] flex items-center justify-center hover:bottom-[12px] transition-all cursor-pointer"
      onClick={handleScroll}
    >
      <ArrowUp className="w-8 h-8" />
    </div>
  );
};

export default ScrollToTop;
