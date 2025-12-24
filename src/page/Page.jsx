import React from 'react';
import Container from '../components/Container';

import Projects from '../components/Projects';
import LandingBlogCard from '../components/LandingBlogCard';
import { motion } from 'motion/react';


import Testimonial from '../components/Testimonial';
import Scale from '../components/Scale';

const Page = () => {
  return (
    <div className=" ">
      <Container className={'relative min-h-screen md:pt-20'}>
        <Scale />
        <motion.h1
          initial={{ opacity: 0, filter: 'blur(10px)', y: 10 }}
          whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="text-primary px-12 pt-8 text-2xl font-bold tracking-tight md:text-4xl"
        >
          Deepak Kumar
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, filter: 'blur(10px)', y: 10 }}
          whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.2 }}
          className="text-secondary max-w-lg px-12 py-4 text-sm md:text-sm"
        >
          I'm Software Engineer with a passion for building scalable andd efficient systems. I'm
          currently working as a Software Enigneer at Google
        </motion.p>

        <Projects limit={3} />
        <LandingBlogCard limit={3} />
        <Testimonial />
      </Container>
    </div>
  );
};

export default Page;
