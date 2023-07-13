import React from 'react'
import Title from '../chose/Title'
import Comment from './Comment'
import Slider from "react-slick";

const SlideChose = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 2.5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: "linear"
    };

  return (
    <div className='py-20'>
        <div className='mx-20'>
            <Title />
        </div>
        <div className='mt-10 mx-auto overflow-hidden flex flex-col gap-6'>
            <Slider {...settings}>
                <div>
                    <Comment />
                </div>
                <div className=''>
                    <Comment />
                </div>
                <div>
                    <Comment />
                </div>
                <div>
                    <Comment />
                </div>
            </Slider>
            <Slider {...settings}>
                <div>
                    <Comment />
                </div>
                <div className=''>
                    <Comment />
                </div>
                <div>
                    <Comment />
                </div>
                <div>
                    <Comment />
                </div>
            </Slider>
        </div>
    </div>
  )
}


export default SlideChose