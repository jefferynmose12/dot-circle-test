import React from 'react'

const Card = ({item}) => {
  return (
    <div className='w-1/3'>
        <img src={item.src} alt='first' className='w-full h-[347px]' />
        <div className='xl:px-2 2xl:px-5 py-10'>
            <p className='text-base text-white font-normal'>{item.date}</p>
            <div className='pt-5'>
                <h4 className='text-[32px] text-white font-bold leading-9 pb-5'>
                    {item.title}
                </h4>
                <p className='text-base text-white leading-6 font-normal'>
                    {item.para}
                </p>
            </div>
        </div>
    </div>
  )
}

export default Card