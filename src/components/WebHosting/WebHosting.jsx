import { Web } from "../../assets";
import Button from "../shared/Button";
import SubTitle from "../shared/SubTitle";
import Title from "../shared/Title";


export default function WebHosting() {
    return (
        <section className="w-full h-[70vh] sm:h-screen px-3 mt-35 mb-25">
            <div className="w-full h-full rounded-[35px] flex flex-col pt-25 items-center relative overflow-hidden" style={{background:" radial-gradient(50% 50% at 50% 50%, #345D86 0%, #1C344C 100%" }}>

                <Title title={'NEED A WEB HOSTING'} fontSize={'text-[16px] sm:text-[22px]'}/>
                <SubTitle subtitle={'50% Off On Any Shared Hosting Packages'} fontSize={'text-[14px] sm:text-[25px] md:text-[30px] lg:text-[37px]'} textColor={'text-white'} width={'w-auto'} leading={'leading-[103%]'} />

                {/* cta btn */}
                <div className="flex justify-center items-center mt-11">
                    <Button text={'MORE DETIALS'} padding={'px-5 py-3'}/>
                </div>

                <div className=" absolute bottom-[-11%] opacity-50">
                    <img src={Web} alt="wev server" className=" md:w-[624px] w-auto h-[300px] sm:h-[400px] md:h-[450px]" />
                </div>
            </div>
        </section>
    )
}
