"use client"
import { useState } from "react";

export default function Home() {
  // let this url are coming from back-end and we don't know how many images are there
  const imageURL = ['/image-product-1.jpg', '/image-product-2.jpg', '/image-product-3.jpg']
  const [active, setActive] = useState(0)
  return (
    <main>
      <div className="image-container h-[40vh] overflow-hidden">
        {
          imageURL?.map((url, index)=>{
            return <img key={index} src={url} alt="" className="w-full h-full object-cover relative"/>
          })
        }
      </div>
    </main>
  );
}
