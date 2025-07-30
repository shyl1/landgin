import { images } from "../../constants/constants.js";
import SubTitle from "../shared/SubTitle";
import Title from "../shared/Title";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';


export default function Delivering() {
    return (
        <section className="w-full h-[50vh] flex flex-col items-center mt-5 md:mt-25">

            <Title title={'Delivering'} />

            <SubTitle subtitle={'Your Project With The Newest Technologies Used'} fontSize={'text-[20px] sm:text-[25px] md:text-[37px]'} textPostion={'text-center'} width={'w-[350px] sm:w-[380px] md:w-[526px]'} height={'h-[81px]'} leading={'leading-[103%]'}/>


            {/* infinite scroll using swiper */}
            <div className="w-full mt-10">
                <Swiper
                    modules={[Autoplay]}
                    slidesPerView="auto"
                    spaceBetween={20}
                    loop={true}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    speed={6000}
                    grabCursor={false}
                    allowTouchMove={false}
                >
                    {
                        [...images,...images].map((image , index)=>(
                            <SwiperSlide key={`${image.id}-${index}`} className="!w-[100px] !h-[60px] md:!w-[180px] md:!h-[110px] rounded-[10px] shadow-[0px_0px_17px_10px_#0000000F] !flex !justify-center !items-center ">
                                <img src={image.img}  className="object-contain" />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
}

{/* infinite scroll  using tailwind animation */}
            {/* <div className="overflow-x-hidden w-full h-full flex justify-center items-center mt-5">
                <ul className="flex gap-10 animate-infinite-scroll ">
                    {
                        [...images,...images].map((image , index)=>(
                            <li key={`${image.id}-${index}`} className="min-w-[180px] h-[110px] rounded-[10px] shadow-[0px_0px_17px_10px_#0000000F] flex justify-center items-center">
                                <img src={image.img} />
                            </li>
                        ))
                    }
                </ul>
            </div> */}