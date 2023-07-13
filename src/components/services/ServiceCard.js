import mask from '../../img/mask.png'

const ServiceCard = ({id}) => {
  return (
    <div id={id} className='w-[500px] rounded-xl flex flex-col overflow-hidden'>
        <div className='overflow-hidden'>
            <img src={mask} alt='ground' className='overflow-hidden z-0' />
        </div>
        <div id='detail'>
            <div className='bg-service-bg px-6 py-10 rounded-bl-xl rounded-br-xl z-40'>
                <p className='text-growth-text text-base font-bold'>UI UX DESIGN</p>
                <h4 className='py-4 text-growth-text text-2xl font-bold'>Sequence: Task Manager</h4>
                <p className='text-growth-text text-base leading-6'>We take an innovative approach to problem-solving, 
                this allows us to develop solutions that meet 
                the specific needs of the client and deliver the best 
                possible outcome in the most efficient manner.
                </p>
            </div>
        </div>
    </div>
  )
}

export default ServiceCard