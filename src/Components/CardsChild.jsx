import React from 'react'

const CardsChild = (props) => {
    return (
        <div className=''>
            <div className='bg-amber-300 h-[65vh] w-[19vw] m-4 md:mt-2 md:m-4 rounded-2xl flex-wrap relative    '>
                <img className='absolute inset-0 z-0 rounded-2xl object-cover w-full h-full  ' src={props.bgImage} alt="" />
                <div className='absolute inset-0 z-10'>
                    <div className='relative z-20   flex flex-col justify-between'>
                        <div className=' flex flex-col justify-between'>
                            <h1 className='font-bold text-white text-3xl m-2'>{props.header1}</h1>
                            <p className='text-white text-l m-2 font-medium '>{props.header2} </p>
                            <div className='flex flex-wrap  '>
                                <p className='text-white  m-2 mr-0 font-medium'>{props.header3}</p>
                                <p className='text-white m-2 border-l-2 pl-3 font-medium'>{props.header4} </p>
                            </div>
                        </div>
                        <div className='mt-100 ml-3 '>
                            <p className='text-white'>t&c apply </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardsChild
