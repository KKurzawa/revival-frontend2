import './Navbar.css'
import { navLinks } from '../../utils/Navlinks'

const Navbar = () => {
    return (
        <nav className='flex justify-evenly w-full h-12 mb-3 mt-3'>
            {navLinks.map((link) => (
                <button key={link.id} onClick={() => setTimeout(() => {
                    const element = document.querySelector(link.link);
                    element?.scrollIntoView({ behavior: 'smooth' })
                }
                    , 250)} className='nav-link flex items-center px-2 text-[whitesmoke]'><span className='flex items-center justify-center pb-[.1rem] text-[1.35rem]'>{link.first}</span><span className='text-xl'>{link.title}</span><span className='flex items-center justify-center pb-[.1rem] text-[1.35rem]'>{link.last}</span></button>
            ))}
        </nav>
    )
}

export default Navbar