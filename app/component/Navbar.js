"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSelector } from "react-redux";
import Link from "next/link";

const Navbar = () => {
  const product = useSelector((state) => state.cart);
  const quantity = product[0]?.quantity;
  return (
    <nav className="h-[80px] shadow-lg md:mb-2">
      <header className="container mx-auto my-2 mb-5 flex min-h-16 w-[90vw] items-center justify-between gap-2">
        <div className="ham-logo-navigation flex items-center gap-4">
          <div className="hamburger space-y-0.5 md:hidden">
            <img src="/icon-menu.svg" alt="" />
          </div>
          <div className="logo-name">
            <img src="/logo.svg" alt="logo" className="w-36" />
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
            <img src="/icon-cart.svg" alt="" />
            <div className="currect-cart absolute -top-2 right-0 rounded-lg bg-[#fd8324] p-[1px] px-[5px] text-[10px] text-white">
              {product.length && quantity ? quantity : 0}
            </div>
          </span>
          <span className="rounded-full hover:outline-2 hover:outline p-0.5 hover:outline-[#fe7b1b]">
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
