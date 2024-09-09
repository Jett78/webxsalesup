import Image from "next/image";
import React from "react";

const Optimize = () => {
  return (
    <main>
      <div className="relative w-full text-center border-t border-gray-500 pt-20">
        <h2 className="text-4xl font-extrabold">
          <span className="text-3xl font-extrabold  w-fit">
            Optimization {""}
          </span>
          {/* Your Websites For Ranking */}
        </h2>
        <p className="text-textlight py-4 w-[50em] mx-auto text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
          excepturi sed at debitis optio omnis maxime minima, nobis neque velit
          quibusdam cupiditate eius? Laborum autem illum, facilis iusto aperiam
          tempora.
        </p>
      </div>
      <div className="flex justify-center gap-20 ites-center my-20">
     
        {optimg.map((item, index) => (
          <div key={index}>
            <Image
              src={item.img}
              alt="optimize-images"
              width={1000}
              height={1000}
              className="w-[20em] border rounded-2xl"

            />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Optimize;

const optimg = [
  {
    img: "/feature2.svg",
  },
  {
    img: "/feature1.svg",
  },
  {
    img: "/feature3.svg",
  },
];
