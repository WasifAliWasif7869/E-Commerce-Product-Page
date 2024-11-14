"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ImageSlider = ({ images }) => {
  const [currentImage, setcurrentImage] = useState(0);
  const imageRef = useRef();
  const showPrev = () => {
    if (!currentImage <= 0) {
      setcurrentImage(currentImage - 1);
    }
  };
  const showNext = () => {
    if (!(currentImage == images.length - 1)) {
      setcurrentImage(currentImage + 1);
    }
  };
  const handleImageChange = (e) => {
    imageRef.current.src = e.target.src
    document.querySelectorAll(".selected").forEach(ele=>ele.classList.remove("selected"))
    e.target.classList.add("selected")
  };
  return (
    <>
      <div className="relative h-full w-full overflow-hidden">
        <img
          ref={imageRef}
          src={images[currentImage]}
          className="h-full w-full md:rounded-lg relative"
        />
        <div
          className={`previous absolute left-0 top-1/2 z-10 ml-3 rounded-full bg-white p-3 ${currentImage == 0 ? "hidden" : ""} md:hidden`}
          onClick={showPrev}
        >
          <img src="/icon-previous.svg" alt="pre-icon" />
        </div>
        <div
          className={`next absolute right-0 top-1/2 z-10 mr-3 rounded-full bg-white p-3 ${currentImage == images.length - 1 ? "hidden" : ""} md:hidden`}
          onClick={showNext}
        >
          <img src="/icon-next.svg" alt="pre-icon" />
        </div>
      </div>
      <div className="downslider mx-auto mt-4 hidden md:block">
        <Carousel>
          <CarouselContent>
            {images.map((url, index) => {
              return (
                <CarouselItem className="basis-1/4 m-1" key={index}>
                  <img
                    src={url}
                    alt=""
                    className="cursor-pointer rounded-lg hover:opacity-80 hover:outline hover:outline-4 hover:outline-[#e78338]"
                    onClick={handleImageChange}
                  />
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>
    </>
  );
};

export default ImageSlider;
