import Image from "next/image";
import React from "react";

const MobileTemplates = () => {
  return (
    <main className="my-20">
      <div>
        {/* <h2 className="font-extrabold text-4xl text-center">SalesUp is </h2> */}
        <h2 className="font-extrabold text-4xl text-center">
          <span className="text-gradient">Mobile First</span> Template
        </h2>
        <p className="text-textlight font-medium w-[40em] mx-auto py-4 text-center">
          Especially optimized for mobile users. Turn majority of your shoppers
          into customers with mobile-first experience in every detail.
        </p>
      </div>

      <div className="grid grid-cols-3 place-items-center mx-20 my-8">
        {resimg.map((item, index) => (
          <div key={index} className="bg-black rounded-2xl p-1 pb-4">
            <Image
              src={item.img}
              alt="mobile-screens"
              height={1000}
              width={1000}
              className="w-80 h-[35em] rounded-xl rounded-bl-2xl rounded-br-2xl object-cover"
            />
          </div>
        ))}
      </div>
    </main>
  );
};

export default MobileTemplates;

const resimg = [
  {
    img: "/templates/1.jpeg",
  },
  {
    img: "/templates/2.jpeg",
  },
  {
    img: "/templates/3.jpeg",
  },
];
