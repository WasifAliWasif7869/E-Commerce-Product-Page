"use client";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/store/Slices/cartSlice";
import { useState } from "react";
import ImageSlider from "./component/ImageSlider";

// let this prouctDate come from api
import productData from "@/productData";

export default function Home() {
  const [qty, Setqty] = useState(1);
  const dispatch = useDispatch();
  const [product] = useSelector((state) => state.cart);

  return (
    <main className="md:container md:mx-auto md:mt-20 md:flex md:w-[90vw]">
      <div className="first">
        <div className="image-container object-cover h-[40vh] md:h-[400px] md:w-[40vw]">
          <ImageSlider images={productData.imageURL} />
        </div>
      </div>
      <div className="second mt-0 md:mt-16">
        <section className="m-5 w-[90vw] md:w-[40vw]">
          <div className="text flex flex-col gap-3">
            <span className="text-sm text-[#8d8d90]">SNEAKER COMPANY</span>
            <span className="font-['Kumbh_Sans'] text-3xl font-bold text-[#1a1d22]">
              Fall Limited Edition Sneakers
            </span>
            <p className="text-[#909192]">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they will withstand
              everything the weather can offer.
            </p>
          </div>
          <div className="price-section mt-5 flex items-center justify-between md:flex-col md:items-start md:gap-2">
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
        <section className="quantity m-5 w-[90vw] md:mt-16 md:flex md:w-[40vw] md:gap-4">
          <div className="plus-minus-qty mb-8 flex items-center justify-around md:min-h-12 md:w-[12vw]">
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
            className="add-to-cart-button md:w-[20vw]"
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
      </div>
    </main>
  );
}
