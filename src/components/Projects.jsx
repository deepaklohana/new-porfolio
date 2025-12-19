import React from 'react'
import RomanCart from '../assets/images/roman-cart.png'
import Piquora from '../assets/images/piquora.png'
import GalleryApp from '../assets/images/gallery-app.png'
import NotesApp from '../assets/images/notes-app.png'
import { motion } from 'motion/react'

const Projects = () => {
  const projects = [
  {
      title: 'Piquora',
      src: Piquora,
      description: 'A Dating Site',
      href: 'https://github.com/deepaklohana/projects/tree/main/03-piquora',
    },
    {
      title: 'Roman Cart',
      src: RomanCart,
      description: 'Ecommerce Site',
      href: 'https://github.com/deepaklohana/projects/tree/main/01-roman-cart',
    },
    {
      title: 'Gallery App Project',
      src: GalleryApp,
      description: 'A Learning Project',
      href: 'https://github.com/deepaklohana/react-projects/tree/main/17-gallery-project',
    },
    {
      title: 'Notes App Project',
      src: NotesApp,
      description: 'A Learning Project',
      href: 'https://github.com/deepaklohana/react-projects/tree/main/13-notes-app',
    },
  ]
  return (
    <div className='py-10 '>
        <p className=' text-secondary text-sm md:text-sm pt-4 max-w-lg'>
            I love building web apps and product that can impact million of lives.
        </p>
        <div className="grid grid-cols-1 gap-4 py-2 md:grid-cols-2">
          {projects.map((project,idx)=>(
            <motion.div
            initial={{opacity:0,filter:'blur(10px)',y:10}}
            whileInView={{opacity:1,filter:'blur(0px)',y:0}}
            transition={{duration:0.3,delay:idx*0.1,ease:'easeInOut'}}
            className='group relative mb-4'
            key={idx}>
              <a href={project.href} target="_blank" rel="noopener noreferrer">
                {/* <h2 className='text-black dark:text-white  absolute left-2 bottom-0'>{project.title}</h2> */}
                <img src={project.src} alt={project.title}  width={500} height={500} className='aspect-auto rounded-xl object-cover group-hover:scale-[1.02] transition duration-200' />
                <h2 className=' dark:text-neutral-400 z-20 mt-2 font-medium tracking-tight text-neutral-500  '>{project.title}</h2>
                <p className='text-sm text-neutral-500 mt-2 dark:text-neutral-400 max-w-sm'>{project.description}</p>
              </a>
            </motion.div>
          ))}
        </div>
    </div>
  )
}

export default Projects
