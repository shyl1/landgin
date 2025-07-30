import { AiOutlineMenu } from "react-icons/ai";
import { RiTranslate } from "react-icons/ri";
import { IoMoonOutline } from "react-icons/io5";
import { RiSunLine } from "react-icons/ri";
import { Logo } from "../../assets";
import { useState } from "react";
import Button from "../shared/Button";

export default function Header() {

    const [isDark, setIsDark] = useState(false);

    function toggleTheme()  {
        setIsDark(!isDark);
        if (!isDark) {
            document.documentElement.classList.add("dark"); 
        } else {
            document.documentElement.classList.remove("dark");
        }
    };


    return (
        <header className="fixed backdrop-blur-xs bg-white/10 w-full h-[110px] top-0 z-20 flex items-center ">
            
            <div className="container flex justify-between items-center max-2xl:px-5">
                {/* menu */}
                <AiOutlineMenu style={{fontSize: '36px'}} className="cursor-pointer" />

                {/* logo */}
                <div className="flex-1 flex justify-center items-center">
                    <img src={Logo} alt="logo" className="w-[152px] h-[60px] md:w-[223px] md:h-[73px]" />
                </div>

                {/* btns */}
                <div className="flex justify-between items-center gap-2 sm:gap-5">
                    {/* translate */}
                    <div className="flex items-center gap-1 max-md:hidden">
                        <span className="font-[var(--font-Tajawal)]">اللغة العربية</span>
                        <RiTranslate  />
                    </div>

                    {/* switch for dark mode */}
                    <div>
                        <label className="inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            checked={isDark}
                            onChange={toggleTheme}
                            className="sr-only peer"
                        />
                        <div className="relative w-12 h-6 peer-focus:outline-none px-3  rounded-full bg-gray-200 peer-checked:bg-toggle dark:peer-checked:bg-toggle transition">
                            <span
                                className={`absolute top-0 left-0 w-6 h-6 flex items-center justify-center
                                transform transition-transform duration-300
                                ${isDark ? "translate-x-6 text-white " : "translate-x-0 text-yellow-500"}`}
                                >
                                {isDark ? <IoMoonOutline size={16} /> : <RiSunLine size={16} />}
                            </span>
                        </div>
                        </label>
                    </div>
                    {/* call to action btn */}

                    <Button visible={'max-md:hidden'} text={'LETS TALK'} padding={'px-5 py-3'}/>
                    
                </div>

            </div>

        </header>
    )
}
