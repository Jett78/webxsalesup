import Image from 'next/image'
import React from 'react'

const Branding = () => {
  return (
    <div className="flex flex-col justify-center gap-10 my-10">
    <div className="w-full text-center">
      <h2 className="relative text-4xl font-extrabold">
        {/* Set Up Your{" "} */}
        <span className="text-3xl font-extrabold  w-fit">
          Branding
        </span>
      </h2>
      <p className="text-textlight py-4 w-[45em] mx-auto text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
        excepturi sed at debitis optio omnis maxime minima, nobis neque
        velit quibusdam cupiditate eius? Laborum autem illum, facilis
        iusto aperiam tempora.
      </p>
    </div>
    <div className="h-[72vh]  relative  bg-white  rounded-xl  mx-auto p-4 cursor-pointer overflow-hidden group ease-in-out duration-1000">
      <div className="group-hover:-translate-y-[80%] grid gap-10 ease-Out group-hover:duration-6000 duration-700 mx-auto">
        <Image
          src="/Branding/brand1.jpg"
          alt="brands"
          height={1000}
          width={1000}
          className="shadow-md rounded-2xl "
        />
        <Image
          src="/Branding/brand2.jpg"
          alt="brands"
          height={1000}
          width={1000}
          className="shadow-md rounded-2xl "
        />
        <Image
          src="/Branding/brand3.jpg"
          alt="brands"
          height={1000}
          width={1000}
          className="shadow-md rounded-2xl "
        />
      </div>
    </div>
  </div>
  )
}

export default Branding


// const brands = [
//     {
//         img:"/Branding/brand1.jpg",
//     },
//     {
//         img:"/Branding/brand2.jpg",
//     },
//     {
//         img:"/Branding/brand3.jpg",
//     },
// ]