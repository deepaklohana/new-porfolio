import React from 'react'
import TailwindArticle  from '../assets/content/blog/TailwindArticle'
import Container from '../components/container'
import LandingBlogCard from '../components/LandingBlogCard'

const Blog = () => {
  return (
    <div>
        <Container className={'min-h-screen p-4 md:pb-10 md:pt-20  '}>
            <h1 className='pl-3 text-2xl md:text-4xl font-bold tracking-tight text-primary' >All Blogs</h1>
            <p className=' text-secondary text-sm md:text-sm pt-4 max-w-lg'>I'm Software Engineer with a passion for building scalable andd efficient systems. I'm currently working as a Software Enigneer at Google</p>
            <div>
                <LandingBlogCard/>
            </div>
        </Container>
    </div>
  )
}

export default Blog
