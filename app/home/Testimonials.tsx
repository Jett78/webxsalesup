"use client"
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
//   const sliderRef = useRef(null);

//   const handleNext = () => {
//     sliderRef.current.slickNext();
//   };

//   const handlePrev = () => {
//     sliderRef.current.slickPrev();
//   };

  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    centerMode: true,
    // dots: true,
    centerPadding: "0px",
    beforeChange: (oldIndex:number, newIndex:number) => setCurrentSlide(newIndex),
  };
  return (
    <main className="my-20">
      <h2 className="text-3xl text-gradient w-fit mx-auto tracking-wide font-bold text-center uppercase">
        Testimonials
      </h2>
      <p className="text-textlight font-medium w-[40em] mx-auto py-4 text-center">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque itaque
        repellat a facilis, sit quam commodi at amet aut cupiditate voluptate
        veniam delectus sapiente? Non laudantium ut dolores alias incidunt.
      </p>{" "}
      <div className="w-2xl my-20 mx-4">
        <Slider {...settings} className="mx-20">
          {clientData.map((item, index) => (
            <div
              key={index}
              className={`${
                index === currentSlide
                  ? "lg:scale-110 border-primary"
                  : "  scale-75 "
              }  rounded-2xl my-4 py-4 px-4 transition-transform duration-500 ease-in-out border`}
            >
              <div className="flex gap-4 items-center">
                <Image
                  src={item.img}
                  alt={item.name}
                  width={1000}
                  height={1000}
                  className="h-10 w-10 rounded-full"
                />
                <div>
                  <h2 className="font-bold">{item.name}</h2>
                  <h3 className="font-semibold text-textlight text-sm">
                    {item.title}
                  </h3>
                </div>
              </div>

              <p className="font-medium w-full py-8">{item.testimonial}</p>

              {/* stars */}
              <div className="flex justify-center">
                {Array.from({ length: 5 }).map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="#f7d322"
                      d="m16 2l-4.55 9.22l-10.17 1.47l7.36 7.18L6.9 30l9.1-4.78L25.1 30l-1.74-10.13l7.36-7.17l-10.17-1.48Z"
                    />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </main>
  );
};

export default Testimonials;

const clientData = [
  {
    img: "/avatar.jpg",
    name: "Neha Patel",
    title: "Owner of Artisan Crafts",
    testimonial:
      "SalesUp transformed our online store into a vibrant marketplace. The design is user-friendly, and the seamless checkout process has boosted our sales significantly. We couldn't have asked for a better partner!",
  },
  {
    img: "/avatar.jpg",
    name: "Vikram Rai",
    title: "Founder of EcoGoods",
    testimonial:
      "SalesUp's team understood our vision and delivered a site that reflects our brand perfectly. The intuitive navigation and responsive design have enhanced our customer experience, leading to a notable increase in repeat customers.",
  },
  {
    img: "/avatar.jpg",
    name: "Ayesha Khan",
    title: "Marketing Manager at LuxeBoutique",
    testimonial:
      "The e-commerce platform developed by SalesUp has streamlined our operations. From inventory management to customer engagement, everything is smooth and efficient. Our conversion rates have improved dramatically since the launch.",
  },
  {
    img: "/avatar.jpg",
    name: "Suresh Gurung",
    title: "COO of Style Haven",
    testimonial:
      "Thanks to SalesUp, our e-commerce site now offers a superior shopping experience. The site’s performance and responsiveness are exceptional, and it has helped us attract and retain more customers.",
  },
];
