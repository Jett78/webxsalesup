"use client";
import gsap from "gsap";
import React, { useEffect } from "react";

const Marquee = () => {
    useEffect(() => {
        const marqueeContent = document.querySelector(".marquee-content");
    
        // Duplicate content to ensure seamless loop
        if (marqueeContent) {
          marqueeContent.innerHTML += marqueeContent.innerHTML;
    
          const marqueeWidth = marqueeContent.scrollWidth / 2;
    
          gsap.to(marqueeContent, {
            x: -marqueeWidth,
            repeat: -1,
            duration: 130,
            ease: "linear",
            modifiers: {
              x: gsap.utils.unitize((x) => parseFloat(x) % marqueeWidth),
            },
          });
        }
      }, []);
  return (
    <main className="w-full mx-auto bg-zinc-950">
        <div className="w-full h-full flex justify-center items-center">
          <div className="flex flex-col w-full h-full justify-center items-center">
            <div className="font-bold border-y-2 py-10 border-zinc-800 overflow-x-hidden w-full uppercase text-[6rem] md:text-[10rem] 3xl:text-[10rem] flex justify-center items-center leading-none overflow-auto whitespace-nowrap">
              <div className="flex marquee gap-5 w-full text-start">
                <div className="marquee-content title text-zinc-50">
                  <span className="text-loop inline-block">
                    BUILD YOUR AMAZING STORE WITH SALESUP
                    <span className="dot !font-poppins inline-block px-10">
                      •
                    </span>
                  </span>
                  <span className="text-loop inline-block">
                  BUILD YOUR AMAZING STORE WITH SALESUP
                  <span className="dot !font-poppins inline-block px-10">
                      •
                    </span>
                  </span>
                  <span className="text-loop inline-block">
                  BUILD YOUR AMAZING STORE WITH SALESUP
                  <span className="dot !font-poppins inline-block px-10">
                      •
                    </span>
                  </span>
                  <span className="text-loop inline-block">
                  BUILD YOUR AMAZING STORE WITH SALESUP
                  <span className="dot !font-poppins inline-block px-10">
                      •
                    </span>
                  </span>
                </div>
              </div>
            </div>

        
          </div>
        </div>
      </main>
  )
}

export default Marquee