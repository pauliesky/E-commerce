'use client'
import React from 'react'
import Image from "next/image"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


const Hero = () => {
  return (
   <>
   <section className="flex px-[135px] mt-[32px] ">
    <div className="flex  flex-col gap-5 w-full  border-r-[0.5px] border-r-[#000000] max-w-[217px]">
      <p  className="flex justify-between" >Woman’s Fashion <KeyboardArrowRightIcon/></p>
      <p>Men’s Fashion <KeyboardArrowRightIcon/></p>
      <p>Electronics</p>
      <p>Home & Lifestyle</p>
      <p>Medicine</p>
      <p>Sports & Outdoor</p>
      <p>Baby’s & Toys</p>
      <p>Groceries & Pets</p>
      <p>Health & Beauty</p>
    </div>
    <Image
                    alt="hero-image"
                    src="/images/hero_image.png"
                    width={892}
                    height={344}
                />
   </section>
   </>
  )
}

export default Hero
