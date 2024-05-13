import './Shows.css'
import ShowCard from '../ShowCard/ShowCard'

const Shows = () => {
    return (
        <main id='shows' className='flex flex-col items-center w-full text-[whitesmoke]'>
            <header className='shows-header w-full py-2 md:py-5 text-center'><span className='text-[1.75rem] md:text-[2rem]'>S</span><span className='text-[1.55rem] md:text-3xl'>HOW</span><span className='text-[1.75rem] md:text-[2rem]'>S</span></header>
            <article className='show-card w-full'>
                <ShowCard />
            </article>

        </main>
    )
}

export default Shows