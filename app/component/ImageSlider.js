"use client";
import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import LargeSlider from "./LargeSlider";

const ImageSlider = ({ images }) => {
  const [currentImage, setcurrentImage] = useState(0);
  const [openSider, setOpenSider] = useState(false);

  const showPrev = () => {
    setcurrentImage(currentImage == 0 ? images.length - 1 : currentImage - 1);
  };
  const showNext = () => {
    setcurrentImage(currentImage == images.length - 1 ? 0 : currentImage + 1);
  };
  const handleImageChange = (e) => {
    setcurrentImage(e.target.alt);
    document
      .querySelectorAll(".selected")
      .forEach((ele) => ele.classList.remove("selected"));
    e.target.classList.add("selected");
  };
  return (
    <>
      <div className="relative overflow-hidden">
        //Image Viewer
        <div
          className={`relative flex h-full w-full transition-transform duration-500`}
          style={{
            transform: `translateX(-${currentImage * 100}%)`,
          }}
        >
          {images.map((url, index) => (
            <div className="min-w-[100vw] md:min-w-[100%]" key={index}>
              <img
                onClick={() => setOpenSider(true)}
                src={url}
                className="pointer-events-none h-[300px] w-full object-fill object-center md:pointer-events-auto md:h-[90%] md:w-[50vw] md:rounded-3xl"
              />
            </div>
          ))}
        </div>
        //Previous Button
        <div
          className="previous absolute left-0 top-1/2 z-10 ml-3 rounded-full bg-white/80 p-3 hover:bg-white md:hidden"
          onClick={showPrev}
        >
          <img src="/icon-previous.svg" alt="pre-icon" />
        </div>
        <div
          className="next absolute right-0 top-1/2 z-10 mr-3 rounded-full bg-white/80 p-3 hover:bg-white md:hidden"
          onClick={showNext}
        >
          <img src="/icon-next.svg" alt="pre-icon" />
        </div>
        <div className="downslider mx-auto mt-4 hidden md:block">
          <Carousel>
            <CarouselContent>
              {images.map((url, index) => {
                return (
                  <CarouselItem className="m-1 basis-1/4" key={index}>
                    <img
                      src={url}
                      alt={index}
                      className="cursor-pointer rounded-lg hover:opacity-80 hover:outline hover:outline-4 hover:outline-[#e78338]"
                      onClick={handleImageChange}
                    />
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
      {openSider && (
        <>
          <LargeSlider images={images} />
          <div
            className="absolute right-0 top-0 h-screen w-screen bg-black opacity-80"
            onClick={() => setOpenSider(false)}
          ></div>
        </>
      )}
    </>
  );
};

export default ImageSlider;
