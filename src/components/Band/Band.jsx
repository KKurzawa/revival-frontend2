import './Band.css'
import BandMember from '../BandMember/BandMember'

const Band = () => {
    return (
        <main id='band' className='flex flex-col items-center w-full text-[whitesmoke]'>
            <header className='band-header pb-5 w-full text-center'><span className='text-[1.7rem]'>B</span><span className='text-2xl'>AN</span><span className='text-[1.7rem]'>D</span></header>
            <BandMember />
        </main>
    )
}

export default Band