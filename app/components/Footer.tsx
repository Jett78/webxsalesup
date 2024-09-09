import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";
import React from "react";


const Footer = () => {
  return (
    <main className="py-8 border-t ">
      <div>
        <Image
          src="/logos/Logo.png"
          alt="logo"
          height={1000}
          width={1000}
          className="w-32 h-8 mx-auto"
        />
        <p className="w-[30em] py-6 mx-auto text-center font-medium text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          nobis veniam velit? Consequuntur ipsa quaerat iste reiciendis
       
        </p>
      </div>

      <nav className="flex items-center justify-center gap-10 font-semibold text-base text-textlight">
        <ol className="flex gap-14">
            {navdata.map((item,index) => (
                <li key={index} className="">
                    <Link href={item.path}>{item.name}</Link>
                </li>
            ))}
        </ol>
      </nav>

      <div className="flex gap-6 justify-center my-4">
        {socialicons.map((item,index) => (
            <div key={index} className="text-2xl">
                <p>{item.icon}</p>
            </div>
        ))}
      </div>
    </main>
  );
};

export default Footer;

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
]

const socialicons = [
    {
        icon:<Icon icon="mdi:facebook"  style={{color: "black"}} />,
    },
    {
        icon:<Icon icon="ri:instagram-line"  style={{color: "black"}} />
    },
    {
        icon:<Icon icon="pajamas:twitter"  style={{color: "black"}} />
    },
    {
        icon:<Icon icon="ic:twotone-whatsapp"  style={{color: "black"}} />
    },

]