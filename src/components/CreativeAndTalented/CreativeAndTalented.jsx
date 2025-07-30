import Title from '../shared/Title'
import SubTitle from '../shared/SubTitle'
import Button from '../shared/Button'
import { tabs } from '../../constants/constants'
import { useState } from 'react'
import Card from '../shared/Card'
import { PiGooglePlayLogoThin } from "react-icons/pi";
import { VscVr } from "react-icons/vsc";
import { RiReactjsFill } from "react-icons/ri";
import { FaWordpress } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";


export default function CreativeAndTalented() {

    const [activeTab, setActiveTab] = useState("Development");

    return (
        <section className="h-full w-full flex flex-col items-center mt-20">

            <div className=' w-full lg:w-[971px] flex justify-between items-center px-3'>
                
                <div>
                    <Title title={'CREATIVE AND TALENTED'} fontSize={'text-[15px] sm:text-[22px]'} />

                    <SubTitle subtitle={'We Work On Different Fields'} fontSize={'text-[16px] sm:text-[25px] md:text-[37px]'} width={'w-auto'} leading={'leading-[103%]'}/>
                </div>

                {/* cta */}
                <Button text={'LETS TALK'} padding={'sm:px-5 sm:py-3 px-2 py-1 max-h-[50px]'}/>
            </div>


            {/* spcialist */}

            
            <div className='w-full lg:w-[971px] mt-11 px-3'>
                {/* header */}
                <div className='flex justify-between items-center gap-x-2 border-b border-[var(--color-hr)]'>
                    {
                        tabs.map((tab)=> (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`text-[16px] sm:text-[22px] font-bold font-space  pb-3 transition-colors duration-200 cursor-pointer  ${
                                    activeTab === tab
                                        ? "text-[var(--color-primary)] border-b-3 border-[var(--color-line-tab)] "
                                        : "text-[var(--color-gray)] hover:text-[var(--color-toggle)]"
                                }`}
                            >
                                {tab}
                            </button>
                        ))
                    }
                </div>

                {/* crads */}
                <div className='w-full lg:w-[971px] grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 mt-5'>
                    {/* Android Apps */}
                    <Card headerText={'Android Apps'} paraText={'We provide the best UI/UX Design by following the latest.'} 
                        bgIcon={'bg-green'} borderIconRadius={'rounded-[18px]'}  widthBg={'w-[77px] h-[77px]'} icon={<PiGooglePlayLogoThin size={30} style={{color: '#52C3D6'}} />}
                        textSize={'text-[20px]'} MarginTop={'mt-1'} width={'w-[307px]'} height={'h-[230px]'} textColor={'text-[var(--color-black)]'} 
                        paraHeight={'h-[63px]'} paraWidth={'w-[270px]'} bgColor={'hover:bg-toggle'} borderRadius={'rounded-[10px]'}
                        paraColor={'text-[var(--color-para-card)]'} shadowCustom={'shadow-[7px_6px_17px_4px_#0000000F]'}
                        />

                    {/* IOS Apps */}
                    <Card headerText={'IOS Apps'} paraText={'We provide the best UI/UX Design by following the latest.'} 
                        bgIcon={'bg-green'} borderIconRadius={'rounded-[18px]'}  widthBg={'w-[77px] h-[77px]'} icon={<FaApple size={30} style={{color: '#52C3D6'}} />}
                        textSize={'text-[20px]'} MarginTop={'mt-1'} width={'w-[307px]'} height={'h-[230px]'} textColor={'text-[var(--color-black)]'} 
                        paraHeight={'h-[63px]'} paraWidth={'w-[270px]'} bgColor={'hover:bg-toggle '} borderRadius={'rounded-[10px]'}
                        paraColor={'text-[var(--color-para-card)]'} shadowCustom={'shadow-[7px_6px_17px_4px_#0000000F]'}
                        />

                    {/* PHP */}
                    <Card headerText={'PHP'} paraText={'We provide the best UI/UX Design by following the latest.'} 
                        bgIcon={'bg-green'} borderIconRadius={'rounded-[18px]'}  widthBg={'w-[77px] h-[77px]'} icon={<FaPhp size={30} style={{color: '#52C3D6'}} />}
                        textSize={'text-[20px]'} MarginTop={'mt-1'} width={'w-[307px]'} height={'h-[230px]'} textColor={'text-[var(--color-black)]'} 
                        paraHeight={'h-[63px]'} paraWidth={'w-[270px]'} bgColor={'hover:bg-toggle '} borderRadius={'rounded-[10px]'}
                        paraColor={'text-[var(--color-para-card)]'} shadowCustom={'shadow-[7px_6px_17px_4px_#0000000F]'}
                        />

                    {/* WordPress */}
                    <Card headerText={'WordPress'} paraText={'We provide the best UI/UX Design by following the latest.'} 
                        bgIcon={'bg-green'} borderIconRadius={'rounded-[18px]'}  widthBg={'w-[77px] h-[77px]'} icon={<FaWordpress size={30} style={{color: '#52C3D6'}} />}
                        textSize={'text-[20px]'} MarginTop={'mt-1'} width={'w-[307px]'} height={'h-[230px]'} textColor={'text-[var(--color-black)]'} 
                        paraHeight={'h-[63px]'} paraWidth={'w-[270px]'} bgColor={'hover:bg-toggle '} borderRadius={'rounded-[10px]'}
                        paraColor={'text-[var(--color-para-card)]'} shadowCustom={'shadow-[7px_6px_17px_4px_#0000000F]'}
                        />

                    {/* React JS */}
                    <Card headerText={'React JS'} paraText={'We provide the best UI/UX Design by following the latest.'} 
                        bgIcon={'bg-green'} borderIconRadius={'rounded-[18px]'}  widthBg={'w-[77px] h-[77px]'} icon={<RiReactjsFill size={30} style={{color: '#52C3D6'}} />}
                        textSize={'text-[20px]'} MarginTop={'mt-1'} width={'w-[307px]'} height={'h-[230px]'} textColor={'text-[var(--color-black)]'} 
                        paraHeight={'h-[63px]'} paraWidth={'w-[270px]'} bgColor={'hover:bg-toggle '} borderRadius={'rounded-[10px]'}
                        paraColor={'text-[var(--color-para-card)]'} shadowCustom={'shadow-[7px_6px_17px_4px_#0000000F]'}
                        />

                    {/* VR */}
                    <Card headerText={'VR'} paraText={'We provide the best UI/UX Design by following the latest.'} 
                        bgIcon={'bg-green'} borderIconRadius={'rounded-[18px]'}  widthBg={'w-[77px] h-[77px]'} icon={<VscVr size={30} style={{color: '#52C3D6'}} />}
                        textSize={'text-[20px]'} MarginTop={'mt-1'} width={'w-[307px]'} height={'h-[230px]'} textColor={'text-[var(--color-black)]'} 
                        paraHeight={'h-[63px]'} paraWidth={'w-[270px]'} bgColor={'hover:bg-toggle '} borderRadius={'rounded-[10px]'}
                        paraColor={'text-[var(--color-para-card)]'} shadowCustom={'shadow-[7px_6px_17px_4px_#0000000F]'}
                        />
                </div>
            </div>
        </section>
    )
}
