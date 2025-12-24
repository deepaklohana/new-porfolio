import React from 'react'
import { motion } from 'motion/react'
import { cn } from '../lib/Utils'
const SectionHeading = ({children,delay}) => {
  return (
    
      <h2 className={cn(`text-sm md:text-sm font-normal w-fit   max-w-lg relative`)}>
        <Background/>
        {children.split(" ").map((word,idx)=>(
        <motion.span key={idx} className='inline-block'
        initial={{opacity:0 ,y:5,filter:'blur(2px)'}}
        whileInView={{opacity:1,y:0,filter:'blur(0px)'}}
        transition={{delay:delay+idx*0.05,ease:'easeInOut',duration:0.3}}
        viewport={{once:true}}>
            {word}&nbsp;
        </motion.span>
      ))}</h2>
    
  )
}
const Background=()=>{
  return(
    <motion.div initial={{opacity:0 }}
        whileInView={{opacity:1}}
        transition={{delay:1,ease:'easeInOut',duration:0.3}}
        viewport={{once:true}}
    className='absolute h-full w-full inset-0 scale-[1.04] bg-neutral-100'>
      <div className='absolute animate-pulse -left-px -top-px h-1 w-1 rounded-full bg-neutral-200'></div>
      <div className='absolute animate-pulse -top-px -right-px h-1 w-1 rounded-full bg-neutral-200'></div>
      <div className='absolute -bottom-px animate-pulse -right-px h-1 w-1 rounded-full bg-neutral-200'></div>
      <div className='absolute -bottom-px -left-px animate-pulse h-1 w-1 rounded-full bg-neutral-200'></div>
    </motion.div>
  )
}

export default SectionHeading
