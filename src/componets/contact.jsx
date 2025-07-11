import { AiOutlineFacebook,AiOutlineLinkedin,AiOutlineTwitter,AiOutlineInstagram} from "react-icons/ai";
export default function Contact()
{
    const config ={
        email:"dharani8098344676@gmail.com",
        phone:8122868098
    }
    const configg={
        social:
            {
                Twitter:'https://x.com/About_The_X?t=6XZNweAcQzv4Obss7fVUrw&s=09',
                Instagram:'https://www.instagram.com/dharani_cr7_14?igsh=MWwyeGRlazhpcHg4cg==',
                LinkedIn:'https://www.linkedin.com/in/dharani-s-609b4528b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
            }
        
    }
    return(
        <>
        <section id="contact" className='flex flex-col md:flex-row justify-around bg-secondary px-6 py-15'>


        <div className=' md:w-1/2  md:flex py-10 px-30  text-2xl font-hero-font'>
        
            <div className='text-white item-center flex flex-col  '>
                <h1 className=' ml-15 md:ml-38 border-b-2 w-22  text-black font-bold  mb-15 '>Contact</h1>
                <p className='pt-6 pb-4'> If you need more details please Contact Me...</p>
                <div className="p-5">
                 <p> <span className="font-bold text-black">Email :</span> {config.email}</p>
                 <p> <span className="font-bold text-black">phone :</span> {config.phone}</p>
                 <p className="text-2xl mt-5"> You Can Also Reach Me From these Social Media ,</p>
                     <div className='flex py-5 pl-5'>
                            <a href={configg.social.Twitter} className='pr-2 hover:text-white'><AiOutlineTwitter size={30}/></a>
                            <a href={configg.social.Instagram} className='pr-2 hover:text-white'><AiOutlineInstagram size={30}/></a>
                            <a href={configg.social.LinkedIn} className='hover:text-white'><AiOutlineLinkedin size={30}/></a>
                        </div>

                 </div>
            </div>    
               
        </div>
        </section>
        </>
    )
}