import React from 'react'
import RectanglarIcon from '../icon/RectanglarIcon'

const Title = ({title}) => {
  return (
    <div className='relative'>
        <h2 className='text-2xl font-bold text-white z-20 pt-[5px] pl-10'>{title ? title : 'Why Choose Us'}</h2>
        <div id='rect'>
          <RectanglarIcon />
        </div>
    </div>
  )
}

export default Title