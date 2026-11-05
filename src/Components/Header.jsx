import React from 'react'
import logo from '../assets/amazon-logo.png'
import {MapPin} from 'lucide-react'
import { Search } from 'lucide-react'
import flag from '../assets/indian-flag.png'
import {ShoppingCart} from 'lucide-react'
const Header = () => {
  return (
    <header className='bg-[rgb(19,25,33)] w-full text-white h-18  flex justify-between '>
        <div className='h-11 w-24 sm:w-32 '>
            <img src={logo} alt="" />
        </div>

        <div className='mt-3 gap-0  flex flex-col justify-around '>
          <p className='text-[10px] ml-5 '>Delivering to Pune 411001</p>
          <div className='flex mb-6'>
            <MapPin size={20} />
            <h2>Update Location</h2>
          </div>
        </div>

        <div className='flex justify-around m-5  hover:border-orange-300  '>
          <select  className='bg-[rgb(230,230,230)]  hover:bg-grey-700 h-10 w-10   text-black rounded-s-lg flex justify-center scroll-auto  ' >
            <option value="All">All</option>
            <option value="All">All Categories</option>
            <option value="All">Alexa Skills</option>
            <option value="All">Amazon Devices</option>
            <option value="All">Amazon Fashion</option>
            <option value="All">Amazon Fresh</option>
            <option value="All">Amazon Pharmacy</option>
            <option value="All">Appliances</option>
            <option value="All">Apps & Games</option>
            <option value="All">Audible Audiobooks</option>
            <option value="All">Baby</option>
            <option value="All">Beauty</option>
            <option value="All">Books</option>
            <option value="All">Car & Motorbike</option>
          </select>
          <input type="text"  placeholder='Search Amazon.in' className='bg-amber-50 h-10 w-dvh  text-grey border-0 hover:border-yellow-500 ' />
          <div className='flex justify-center rounded-e-lg w-10 h-10 bg-[rgb(254,189,105)]'><Search className='mt-2 text-black  '/></div>
        </div>

        <div className='flex flex-wrap justify-center  '>
          <img className='h-5 w-6 object-contain mt-7' src={flag} alt="" />
        <select name="language" id="">
          <option value="">En</option>
        </select>
        </div>

    <div className='flex flex-col  ml-5'>
      <p className='mt-3 '>Hello, sign in</p>
      <select className='font-bold' name="" id="">
        <option value="" className='font-bold' >Account & List </option>
      </select>
    </div>

    <div className='mt-3 ml-5'>
      <span>return</span>
      <h2 className='font-bold'>& Orders </h2>
    </div>

    <div className=' flex mt-4 ml-5 mr-5'>
      <ShoppingCart className='font-light' size={40} /><div className='font-medium mt-4 '>Cart</div>
    </div>

    </header>
  )
}

export default Header
