import './Landing.css'
import logo from '/logo.png'

const Landing = () => {
    return (
        <main className='landing-main flex h-full w-full'>
            <article className='flex flex-col justify-center items-center h-screen w-full'>
                <img src={logo} alt='logo' className='mobile-landing-logo flex md:hidden w-[90%] h-auto' />
                <img src={logo} alt='logo' className='landing-logo hidden md:flex h-auto' />
                <h1 className='landing-text text-center pt-3 text-lg md:text-2xl text-[whitesmoke]'>Detroits <span className='ultimate'>Ultimate </span><span className='allman'>Allman Brothers </span><span className='experience'>Experience</span></h1>
            </article>

        </main>
    )
}

export default Landing