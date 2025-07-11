import abc from '../assets/project1.jpg'
export default function Overlay(){
    return(
    <>
    
     <div className='relative'>
        <img src={abc}/>

        <p className='absolute left-0 right-0 top-0 bottom-0 opacity-0 duration-500 hover:opacity-80 bg-amber-600 w-153 pt-20 font-bold'>The name is dharani and he is the best boy in the class and he has fanstasic skill and the worls\d</p>
     </div>

    </>)
}