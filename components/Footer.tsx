'use client'
import React from 'react'
import Image from "next/image"
import SendIcon from '@mui/icons-material/Send';

const Footer = () => {
  return (

    <>
      <div className="bg-black text-white"  >
        <div className=" flex justify-evenly pt-[40px] pb-[124px] px-[135px]">
          <div className='flex flex-col gap-[20px]'>
            <p className='font-[500] text-[20px]'>Exclusive</p>
            <p>Subscribe</p>
            <div>
              <p>Get 10% off your first order</p>
              <div className="border-2 border-white mt-2 py-3 px-4 rounded-[4px]"  >

                <input
                  className='bg-black  focus:outline-none'
                  placeholder="Enter your email here"
                />
                <SendIcon />
              </div>
            </div>

          </div>
          <div className='flex flex-col gap-[20px]'>
            <p className='font-[500] text-[20px]'>Support</p>
            <p>111 Bijoy sarani, Dhaka,<br /> DH 1515, Bangladesh.</p>
            <div className="flex flex-col gap-3">
              <p>exclusive@gmail.com</p>
              <p>+88015-88888-9999</p>
            </div>
          </div>
          <div className='flex flex-col gap-[20px]'>
            <p className='font-[500] text-[20px]'>Account</p>
            <div className="flex flex-col gap-3">
              <p>My Account</p>
              <p>Login/Register</p>
              <p>Cart</p>
              <p>Wishlist</p>
              <p>Shop</p>
            </div>
          </div>
          <div className='flex flex-col gap-[20px]'>
            <p  className='font-[500] text-[20px]'>Quick Link</p>
            <div className="flex flex-col gap-3">
              <p>Privacy Policy</p>
              <p>Term of Use</p>
              <p>FAQ</p>
              <p>Contact</p>
            </div>
          </div>
          <div className='flex flex-col gap-[20px]'>
            <p className='font-[500] text-[20px]'>Download App</p>
            <div className="flex flex-col gap-3">
              <p>Save $3 with App New User Only</p>
              <div className="grid grid-cols-2">
                <Image
                  alt="barcode"
                  src="/Qrcode.png"
                  width={76}
                  height={76}
                />

                <div className="flex flex-col gap-2">
                  <Image
                    alt="playstore"
                    src="/images/playstore.png"
                    width={110}
                    height={46}
                  />   
                  <Image
                  alt="appstore"
                  src="/images/appstore.png"
                  width={110}
                  height={46}
                  />
                </div>


              </div>
              <div></div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
