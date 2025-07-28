import { AiOutlineMenu } from "react-icons/ai";
import { RiTranslate } from "react-icons/ri";
import { IoIosArrowDropright } from "react-icons/io";
import { IoMoonOutline } from "react-icons/io5";
import { RiSunLine } from "react-icons/ri";
import { Logo } from "../../assets";
import { useState } from "react";

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
        <header className="absolute bg-transparent w-full h-[110px] top-0 z-20 flex items-center ">
            
            <div className="container flex justify-between items-center">
                {/* menu */}
                <AiOutlineMenu style={{fontSize: '36px'}} className="cursor-pointer" />

                {/* logo */}
                <img src={Logo} alt="logo" />

                {/* btns */}
                <div className="flex justify-between items-center gap-5">
                    {/* translate */}
                    <div className="flex items-center gap-1">
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
                    <button className="rounded-[10px] px-5 py-3 flex justify-center items-center gap-1 text-white" style={{background: "linear-gradient(260.87deg, #941225 -4.57%, #EB2F4A 99.03%)",}}>
                        LETS TALK <IoIosArrowDropright  style={{color: 'white'}}/>
                    </button>
                </div>

            </div>

        </header>
    )
}
