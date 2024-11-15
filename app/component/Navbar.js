"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { removeFromCart } from "@/store/Slices/cartSlice";

const Navbar = () => {
  const [product] = useSelector((state) => state.cart);
  const [showCart, setshowCart] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);

  const dispatch = useDispatch();

  return (
    <nav className="min-h-16 shadow-lg">
      <header className="container mx-auto flex w-[90vw] items-center justify-between gap-2 md:w-[80vw]">
        <div className="ham-logo-navigation flex min-h-16 items-center gap-4">
          <div
            className="hamburger space-y-0.5 md:hidden"
            onClick={() => {
              setShowDrawer(!showDrawer);
            }}
          >
            <img src="/icon-menu.svg" alt="" />
          </div>
          <div className="logo-name">
            <Link href="/">
              <img src="/logo.svg" alt="logo" className="w-36" />
            </Link>
          </div>
          <div className="navigation hidden md:block">
            <ul className="flex h-[10vh] items-center justify-center gap-4 text-center">
              <li className="h-full cursor-pointer content-center border-[#fe7b1b] text-[#75777c] hover:border-b-4 hover:text-[#2e2e30]">
                <Link href="/">Collections</Link>
              </li>
              <li className="h-full cursor-pointer content-center border-[#fe7b1b] text-[#75777c] hover:border-b-4 hover:text-[#2e2e30]">
                Men
              </li>
              <li className="h-full cursor-pointer content-center border-[#fe7b1b] text-[#75777c] hover:border-b-4 hover:text-[#2e2e30]">
                Women
              </li>
              <li className="h-full cursor-pointer content-center border-[#fe7b1b] text-[#75777c] hover:border-b-4 hover:text-[#2e2e30]">
                About
              </li>
              <li className="h-full cursor-pointer content-center border-[#fe7b1b] text-[#75777c] hover:border-b-4 hover:text-[#2e2e30]">
                Contact
              </li>
            </ul>
          </div>
        </div>

        <div className="cart-profile flex items-center gap-4">
          <span className="relative">
            <div
              className="cursor-pointer"
              onClick={() => {
                setshowCart(!showCart);
              }}
            >
              <img src="/icon-cart.svg" alt="" />
              <div className="currect-cart absolute -top-2 right-0 rounded-lg bg-[#fd8324] p-[1px] px-[5px] text-[10px] text-white">
                {product && product.quantity ? product.quantity : 0}
              </div>
            </div>
            {showCart && (
              <Card className="absolute -right-20 top-5 z-30 min-h-48 w-[90vw] pb-0 text-[#6a6d72] shadow-xl sm:right-0 sm:w-96">
                <CardHeader>
                  <CardTitle className="pb-2 shadow-lg">Cart</CardTitle>
                </CardHeader>
                {product ? (
                  <div>
                    <CardContent>
                      <div className="product-info flex w-full items-start justify-center gap-3">
                        <div className="image w-[20%]">
                          <img
                            src="/image-product-1-thumbnail.jpg"
                            alt=""
                            className="h-full w-full rounded-xl"
                          />
                        </div>
                        <div className="title-quantity flex w-[80%] flex-col gap-1">
                          <span className="text-sm">{product.name}</span>
                          <span className="text-sm">
                            ${product.price} &times; {product.quantity}{" "}
                            <span className="font-bold">
                              ${product.price * product.quantity}
                            </span>
                          </span>
                        </div>
                        <span
                          className="delete cursor-pointer w-[7%] self-center md:w-[5%]"
                          onClick={() =>
                            dispatch(removeFromCart(product.productID))
                          }
                        >
                          <img src="/icon-delete.svg" className="w-full" />
                        </span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-[#ff7d1b] py-6 text-[#451000]">
                        Checkout
                      </Button>
                    </CardFooter>
                  </div>
                ) : (
                  <div className="flex h-20 items-center justify-center font-bold text-[#6a6d72]">
                    <p>Your cart is empty.</p>
                  </div>
                )}
              </Card>
            )}
          </span>

          <span className="rounded-full p-0.5 hover:outline hover:outline-2 hover:outline-[#fe7b1b]">
            <Avatar>
              <AvatarImage src="/image-avatar.png" className="cursor-pointer" />
              <AvatarFallback>logo</AvatarFallback>
            </Avatar>
          </span>
        </div>
      </header>
    </nav>
  );
};

export default Navbar;
