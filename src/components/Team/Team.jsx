import { team } from "../../constants/constants";
import SubTitle from "../shared/SubTitle";
import Title from "../shared/Title";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Card from "./Card";

export default function Team() {
    return (
        <section className=" relative h-[100vh] w-full overflow-hidden flex flex-col justify-center mb-11">
            <div className="flex justify-center items-start absolute top-[-11%] text-[200px] bg-[linear-gradient(180deg,_rgba(28,52,76,0.1)_0%,_rgba(255,255,255,0)_100%)] bg-clip-text text-transparent font-space font-bold whitespace-nowrap">TEAM MEMBERS</div>

            <div className="mt-11 text-center">
                <Title title={'OUR TEAM'} fontSize={'text-[22px]'}/>
                
                <SubTitle  subtitle={'Creative And Talented'} leading={'leading-[103%]'} width={'w-auto'} fontSize={'text-[16px] sm:text-[25px] md:text-[33px]'}/>
            </div>

            <div className='overflow-x-hidden pl-5 md:pl-25 mt-11'> 
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
                            team.map((te)=>(
                                <SwiperSlide key={te.id} className='!w-[260px] '>
                                    <Card name={te.name} position={te.pos} image={te.img}/>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>

                </div>
            </div>


        </section>
    )
}


