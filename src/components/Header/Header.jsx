import './Header.css'
import Navbar from '../Navbar/Navbar'
import Logo from '/logo.png'
import RevivalPic from '/HomePhoto.jpg'

const Header = () => {
    return (
        <main id='header' className='header-container flex flex-col w-full h-auto'>
            <article className='pic-container flex flex-col items-center w-full'>
                <img src={Logo} alt='logo' className='header-logo mt-3' />
                <Navbar />

            </article>
            <img src={RevivalPic} alt='pic' className='header-pic' />
        </main>
    )
}

export default Header