

export default function Card({image , name , position}) {
    return (
        <div className="w-auto h-auto flex flex-col justify-center items-center gap-y-5">

            <img src={image} alt="image" className="object-contain md:w-[260px] md:h-[250px] w-[200px] h-[200px]" />

            <div className="flex flex-col justify-center items-center gap-y-2">
                <span className="text-[#292D32] text-[20px] md:text-[28px] font-space font-semibold leading-[103%]">{name}</span>
                <span className="text-[12px] uppercase font-space font-semibold text-[var(--color-primary)]">{position}</span>

            </div>
            
        </div>
    )
}
