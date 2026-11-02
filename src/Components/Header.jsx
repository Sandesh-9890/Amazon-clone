import React from 'react'
import logo from '../assets/amazon-logo.png'
import {MapPin} from 'lucide-react'
const Header = () => {
  return (
    <header className='bg-[rgb(19,25,33)] text-white h-18 w-screen flex '>
        <div className='h-11 w-42'>
            <img src={logo} alt="" />
        </div>

        <div className='mt-5  flex flex-col gap-0.1'>
          <p className='text-[10px] ml-5 '>Delivering to Pune 411001</p>
          <div className='flex'>
            <MapPin size={20} />
            <h2>Update Location</h2>
          </div>
        </div>

        <div className='flex justify-center m-5  hover:border-orange-300  '>
          <select class='All' className='bg-[rgb(230,230,230)]  hover:bg-grey-700 h-8 w-10 text-black rounded-s-lg flex justify-center scroll-auto  ' >
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
          <input type="text"  placeholder='Search Amazon.in' className='bg-amber-50 h-8 w-100 rounded-e-lg text-grey border-0 hover:border-yellow-500 ' />
        </div>


    </header>
  )
}

export default Header
