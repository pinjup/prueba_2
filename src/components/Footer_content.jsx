import skull_logo from "../assets/7830747_skull_icon.svg"
import facebook_logo from '../assets/1298738_facebook_brand_fb_logo_social media_icon.svg'
import instagram_logo from '../assets/icons8-instagram.svg'
import youtube_logo from '../assets/1829989_brand_logo_network_social_youtube_icon.svg'
import twitter_logo from '../assets/317720_social media_tweet_twitter_social_icon.svg'

export default function Footer_content() {
    const contact = ['Call us: (629) 555-0129', '|', 'Find us on:']

    const contact_media = [
        {icon: facebook_logo, name: 'Facebook'},
        {icon: instagram_logo, name: 'Instagram'},
        {icon: youtube_logo, name: 'Youtube'},
        {icon: twitter_logo, name: 'Twitter'},
    ]

    const info_page = [
        {title: 'Company', elements: ['About us', 'Career', 'Services'] },
        {title: 'Material', elements: ['Wood', 'Plastic Board', 'Steel', 'Plywood', 'Engineered Wood'] },
        {title: 'Media', elements: ['Latest news', 'Blogs', 'Lookbook'] },
        {title: 'Other info', elements: ['Terms & conditions', 'Privacy policy', 'License'] },
        {title: 'FAQ', elements: ['Order & Shipping', 'Refund & Return'] },
    ]

    return (
        <footer className="w-full h-[250px] p-5 mt-3 bg-white">

            <div className="w-full h-full rounded-2xl bg-[#23272d]">

                <div className="flex justify-between">
                    <div className="w-auto h-auto flex justify-start">
                        <div id="logo-lux" className="bg-white w-28 h-12 rounded-br-xl flex items-center justify-center">
                            <img className="w-[20%] h-[60%]" src={skull_logo} alt="skull" />
                        </div>
                    </div>

                    <ul className="text-white flex pt-3 pr-12 gap-5 text-xs">

                        {contact.map(cont => (
                            <li key={cont}>{cont}</li>
                        ))}

                        {contact_media.map(contact => (
                            <li key={contact.name}>
                                <img className="w-4 h-4 fill-white" src={contact.icon} alt="" />
                            </li>
                        ))}
                        

                    </ul>
                </div>

                <div className="p-6 pr-14 text-white flex justify-between items-start gap-3">

                    <p className="text-[10px]">You will find an array of stunning<br /> pieces that will take your home<br /> decor to the next level.</p>
                    
                    <div className="flex gap-8">
                        {info_page.map(info => (

                            <div key={info.title} className="flex flex-col gap-1">

                                <h6 className="text-sm font-bold">{info.title}</h6>

                                <ul className="text-[8px] flex flex-col gap-1">
                                    {info.elements.map(element => (
                                        <li key={element}>{element}</li>
                                    ))}
                                </ul>

                            </div>
                        ))}
                    </div>

                </div>

            </div>

        </footer>
    )
}
