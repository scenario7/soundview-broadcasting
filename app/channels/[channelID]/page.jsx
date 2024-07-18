import RegionCard from '@/components/channels/RegionCard';
import HeroTemplate from '@/components/HeroTemplate'
import React from 'react'

const channels = [
    {
        channelID : "indian",
        title : "Indian",
        description : "SoundView Broadcasting is the sole North American provider of many of India’s most celebrated and essential entertainment and information channels - Sahara One, Filmy, Sahara Samay, and MH1. DISH Network and Time Warner Cable put these popular TV channels within easy reach of the millions of Indian-Americans now calling the USA home.",
        offerings : [
            {
                name : "Sahara One",
                description : "Indian entertainment channel showcasing dramas, movies, and reality shows, providing a glimpse of Indian culture and storytelling.",
                imageURL : "https://upload.wikimedia.org/wikipedia/bn/e/e2/%E0%A6%B8%E0%A6%BE%E0%A6%B9%E0%A6%BE%E0%A6%B0%E0%A6%BE_%E0%A6%93%E0%A6%AF%E0%A6%BC%E0%A6%BE%E0%A6%A8%E0%A7%87%E0%A6%B0_%E0%A6%B2%E0%A7%8B%E0%A6%97%E0%A7%8B_%E0%A7%A8%E0%A7%A6%E0%A7%A7%E0%A7%A6.png"
            },
            {
                name : "Sahara Samay",
                description : "Indian news channel delivering the latest updates, breaking news, and insightful analysis on national and international events.",
                imageURL : "https://static.wikia.nocookie.net/logopedia/images/f/f5/Sahara_Samay_National.png/revision/latest?cb=20111007145118"
            },
            {
                name : "Sahara Filmy",
                description : "Indian movie channel featuring a mix of Bollywood films, from classic hits to the latest blockbusters.",
                imageURL : "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Sahara-filmi-tv-logo.svg/886px-Sahara-filmi-tv-logo.svg.png?20100807224611"
            },
        ]
    },
    {
        channelID : "pakistani",
        title : "Pakistani",
        description : "SoundView Broadcasting is the sole North American provider of many of India’s most celebrated and essential entertainment and information channels - Sahara One, Filmy, Sahara Samay, and MH1. DISH Network and Time Warner Cable put these popular TV channels within easy reach of the millions of Indian-Americans now calling the USA home.",
        offerings : [
            {
                name : "TV One",
                description : "Pakistani entertainment channel offering a variety of dramas, lifestyle shows, and music programs, reflecting Pakistan's vibrant culture.",
                imageURL : "https://upload.wikimedia.org/wikipedia/commons/4/4e/TV_One_Pakistan_logo.png"
            }
        ]
    },
    {
        channelID : "bangladeshi",
        title : "Bangladeshi",
        description : "SoundView Broadcasting is the sole North American provider of many of India’s most celebrated and essential entertainment and information channels - Sahara One, Filmy, Sahara Samay, and MH1. DISH Network and Time Warner Cable put these popular TV channels within easy reach of the millions of Indian-Americans now calling the USA home.",
        offerings : [
            {
                name : "NTV",
                description : "Bangladeshi television channel offering a mix of news, dramas, and cultural programs, showcasing Bangladesh's diverse heritage.",
                imageURL : "https://upload.wikimedia.org/wikipedia/en/thumb/e/ef/NTV_%28Bangladesh%29_logo.svg/1200px-NTV_%28Bangladesh%29_logo.svg.png"
            },
            {
                name : "ATN Bangla",
                description : "Bangladeshi channel featuring news, entertainment, dramas, and talk shows, highlighting the country's rich cultural traditions.",
                imageURL : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThFvDYe3XVqLCsdNRaTzvfI8VO6FKxhIQfKw&s"
            },
            {
                name : "ATN News",
                description : "Bangladeshi news channel providing comprehensive coverage of local and international news, politics, and current affairs.",
                imageURL : "https://upload.wikimedia.org/wikipedia/en/5/53/ATN_News_Logo_3.GIF"
            },
        ]
    },
    {
        channelID : "african",
        title : "African",
        description : "SoundView Broadcasting is the sole North American provider of many of India’s most celebrated and essential entertainment and information channels - Sahara One, Filmy, Sahara Samay, and MH1. DISH Network and Time Warner Cable put these popular TV channels within easy reach of the millions of Indian-Americans now calling the USA home.",
        offerings : [
            {
                name : "Afros TV",
                description : "African entertainment channel showcasing movies, music, and cultural programs, highlighting the diversity of the African continent.",
                imageURL : "https://image.roku.com/developer_channels/prod/c57648aa7d77829169f39a319710d50307a2854c54d81b61a3668e69d7a14361.png"
            },
            {
                name : "Afrotainment",
                description : "African channel offering a mix of music, films, and lifestyle shows, celebrating African culture and entertainment.",
                imageURL : "https://www.ubetoo.com/wp-content/uploads/2020/05/2020-05-14_06-10-40_929614-www.ubetoo.com.PNG"
            },
            {
                name : "TV Naija",
                description : "Nigerian channel delivering entertainment, news, and cultural content, reflecting the vibrant spirit of Nigeria.",
                imageURL : "https://naijatv.net/wp-content/uploads/2021/06/cropped-cropped-IMG-20201019-WA0014-1.jpg"
            },
        ]
    },
    {
        channelID : "greek",
        title : "Greek",
        description : "SoundView Broadcasting is the sole North American provider of many of India’s most celebrated and essential entertainment and information channels - Sahara One, Filmy, Sahara Samay, and MH1. DISH Network and Time Warner Cable put these popular TV channels within easy reach of the millions of Indian-Americans now calling the USA home.",
        offerings : [
            {
                name : "Mega Cosmos",
                description : "Greek channel offering dramas, news, and entertainment, bringing Greek culture and television to a global audience.",
                imageURL : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLlE2aSWD2oZpvFJwRDl6Z0WN6HdKRNtZ-IA&s"
            }
        ]
    },
    {
        channelID : "russian",
        title : "Russian",
        description : "SoundView Broadcasting is the sole North American provider of many of India’s most celebrated and essential entertainment and information channels - Sahara One, Filmy, Sahara Samay, and MH1. DISH Network and Time Warner Cable put these popular TV channels within easy reach of the millions of Indian-Americans now calling the USA home.",
        offerings : [
            {
                name : "RTVi",
                description : "Russian channel broadcasting news, cultural programs, and entertainment, catering to the Russian-speaking community worldwide.",
                imageURL : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/RTVI_Logo_magenta_fill_2021.png/400px-RTVI_Logo_magenta_fill_2021.png"
            }
        ]
    },
]


const page = ({ params }) => {

    const channel = channels.find(channel => channel.channelID === params.channelID);

  return (
    <div className=''>
        <HeroTemplate title={channel.title} image="https://firebasestorage.googleapis.com/v0/b/vistara-website.appspot.com/o/svbllc%2FStudio%202A.jpg?alt=media&token=d87ec15f-ee84-44f7-8b17-5d01b4361836" description={channel.description}/>
        <div className='grid grid-cols-4 py-10 px-28 gap-20'>
            {channel.offerings.map((offering) => {
                return(
                    <div className='flex flex-col items-center gap-3'>
                        <img src={offering.imageURL} alt="" className='h-24 object-contain'/>
                        <h3 className='text-lg font-semibold'>{offering.name}</h3>
                        <p className='text-[#d9d9d9] text-sm text-center'>{offering.description}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default page