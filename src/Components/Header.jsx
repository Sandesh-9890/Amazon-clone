import React from 'react'
import logo from '../assets/amazon-logo.png'
const Header = () => {
  return (
    <header className='bg-[rgb(19,25,33)] text-white h-18 w-screen flex'>
        <div className='h-11 w-42'>
            <img src={logo} alt="" />
        </div>

        <div className='mt-2'>
          <p className='text-size'>Delivering to Pune</p>
          <h2>Update Location</h2>
        </div>

    </header>
  )
}

export default Header
