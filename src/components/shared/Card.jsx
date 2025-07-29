

export default function Card({outerwidth , width , height ,padding ,paraWidth,headerText ,widthBg,paraHeight, paraText , textSize , paraSize , borderRadius,borderIconRadius , bgColor , bgIcon , MarginTop , icon , textColor , borderShadow , borderRight , borderColor}) {
    return (
        <div className={`${padding} ${borderRight} ${borderColor}  ${outerwidth} flex justify-center items-center h-full`}>
            <div className={` ${width} ${height}  ${borderRadius} ${bgColor} ${borderShadow} flex flex-col justify-center items-center`}>
                <div className={`flex justify-center items-center ${bgIcon} ${borderIconRadius} ${widthBg}`}>
                    {icon}
                </div>
                <span className={`${textSize} ${textColor} font-space font-bold text-[var(--color-black)] ${MarginTop} `}>{headerText}</span>
                <span className={` ${paraSize} ${textColor} font-normal font-red text-center ${paraWidth} ${paraHeight} ${MarginTop} `}>{paraText}</span>
            </div>
        </div>
    )
}
