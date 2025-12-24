import React from 'react';
import Container from '../components/Container';

import Cards from '../components/Cards';
import Timeline from '../components/Timeline';
import { motion } from 'motion/react';
import Scale from '../components/Scale';

const About = () => {
  return (
    <div className="">
      <Container className={'relative min-h-screen md:pt-20'}>
        <Scale />
        <motion.h1
          initial={{ opacity: 0, filter: 'blur(10px)', y: 10 }}
          whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="text-primary px-12 pt-8 text-2xl font-bold tracking-tight md:text-4xl"
        >
          About me
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, filter: 'blur(10px)', y: 10 }}
          whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.2 }}
          className="text-secondary max-w-4xl px-12 pt-4 text-sm"
        >
          I’m a MERN Stack Developer with a strong focus on building scalable, efficient, and
          user-friendly web applications. I specialize in MongoDB, Express.js, React, and Node.js,
          and enjoy turning complex ideas into clean, maintainable solutions. From crafting
          responsive interfaces to designing robust backend APIs, I’m passionate about delivering
          high-quality digital experiences.
        </motion.p>
        <Cards />

        <Timeline />
      </Container>
    </div>
  );
};

export default About;
