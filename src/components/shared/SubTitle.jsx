

export default function SubTitle({subtitle , fontSize , textPostion , width , height , leading}) {
    return (
        <h2 className={`${fontSize} ${textPostion} ${width} ${height} ${leading} font-space font-bold mt-3`}>{subtitle}</h2>
    )
}
