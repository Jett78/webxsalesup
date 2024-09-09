import Image from "next/image";
import React from "react";

const Team = () => {
  return (
    <main className="w-11/12 mx-auto h-screen">
      <h3 className="font-semibold text-tertiary  uppercase text-xl">
        Meet the team
      </h3>
      <h2 className="font-bold text-5xl py-4 w-[50%]">
        Meet Our Dedicated Team of Educators and Innovators
        </h2>

        <div className="grid grid-cols-3 gap-10">
          {teamdata.map((item, index) => (
            <div key={index}>
              <Image
                src={item.img}
                alt="avatar"
                width={1000}
                height={1000}
                className="rounded-2xl my-10 h-full"
              />
            </div>
          ))}
        </div>
    </main>
  );
};

export default Team;

const teamdata = [
  {
    img: "/avatar.jpg",
  },
  {
    img: "/avatar.jpg",
  },
  {
    img: "/avatar.jpg",
  },

];
