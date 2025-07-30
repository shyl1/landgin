import { AboutImg, Illustration } from "../../assets";
import SubTitle from "../shared/SubTitle";
import { CiCircleCheck } from "react-icons/ci";
import Title from "../shared/Title";
import Button  from '../shared/Button';


export default function About() {
    return (
        <section className="max-sm:px-6 h-screen w-full bg-center bg-cover flex justify-center items-center mt-25" style={{backgroundImage: `url(${AboutImg})`}}>

            <div className="container flex justify-center xl:gap-20 items-center">

                {/* img */}
                <img src={Illustration} alt="about us" className="max-xl:hidden" />

                {/* about us content */}
                <div className="flex flex-col w-[524px]">

                    {/* about us title */}
                    <Title title={'about us'} fontSize={'text-[22px]'}/>

                    {/* sub title */}
                    <SubTitle subtitle={'We Are More Than an Agency'} fontSize={'text-[30px] md:text-[50px]'} leading={'leading-[103%]'} />

                    <p className="w-full font-red font-normal text-[16px] md:text-[20px] leading-[100%] mt-11">We create and innovate, with us you can guarantee the
                        highly standards of inventions, We provide the best
                        UI/UX Design by following the latest
                        trends of the market.
                    </p>


                    {/* check list */}
                    <div className="mt-11 flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <CiCircleCheck size={30} style={{color: '#EB2F4A'}}/>
                            <span className="text-[16px] md:text-[20px] font-bold font-space">Fresh Ideas For Your Projects.</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <CiCircleCheck size={30} style={{color: '#EB2F4A'}} />
                            <span className="text-[16px] md:text-[20px] font-bold font-space">Unique Designs That Will Like Your Clients</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <CiCircleCheck size={30} style={{color: '#EB2F4A'}} />
                            <span className="text-[16px] md:text-[20px] font-bold font-space">Fitting Your Business Size and Budget. </span>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-11">
                        <Button text={'LETS TALK'} padding={'px-5 py-3'}/>
                    </div>
                </div>
            </div>
        </section>
    )
}
