import resume from '../assets/resume.jpg'
import { useState } from 'react'
export default function Resume()
{
    const [count, setCount] = useState(0);
    const config={
        link:"https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
    }
    return(
        <>
        <section id="resume" className='flex flex-col md:flex-row justify-around bg-primary font-hero-font px-6 py-30'>

         
        <img className='w-130  flex rounded-2xl' src={resume} />


        <div className=' md:w-1/2  md:flex py-15   text-2xl'>
        
            <div className='text-white flex flex-col  '>
                <h1 className='border-b-2 w-24  text-black font-bold  '>Resume</h1>
                <p className='pt-6 pb-4'>To view My resume and <a href={config.link} className='btn bg-amber-800' > Download</a></p>
                {/* Add button and count */}
                <div className='flex items-center gap-4 pt-4'>
                    <button
                        className='btn bg-blue-600 text-white px-4 py-2 rounded'
                        onClick={() => setCount(count + 1)}
                    >
                        Add
                    </button>
                    <span className='text-black text-xl'>Count: {count}</span>
                </div>
            </div>    
               
        </div>
     
        </section>
        </>
    )
}