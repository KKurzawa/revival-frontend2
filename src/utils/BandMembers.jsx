import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { SiApplemusic } from "react-icons/si";
import { FaSpotify } from "react-icons/fa";
import Brett from '/Brett.jpeg'
import Kris from '/Kris.jpeg'
import Dale from '/Dale.jpeg'
import Chuck from '/Chuck.jpeg'
import Rob from '/Rob.jpeg'
import Jesse from '/Jesse.jpeg'

const BandMembers = [
    {
        id: 1,
        name: 'Brett Lucas',
        pic: Brett,
        description: "The Brett Lucas Band/Betty Lavette/Thornetta Davis",
        facebookIcon: <FaFacebookSquare />,
        facebookLink: 'https://www.facebook.com/brettlucasmusic',
        instagramIcon: <FaInstagramSquare />,
        instagramLink: 'https://www.instagram.com/thelucasband/',
        websiteIcon: <TbWorld />,
        websiteLink: 'https://brettlucas.com/',
        appleMusicIcon: <SiApplemusic />,
        appleMusicLink: 'https://music.apple.com/us/artist/brett-lucas/346180728',
        spotifyIcon: <FaSpotify />,
        spotifyLink: 'https://open.spotify.com/artist/1ZFUXS30BsBQywIYLLp1VY',
    },
    {
        id: 2,
        name: 'Kris Kurzawa',
        pic: Kris,
        description: "The Kris Kurzawa Group/Alexander Zonjic/Jeff Lorber",
        facebookIcon: <FaFacebookSquare />,
        facebookLink: 'https://www.facebook.com/KrisKurzawaGuitar/',
        instagramIcon: <FaInstagramSquare />,
        instagramLink: 'https://www.instagram.com/k_kurzawa/',
        websiteIcon: <TbWorld />,
        websiteLink: 'https://www.kriskurzawaguitar.com/',
        appleMusicIcon: <SiApplemusic />,
        appleMusicLink: 'https://music.apple.com/us/artist/kris-kurzawa/1071714493',
        spotifyIcon: <FaSpotify />,
        spotifyLink: 'https://open.spotify.com/artist/6avBe32i2ADGGnJAFnQHYx',
    },
    {
        id: 3,
        name: 'Dale Grisa',
        pic: Dale,
        description: "Karen Newman/Beth Stalker/Jill Jack",
        facebookIcon: false,
        facebookLink: false,
        instagramIcon: false,
        instagramLink: false,
        appleMusicIcon: false,
        appleMusicLink: false,
        spotifyIcon: false,
        spotifyLink: false,
    },
    {
        id: 4,
        name: 'Chuck Bartels',
        pic: Chuck,
        description: "Sturgil Simpson/Betty Lavette/Thornetta Davis",
        facebookIcon: false,
        facebookLink: false,
        instagramIcon: false,
        instagramLink: false,
        appleMusicIcon: false,
        appleMusicLink: false,
        spotifyIcon: false,
        spotifyLink: false,
    },
    {
        id: 5,
        name: 'Rob Avsharian',
        pic: Rob,
        description: "Andy Timmons/Snarky Puppy/Bobgoblin",
        facebookIcon: false,
        facebookLink: false,
        instagramIcon: false,
        instagramLink: false,
        appleMusicIcon: false,
        appleMusicLink: false,
        spotifyIcon: false,
        spotifyLink: false,
    },
    {
        id: 6,
        name: 'Jesse Kramer',
        pic: Jesse,
        description: "The Jesse Kramer Trio/Paul Keller/Tim Haldeman",
        facebookIcon: false,
        facebookLink: false,
        instagramIcon: false,
        instagramLink: false,
        appleMusicIcon: false,
        appleMusicLink: false,
        spotifyIcon: false,
        spotifyLink: false,
    },
]

export default BandMembers