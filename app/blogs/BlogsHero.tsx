import Image from "next/image";
import React from "react";

const BlogsHero = () => {
  return (
    <main className="w-11/12 mt-20 mx-auto h-screen">
      <h3 className="font-semibold text-tertiary  uppercase text-xl">
        How it Started
      </h3>
      <h2 className="font-bold text-5xl w-[50%] py-4">
        Let us see the latest Trend and News
      </h2>

     <div className="grid grid-cols-4 gap-8 mt-20">
        {blogsdata.map((item,index) => (
            <div key={index} className="shadow-md rounded-2xl">
                <Image src={item.img} alt={item.title} width={1000} height={1000} className="rounded-t-2xl"/>
                <div className="p-4">
                    <p className="font-medium text-textlight">{item.time}</p>
                    <h2 className="font-semibold text-2xl py-2">{item.title}</h2>
                    <p>{item.desc.slice(0,100)}</p>
                </div>
            </div>
        ))}
     </div>
    </main>
  );
};

export default BlogsHero;

const blogsdata = [
    {
        img:"/aboutimg/abouthero.jpg",
        title:"How to Position Yourself",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eiusatque dignissimos. Molestias explicabo corporis voluptatem?",
        time:"10oth Oct 2024",
    },
    {
        img:"/aboutimg/abouthero.jpg",
        title:"How to Position Yourself",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eiusatque dignissimos. Molestias explicabo corporis voluptatem?",
        time:"10oth Oct 2024",
    },
    {
        img:"/aboutimg/abouthero.jpg",
        title:"How to Position Yourself",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eiusatque dignissimos. Molestias explicabo corporis voluptatem?",
        time:"10oth Oct 2024",
    },
    {
        img:"/aboutimg/abouthero.jpg",
        title:"How to Position Yourself",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eiusatque dignissimos. Molestias explicabo corporis voluptatem?",
        time:"10oth Oct 2024",
    },
]
