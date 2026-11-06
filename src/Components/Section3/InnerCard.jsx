import React from 'react'
import InnerCard1 from './InnerCard1'
import {ChevronRight} from 'lucide-react'

const InnerCard = () => {
  return (
    <div className='h-[60vh] w-[23vw] rounded-2xl bg-amber-500'>
    <div className='flex justify-between'>
        <h1 className='font-bold text-2xl'>Header1</h1>
        <h1><ChevronRight className='font-medium' size={40} /></h1>
    </div>
    <div className=' flex flex-wrap justify-evenly gap-5 '>
        
        <InnerCard1 />
        <InnerCard1 />
        <InnerCard1 />
        <InnerCard1 />
    </div>
    </div>
  )
}

export default InnerCard
