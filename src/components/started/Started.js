import React from 'react'
import Button from '../button/Button'

const Started = () => {

    function handleMoveMouse (e) {
        const cursor = document.getElementById('cursor')

        let x = e.clientX
        let y = e.clientY

        cursor.style.display = 'block'

        cursor.style.left = x + 'px'
        cursor.style.top = y + 'px'
    }

  return (
    <div onMouseMove={(e)=> handleMoveMouse(e)} className='relative overflow-hidden bg-background min-h-96 w-full flex flex-col justify-center items-center py-40 z-0'>
        <h1 className='text-6xl text-white text-center z-40'>Have a great project in mind? <br/> Let’s get started</h1>
        <Button 
            className={'bg-btn-bg px-7 py-2 rounded-xl text-grey-2 text-white mt-20 border border-border-btn z-40'}
            label='Contact us'
        />
        <div
            id='cursor' 
            className='hidden absolute top-10 z-0 2xl:w-60 2xl:h-60 lg:w-40 lg:h-40 bg-footer-t blur-[90px]' 
        />
    </div>
  )
}

export default Started
