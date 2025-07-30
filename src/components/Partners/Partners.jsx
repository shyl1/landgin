import { logos } from '../../constants/constants';
import Title from '../shared/Title';

export default function Partners() {
    return (
        <section className="container h-[50vh] px-5">

            <div className="w-full border-b pb-3 border-[var(--color-hr)]">
                <Title title={'OUR PARTNERS'}  fontSize={'text-[15px] sm:text-[22px]'}/>
            </div>

            <div className='grid grid-cols-5 gap-x-2 sm:gap-x-3 md:gap-x-8 lg:gap-x-10 xl:gap-x-35 pt-5'>
                {
                    logos.map((logo)=> (
                        <div key={logo.id} className='flex justify-center items-center'>
                            <img src={logo.img} alt="company logo" className="object-contain"/>
                        </div>
                    ))
                }
            </div>
            
        </section>
    )
}
