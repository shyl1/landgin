import Card from "../shared/Card";
import { RiImageCircleFill } from "react-icons/ri";
import { GiGymBag } from "react-icons/gi";
import { SiCodefresh } from "react-icons/si";
import CounterCard from "../shared/CounterCard";


export default function Achievement() {
    return (
        <section className=" h-full xl:h-[86.4vh]  ">

            {/* achievements */}
            <div className="container h-[20vh] md:h-[35vh]">
                <div className="grid grid-cols-4 h-full">
                    <CounterCard text={'Completed Projects'} counter={'410+'} borderColor={'border-[var(--color-hr)]'} borderRight={'border-r'}/>

                    <CounterCard text={'Winning Awards'} counter={'17+'} borderColor={'border-[var(--color-hr)]'} borderRight={'border-r'}/>

                    <CounterCard text={'Happy Clients'} counter={'233+'} borderColor={'border-[var(--color-hr)]'} borderRight={'border-r'}/>

                    <CounterCard text={'Countries Served'} counter={'12+'}/>
                </div>
            </div>

            {/* divider */}
            <hr className="h-[1px] w-full border-[var(--color-hr)] " />

            <div className="container h-auto xl:h-[40vh]">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 h-full ">

                    {/* Unique Designs  */}
                    <Card headerText={'Unique Designs'} paraText={'We provide the best UI/UX Design by following the latest trends of the market.'} 
                        bgIcon={'bg-yellow'} borderIconRadius={'rounded-[43px]'}  widthBg={'w-[60px] h-[60px]'} icon={<RiImageCircleFill size={46} style={{color: '#FFBD4E'}} />}
                        textSize={'text-[27px]'} MarginTop={'mt-2'} width={'w-[350px] xl:w-[390px]'} height={'h-[290px] xl:h-[322px]'} textColor={'text-[var(--color-black)]'} paraHeight={'h-[63px]'} paraWidth={'w-[270px]'}
                        borderColor={'border-[var(--color-hr)]'} borderRight={'max-lg:border-b md:border-r'} 
                        />

                    {/* Fitting Your Business  */}
                    <Card headerText={'Fitting Your Business '} paraText={'We create and innovate, with us you can guarantee the highly standards of inventions'} bgIcon={'bg-red'} 
                        borderIconRadius={'rounded-[43px]'}  widthBg={'w-[60px] h-[60px]'} icon={<GiGymBag size={34} style={{color: '#EB2F4A'}} />}
                        textSize={'text-[27px]'} MarginTop={'mt-2'} width={'w-[350px] xl:w-[390px]'} height={'h-[290px] xl:h-[322px]'} textColor={'text-white'} paraHeight={'h-[63px]'} paraWidth={'w-[270px]'}
                        borderColor={'border-[var(--color-hr)]'} borderRight={'max-lg:border-b lg:border-r'} bgColor={'bg-toggle'} 
                        borderRadius={'rounded-[10px]'} padding={' p-5'} 
                    />

                    {/* Fresh Ideas */}
                    <Card headerText={'Fresh Ideas'} paraText={'We provide the best UI/UX Design by following the latest trends of the market.'} bgIcon={'bg-green'} 
                        borderIconRadius={'rounded-[43px]'}  widthBg={'w-[60px] h-[60px]'} icon={<SiCodefresh size={34} style={{color: '#52C3D6'}} />}
                        textSize={'text-[27px]'} MarginTop={'mt-2'} width={'w-[350px] xl:w-[390px]'} height={'h-[290px] xl:h-[322px]'} textColor={'text-[var(--color-black)]'} 
                        paraHeight={'h-[63px]'} paraWidth={'w-[270px]'}  borderRight={'max-xl:border-t'} borderColor={'border-[var(--color-hr)]'}
                        />
                </div>

            </div>

        </section>
    )
}
