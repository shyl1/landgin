

export default function Card({header , body ,  image , name , position}) {
    return (
        <div className='w-[331px] h-[370px] rounded-[35px] flex justify-center items-center flex-col px-3'  style={{background:" radial-gradient(50% 50% at 50% 50%, #345D86 0%, #1C344C 100%" }}>

            <h1 className="text-[22px] font-space font-semibold text-white text-center">{header}</h1>
            <p className="font-red text-[14px] font-semibold text-white mt-5 text-center">{body}</p>

            <div className="flex flex-col justify-center items-center  mt-11">
                <img src={image} alt="image" className="w-[50px] h-[50px] rounded-full object-cover" />
                <span className="font-red text-[18px] leading-[100%] font-medium text-white">{name}</span>
                <span className="text-[var(--color-light-gray)] text-[12px] font-medium font-red">{position}</span>
            </div>

        </div>
    )
}
