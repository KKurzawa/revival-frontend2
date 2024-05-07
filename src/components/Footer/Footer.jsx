import './Footer.css'
import { footerIcons } from '../../utils/Icons'

const Footer = () => {
    const today = new Date();
    return (
        <footer className='footer-container flex flex-col w-full items-center h-auto text-[whitesmoke]'>
            <article className='flex flex-row py-1'>
                {footerIcons.map((icon) => (
                    <i key={icon.id} className='px-4 text-3xl'><a href={icon.link}>{icon.icon}</a></i>
                ))}
            </article>
            <a href='/#header' className='py-[.15rem] text-xl'>To the Top</a>
            <h2 className='mailto-link py-[.15rem] text-xl'> <button onClick={() => setTimeout(() =>
                window.open('mailto:kurzawa1@yahoo.com')
                , 500)} >Email Me</button></h2>
            <h2 className='phone-link py-[.15rem] text-xl'><button onClick={() => setTimeout(() =>
                window.open('tel:2485682806')
                , 500)} >Call Me</button></h2>
            <p className='py-[.15rem] text-xl'>Copyright &copy; {today.getFullYear()} Revival Band Detroit - All Rights Reserved</p>
            <button onClick={() => setTimeout(() => window.open('https://www.kriskurzawadev.com/', '_blank'), 500)} className='mb-1 py-[.15rem] text-xl'>Site Designed and Built by Kris Kurzawa</button>
        </footer>
    )
}

export default Footer