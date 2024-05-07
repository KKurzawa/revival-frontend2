import './Landing.css'
import logo from '/logo.png'

const Landing = () => {
    return (
        <main className='landing-main flex h-full w-full'>
            <article className='flex flex-col justify-center items-center h-screen w-full'>
                <img src={logo} alt='logo' className='landing-logo' />
                <h1 className='landing-text pt-3 text-2xl text-[whitesmoke]'>Detroits Ultimate Allman Brothers Experience</h1>
            </article>

        </main>
    )
}

export default Landing