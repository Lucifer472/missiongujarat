"use client";
import { useState } from "react";
import Link from "next/link";

import { category, title } from "@/constant";

import { Button } from "@/components/ui/button";
import SearchBar from "./SearchBar";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="h-16 md:h-20 w-full bg-[#a03131] relative top-0 border-b border-gray-100 shadow-sm z-50">
      <nav className="flex items-center justify-between w-full h-full relative global-container ">
        <Sidebar setSidebar={setIsOpen} sidebar={isOpen} />
        <Link href={"/"} className="items-center gap-2 flex">
          <h1 className="text-xl font-medium text-white">{title}</h1>
        </Link>
        <div className="flex-1 justify-center items-center  gap-4 hidden lg:flex">
          <ul className="items-center justify-self-center gap-x-4 flex">
            {category.map((l) => (
              <li key={l.link}>
                <Button variant={"link"} asChild>
                  <Link className="text-white text-[1rem]" href={l.link}>
                    {l.label}
                  </Link>
                </Button>
              </li>
            ))}
          </ul>
        </div>
        <SearchBar />
      </nav>
    </header>
  );
};

export default Navbar;
