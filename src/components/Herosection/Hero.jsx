import { HeroBg } from "../../assets";


export default function Hero() {
    return (
        <section className="w-full h-screen relative bg-center bg-cover" style={{backgroundImage : `url(${HeroBg})`}}>
            <div className="absolute top-[-20%] text-[200px] bg-gradient-to-b from-[#DEDEDE] to-transparent bg-clip-text text-transparent font-[var(--font-space)] text-bold whitespace-nowrap">CREATIVE MINDS</div>

        </section>
    )
}
