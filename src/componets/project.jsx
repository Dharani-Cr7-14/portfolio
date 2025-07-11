import p1 from '../assets/project1.jpg'
import p2 from '../assets/project2.jpg'
import p3 from '../assets/project3.jpg'

export default function Project(){

    const config={
        project:[
            {
                image:p1,
                title:"Planning: Defining project scope, objectives.",
                link:"https://github.com/Dharani-Cr7-14/cc.git"
            },
             {
                image:p2,
                title:"Organizing: Assembling a project team, assigning roles.",
                link:"https://github.com/Dharani-Cr7-14/cc.git"
            },
             {
                image:p3,
                title:"Monitoring progress, managing risks, and making necessary.",
                link:"https://github.com/Dharani-Cr7-14/cc.git"
            },
            
        ]
    }
    return(
        <>
        <section id="project" className="  flex-row md:flex-col  justify-center bg-secondary font-hero-font py-20 px-10 ">

           <div className=' w-1/2 '>
              <div className='flex md:pl-150 pl-0 '> 
                    <p className='font-bold text-2xl border-b-2 w-20'>Project</p>
                    
              </div>
                
             
           </div>
           <div  className='w-full flex justify-around'>
           <div className='md:flex-row '>
            <div> 
                        <p className='p-10 pb-0 pr-0 font-bold  text-2xl font-hero-font'> The project is made upof the react and tailwind css framework and it is build using the youtube channel </p>
                    </div>
                <div className='flex flex-col md:flex-row m-10 p-2 '>

                      {config.project.map((proj,index)=>( <div className=' relative mr-4 m-4'>
                        <img className='h-[200px] ' src={proj.image}/>
                         
                        <div className="project-view bg-primary"> 
                            <p className="pt-10">{proj.title} </p>
                              <div className='btn w-28 bg-amber-300 mt-10 p-10 text-center justify-center'>
                                <a target='blank' className=' ' href={proj.link}>view project</a>
                             </div>
                        </div>
                         <p className='m-4 text-center'>project - {index+1}</p>
                    </div>
                    
                    
                ))}
                   
                  
                </div>
           </div>
           
           </div>

        </section>
        
        </>
    )
}