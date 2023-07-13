import React from 'react'
import PromotionIcon from '../icon/PromotionIcon'

const GrowthCard = ({icon, title, para, id}) => {
  return (
    <div id={id} className='bg-growth-bg py-[46px] px-[24px] w-1/2 h-[320px] rounded-lg'>
      <div className='border-[0.5px] border-footer-t w-[50px] h-[50px] rounded-lg'>
          {icon}
      </div>

      <h2 className='mt-8 text-3xl text-growth-text font-bold'>{title}</h2>

      <p className='mt-5 text-xl text-growth-text'>
          {para}
      </p>
    </div>
  )
}

export default GrowthCard