"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { SidebarClose, SidebarIcon } from "lucide-react";

import { category, footerLink } from "@/constant";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Sidebar = ({
  setSidebar,
  sidebar,
}: {
  setSidebar: (v: boolean) => void;
  sidebar: boolean;
}) => {
  const pathname = usePathname();

  useEffect(() => {
    setSidebar(false);
  }, [pathname, setSidebar]);

  return (
    <div
      className={cn(
        "flex lg:hidden relative px-4 py-2",
        sidebar ? "overflow-visible" : "overflow-hidden"
      )}
    >
      <SidebarIcon
        width={20}
        height={20}
        className="cursor-pointer"
        color="white"
        onClick={() => setSidebar(true)}
      />
      <div
        className={cn(
          "h-screen w-[300px] absolute top-[-15px] bg-white border-r-2 border-gray-300/30 transition-[left] duration-300 z-10",
          sidebar ? "left-[-15px]" : "left-[-350px]"
        )}
      >
        <div className="border-b border-gray-300/30 flex items-center justify-between py-4">
          <h1 className="pl-4 text-lg font-medium">Main Menu</h1>
          <div className="pr-2 cursor-pointer">
            <SidebarClose onClick={() => setSidebar(false)} />
          </div>
        </div>
        <aside className="flex flex-col items-start justify-start px-4 py-2 gap-4">
          <h3 className="py-2 border-b border-gray-400 w-full">Category</h3>
          <ul className="flex flex-col items-start justify-start gap-y-2">
            {category.map((l) => (
              <li key={l.link}>
                <Button variant={"link"} asChild>
                  <Link className="text-black text-[1rem]" href={l.link}>
                    {l.label}
                  </Link>
                </Button>
              </li>
            ))}
          </ul>
          <h3 className="py-2 border-b border-gray-400 w-full">Policies</h3>
          <ul className="flex flex-col items-start justify-start gap-y-2">
            {footerLink.map((l) => (
              <li key={l.link}>
                <Button variant={"link"} asChild>
                  <Link className="text-black text-[1rem]" href={l.link}>
                    {l.label}
                  </Link>
                </Button>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default Sidebar;
