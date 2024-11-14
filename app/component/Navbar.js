"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSelector } from "react-redux";

const Navbar = () => {
  const product = useSelector((state) => state.cart);
  const quantity = product[0]?.quantity;
  return (
    <nav>
      <header className="container mx-auto flex min-h-16 w-[90vw] items-center justify-between gap-2 py-2 pb-5 pt-4">
        <div className="ham-logo flex items-center gap-4">
          <div className="hamburger space-y-0.5">
            <img src="/icon-menu.svg" alt="" />
          </div>
          <div className="logo-name">
            <img src="/logo.svg" alt="logo" className="w-36" />
          </div>
        </div>
        <div className="cart-profile flex items-center gap-4">
          <span className="relative">
            <img src="/icon-cart.svg" alt="" />
            <div className="currect-cart absolute -top-2 right-0 rounded-lg bg-[#fd8324] p-[1px] px-[5px] text-[10px] text-white">
              {product.length && quantity ? quantity : 0}
            </div>
          </span>
          <span>
            <Avatar>
              <AvatarImage src="/image-avatar.png" />
              <AvatarFallback>logo</AvatarFallback>
            </Avatar>
          </span>
        </div>
      </header>
    </nav>
  );
};

export default Navbar;
