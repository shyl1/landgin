import { Bg, Mobile } from "../../assets";
import SubTitle from "../shared/SubTitle";
import Title from "../shared/Title";
import { projects } from "../../constants/constants";
import Card from './Card';
import Button from '../shared/Button';


export default function Portfolio() {
    return (
        <section className="w-full h-full px-3 mt-20">

            <div className="flex flex-col justify-center items-center mb-5">
                <Title  title={'OUR PORTFOLIO'} fontSize={'text-[22px]'}/>
                <SubTitle subtitle={'Latest Projects Have Been Done'} fontSize={'text-[16px] sm:text-[25px] md:text-[37px]'} width={'w-auto'} leading={'leading-[103%]'} />
            </div>

            <div className="w-full h-full rounded-[35px] flex items-center gap-50 relative" style={{backgroundImage : `url(${Bg})`}}>

                <div className=" flex flex-col">
                    <div className=" flex flex-col gap-y-8 md:gap-y-11">
                        {
                            projects.map((project) => (
                                <Card key={project.id} image={project.img} projectName={project.name} Development={project.deve} />
                            ))
                        }
                    </div>
                    
                    {/* cta  btn*/}
                    <div className="my-11 px-8 md:px-25">
                        <Button  text={'VIEW ALL'} textSize={'text-[14px]'} padding={'px-5 py-3'} />
                    </div>
                </div>

                <div className="hidden xl:block xl:absolute bottom-0 right-[10%]">
                    <img src={Mobile} alt="mobile" className="w-[533px] h-[630px] rounded-2xl"/>
                </div>

            </div>

        </section>
    )
}
