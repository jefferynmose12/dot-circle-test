import React from 'react'
import LogoWhite from '../logo/LogoWhite'
import CallIcon from '../icon/CallIcon'
import LinkedinIcon from '../icon/LinkedinIcon'
import TwitterIcon from '../icon/TwitterIcon'
import InstagramIcon from '../icon/InstagramIcon'
import FooterNavItem from './FooterNavItem'

const Footer = () => {
    const quickLinks = ['Home', 'Our Services', 'Our Team', 'Contact us']
    const services = ['Web Development', 'Mobile Development', 'Blockchain Development', 'UI UIX Design', 'Product Design', 'Audit & IT Consultancy']
    const legal = ['Media Kit', 'Terms & Conditions', 'Privacy Policy', 'Licensing']

  return (
    <div className='mx-14 pt-10 pb-4 px-5 z-20'>
        <div className='flex justify-between mb-14'>
            <div className='flex flex-col gap-4 flex-initial'>
                <LogoWhite />
                <p className='text-grey-4 text-sm'>
                    We pride ourselves on our work ethic 
                    and our <br/> ability to think outside the box.
                </p>
                <div className='flex items-center gap-2 my-4'>
                    <CallIcon />
                    <p className='text-white text-sm'>+234 906 712 9989</p>
                </div>
                <div className='flex items-center justify-start gap-5'>
                    <LinkedinIcon />
                    <TwitterIcon />
                    <InstagramIcon />
                </div>
            </div>

            <div className='flex gap-32'>
                <div className='mt-3'>
                    <h3 className='font-medium text-sm text-footer-t'>QUICK lINKS</h3>
                    <ul className='flex flex-col gap-4 mt-7'>
                        {quickLinks.map((link, index) => {
                            return <FooterNavItem key={index} item={link} />
                        })}
                    </ul>
                </div>

                <div className='mt-3'>
                    <h3 className='font-medium text-sm text-footer-t'>SERVICES</h3>
                    <ul className='flex flex-col gap-4 mt-7'>
                        {services.map((link, index) => {
                            return <FooterNavItem key={index} item={link} />
                        })}
                    </ul>
                </div>

                <div className='mt-3'>
                    <h3 className='font-medium text-sm text-footer-t'>LEGAL</h3>
                    <ul className='flex flex-col gap-4 mt-7'>
                        {legal.map((link, index) => {
                            return <FooterNavItem key={index} item={link} />
                        })}
                    </ul>
                </div>
            </div>
        </div>
        <div className='border-b-[0.5px] border-grey-4 my-5' />
        <p className='text-[15px] text-grey-4 text-center'>Copyright © 2023. DotCircle Labs. All rights reserved.</p>
    </div>
  )
}

export default Footer