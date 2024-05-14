import './BandMember.css'
import BandMembers from '../../utils/BandMembers.jsx'

const BandMember = () => {
    return (
        <main className='member-container flex flex-col justify-evenly'>
            {/* large */}
            <article className='row-container hidden lg:flex'>
                {BandMembers.slice(0, 3).map((member) => (
                    <ol key={member.id} className='band-member-container flex flex-col items-center py-2'>
                        <li key={member.name} className='member-name pb-1 text-2xl'>{member.name}</li>
                        <img src={member.pic} alt='member pic' className='member-pic pb-1 w-4/5 rounded-xl' />
                        <li className='member-description pb-1 text-[.7rem]'>{member.description}</li>
                        <li className='media-icons flex justify-evenly w-40 text-xl'>
                            <i><button onClick={() => setTimeout(() =>
                                window.open(member.facebookLink, '_blank')
                                , 500)}>{member.facebookIcon}</button></i>
                            <i><button onClick={() => setTimeout(() =>
                                window.open(member.instagramLink, '_blank')
                                , 500)}>{member.instagramIcon}</button></i>
                            <i><button onClick={() => setTimeout(() =>
                                window.open(member.websiteLink, '_blank')
                                , 500)}>{member.websiteIcon}</button></i>
                            <i><button onClick={() => setTimeout(() =>
                                window.open(member.appleMusicLink, '_blank')
                                , 500)}>{member.appleMusicIcon}</button></i>
                            <i><button onClick={() => setTimeout(() =>
                                window.open(member.spotifyLink, '_blank')
                                , 500)}>{member.spotifyIcon}</button></i>
                        </li>
                    </ol>
                ))}
            </article>
            <article className='row-container hidden lg:flex'>
                {BandMembers.slice(3, 6).map((member) => (
                    <ol key={member.id} className='band-member-container flex flex-col items-center py-2'>
                        <li key={member.name} className='member-name text-2xl pb-1'>{member.name}</li>
                        <img src={member.pic} alt='member pic' className='member-pic w-4/5 pb-1 rounded-xl' />
                        <li className='member-description pb-1 text-[.7rem]'>{member.description}</li>
                        <li className='media-icons flex justify-evenly w-40 text-xl'>
                            <i><button onClick={() => setTimeout(() =>
                                window.open(member.facebookLink, '_blank')
                                , 500)}>{member.facebookIcon}</button></i>
                            <i><button onClick={() => setTimeout(() =>
                                window.open(member.instagramLink, '_blank')
                                , 500)}>{member.instagramIcon}</button></i>
                            <i><button onClick={() => setTimeout(() =>
                                window.open(member.websiteLink, '_blank')
                                , 500)}>{member.websiteIcon}</button></i>
                            <i><button onClick={() => setTimeout(() =>
                                window.open(member.appleMusicLink, '_blank')
                                , 500)}>{member.appleMusicIcon}</button></i>
                            <i><button onClick={() => setTimeout(() =>
                                window.open(member.spotifyLink, '_blank')
                                , 500)}>{member.spotifyIcon}</button></i>
                        </li>
                    </ol>
                ))}
            </article>
            {/* small and medium */}
            <article className='row-container flex flex-col lg:hidden'>
                {BandMembers.map((member) => (
                    <ol key={member.id} className='band-member-container flex flex-col items-center py-4'>
                        <li key={member.name} className='member-name pb-1 text-2xl'>{member.name}</li>
                        <img src={member.pic} alt='member pic' className='member-pic pb-1 w-4/5 rounded-xl' />
                        <li className='member-description pb-1 text-[.6rem] md:text-[1rem]'>{member.description}</li>
                        <li className='media-icons flex justify-evenly w-40 text-xl'>
                            <i><button onClick={() => setTimeout(() =>
                                window.open(member.facebookLink, '_blank')
                                , 500)}>{member.facebookIcon}</button></i>
                            <i><button onClick={() => setTimeout(() =>
                                window.open(member.instagramLink, '_blank')
                                , 500)}>{member.instagramIcon}</button></i>
                            <i><button onClick={() => setTimeout(() =>
                                window.open(member.websiteLink, '_blank')
                                , 500)}>{member.websiteIcon}</button></i>
                            <i><button onClick={() => setTimeout(() =>
                                window.open(member.appleMusicLink, '_blank')
                                , 500)}>{member.appleMusicIcon}</button></i>
                            <i><button onClick={() => setTimeout(() =>
                                window.open(member.spotifyLink, '_blank')
                                , 500)}>{member.spotifyIcon}</button></i>
                        </li>
                    </ol>
                ))}
            </article>
            <a href='/#top' className='band-top-link flex justify-center py-2 w-full text-xl'>To the Top</a>
        </main>

    )
}

export default BandMember