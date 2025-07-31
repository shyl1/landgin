import { AboutImg, Logo } from "../../assets";
import Button from "../shared/Button";
import { Naving } from "../../constants/constants";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaVimeoV } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


export default function Footer() {
    return (
        <section className="container w-full h-auto">

            <div className="w-full h-[200px] bg-center bg-cover rounded-[20px] flex gap-y-10 sm:justify-between items-center px-3 sm:px-11 max-lg:flex-col sm:py-5 lg:py-11 " style={{backgroundImage: `url(${AboutImg})`}}>
                <span className="font-red text-[28px] font-semibold max-lg:mb-2 max-md:pt-5">Subscribe Newsletters</span>

                {/* form */}
                <div class="flex items-center justify-between px-[5px] py-[2px] bg-white sm:px-5 border border-[var(--color-hr)]  rounded-[6px] overflow-hidden shadow-md w-[330px] sm:w-[400px] h-[50px] md:w-[500px] md:h-[72px] ">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 p-3 md:px-4 md:py-3 text-[12px] sm:text-[16px] text-gray-600 placeholder-gray-400 focus:outline-none "
                    />
                    <Button text={'SUBSCRIBE NOW'} padding={'p-2 md:px-5 md:py-3'} textSize={'text-[12px]'} />
                    </div>
            </div>

            <div className="flex justify-between items-center mt-5 sm:mt-20 border-b border-[var(--color-hr)] pb-6 px-3 max-lg:flex-col max-lg:gap-y-5">

                <div className="flex items-center gap-x-3 md:gap-x-10 ">
                    {
                        Naving.map((nav ,index)=> (
                            <div key={index}>
                                <span className="font-space font-normal text-[10px] md:text-[14px] text-[var(--color-black)] hover:text-[var(--color-primary)] cursor-pointer">{nav}</span>
                            </div>
                        ))
                    }
                </div>

                <div className="flex items-center gap-x-5 md:gap-x-8">
                    <FaFacebookSquare size={24} className="text-[var(--color-black)] hover:text-[var(--color-primary)] cursor-pointer"/>
                    <FaTwitter  size={24} className="text-[var(--color-black)] hover:text-[var(--color-primary)] cursor-pointer" />
                    <FaVimeoV size={24} className="text-[var(--color-black)] hover:text-[var(--color-primary)] cursor-pointer"/>
                    <FaYoutube  size={24} className="text-[var(--color-black)] hover:text-[var(--color-primary)] cursor-pointer" />
                </div>

            </div>

            <div className="flex justify-between items-center mt-3 px-3 mb-5 md:mb-11">

                <span className=" uppercase font-space font-semibold text-[8px] sm:text-[10px] md:text-[13px]">
                    © 2023 Creative Minds. All rights reserved.
                </span>

                <img src={Logo} alt="logo"  className="w-[150px] h-[59px] sm:w-[200px] sm:h-[69px] md:w-[223px] md:h-[73px] object-contain"/>

            </div>

        </section>
    )
}
