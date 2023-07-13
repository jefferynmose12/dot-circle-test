import React from 'react'

const NavItem = ({item}) => {
  return (
    <div className='mx-6'>
      <p className='text-grey text-lg font-bold hover:text-footer-t cursor-pointer'>{item}</p>
    </div>
  )
}

export default NavItem