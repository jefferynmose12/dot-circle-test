import React, { useEffect, useState } from 'react'

const VideoSection = () => {
  const [ size, setSize ] = useState({
    width: 750,
    height: 500
  })

  useEffect(() => {
    const scrollFunc = () => {
      setSize({
        width: 950,
        height: 700
      })
    }

    const scrollFuncy = () => {
      setSize({
        width: 750,
        height: 500
      })
    }

    window.addEventListener('scroll', scrollFunc)

    return () => {
      window.removeEventListener('scroll', scrollFuncy)
    }
  },[])
  return (
    <div className='flex justify-center items-center py-16'>
      <video src={'https://www.youtube.com/watch?v=KH7zwQfhzvg'} autoPlay width={size.width} height={size.height} controls />
    </div>
  )
}

export default VideoSection