import React from 'react'
import Title from '../chose/Title'
import profile from '../../img/profile.png'
import commas from '../../img/commas.png'

const Comment = () => {

  return (
    <div id='comment' className='relative w-[95%] bg-btn-bg rounded-2xl p-7'>
        <p className='text-base text-white'>
            Our experience with DotCircle Labs was truly transformative. 
            They listened, helping us frame our ideas, then brought in creativity, 
            sensitivity and professionalism in bucket loads. We felt on the same side, 
            working to a common aim which Athlon believed in. We are delighted with the 
            branding and importantly so are our community of users.”
        </p>
        <div className='flex items-center gap-3 pt-5'>
            <img src={profile} alt='profile' className='w-10 h-10' />
            <p className='text-base text-grey italic'>Prof. Claudia Estcourt, Glasgow Caledonian University</p>
        </div>
        <img src={commas} alt='profile' className='absolute bottom-0 right-10' />
    </div>
  )
}


export default Comment