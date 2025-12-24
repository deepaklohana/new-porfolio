
import React from 'react'
import { Link } from 'react-router-dom'
import TailwindArticle from '../assets/content/blog/TailwindArticle'
import { motion } from 'motion/react'
import SectionHeading from './SectionHeading'
import MotionDiv from './MotionDiv'


const LandingBlogCard = ({limit}) => {
    const blogs=[
        {
            title: 'Mastering Tailwind CSS: A Modern Approach to Styling Web Applications',
            description:"In the world of web development, CSS frameworks have been pivotal in helpingdevelopers create responsive, modern, and visually appealing websites efficiently.",
            date:'Dec 19, 2025',
            slug:'tailwind-css',
        },
        {
            title: 'Building Scalable UI with React and Component-Driven Design',
            description: "Modern web applications demand reusable, maintainable, and scalable user interfaces. React’s component-driven architecture empowers developers to build complex UIs efficiently while keeping code clean and organized.",
            date: 'Dec 19, 2025',
            slug: 'react-component-driven-design',
        },
        {
            title: 'MDX in Modern Web Development: Writing Content Like a Developer',
            description: "MDX bridges the gap between content and code, allowing developers to write rich, interactive documentation and blogs using JSX inside Markdown for a truly developer-first content workflow.",
            date: 'Dec 19, 2025',
            slug: 'mdx-modern-web-development',
        }
    ]
    const visibleBlogs = limit?blogs.slice(0,limit):blogs;
  return (
    <div className='py-8 px-12'>
        <div>
            <SectionHeading  children={'Sharing knowledge as I learn'} delay={0.4}/>
            
        </div>
        <div className='flex flex-col gap-4 py-2 '>
            {visibleBlogs.map((blog,index)=>(
                <MotionDiv  initial={{opacity:0,filter:'blur(10px)',y:5}} whileInView={{opacity:1,filter:'blur(0px)',y:0}} transition={{duration:0.3,ease:'easeInOut',delay:0.3*index}}
                className='flex flex-col gap-2' key={index}>
                    <div  className='flex items-start justify-between'>
                        <Link to={`/blog/${blog.slug}`} >
                            <h2 className='text-black dark:text-neutral-400  font-medium maxw-3/4 tracking-tight '>{blog.title}</h2>
                        </Link>
                        <h6 className='text-sm text-neutral-500  dark:text-neutral-400 '>{blog.date}</h6>
                    </div>
                    <p className='text-sm text-neutral-500  dark:text-neutral-400 max-w-4/5'>{blog.description}</p>
                </MotionDiv>
            ))}
        </div>
    </div>
  )
}

export default LandingBlogCard
