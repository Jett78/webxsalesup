import Image from 'next/image';
import React from 'react'

const CreativeWebsites = () => {
  return (
    <main className="relative my-20 py-10 border-t border-b border-gray-600">
    <div className="text-center">
      <h2 className="font-extrabold  text-3xl">
      <span className=" text-3xl font-extrabold">Creative</span>{" "}

         Websites{" "}
      </h2>
      <p className=" text-textlight w-[50em] mx-auto py-4">
        Save time & effort with our stunning designer-made demos. Easily
        install any demo with a few clicks or mix and match to craft your
        dream store.
      </p>
    </div>

    <div className="flex justify-center items-center gap-8 my-8">
      {buttons.map((item, index) => (
        <div
          key={index}
          className={` ${
            index === 0 ? "bg-gradient" : ""
          }  hover:bg-gradient-to-r hover:border-none ease-in-out duration-700  hover:from-primary hover:via-secondary hover:to-tertiary  border border-gray-600 rounded-full px-8 outline-none py-2`}
        >
          <button>{item.title}</button>
        </div>
      ))}
    </div>

    <div className="grid grid-cols-3 place-items-center mx-20 gap-10 mt-20">
      {templates.map((item, index) => (
        <div
          key={index}
          className=" border-gray-500 hover:border-primary p-4 rounded-2xl bg-black cursor-pointer"
        >
          <figure className="overflow-hidden rounded-2xl">
            <Image
              src={item.img}
              alt={item.title}
              height={1000}
              width={1000}
              className="hover:brightness-50 rounded-2xl  hover:scale-105 ease-in-out duration-300"
            />
          </figure>
          <h2 className="text-white py-4 font-semibold">{item.title}</h2>
        </div>
      ))}
    </div>
    {/* bacdrop blur circle top left */}
    <div className="w-[30em] h-[20em] overflow-hidden rounded-full bg-zinc-400 absolute opacity-40 lef-1/2 top-0 -translate-x-1/2  blur-[150px]"></div>
    <div className="w-[40em] h-[40em] overflow-hidden rounded-full bg-zinc-400 absolute opacity-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-[300px]"></div>
    <div className="w-[30em] h-[25em] overflow-hidden rounded-full bg-zinc-400 absolute opacity-40 -right-[25em] -bottom-60 -translate-x-1/2  blur-[200px]"></div>
  </main>
  )
}

export default CreativeWebsites

const templates = [
    {
      img: "/templates/1.jpeg",
      title: "Fashion 01",
    },
    {
      img: "/templates/2.jpeg",
      title: "Fashion 02",
    },
    {
      img: "/templates/3.jpeg",
      title: "Multi Brand",
    },
    {
      img: "/templates/4.jpeg",
      title: "Fashion1",
    },
    {
      img: "/templates/5.jpeg",
      title: "Fashion1",
    },
    {
      img: "/templates/6.jpeg",
      title: "Fashion1",
    },
    // {
    //   img: "./templates/7.jpeg",
    //   title: "Fashion1",
    // },
    // {
    //   img: "./templates/8.jpeg",
    //   title: "Fashion1",
    // },
    // {
    //   img: "./templates/28.jpeg",
    //   title: "Fashion1",
    // },
  
  ];
  
  const buttons = [
    {
      title: "All",
    },
    {
      title: "Fashion",
    },
    {
      title: "Accesories",
    },
    {
      title: "Furniture",
    },
    {
      title: "Electronics",
    },
  ];