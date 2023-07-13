import React from 'react'
import first from '../../img/first.png'
import second from '../../img/second.png'
import third from '../../img/third.png'
import Card from './Card'
import Title from './Title'

const ChoseUs = () => {

  const cardDetails = [
    {
      src: first,
      date: 'JULY, 2023',
      title: 'DotCircle Lab secures a $30m contract with Tesla Inc.',
      para: 'We take an innovative approach to problem-solving, this allows us to develop solutions that meet the specific needs of the client and deliver the best possible outcome in the most efficient manner.'
    },
    {
      src: second,
      date: 'JULY, 2023',
      title: 'DotCircle Lab secures a $30m contract with Tesla Inc.',
      para: 'We take an innovative approach to problem-solving, this allows us to develop solutions that meet the specific needs of the client and deliver the best possible outcome in the most efficient manner.'
    },
    {
      src: third,
      date: 'JULY, 2023',
      title: 'DotCircle Lab secures a $30m contract with Tesla Inc.',
      para: 'We take an innovative approach to problem-solving, this allows us to develop solutions that meet the specific needs of the client and deliver the best possible outcome in the most efficient manner.'
    },
  ]
  return (
    <div className='mx-20 py-16'>
      <Title />
      <div className='flex xl:gap-10 2xl:gap-20 mt-14 mb-10'>
        {cardDetails.map((card, index) => (
          <Card key={index} item={card} />
        ))}
      </div>
    </div>
  )
}

export default ChoseUs