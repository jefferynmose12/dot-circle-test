import React from 'react'
import LogoSvg from '../logo/LogoSvg'
import NavItem from './NavItem'
import Button from '../button/Button'

const NavBar = () => {

    const navItems = ['Case Studies', 'Services', 'About', 'Careers']

  return (
    <div className="px-4 md:px-10 lg:px-14 xl:px-20 h-20 bg-background shadow flex gap-16 justify-around items-center fixed z-40 top-0 bottom-0 w-full">
    
        <LogoSvg />

        <div className='flex'>
            {navItems.map((item, index) => {
                return (
                    <NavItem key={index} item={item} />
                )
            })}
        </div>

        <Button 
            className='bg-white px-8 py-3 rounded-lg text-grey-2 hover:text-footer-t' 
            label='Start a Project'        
        />
    </div>
  )
}

export default NavBar
