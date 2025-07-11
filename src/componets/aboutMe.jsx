import aboutImg from '../assets/Aboutme.jpg'
export default function Aboutme()
{
    const config={
        image:aboutImg,
        line1:" I'm a student,Studing in Kumaraguru college of Technology...",
        line2:" I'm in the Vacation and learning the react course with vite and the Css framework tailwind."

    }
    return(
        <>
        <section id='about' className='flex flex-col md:flex-row bg-primary px-6 py-10 font-hero-font'>

         
        <img className='md:w-1/2 flex rounded-2xl w-100' src={config.image} />


        <div className=' md:w-1/2 md:flex py-15 px-5 justify-center text-2xl'>
        
            <div className='text-white flex flex-col  pr-10 '>
                <h1 className='border-b-2 w-28  text-black font-bold  '>About Me</h1>
                <p className='pt-6 pb-4'>{config.line1}</p>
                <p>{config.line2}</p>
           </div>
        </div>
     
        </section>
        </>
    )
}