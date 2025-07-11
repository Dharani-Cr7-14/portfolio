import { Bars3Icon} from '@heroicons/react/24/solid';
import { useState } from 'react';
export default function Header()
{
  const[toggleMenu,setToggleMenu]=useState(false);

    return(
    <>
      <header className="flex justify-between px-5  py-3 bg-primary">
        <a className="font-bold text-white" href="#">Dharani</a>

        <nav className="hidden md:block">
          <ul className=" flex gap-5 text-white">
            <li><a href="/"> Home</a></li>
            <li><a href="#about"> About</a></li>
            <li><a href="#project"> Project</a></li>
            <li><a href="#resume"> Resume</a></li>
            <li><a href="#contact"> Contact</a></li>
           

         </ul>

        </nav>
       { toggleMenu && <nav className="block   md:hidden ">
          <ul onClick={()=>setToggleMenu(!toggleMenu)} className=" gap-5 text-white mobile-navbar">
            <li><a href="#"> Home</a></li>
            <li><a href="#about"> About</a></li>
            <li><a href="#project"> Project</a></li>
            <li><a href="#resume"> Resume</a></li>
            <li><a href="#contact"> Contact</a></li>
           

          </ul>
        </nav>}

        <button className="block md:hidden" onClick={ (()=>setToggleMenu(!toggleMenu))}> <Bars3Icon className='text-white h-6.5  block md:hidden'/></button>
        


        
     </header>  
    </>
    )
}