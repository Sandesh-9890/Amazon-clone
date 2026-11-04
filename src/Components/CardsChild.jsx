import React from 'react'

const CardsChild = () => {
    return (
        <div className=''>
            <div className='bg-amber-300 h-[65vh] w-[19vw] m-4 md:mt-2 md:m-4 rounded-2xl flex-wrap relative    '>
                <img className='absolute inset-0 z-0 rounded-2xl object-cover w-full h-full  ' src="https://images.unsplash.com/photo-1618022325802-7e5e732d97a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D " alt="" />
                <div className='absolute inset-0 z-10'>
                    <div className='relative z-20   flex flex-col justify-between'>
                        <div className=' flex flex-col justify-between'>
                            <h1 className='font-bold text-white text-3xl'>Get Whiter Teeth</h1>
                            <p className='text-white text-l '>When purple cancels yellow </p>
                            <div className='flex flex-wrap  '>
                                <p className='text-white  m-2 mr-0'>Free Dilivery</p>
                                <p className='text-white m-2 border-l-2 pl-3'>Easy Return </p>
                            </div>
                        </div>
                        <div className='mt-70 m-3'>
                            <p className='text-white'>t&c apply </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='relative'>Hi</div>
        </div>
    )
}

export default CardsChild
