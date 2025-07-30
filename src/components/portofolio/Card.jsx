import { MdArrowOutward } from "react-icons/md";

export default function Card({image , projectName , Development}) {
    return (
        <div className="w-full h-full flex gap-5 items-center cursor-pointer group border-b border-[var(--color-hr)]">
            <div className="flex flex-col w-full h-full pb-8 xl:pb-11 px-8 md:px-25 mt-3 ">
                <img src={image} alt="image" className="w-[60px] object-contain" />

                <div className="flex items-center gap-2 mt-3">
                    <span className="text-[var(--color-gray-project)] group-hover:text-[var(--color-black)] text-[16px] sm:text-[20px] md:text-[28px] font-space leading-[103%] font-semibold">{projectName}</span>
                    <span className="text-[var(--color-gray-project)] text-[16px] sm:text-[20px] md:text-[28px]  font-red leading-[103%] font-semibold">/</span>
                    <span className="text-[var(--color-gray-project)] group-hover:text-[var(--color-primary)] text-[12px] md:text-[16px] font-semibold font-space ">{Development}</span>
                </div>
            </div>

            <div className="opacity-0 group-hover:opacity-100 w-10 h-10 bg-primary rounded-full" >
                <MdArrowOutward size={20} className="w-10 h-10 text-white bg-primary rounded-full " />
            </div>

        </div>
    )
}
