import Image from "next/image";
import React from "react";
import Button from "../components/Button";

const HeroSection = () => {
  return (
    <main className="w-11/12 mx-auto h-screen grid grid-cols-2 items-center">
      <section>
        <h2 className="font-bold text-6xl">We Help You To</h2>
        <h2 className="text-gradient font-bold text-6xl">Grow Up Your Sales</h2>
        <p className="font-medium text-textlight py-10 w-[80%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat earum
          accusamus deserunt eum. Eos quo officia incidunt, aperiam optio autem
          maxime minus at, sit ullam earum ducimus perferendis adipisci soluta.
        </p>
        <Button name="Buy Now"/>
      </section>
      <section>
        <Image src="/admindashboard.png" alt="dashboard" width={1000} height={1000} className="rounded-2xl h-[60vh]"/>
      </section>

         {/* background spot lights */}
         {/* <div className="w-[30em] h-[20em] overflow-hidden rounded-full bg-tertiary absolute opacity-70 inset-0 blur-[280px]"></div>
      <div className="w-[20em] h-[20em] overflow-hidden rounded-full bg-tertiary absolute opacity-20 right-0 top-0 blur-[150px]"></div>
      <div className="w-[20em] h-[20em] overflow-hidden rounded-full bg-primary absolute opacity-50 bottom-0 blur-[150px]"></div>
      <div className="w-[20em] h-[20em] overflow-hidden rounded-full bg-primary absolute opacity-30 top-0 left-1/2 blur-[150px]"></div>
      <div className="w-[20em] h-[20em] overflow-hidden rounded-full bg-primary absolute opacity-20 bottom-0 right-0 blur-[150px]"></div>
      <div className="w-[20em] h-[20em] overflow-hidden rounded-full bg-tertiary absolute opacity-20 bottom-0 left-1/2 blur-[150px]"></div> */}
    </main>
  );
};

export default HeroSection;
