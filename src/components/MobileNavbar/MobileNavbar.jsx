import './MobileNavbar.css'
import { useRef, useState } from 'react';
import { useClickAway } from 'react-use';
import { Sling as Hamburger } from 'hamburger-react';
import { AnimatePresence, motion } from 'framer-motion';
import { navLinks } from '../../utils/Navlinks';
import Logo from '/logo.png'

const MobileNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef(null);

    useClickAway(ref, () => setIsOpen(false))

    return (
        <nav ref={ref} className='flex h-28'>
            <article className='flex justify-around items-center'>
                <Hamburger toggled={isOpen} size={30} toggle={setIsOpen} color='whitesmoke' rounded easing='ease-in' />
                <img src={Logo} alt='logo' className='w-3/4' />
                <Hamburger toggled={isOpen} size={30} toggle={setIsOpen} color='whitesmoke' rounded easing='ease-in' />
            </article>
            <AnimatePresence>
                {isOpen && (
                    <motion.nav
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className='dropdown absolute left-0 right-0 top-[6rem] p-5'
                    >
                        <ul className='open-dropdown grid gap-2'>
                            {navLinks.map((route, idx) => {
                                return (
                                    <motion.li
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 260,
                                            damping: 20,
                                            delay: 0.1 + idx / 10,
                                        }}
                                        key={route.id}
                                        className="w-full p-[0.08rem] rounded-lg bg-gradient-to-tr from-[whitesmoke] via-[gray] to-black bg-black"
                                    >
                                        <a
                                            onClick={() => setIsOpen((prev) => !prev)}
                                            className={
                                                "navlink flex items-center justify-start w-full p-[.6rem] rounded-lg"
                                            }
                                            href={route.link}
                                        >
                                            <span className='text-[1.2rem]'>{route.first}</span>
                                            <span className="flex gap-1 text-lg">{route.title}</span>
                                            <span className='text-[1.2rem]'>{route.last}</span>
                                        </a>
                                    </motion.li>
                                );
                            })}
                        </ul>
                    </motion.nav>
                )}
            </AnimatePresence>
        </nav>
    )
}

export default MobileNavbar