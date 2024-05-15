import './Footer.css'
import { footerIcons } from '../../utils/Icons'

const Footer = () => {
    const today = new Date();
    return (
        <footer className='footer-container flex flex-col w-full items-center h-auto py-3 text-[whitesmoke]'>
            <article className='icon-container flex flex-row my-1'>
                {footerIcons.map((icon) => (
                    <i key={icon.id} className='footer-icons mx-4 text-3xl'><a className='footer-icons-link' href={icon.link}>{icon.icon}</a></i>
                ))}
            </article>
            <h2 className='mailto-link py-[.15rem] text-md md:text-xl'> <button onClick={() => setTimeout(() =>
                window.open('mailto:kurzawa1@yahoo.com')
                , 500)} >Email Us</button></h2>
            <h2 className='phone-link py-[.15rem] text-md md:text-xl'><button onClick={() => setTimeout(() =>
                window.open('tel:2485682806')
                , 500)} >Call Us</button></h2>
            <p className='copyright py-[.15rem] text-[.6rem] md:text-xl'>Copyright &copy; {today.getFullYear()} Revival Band Detroit - All Rights Reserved</p>
            <button onClick={() => setTimeout(() => window.open('https://www.kriskurzawadev.com/', '_blank'), 500)} className='dev-link mb-1 py-[.15rem] text-[.6rem] md:text-xl'>Site Designed and Built by Kris Kurzawa</button>
        </footer>
    )
}

export default Footer