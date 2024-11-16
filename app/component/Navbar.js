"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { useEffect, useState } from "react";
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
import { useRef } from "react";

const Navbar = () => {
  const [product] = useSelector((state) => state.cart);
  const [showCart, setshowCart] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);
  const menuRef = useRef();
  const cartRef = useRef();
  const dispatch = useDispatch();

  const handleClose = (e) => {
    e.stopPropagation();
    // check if the drawer is open
    if (e.target.alt == "close") return;
    if (menuRef && !menuRef.current.contains(e.target)) {
      setShowDrawer(false);
    }
    // check if the cart is open
    if (cartRef.current && !cartRef.current.contains(e.target)) {
      setshowCart(false);
    }
  };

  useEffect(() => {
    //closing cart and drawer when clicked outside
    document.addEventListener("mousedown", handleClose);
    // cleaning up if unmount
    return () => {
      document.removeEventListener("mousedown", handleClose);
    };
  }, []);

  return (
    <nav className="min-h-16 shadow-lg">
      <header className="container mx-auto flex w-[90vw] items-center justify-between gap-2 md:w-[80vw]">
        <div className="ham-logo-navigation flex min-h-16 items-center gap-4">
          <div className="hamburger z-50 space-y-0.5 md:hidden">
            <img
              onClick={() => {
                setShowDrawer(!showDrawer);
                setshowCart(false);
              }}
              src={showDrawer ? "/icon-close.svg" : "/icon-menu.svg"}
              alt={showDrawer ? "close" : "open"}
            />
          </div>
          <div className="logo-name">
            <Link href="/">
              <img src="/logo.svg" alt="logo" className="w-44" />
            </Link>
          </div>
          {/* navigation bar starts here */}
          <div className="navigation md:block">
            <ul
              ref={menuRef}
              className={`${showDrawer ? "translate-x-0" : "-translate-x-full"} absolute inset-0 top-0 z-30 flex h-screen w-[60vw] flex-col gap-2 bg-white pt-20 transition-all duration-300 md:static md:h-[10vh] md:translate-x-0 md:flex-row md:items-center md:gap-0 md:pt-0 md:text-center`}
            >
              <li className="cursor-pointer content-center border-[#fe7b1b] px-4 py-2 text-lg font-bold text-[#26272b] hover:text-[#2e2e30] md:h-full md:font-normal md:text-[#75777c] md:hover:border-b-4">
                <Link href="/">Collections</Link>
              </li>
              <li className="cursor-pointer content-center border-[#fe7b1b] px-4 py-2 text-lg font-bold text-[#26272b] hover:text-[#2e2e30] md:h-full md:font-normal md:text-[#75777c] md:hover:border-b-4">
                Men
              </li>
              <li className="cursor-pointer content-center border-[#fe7b1b] px-4 py-2 text-lg font-bold text-[#26272b] hover:text-[#2e2e30] md:h-full md:font-normal md:text-[#75777c] md:hover:border-b-4">
                Women
              </li>
              <li className="cursor-pointer content-center border-[#fe7b1b] px-4 py-2 text-lg font-bold text-[#26272b] hover:text-[#2e2e30] md:h-full md:font-normal md:text-[#75777c] md:hover:border-b-4">
                About
              </li>
              <li className="cursor-pointer content-center border-[#fe7b1b] px-4 py-2 text-lg font-bold text-[#26272b] hover:text-[#2e2e30] md:h-full md:font-normal md:text-[#75777c] md:hover:border-b-4">
                Contact
              </li>
            </ul>
          </div>
        </div>
        {/* cart-icon and profile pics shows here */}
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
            {/* actual cart */}
            <div ref={cartRef}>
              {showCart && (
                <Card className="absolute -right-20 top-5 z-30 min-h-56 w-[90vw] pb-0 text-[#6a6d72] shadow-xl sm:right-0 sm:w-96">
                  <CardHeader className="pb-2 shadow-md">
                    <CardTitle className="">Cart</CardTitle>
                  </CardHeader>
                  {product ? (
                    <div>
                      <CardContent className="pt-4">
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
                            className="delete w-[5%] cursor-pointer self-center"
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
            </div>
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
