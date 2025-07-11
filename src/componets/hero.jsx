import dharani from '../assets/dharani_photo.jpg'
import { AiOutlineFacebook,AiOutlineLinkedin,AiOutlineTwitter,AiOutlineInstagram} from "react-icons/ai";



export default function Hero()
{
    const config={
        social:
            {
                Twitter:'https://x.com/About_The_X?t=6XZNweAcQzv4Obss7fVUrw&s=09',
                Instagram:'https://www.instagram.com/dharani_cr7_14?igsh=MWwyeGRlazhpcHg4cg==',
                LinkedIn:'https://www.linkedin.com/in/dharani-s-609b4528b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
            }
        
    }
    return(
        <>
        <section  className=' bg-secondary flex flex-col md:flex-row  py-32 pr-35 text-white justify-center '>
            
            <div className='md:w-1/2 pt-17'>
                <h1 className=" font-hero-font text-2xl pb-2 pr-13 "> <span className='text-4xl  '>Hello EveryOne , </span> <br/><p className='pt-3 pl-5'> I am Dharani <span className='text-black '>. S</span></p> 
                <p className='text-1/2xl pt-3 pl-6'>I'm  From Salem and I'm studied at SSRM Hr Sec School , My Father is Subramaniam and my mother name is maheshwari and I have elder brother .<br/>  <span className='pr-2 '   > My hobby is listing a music and my interest is learning a new Things and my passion is to be come a Developer . </span>  </p> </h1>
                <div className='flex py-5 pl-5'>
                    <a href={config.social.Twitter} className='pr-2 hover:text-white'><AiOutlineTwitter size={30}/></a>
                    <a href={config.social.Instagram} className='pr-2 hover:text-white'><AiOutlineInstagram size={30}/></a>
                    <a href={config.social.LinkedIn} className='hover:text-white'><AiOutlineLinkedin size={30}/></a>
                </div>
            </div>
         
        
            <img className=' md:w-1/4 rounded-3xl pt-1 w-90  ml-50'  src={dharani}/>

          
        </section>
          <p className='flex-col bg-secondary text-center font-medium p-3'> Please Scroll Down To View More About Me  &darr;</p>
        </>
    )

}