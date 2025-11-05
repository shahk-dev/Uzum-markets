import React from 'react';
import apps from "../assets/app.png";
import apsa from "../assets/apple-logo.png"
import telegrm from "../assets/telegram.png"
import youtube from "../assets/video.png"
import facebook from "../assets/facebook.png"
import instgram from "../assets/instagram.png"

function Footer() {
  return (
    <div className="p-4 h-[340px] bg-[#fcfcfc] md:p-5 lg:p-5 lg:px-16">
      <div className="font-[Jost] flex  justify-evenly gap-7">
  
        <div>
          <h1 className="font-bold text-lg">Biz haqimizda</h1>
          <p className="text-[16px] mt-3 text-neutral-500">Topshirish punktlari</p>
          <p className="text-[16px] mt-3 text-neutral-500">Vakansiyalar</p>
        </div>


        <div>
          <h1 className="font-bold text-lg">Foydalanuvchilarga</h1>
          <p className="text-[16px] mt-3 text-neutral-500">Biz bilan bogʻlanish</p>
          <p className="text-[16px] mt-3 text-neutral-500">Savol - Javob</p>
        </div>

        <div>
          <h1 className="font-bold text-lg">Tadbirkorlarga</h1>
          <p className="text-[16px] mt-3 text-neutral-500">Uzunda soting</p>
          <p className="text-[16px] mt-3 text-neutral-500">Sotuvchi kabinatiga kirish</p>
          <p className="text-[16px] mt-3 text-neutral-500">Topshirish punktini ochish</p>
        </div>


        <div>
          <h1 className="font-bold text-lg">Ilovani yuklab olish</h1>
          <div className='flex items-center gap-8 , mt-5'>
             <a className='flex items-center gap-3 hover:bg-neutral-600 p-3 rounded-lg hover:text-white duration-100' href="/"><img src={apps} alt="" /> AppStore</a>
             <a className='flex items-center gap-3 hover:bg-neutral-600 p-3 rounded-lg hover:text-white duration-100' href="/"><img src={apsa} alt="" /> Google Play</a>
          </div>

          <h1 className="font-bold text-lg mt-4">Uzum ijtimoiy tarmoqlari</h1>
          <div className='flex items-center gap-5 mt-4'>
              <a href="https://www.instagram.com/shahkweb/"><img className='h-10' src={instgram} alt="" /></a>
              <a href="https://t.me/shahkwebs/"><img className='h-10' src={telegrm} alt="" /></a>
              <a href="https://www.facebook.com/profile.php?id=61552905062512&sk=friends"><img className='h-10' src={facebook} alt="" /></a>
              <a href="https://youtube.com/shahkweb/"><img className='h-10' src={youtube} alt="" /></a>
          </div>
        </div>
      </div>
      <hr className='border-1 border-neutral-300 mt-15' />
       <div className='flex items-center font-[Jost] mt-3 justify-between'>
           <p className='text-lg'>Maxfiylik kelishuvi
Foydalanuvchi kelishuvi </p>
           <p className='text-sm text-neutral-500'>«2025© XK MCHJ «UZUM MARKET». STIR 309376127. Barcha huquqlar himoyalangan»</p>
       </div>
    </div>
  );
}

export default Footer;