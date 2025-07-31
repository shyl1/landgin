import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function CounterCard({counter , text ,borderRight , borderColor}) {
    const { ref, inView } = useInView({ triggerOnce: true });

    return (
        <div ref={ref} className={`flex flex-col justify-center items-center  ${borderRight} ${borderColor}`}>
            <span className="text-[var(--color-primary)] font-bold text-[20px] sm:text-[25px] md:text-[30px] lg:text-[48px] font-space">
                {inView ? <CountUp end={parseInt(counter)} duration={3} suffix="+" /> : "0+"}
            </span>
            <span className="text-[9px] sm:text-[12px] md:text-[16px] lg:text-[22px] text-[var(--color-black)] font-red font-medium">{text}</span>
        </div>
    )
}
