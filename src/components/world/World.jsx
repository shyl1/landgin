import { Map } from "../../assets";
import SubTitle from "../shared/SubTitle";
import Title from "../shared/Title";

import { PiDotFill } from "react-icons/pi";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";


export default function World() {
    return (
        <section className="w-full h-auto relative mb-5 md:mb-25">

            <div className="text-center mb-8">
                <Title title={'AROUND THE WORLD'} fontSize={'text-[22px]'} />

                <SubTitle subtitle={'Look around you we are every where!'} leading={'leading-[103%]'}  fontSize={'text-[16px] sm:text-[25px] md:text-[33px]'} />
            </div>

            <div className="container">
                <div className="h-[60vh] bg-center bg-no-repeat bg-contain w-full relative" style={{backgroundImage : `url(${Map})`}}>
                    <span className=" absolute top-[45%] left-[30%]"><PiDotFill /></span>
                    <span className=" absolute top-[30%] left-[40%]"><PiDotFill /></span>
                    <span className=" absolute top-[55%] right-[43%]"><PiDotFill /></span>
                    <span className=" absolute top-[40%] right-[34%]"><PiDotFill /></span>
                    <span className=" absolute top-[59%] right-[47%]"><HiOutlineBuildingLibrary className="bg-[#EB2F4A] text-white w-[20px] h-[20px] p-[5px] rounded-full"  /></span>
                    <span className=" absolute top-[43%] left-[35%]"><HiOutlineBuildingLibrary className="bg-[#EB2F4A] text-white w-[20px] h-[20px] p-[5px] rounded-full"  /></span>
                </div>
            </div>

        </section>
    )
}
