import Image from "next/image";
import React from "react";

const AboutHero = () => {
  return (
    <main className="w-11/12 mt-20 mx-auto grid grid-cols-2 gap-8">
      <section>
        <h3 className="font-semibold text-tertiary  uppercase text-xl">How it Started</h3>
        <h2 className="font-bold text-6xl py-4">Our Dream is Global Learning Transformation</h2>
        <p className="w-[80%] text-textlight pt-20">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
          nisi eaque quasi obcaecati suscipit eos, impedit provident quo hic
          voluptas ullam, asperiores, nam ab molestias rerum. Veniam aut qui
          necessitatibus!
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
          nisi eaque quasi obcaecati suscipit eos, impedit provident quo hic
          voluptas ullam, asperiores, nam ab molestias rerum. Veniam aut qui
          necessitatibus!
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
          nisi eaque quasi obcaecati suscipit eos, impedit provident quo hic
          voluptas ullam, asperiores, nam ab molestias rerum. Veniam aut qui
          necessitatibus!
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
          nisi eaque quasi obcaecati suscipit eos, impedit provident quo hic
          voluptas ullam, asperiores, nam ab molestias rerum. Veniam aut qui
          necessitatibus!
        </p>
      </section>
      <section>
        <Image src="/aboutimg/abouthero.jpg" alt="about-hero-img" width={1000} height={1000} className="rounded-2xl h-[40vh]"/>
        <div className="grid grid-cols-2 gap-4 mt-8">
             {aboutdata.map((item,index) => (
                <div key={index} className="flex flex-col items-center justify-center py-6 px-4 rounded-2xl shadow-md">
                    <h2 className="font-semibold text-5xl">{item.num}</h2>
                    <h3 className="font-semibold text-lg text-textlight py-2">{item.name}</h3>
                </div>
             ))}
        </div>
      </section>
    </main>
  );
};

export default AboutHero;

const aboutdata = [
    {
        num:"3.5",
        name:"Years Experience",
    },
    {
        num:"23",
        name:"Project Challenge",
    },
    {
        num:"830+",
        name:"Positive Reviews",
    },
    {
        num:"100k",
        name:"Trusted Students",
    },
]
