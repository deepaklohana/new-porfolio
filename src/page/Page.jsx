import React from 'react'
import Container from '../components/container'
import Navbar from '../components/navbar/Navbar'
import Projects from '../components/Projects'
import LandingBlogCard from '../components/LandingBlogCard'

const Page = () => {
  return (
    <div className="min-h-screen flex items-start justify-center ">
      <Container className={'min-h-screen p-4 md:pb-10 md:pt-20  '}>
        <h1 className='text-2xl md:text-4xl font-bold tracking-tight text-primary' >Deepak Kumar</h1>
        <p className=' text-secondary text-sm md:text-sm pt-4 max-w-lg'>I'm Software Engineer with a passion for building scalable andd efficient systems. I'm currently working as a Software Enigneer at Google</p>
        <Projects/>
        <LandingBlogCard/>
      </Container>
    </div>
  )
}

export default Page
