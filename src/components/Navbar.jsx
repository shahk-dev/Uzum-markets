import React from 'react'
import telegram from "../assets/telegram.svg"
import vibe from "../assets/vibe.svg"
import logo from "../assets/logo.png"
import whatsapp from "../assets/whatsapp.svg"
import add from "../assets/add.svg"
import { Link } from 'react-router-dom'
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { IoPersonOutline } from "react-icons/io5";
import { SlBag } from "react-icons/sl";
import { FiHeart } from "react-icons/fi";
import loo from "../assets/loo.png";
import loos from "../assets/2f.png";
import looss from "../assets/hobbi.png";

function Navbar() {
  return (
    <div className='p-4 bg-[#fcfcfc] md:p-5 lg:p-5 lg:px-16 font-[Jost]'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-[45px] font-[Jost]'>
          <a href="tel:+998507121208">Xizmat</a>
          <a href="https://seller.uzum.uz/seller/agreement/uz/">Hamkorlik</a>
          <a href="tel:+998507121208">Qo'ng'iroq qiling</a>
          <div className='flex items-center gap-[15px]'>
            <a href="/">
              <img className='h-4' src={vibe} alt="png" />
            </a>
            <a href="/">
              <img className='h-4' src={whatsapp} alt="png" />
            </a>
            <a href="/">
              <img className='h-4' src={telegram} alt="png" />
            </a>
          </div>
        </div>
        <div className='flex font-[Jost] items-center justify-center gap-[13px]'>
          <a href="tel:+998507121208">+998 50 712 12 08</a>
          <Link>
            <img src={add} alt="" />
          </Link>
        </div>
      </div>
      <hr className='border-t-1 border-[#ECF3FF] mt-3.5' />
      <nav className='md:p-5 lg:p-5 lg:px-17 flex items-center justify-between'>
        <a className='flex items-center gap-3 font-[Jost] text-[#ae00ff] text-3xl font-bold' href="/">
          <img className='h-[50px] rounded-full' src={logo} alt="png" />
           uzum market
        </a>
        <div className='flex items-center gap-9'>
          <div className='flex items-center font-[500px] gap-3 h-[45px] rounded-[5px] text-center px-8 w-[160px] text-white bg-[#6F73EE] font-[Jost]'>
            <HiOutlineBars3BottomLeft className='text-2xl' />
            <button className='text-lg'> Katalog</button>
          </div>
            <div className='flex gap-2 w-full justify-between font-[Jost] border-2 border-[#6F73EE] text-white rounded-sm'>
                 <input className=' text-black outline-none w-[430px] px-3' type="text" placeholder='Maxsulot va turkumlar izlash :'/>
                 <button className=' p-3 px-12 bg-[#6F73EE] text-lg' ><IoSearchOutline /></button>
            </div>

        </div>
        <div className='flex items-center gap-10'>
            <Link to={'/login'} className='flex items-center font-[Jost] text-[16px] gap-3'> <IoPersonOutline className='text-2xl'/> Kirish</Link>
            <Link to={'/likeing'} className='flex items-center font-[Jost] text-[16px] gap-3'> <FiHeart className='text-2xl' /> Saralangan</Link>
            <Link to={'/prodecst'} className='flex items-center font-[Jost] text-[16px] gap-3'> <SlBag className='text-2xl' /> Savat</Link>
        </div>

      </nav>
      <div className='flex items-center justify-center gap-9'>
          <Link className='text-lg flex items-center gap-2'><img className='h-7' src={loo} alt="" /> Hafta tavarlari</Link>
          <Link className='text-lg flex items-center gap-2'><img className='h-7' src={loos} alt="" /> Qishki kolleksiya</Link>
          <Link className='text-lg flex items-center gap-2'><img className='h-7' src={looss} alt="" /> Xobiy va ijod</Link>
          <Link className='text-lg hidden md:flex'> Turizim baiq ovi , va ovchilik</Link>
          <Link className='text-lg hidden md:flex'> Elektronika</Link>
          <Link className='text-lg hidden md:flex'> Kiyim</Link>
          <Link className='text-lg hidden md:flex'> Poyabzallar</Link>
          <Link className='text-lg'> Aksesuarlar</Link>
      </div>
    </div>
  )
}

export default Navbar