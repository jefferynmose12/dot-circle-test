import React, { useEffect, useState } from 'react'
import Button from '../button/Button'

const Hero = () => {

    const [ color1, setColor1 ] = useState(false)
    const [ color2, setColor2 ] = useState(false)
    const [ color3, setColor3 ] = useState(false)

    useEffect(() => {
        const timer1 = setInterval(() => {
            if(!color2 || !color3) setColor1((prev) => !prev)
        }, 2000)
        const timer2 = setInterval(() => {
            if(!color1 || !color3) setColor2((prev) => !prev)
        }, 4000)
        const timer3 = setInterval(() => {
            if(!color2 || !color1) setColor3((prev) => !prev)
        }, 8000)

        return () => {
            clearInterval(timer1)
            clearInterval(timer2)
            clearInterval(timer3)
        }
    }, [])

    const color = color1 && '#0052CC' || color2 && 'purple' || color3 && 'orange'


  return (
    <div className='mx-20 pt-60 mb-14 flex flex-col justify-center'>
        <div className='flex items-center justify-center text-white gap-5 font-bold 2xl:text-8xl lg:text-7xl'>
            <h1 className={`${color1 ? 'hold' : 'text-white'}`}>Design.</h1>
            <h1 className={`${color2 ? 'hold-2' : 'text-white'}`}>Develop.</h1>
            <h1 className={`${color3 ? 'hold-3' : 'text-white'}`}>Maintain.</h1>
        </div>

        <div className='my-14'>
            <p className='text-grey-3 text-2xl text-center'>
                World class design and engineering teams to get 
                your ideas and projects<br/> up and running quickly
            </p>
        </div>

        <div className='flex items-center justify-center gap-7'>
            <Button
                className='bg-white px-7 py-2 rounded-md text-grey-2'
                label='Start a Project' 
            />
            <Button
                styles={{
                    boxShadow: `10px 10px 100px 0px ${color}`,
                }}
                className='bg-background px-7 py-2 rounded-md text-grey-2 text-white'
                label='Free Consultation' 
            />
        </div>
    </div>
  )
}

export default Hero
