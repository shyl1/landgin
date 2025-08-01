import { IoIosArrowDropright } from "react-icons/io";

export default function Button({text , visible , textSize , padding}) {
    return (
        <button className={`${visible} ${textSize} rounded-[10px] ${padding} flex justify-center items-center gap-1 text-white`} style={{background: "linear-gradient(260.87deg, #941225 -4.57%, #EB2F4A 99.03%)",}}>
            {text} <IoIosArrowDropright  style={{color: 'white'}}/>
        </button>
    )
}
