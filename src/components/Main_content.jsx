// import living_room from '../assets/pexels-terry-magallanes-2988860.jpg'
import skull_logo from "../assets/7830747_skull_icon.svg"
import Button_exit from "./button_exit"
import gold_star from '../assets/Gold_Star.svg'
import blue_star from '../assets/Blue_Star.svg'
import image_carpenter from '../assets/pexels-ivan-samkov-4491881.jpg'
import wood_icon from '../assets/2828154_wood_trunk_icon.svg'
import plasticboard_icon from '../assets/5982114_camping_forest_holidays_nature_tools_icon.svg'
import steel_icon from '../assets/8962550_anvil_metal_industry_forge_craft_icon.svg'
import plywood_icon from '../assets/7150151_closet_furniture_wood_interior_room_icon.svg'
import engineeredwood_icon from '../assets/307362_box_wood_sealed_icon.svg'
import roomplants from '../assets/pexels-matheus-bertelli-17294707.jpg'
import chair from '../assets/stylish-black-chair-gray-background-stylish-piece-furniture-place-your-text_94064-9177.avif'
import drink_coffee from '../assets/pexels-andrea-piacquadio-925786.jpg'

export default function Main_content() {

    const materials = [
        {icon: wood_icon, text: 'Wood'},
        {icon: plasticboard_icon, text: 'Plastic Board'},
        {icon: steel_icon, text: 'Steel'},
        {icon: plywood_icon, text: 'Plywood'},
        {icon: engineeredwood_icon, text: 'Engineered Wood'}
    ]

    const products_category = ['All Furnitures', 'Bedrooms', 'Chairs', 'Dining Room', 'Living Room', 'Kitchen', 'Gym', 'Office']

    const products = [
        {name: 'Trash Wood', price: '299.00'},
        {name: 'Relax Special', price: '99.00'},
        {name: 'Casual Seats', price: '199.00'},
        {name: 'Gossip Special', price: '99.00'},
        {name: 'Sitting Loves', price: '499.00'},
        {name: 'Makeup Special', price: '299.00'},
        {name: 'Stylish Studio', price: '99.00'},
        {name: 'Conversational', price: '199.00'},
    ]
    

    return (
        <main className='flex flex-col gap-8 w-full p-5 min-w-[1024px] max-w-5xl'>

            <section id="arrival" className="w-full h-[600px] bg-living-room bg-cover bg-no-repeat rounded-2xl relative flex flex-col">

                <header className="w-full flex gap-8">

                    <div id="logo-lux" className="bg-white w-[15.5%] h-12 rounded-br-xl flex items-center justify-center">
                        <img className="w-[20%] h-[60%]" src={skull_logo} alt="skull" />
                    </div>

                    <nav className="w-[84.2%] flex justify-between text-sm pr-10">
                        <ul className="h-12 flex items-center gap-7 text-white">
                            <li>Home</li>
                            <li>Products</li>
                            <li>Services</li>
                            <li>Designers</li>
                            <li>Contact</li>
                        </ul>

                        <ul className="flex items-center gap-4">
                            <select className="bg-transparent text-white">
                                <option value="Afghanistan">AFG</option>
                                <option value="Albania">ALB</option>
                                <option value="Algeria">DZA</option>
                                <option value="American Samoa">ASM</option>
                                <option value="Andorra">AND</option>
                                <option value="Angola">AGO</option>
                                <option value="Anguilla">AIA</option>
                                <option value="Antartica">ATA</option>
                                <option value="Antigua and Barbuda">ATG</option>
                                <option value="Argentina">ARG</option>
                                <option value="Armenia">ARM</option>
                                <option value="Aruba">ABW</option>
                                <option value="Australia">AUS</option>
                                <option value="Austria">AUT</option>
                                <option value="Azerbaijan">AZE</option>
                                <option value="Bahamas">BHS</option>
                                <option value="Bahrain">BHR</option>
                                <option value="Bangladesh">BGD</option>
                                <option value="Barbados">BRB</option>
                                <option value="Belarus">BLR</option>
                                <option value="Belgium">BEL</option>
                                <option value="Belize">BLZ</option>
                                <option value="Benin">BEN</option>
                                <option value="Bermuda">BMU</option>
                                <option value="Bhutan">BTN</option>
                                <option value="Bolivia">BOL</option>
                                <option value="Bosnia and Herzegowina">BIH</option>
                                <option value="Botswana">BWA</option>
                                <option value="Bouvet Island">BVT</option>
                                <option value="Brazil">BRA</option>
                                <option value="British Indian Ocean Territory">IOT</option>
                                <option value="Brunei Darussalam">BRN</option>
                                <option value="Bulgaria">BGR</option>
                                <option value="Burkina Faso">BFA</option>
                                <option value="Burundi">BDI</option>
                                <option value="Cambodia">KHM</option>
                                <option value="Cameroon">CMR</option>
                                <option value="Canada">CAN</option>
                                <option value="Cape Verde">CPV</option>
                                <option value="Cayman Islands">CYM</option>
                                <option value="Central African Republic">CAF</option>
                                <option value="Chad">TCD</option>
                                <option value="Chile">CHL</option>
                                <option value="China">CHN</option>
                                <option value="Christmas Island">CXR</option>
                                <option value="Cocos Islands">CCK</option>
                                <option value="Colombia">COL</option>
                                <option value="Comoros">COM</option>
                                <option value="Congo">COG</option>
                                <option value="Congo">COD</option>
                                <option value="Cook Islands">COK</option>
                                <option value="Costa Rica">CRI</option>
                                <option value="Cota D'Ivoire">CIV</option>
                                <option value="Croatia">HRV</option>
                                <option value="Cuba">CUB</option>
                            </select>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                            
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>

                            


                        </ul>

                    </nav>
                </header>

                <div className="w-full flex flex-col justify-start p-10 text-white gap-6">
                    <p className="text-5xl leading-tight">Replace Your Space <br /> with Stunning Interior & <br /> Furniture Designs</p>

                    <p className="text-xs leading-normal">Here, you will find an array of stunning pieces that will take your home decor <br /> to the next level. Our furniture combines aesthetic appeal with functionality <br /> to give you the best of both worlds.</p>

                    <Button_exit size='large' bg_color='bg-[#fbd464]' text='Explore Products' icon={false} text_color='text-black' />

                </div>

                <footer className="w-full flex justify-end flex-grow">
                    <div className="bg-white w-60 h-full rounded-tl-xl rounded-br-xl p-5 flex flex-col gap-1">

                        <div className="w-full flex items-center gap-2">
                            <img className="w-7 h-7" src={gold_star} alt="" />
                            <span className='text-2xl font-bold'>4.8</span>
                        </div>

                        <div className="w-full flex items-center gap-2">
                            <img className="w-7 h-7" src={blue_star} alt="" />
                            <span className='text-2xl font-semibold'>Trustpilot</span>
                        </div>

                        <div className="w-full flex items-center gap-2">
                            <img className="w-7 h-7" src={blue_star} alt="" />
                            <span className='text-2xl font-semibold'>Trustpilot</span>
                        </div>
                    </div>
                </footer>

            </section>

            <section id="about-us" className="w-full bg-[#7ba76a] h-[600px] rounded-2xl flex flex-col justify-between">

                <header className="w-full h-24 flex justify-center">
                    <div className="bg-white w-40 h-12 rounded-b-2xl flex justify-center items-center">
                        <span className="bg-[#507f40] text-white text-lg h-8 w-32 rounded-full flex justify-center items-center">About us</span>
                    </div>
                </header>

                <div className="w-full flex flex-col items-center justify-center gap-5">
                    <p className="text-white text-[33px] leading-none">A modern approach with Luxyhome</p>
                    <p className="text-white text-center text-xs leading-6">Experience comfort and style with our handcrafted furniture <br /> discover the story behind our passionate mission.</p>
                    <Button_exit size='normal' bg_color='bg-[#fbd464]' text='Learn More' icon={false} text_color='text-black' />
                    
                </div>

                <footer className="w-full h-3/5 flex justify-center pt-10 px-10">

                    <div className="w-full h-full bg-white rounded-t-2xl pt-5 px-5">

                        <div className="w-full h-full rounded-t-2xl">
                            <img className="w-full h-full rounded-2xl" src={image_carpenter} alt="" />
                        </div>
                    </div>
                </footer>

            </section>

            <section id="categories" className="w-full h-[600px] bg-[#17191e] rounded-2xl">

                <header className="w-full h-20 flex justify-start">
                    <div className="bg-white w-[165px] h-12 rounded-br-2xl flex justify-center items-center">
                        <span className="bg-[#002c26] text-white text-lg h-8 w-36 rounded-full flex justify-center items-center">Categories</span>
                    </div>
                </header>

                <div className="flex justify-between">
                    
                    <div className="w-[calc(50%_-_20px)] h-[520px] p-10 flex flex-col gap-5">

                        <span className="text-white text-[28px]">Types of material of our products</span>
                        <p className="text-white text-[9px] leading-4">Our quality product is crafted with a focus on delivering exceptional performance and durability. We use only the finest materials and cutting-edge technology to ensure.</p>

                        <ul className="text-white flex flex-col gap-4">

                            {materials.map((material => (
                                <li key={material.text}>
                                    <div className="flex items-center gap-5">
                                        <span className="bg-white p-[6px] rounded-full">
                                            <img className="w-4 h-4" src={material.icon} alt={material.text} />
                                        </span>
                                        <span className="text-xl">{material.text}</span>
                                    </div>
                                </li>
                            )))}

                            
                        </ul>

                        <Button_exit size='normal' bg_color='bg-[#7aa668]' text='Learn More' icon={false} text_color='text-white' />

                    </div>

                    <div className="w-[calc(50%_-_20px)] h-[520px] pb-14">
                        <div className="w-full h-full rounded-l-2xl bg-white py-5 pl-5">
                            <img className="w-full h-full rounded-2xl" src={roomplants} alt="room with plants" />
                        </div>
                    </div>
                </div>

            </section>

            <section id="products" className="w-full bg-[#fed265] h-[1024px] rounded-2xl flex flex-col gap-7">

                <header className="w-full h-12 flex justify-center">
                    <div className="bg-white w-40 h-12 rounded-b-2xl flex justify-center items-center">
                        <span className="bg-[#09203c] text-white text-lg h-8 w-32 rounded-full flex justify-center items-center">Products</span>
                    </div>
                </header>

                <div className="w-full h-auto my-3 text-black flex flex-col justify-center items-center text-center">
                    <h2 className="text-[33px] font-bold">Collection for your space</h2>
                    <p className="text-xs leading-5">Introducing our carefully curated Product Collection! We&#39;ve handpicked a<br /> selection of top-quality items that are sure to meet all of your needs.</p>

                </div>

                <div className="w-full h-20 bg-white flex items-center justify-center">

                    <ul className="flex gap-2">
                        {products_category.map(product => (
                            <li key={product}>
                                <button className={`${product == 'Chairs' ? 'bg-black text-white' : ''} font-bold border py-3 px-5 text-sm rounded-full`}>{product}</button>
                            </li>
                        ))}
                    </ul>

                </div>

                <div className="w-full h-[580px]">

                    <div className="w-full h-full grid grid-cols-4 grid-rows-2 gap-8 p-8">

                        {products.map(product => (
                            <div key={product.name} className="bg-white w-full h-full rounded-lg p-2 relative flex flex-col gap-1">
                            

                                <img className="w-full h-3/4 rounded-lg" src={chair} alt="" />
                                
                                <span className="mt-1">{product.name}</span>
                                <span className="font-bold">${product.price}</span>

                                <div className="w-10 h-10 bg-[#fed265] rounded-tl-lg absolute bottom-0 right-0 flex justify-end items-center pt-[6px] pl-[6px]"> 

                                    <div className={`w-full h-full ${product.name == 'Relax Special' ? 'bg-[#77a664] text-white' : 'bg-white'} rounded-md flex justify-center items-center cursor-pointer`}>

                                        {product.name == 'Relax Special' ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M7.875 14.25l1.214 1.942a2.25 2.25 0 001.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 011.872 1.002l.164.246a2.25 2.25 0 001.872 1.002h2.092a2.25 2.25 0 001.872-1.002l.164-.246A2.25 2.25 0 0116.954 9h4.636M2.41 9a2.25 2.25 0 00-.16.832V12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 01.382-.632l3.285-3.832a2.25 2.25 0 011.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0021.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 002.25 2.25z" />
                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                            </svg>
                                        )}

                                    </div>

                                </div>

                            
                        </div>
                        ))}

                        

                    </div>

                    
                    
                    

                </div>

                <div className="w-full h-auto flex justify-center items-center">
                <Button_exit size='large' bg_color='bg-[#7aa668]' text='See All Products' icon={false} text_color='text-white' />
                </div>




            </section>

            <section id='service' className="w-full h-[480px] bg-[#22262c] rounded-2xl flex flex-col">

                <header className="w-full h-20 flex justify-start">

                    <div className="bg-white w-40 h-12 rounded-br-2xl flex justify-center items-center">
                        <span className="bg-[#002c26] text-white text-lg h-8 w-32 rounded-full flex justify-center items-center">Service</span>
                    </div>
                    
                </header>

                <div className="flex h-[420px] justify-between">
                    
                    <div className="w-[calc(50%_-_20px)] h-full p-10 flex flex-col gap-3">

                        <p className="text-white text-[28px]">Have a look of our design service for your beautiful space</p>
                        <p className="text-white text-[9px] leading-4">Our interior design service is dedicated to helping you create a space that truly reflects your personal style. We understand that your home or workspace is more than just walls and furniture - it&#39;s a reflection of who you are. That&#39;s why we offer a range</p>
                        
                        <div className="w-full h-auto flex flex-col gap-4">

                            <div className="w-full h-12 bg-[#fdd261] rounded-l-xl relative flex justify-start items-center p-5">
                                
                                <span className="">Interior Design</span>

                                <div className="bg-[#22262c] cursor-pointer w-10 h-10 flex justify-end items-center absolute bottom-1 right-0 rounded-l-md">
                                    <div className="w-[90%] h-[85%] bg-[#7aa668] rounded-md flex justify-center items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-white">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                        </svg>

                                    </div>
                                </div>

                            </div>
                            
                            <div className="w-full h-12 bg-[rgba(128,_128,_128,_0.5)] rounded-l-xl relative flex justify-start items-center p-5">
                                
                                <span className="text-white">Exterior Design</span>

                                <div className="bg-[#22262c] cursor-pointer w-10 h-10 flex justify-end items-center absolute bottom-1 right-0 rounded-l-md">
                                    <div className="w-[90%] h-[85%] bg-white rounded-md flex justify-center items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                        </svg>

                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="w-[calc(50%_-_20px)] h-full pb-14">
                        <div className="w-full h-full rounded-l-2xl bg-white py-5 pl-5">
                            <img className="w-full h-full rounded-2xl" src={drink_coffee} alt="room with plants" />
                        </div>
                    </div>
                </div>

            </section>

            <section id="subscribe" className="w-full h-[300px] bg-[#7ca86d] rounded-2xl">

                <header className="w-full h-20 flex justify-center">
                    <div className="bg-white w-40 h-12 rounded-b-2xl flex justify-center items-center">
                        <span className="bg-[#507f40] text-white text-lg h-8 w-32 rounded-full flex justify-center items-center">Service</span>
                    </div>
                </header>

                <div className="w-full h-auto flex flex-col justify-center items-center text-center gap-5">

                    <div className="w-full flex flex-col gap-3">
                        <span className="text-white text-2xl">Subscribe for get latest news &<br /> updates about our products</span>
                        <p className="text-white text-xs leading-5">Everyday we make our new product and supply to the customers & Taking order<br /> regularly. Also add our website. Subscribe for updates</p>
                    </div>

                    <div className=" w-[345px] h-auto pl-4 flex justify-start items-center bg-white rounded-full">
                        
                        <input className="w-[200px] h-6 text-xs p-1 active:border-none active:border-[0px] mr-[5px]" type="text" placeholder="Enter email address"  />

                        <Button_exit size='normal' bg_color='bg-[#fbd464]' text='Learn More' icon={true} text_color='text-black'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                            </svg>

                        </Button_exit>
                        
                    </div>



                </div>

            </section>
            

        </main>
    )
}
