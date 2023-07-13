import React from 'react'
import Title from '../chose/Title'
import PromotionIcon from '../icon/PromotionIcon'
import GrowthCard from './GrowthCard'
import TimingIcon from '../icon/TimingIcon'
import GroupIcon from '../icon/GroupIcon'
import HandShakeIcon from '../icon/HandShakeIcon'

const GrowthChose = () => {
  return (
    <div className='mx-20 py-20'>
        <Title />
        <div className='flex flex-col gap-5 mt-14 mb-10'>
            <div className='flex gap-5'>
                <GrowthCard
                    id='card-1'
                    icon={<PromotionIcon />}
                    title='Great Communication'
                    para='We work closely with our clients to make sure that 
                        they are completely satisfied with the end result 
                        and that they understand what we have done for them.'
                />
                <GrowthCard
                    id='card-2'
                    icon={<TimingIcon />}
                    title='Timely Delivery'
                    para='It is our priority at DotCircle to always provide 
                        our clients with timely and accurate deliveries. 
                        We understand that time is valuable which is why we 
                        take great care.'
                />
            </div>
            <div className='flex gap-5'>
                <GrowthCard
                    id='card-3'
                    icon={<GroupIcon />}
                    title='Highly Experienced Team'
                    para='Our team is comprised of experts in their field, 
                        so you can be rest assured knowing that we have the 
                        experts to deliver top-notch results everytime.'
                />
                <GrowthCard 
                    id='card-4'
                    icon={<HandShakeIcon />}
                    title='Commitment'
                    para='At DotCircle, we care about our clients and go 
                        above and beyond to make sure they are happy with the final 
                        products. This is what makes us stand out from the rest.'
                />
                
            </div>
        </div>
    </div>
  )
}

export default GrowthChose