import './BandMember.css'
import BandMembers from '../../utils/BandMembers.jsx'

const BandMember = () => {
    return (
        <main className='flex flex-row justify-evenly'>
            <article className='flex flex-col'>
                {BandMembers.map((member, index) => index % 2 === 0 && (
                    <ol key={member.id} className='flex flex-col items-center py-2'>
                        <li key={member.name} className='pb-1 text-2xl'>{member.name}</li>
                        <img src={member.pic} alt='member pic' className='pb-1 w-4/5 rounded-lg' />
                        <li className='pb-1 text-[.7rem]'>{member.description}</li>
                        <li className='flex justify-evenly w-40 text-xl'>
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
            <article className='flex flex-col'>
                {BandMembers.map((member, index) => index % 2 !== 0 && (
                    <ol key={member.id} className='flex flex-col items-center py-2'>
                        <li key={member.name} className='text-2xl pb-1'>{member.name}</li>
                        <img src={member.pic} alt='member pic' className='w-4/5 pb-1 rounded-lg' />
                        <li className='pb-1 text-[.7rem]'>{member.description}</li>
                        <li className='flex justify-evenly w-40 text-xl'>
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
        </main>

    )
}

export default BandMember