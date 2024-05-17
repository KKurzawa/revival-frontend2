import './Home.css'
import Shows from '../../components/Shows/Shows'
import Band from '../../components/Band/Band'
import Video from '../../components/Video/Video'
import Testimonials from '../../components/Testimonials/Testimonials'
import Contact from '../../components/Contact/Contact'

const Home = () => {
    return (
        <main className='main-container h-auto'>
            <Shows className='' />
            <Band />
            <Video />
            <Testimonials />
            <Contact />
        </main>
    )
}

export default Home