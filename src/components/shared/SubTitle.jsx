

export default function SubTitle({subtitle , fontSize , textPostion , width , height , textColor, leading}) {
    return (
        <h2 className={`${fontSize} ${textPostion} ${width} ${height} ${leading}  ${textColor} font-space font-bold mt-3`}>{subtitle}</h2>
    )
}
