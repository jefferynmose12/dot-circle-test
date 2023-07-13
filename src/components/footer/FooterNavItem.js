import React from 'react'

const FooterNavItem = ({item}) => {
  return (
    <div className='border-b hover:border-b hover:border-footer-t pb-[2px] duration-500 w-fit'>
      <li className='text-grey text-base font-medium cursor-pointer'>{item}</li>
    </div>
  )
}

export default FooterNavItem