import './Band.css'
import BandMember from '../BandMember/BandMember'

const Band = () => {
    return (
        <main id='band' className='flex flex-col items-center w-full'>
            <header className='band-header py-2 md:py-5 w-full text-center'><span className='band-header-text text-[1.75rem] md:text-[2rem]'>B</span><span className='band-header-text text-[1.55rem] md:text-3xl'>AN</span><span className='band-header-text text-[1.75rem] md:text-[2rem]'>D</span></header>
            <article className='band-member-container'>
                <BandMember />
            </article>
        </main>
    )
}

export default Band