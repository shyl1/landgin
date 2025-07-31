import Title from '../shared/Title';
import Button from '../shared/Button'
import SubTitle from '../shared/SubTitle';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { testimonials } from '../../constants/constants';
import Card from './Card';


export default function Testimonials() {
    return (
        <section  className="flex gap-10 max-md:flex-col mb-25">
            <div className='flex flex-col ml-5 lg:ml-25  mt-3 md:h-[399px] justify-center  max-md:w-full '>
                <Title title={'TESTIMONIALS'} fontSize={'text-[22px]'}  />
                <SubTitle subtitle={'Our Success Stories!'} width={'w-[200px]'} leading={'leading-[103%]'}  fontSize={'text-[16px] sm:text-[25px] md:text-[33px]'}/>

                {/* cta btn */}
                <div className='mt-8'>
                    <Button text={'MORE DETAILS'} padding={'px-5 py-3'} />
                </div>
            </div>

            {/* slider */}
            <div className='overflow-x-hidden'> 
                <div  className='w-full'>
                    <Swiper
                        slidesPerView={'auto'}
                        spaceBetween={20}
                        loop={false}
                        grabCursor={true}
                        allowTouchMove={true}
                        className="w-full"
                    >
                        {
                            testimonials.map((test)=>(
                                <SwiperSlide key={test.id} className='!w-[331px]'>
                                    <Card name={test.name} header={test.header} body={test.body} position={test.pos} image={test.img} />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>

                </div>
            </div>
        </section>
        
    )
}
