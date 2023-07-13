import React from 'react'
import Title from '../chose/Title'
import ServiceCard from './ServiceCard'

const Services = () => {
  return (
    <div className='py-20'>
        <div className='mx-40'>
            <Title 
                title='Our Services'
            />
        </div>
        <div className='mx-32 flex justify-center gap-10 mt-16 mb-10'>
            <div className='mt-20 flex flex-col gap-20'>
                <ServiceCard 
                    id='service-1'
                />
                <ServiceCard 
                    id='service-2'
                />
            </div>
            <div className='flex flex-col gap-20'>
                <ServiceCard 
                    id='service-3'
                />
                <ServiceCard 
                    id='service-4'
                />
            </div>
        </div>
    </div>
  )
}

export default Services