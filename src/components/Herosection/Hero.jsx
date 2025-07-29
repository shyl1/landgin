
import { Typewriter } from "react-simple-typewriter";
import { HeroBg, Pics } from "../../assets";
import { LuPlay } from "react-icons/lu";
import CircularText from "./CircularText";


export default function Hero() {
    return (
    <section>
        <section className="w-full h-[98vh] relative bg-center bg-cover overflow-hidden" style={{backgroundImage : `url(${HeroBg})`}}>
            <div className="absolute top-[-20%] text-[200px] bg-gradient-to-b from-[#DEDEDE] to-transparent bg-clip-text text-transparent font-[var(--font-space)] text-bold whitespace-nowrap ">CREATIVE MINDS</div>


            <div className="flex justify-center items-center flex-col pt-[120px]">
                {/* img */}
                <img src={Pics} alt="avaters" className="w-[130px] h-[35px] sm:w-[210px] sm:h-[52px] mt-[30px]" />

                {/* typewrite animation */}
                <div className="text-center text-[30px] sm:text-[48px] text-[var(--color-black)] font-space tracking-[0.105em] font-medium  mt-5">
                    <span>WE BUILD </span>
                    <span className="text-[var(--color-primary)]">
                        <Typewriter
                        words={['APPS']}
                        loop={0}
                        cursor
                        cursorStyle="|"
                        typeSpeed={100}
                        deleteSpeed={50}
                        delaySpeed={1000}
                        />
                    </span>

                    <div className='text-[30px] sm:text-[48px] font-space tracking-[10.5%] font-medium uppercase '>
                        <span>that users love!</span>
                    </div>
                </div>
                <p className="w-[320px] sm:w-[450px] wrap-break-word text-[var(--color-black)] text-center text-[12px] sm:text-[14px] font-normal">We believe that we succeed when our clients succeed Which is why we never stop learning</p>


                {/* circular typewriting */}

                <div className="bg-white w-[180px] h-[180px] mt-11 rounded-full  relative shadow-[var(--shadow-custom)]">
                    <CircularText 
                        text="PARTERYOURCREATIVE "
                        onHover="slowDown"
                        spinDuration={20}
                        className="custom-class"
                    />
                    
                    <span className="absolute top-[35%] left-[36%] bg-primary w-[50px] h-[50px] flex justify-center items-center rounded-full">
                        <LuPlay size={22}  style={{color: 'white'}}/>
                    </span>
                    
                </div>
            </div>

        </section>

        {/* wrapping */}
        <div className=" w-full h-[50px] sm:h-[100px] bg-hover flex justify-center items-center overflow-hidden skew-y-2 mt-[-27px]" >
            <p className="uppercase  text-[12px] sm:text-[20px] font-normal font-space text-[var(--color-white)]  whitespace-nowrap">
                We believe that we succeed when our clients succeed Which is why we never stop learninWe believe that we succeed when our clients succeed Which is why we never stop learnin
            </p>
        </div>
    </section>
    )
}
