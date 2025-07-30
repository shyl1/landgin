

export default function Card({outerwidth,shadowCustom , width ,paraColor, height ,padding ,paraWidth,headerText ,widthBg,paraHeight, paraText , textSize , paraSize , borderRadius,borderIconRadius , bgColor , bgIcon , MarginTop , icon , textColor , borderShadow , borderRight , borderColor}) {
    return (
        <div className={`${padding} ${borderRight} ${borderColor}  ${outerwidth} flex justify-center items-center h-full `}>
            <div className={`group ${width} ${height}  ${borderRadius} ${bgColor} ${borderShadow} flex flex-col ${shadowCustom} justify-center items-center  cursor-pointer transition-colors duration-300 `}>
                <div className={`flex justify-center items-center ${bgIcon} ${borderIconRadius} ${widthBg}`}>
                    {icon}
                </div>
                <span className={`${textSize} ${textColor}  group-hover:text-white font-space font-bold ${MarginTop} `}>{headerText}</span>
                <span className={` ${paraSize} ${paraColor}  group-hover:text-white font-normal font-red text-center ${paraWidth} ${paraHeight} ${MarginTop} `}>{paraText}</span>
            </div>
        </div>
    )
}
