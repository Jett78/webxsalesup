import React from 'react'

const SubFooter = () => {
  return (
    <main className="relative h-screen flex flex-col justify-center">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
      <div className="text-8xl font-extrabold flex flex-col justify-center items-center">
        <h2>
          Grab <span className="text-gradient">SalesUp</span> now before{" "}
        </h2>
        <h2 className="py-4">Price Increases</h2>
      </div>
      <button className="my-8">
        <a
          href="#_"
          className="relative inline-flex items-center justify-center p-4 px-10 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
          <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
          <span className="relative text-white">Purchase</span>
        </a>
      </button>
        {/* background spot lights
        <div className="w-[30em] h-[20em] overflow-hidden rounded-full bg-tertiary absolute opacity-20 inset-0 blur-[150px]"></div>
      <div className="w-[20em] h-[20em] overflow-hidden rounded-full bg-tertiary absolute opacity-20 right-0 top-0 blur-[150px]"></div>
      <div className="w-[20em] h-[20em] overflow-hidden rounded-full bg-primary absolute opacity-40 bottom-0 blur-[150px]"></div>
      <div className="w-[20em] h-[20em] overflow-hidden rounded-full bg-primary absolute opacity-30 top-0 left-1/2 blur-[150px]"></div>
      <div className="w-[20em] h-[20em] overflow-hidden rounded-full bg-primary absolute opacity-20 bottom-0 right-0 blur-[150px]"></div>
      <div className="w-[20em] h-[20em] overflow-hidden rounded-full bg-tertiary absolute opacity-20 bottom-0 left-1/2 blur-[150px]"></div> */}
    </main>
  )
}

export default SubFooter