import './Video.css'

const Video = () => {
    return (
        <main id='videos' className='flex flex-col items-center w-full text-[whitesmoke]'>
            <header className='video-header py-2 md:py-5 w-full text-center'><span className='video-header-text text-[1.75rem] md:text-[2rem]'>V</span><span className='video-header-text text-3xl'>IDEO</span><span className='video-header-text text-[1.75rem] md:text-[2rem]'>S</span></header>
            <section className='videos-container w-full'>
                {/* small */}
                <article className='small-videos-container flex md:hidden flex-col items-center w-full'>
                    <section className='revival flex flex-col items-center w-full text-xl py-5'>
                        <header className='single-video-header'>Revival/Blue Sky</header>
                        <iframe className='rounded-xl' width="300" height="168" src="https://www.youtube.com/embed/ytGnuTjCkbY?si=6liGP3L0lMduw8Cv" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </section>
                    <section className='dont flex flex-col items-center w-full text-xl py-5'>
                        <header className='single-video-header'>Don&apos;t Keep Me Wondering</header>
                        <iframe className='rounded-xl' width="300" height="168" src="https://www.youtube.com/embed/vRhC1UiRynM?si=X0u-u8RmzfrhJuO0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </section>
                    <section className='every flex flex-col items-center w-full text-xl py-5'>
                        <header className='single-video-header'>Every Hungry Woman</header>
                        <iframe className='rounded-xl' width="300" height="168" src="https://www.youtube.com/embed/8kM27bX2kv4?si=IF5RGIUVbSLIogOa" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </section>
                    <section className='dont flex flex-col items-center w-full text-xl py-5'>
                        <header className='single-video-header'>Les Bres in A Minor</header>
                        <iframe className='rounded-xl' width="300" height="168" src="https://www.youtube.com/embed/o3-RIRM3csI?si=hda7GVojICh70yRl" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </section>
                </article>
                {/* medium */}
                <article className='medium-videos-container hidden md:flex lg:hidden flex-col items-center w-full'>
                    <section className='revival flex flex-col items-center w-full py-5 text-2xl'>
                        <header className='single-video-header'>Revival/Blue Sky</header>
                        <iframe className='rounded-xl' width="650" height="364" src="https://www.youtube.com/embed/ytGnuTjCkbY?si=6liGP3L0lMduw8Cv" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </section>
                    <section className='dont flex flex-col items-center w-full py-5 text-2xl'>
                        <header className='single-video-header'>Don&apos;t Keep Me Wondering</header>
                        <iframe className='rounded-xl' width="650" height="364" src="https://www.youtube.com/embed/vRhC1UiRynM?si=X0u-u8RmzfrhJuO0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </section>
                    <section className='every flex flex-col items-center w-full py-5 text-2xl'>
                        <header className='single-video-header'>Every Hungry Woman</header>
                        <iframe className='rounded-xl' width="650" height="364" src="https://www.youtube.com/embed/8kM27bX2kv4?si=IF5RGIUVbSLIogOa" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </section>
                    <section className='dont flex flex-col items-center w-full py-5 text-2xl'>
                        <header className='single-video-header'>Les Bres in A Minor</header>
                        <iframe className='rounded-xl' width="650" height="364" src="https://www.youtube.com/embed/o3-RIRM3csI?si=hda7GVojICh70yRl" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </section>
                </article>
                {/* large */}
                <article className='large-videos-container hidden lg:flex flex-row justify-evenly w-full py-5'>
                    <section className='flex flex-col items-center'>
                        <header className='single-video-header text-2xl'>Revival/Blue Sky</header>
                        <iframe className='rounded-xl' width="560" height="315" src="https://www.youtube.com/embed/ytGnuTjCkbY?si=6liGP3L0lMduw8Cv" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </section>
                    <section className='flex flex-col items-center'>
                        <header className='single-video-header text-2xl'>Don&apos;t Keep Me Wondering</header>
                        <iframe className='rounded-xl' width="560" height="315" src="https://www.youtube.com/embed/vRhC1UiRynM?si=X0u-u8RmzfrhJuO0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </section>
                </article>
                <article className='large-videos-container hidden lg:flex flex-row justify-evenly w-full py-5'>
                    <section className='flex flex-col items-center'>
                        <header className='single-video-header text-2xl'>Every Hungry Woman</header>
                        <iframe className='rounded-xl' width="560" height="315" src="https://www.youtube.com/embed/8kM27bX2kv4?si=IF5RGIUVbSLIogOa" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </section>
                    <section className='flex flex-col items-center'>
                        <header className='single-video-header text-2xl'>Les Bres in A Minor</header>
                        <iframe className='rounded-xl' width="560" height="315" src="https://www.youtube.com/embed/o3-RIRM3csI?si=hda7GVojICh70yRl" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </section>
                </article>
                <button onClick={() => setTimeout(() =>
                    window.scroll({
                        top: 0,
                        behavior: 'smooth'
                    })
                    , 500)}
                    className='video-top-link flex justify-center py-2 w-full text-xl'>To the Top</button>
            </section>
        </main>
    )
}

export default Video