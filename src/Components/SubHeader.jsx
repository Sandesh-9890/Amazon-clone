import React from 'react'
import {Menu} from 'lucide-react'
import {ChevronRight} from 'lucide-react'
import {Balloon} from 'lucide-react'
import diya from '../assets/diya.png'

const SubHeader = () => {
  return (
      <div className='flex'>
          <div className=' w-screen bg-[rgb(35,47,62)] text-white flex  gap-3'>
              <div className='flex font-medium'><Menu className='mt-0.5' />All</div>
              <div>Fresh</div>
              <div>Prime Video</div>
              <div>Sell</div>
              <div>Bestsellers</div>
              <div>Today's Deals</div>
              <div>Mobiles </div>
              <div>Amazon Pay</div>
              <div>New Releases</div>
              <div>Customer Service</div>
          </div>
          <div className='  bg-[rgb(35,47,62)] text-white flex justify-evenly'> <img src={diya} className='h-5 flex flex-wrap' alt="" /> <p className='w-67 font-bold'>Great Indian Festival | Live Now</p><ChevronRight  /></div>
      </div>    
  )
}

export default SubHeader
