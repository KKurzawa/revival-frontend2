import './Header.css'
import Navbar from '../Navbar/Navbar'
import Logo from '/logo.png'
import RevivalPic from '/Band2.jpeg'
import MobileNavbar from '../MobileNavbar/MobileNavbar'

const Header = () => {
    return (
        <>
            <article id='top'>
                {/* small */}
                <main className='mobile-header-container  flex-col md:hidden'>
                    <MobileNavbar />
                    <img src={RevivalPic} alt='pic' className='mobile-header-pic' />
                </main>
                {/* medium and large */}
                <main className='header-container hidden md:flex flex-col w-full h-auto'>
                    <article className='pic-container flex flex-col items-center w-full'>
                        <img src={Logo} alt='' className='header-logo mt-3' />
                        <Navbar />
                    </article>
                    <img src={RevivalPic} alt='pic' className='header-pic' />
                </main>
            </article>
        </>
    )
}

export default Header