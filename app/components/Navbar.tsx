"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {

    const pathname = usePathname()
  return (
    <main className="z-[200] py-3 px-20 shadow-md flex justify-between items-center">
      <Image
        src="/logos/Logo.png"
        alt="logo"
        height={1000}
        width={1000}
        className="w-24 h-6"
      />

      <nav className="flex items-center gap-10 font-semibold text-base text-textlight text-[14px]">
        <ol className="flex gap-10">
            {navdata.map((item,index) => (
                <li key={index} className="">
                    <Link href={item.path} className={`${pathname === item.path?"text-tertiary":"text-light"}`}>{item.name}</Link>
                </li>
            ))}
        </ol>
        <button className="px-4 py-2 bg-black text-white rounded-full">
            Contact Us
        </button>
      </nav>
    </main>
  );
};

export default Navbar;

const navdata = [
    {
        name:"Home",
        path:"/",
    },
    {
        name:"About Us",
        path:"/about",
    },
    {
        name:"Our Services",
        path:"/services",
    },
    {
        name:"Our Works",
        path:"/works",
    },
    {
        name:"Blogs",
        path:"/blogs",
    },
    {
        name:"Reviews",
        path:"/blogs",
    },
]
