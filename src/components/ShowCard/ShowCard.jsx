import './ShowCard.css'
import { shows } from '../../utils/Shows'

const ShowCard = () => {
    function notYetAvailable() {
        setTimeout(() =>
            alert("Either tickets are not yet available for purchase or they will be made available at the door.  Please check back later or contact the venue.")
            , 500)
    }

    function noCover() {
        setTimeout(() =>
            alert("This is a free show!")
            , 500)
    }

    return (
        <main className='shows-container flex flex-col w-full'>
            {shows.map((show) => (
                <ol key={show.index} className='show-card flex flex-col items-center w-full pb-5 mb-5 text-lg md:text-2xl'>
                    <li>{show.date}</li>
                    <button onClick={() => setTimeout(() =>
                        window.open(show.venueLink, '_blank')
                        , 500)} className='venue'><li className=''>{show.venue}</li></button>

                    {show.ticketLink === 1 ? (
                        <button onClick={noCover}>Get Tickets</button>
                    ) :
                        show.ticketLink === 2 ? (
                            <button onClick={notYetAvailable}>Get Tickets</button>
                        ) :
                            (
                                <button onClick={() => setTimeout(() =>
                                    window.open(show.ticketLink, '_blank')
                                    , 500)}>Get Tickets</button>
                            )
                    }
                </ol>
            ))}
        </main>
    )
}

export default ShowCard