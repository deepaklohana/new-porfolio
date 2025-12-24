import React from 'react'
import { motion } from 'motion/react'
import { cn } from '../lib/Utils'
const SectionHeading = ({children,delay}) => {
  return (
    
      <h2 className={cn(`text-sm md:text-sm `)}>{children.split(" ").map((word,idx)=>(
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

export default SectionHeading
