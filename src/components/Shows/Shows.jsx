import './Shows.css'
import ShowCard from '../ShowCard/ShowCard'

const Shows = () => {
    return (
        <main id='shows' className='flex flex-col items-center text-[whitesmoke]'>
            <header><span className='text-[1.7rem]'>S</span><span className='text-2xl'>HOW</span><span className='text-[1.7rem]'>S</span></header>
            <ShowCard />
        </main>
    )
}

export default Shows