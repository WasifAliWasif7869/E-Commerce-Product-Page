import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Navbar = () => {
  return (
    <nav>
      <header className="flex container w-[90vw] mx-auto min-h-16 pb-5 py-2 items-center gap-2 justify-between pt-4">
        <div className="ham-logo flex items-center gap-4">
          <div className="hamburger space-y-0.5">
            <div className="h-0.5 w-[15px] text-xl bg-slate-500 text-red-500"></div>
            <div className="h-0.5 w-[15px] text-xl bg-slate-500 text-red-500"></div>
            <div className="h-0.5 w-[15px] text-xl bg-slate-500 text-red-500"></div>
          </div>
          <div className="logo-name">
            <img src="/logo.svg" alt="logo" className="w-36" />
          </div>
        </div>
        <div className="cart-profile flex items-center gap-4">
          <span>
            <img src="/icon-cart.svg" alt="" />
          </span>
          <span>
            {/* <img src="/image-avatar.png" alt="" className="w-8" /> */}
            <Avatar>
              <AvatarImage src="/image-avatar.png" className="aspect-auto"/>
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </span>
        </div>
      </header>
    </nav>
  )
}

export default Navbar
