import React, { useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const LargeSlider = ({ images }) => {
  const [currentImage, setcurrentImage] = useState(0);
  const showPrev = () => {
    setcurrentImage(currentImage == 0 ? images.length - 1 : currentImage - 1);
  };
  const showNext = () => {
    setcurrentImage(currentImage == images.length - 1 ? 0 : currentImage + 1);
  };

  const handleImageChange = (e) => {
    console.log(e.target);
    document
      .querySelectorAll(".selected")
      .forEach((ele) => ele.classList.remove("selected"));
    e.target.classList.add("selected");
    setcurrentImage(parseInt(e.target.alt));
  };
  return (
    <div className="hidden gap-4 md:flex">
      <div className="absolute inset-0 left-1/2 top-1/2 z-30 flex h-[50vh] w-[40vw] -translate-x-1/2 -translate-y-1/2 flex-col gap-5 overflow-hidden">
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
                className="h-[300px] w-full object-fill object-center md:h-[90%] md:w-[50vw] md:rounded-3xl"
              />
            </div>
          ))}
        </div>
        <div
          className="prev group absolute -left-0 top-1/2 z-50 cursor-pointer rounded-full bg-white/50 px-4 py-3 text-center text-3xl hover:bg-white"
          onClick={showPrev}
        >
          <img src="/icon-previous.svg" alt="" className="text-yellow-300" />
        </div>
        <div
          className="next group absolute -right-0 top-1/2 z-50 cursor-pointer rounded-full bg-white/50 px-4 py-3 text-center text-3xl hover:bg-white"
          onClick={showNext}
        >
          <img src="/icon-next.svg" alt="" className="text-yellow-300" />
        </div>
      </div>
      <div className="downslider absolute bottom-0 left-1/2 z-30 mx-auto w-[50vw] -translate-x-1/2 -translate-y-1/2 md:block">
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
  );
};

export default LargeSlider;
