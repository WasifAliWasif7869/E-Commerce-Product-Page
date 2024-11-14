"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/store/Slices/cartSlice";
import productData from "@/productData";
import { useState } from "react";

export default function Home() {
  const [qty, Setqty] = useState(1);
  // let this url are coming from back-end and we dont know how many images are there
  const { imageURL } = productData;

  const dispatch = useDispatch();
  const [product] = useSelector((state) => state.cart);
  return (
    <main>
      <div className="image-container h-[40vh] overflow-hidden">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {imageURL?.map((url, index) => {
            return (
              <SwiperSlide key={index}>
                <img
                  key={index}
                  src={url}
                  alt=""
                  className="relative h-full w-full object-cover"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <section className="m-5 w-[90vw]">
        <div className="text flex flex-col gap-3">
          <span className="text-sm text-[#8d8d90]">SNEAKPER COMPANY</span>
          <span className="font-['Kumbh_Sans'] text-3xl font-bold text-[#1a1d22]">
            Fall Limited Edition Sneakers
          </span>
          <p className="text-[#909192]">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they will withstand
            everything the weather can offer.
          </p>
        </div>
        <div className="price-section mt-5 flex items-center justify-between">
          <span className="price flex items-center space-x-5">
            <span className="text-2xl font-bold text-[#16171a]">$125.00</span>
            <span className="rounded-lg bg-[#1e1f25] px-2 py-1 text-sm font-bold text-white">
              50%
            </span>
          </span>
          <div className="actual-price text-sm text-[#767980] line-through">
            $250.00
          </div>
        </div>
      </section>
      <section className="quantity m-5 w-[90vw]">
        <div className="plus-minus-qty mb-8 flex items-center justify-around">
          <button
            disabled={qty <= 0}
            className={`minus cursor-pointer rounded-lg p-3 disabled:pointer-events-none`}
            onClick={() => {
              Setqty(qty - 1);
            }}
          >
            <img src="/icon-minus.svg" alt="" />
          </button>
          <span className="w-36 text-center">{qty}</span>
          <button
            className={`plus cursor-pointer rounded-lg p-3 disabled:pointer-events-none`}
            onClick={() => {
              Setqty(qty + 1);
            }}
          >
            <img src="/icon-plus.svg" alt="" />
          </button>
        </div>
        <div
          className="add-to-cart-button"
          onClick={() => {
            dispatch(addToCart({ ...productData, quantity: qty }));
          }}
        >
          <Button
            disabled={qty <= 0}
            className="mr-2 w-full bg-[#ff7d1b] py-6 text-lg font-bold text-[#531d00] outline-none"
          >
            <img src="/icon-cart.svg" alt="cart-icon" className="w-5" />
            Add to Cart
          </Button>
        </div>
      </section>
    </main>
  );
}
