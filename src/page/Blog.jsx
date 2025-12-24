import React from 'react';
import TailwindArticle from '../assets/content/blog/TailwindArticle';
import Container from '../components/Container';
import LandingBlogCard from '../components/LandingBlogCard';
import { motion } from 'motion/react';
import Scale from '../components/Scale';

const Blog = () => {
  return (
    <div>
      <Container className={'relative min-h-screen md:pt-20'}>
        <Scale />
        <motion.h1
          initial={{ opacity: 0, filter: 'blur(10px)', y: 10 }}
          whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="text-primary px-12 pt-8 text-2xl font-bold tracking-tight md:text-4xl"
        >
          All Blogs
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, filter: 'blur(10px)', y: 10 }}
          whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.2 }}
          className="text-secondary max-w-4xl px-12 pt-4 text-sm md:text-sm"
        >
          I'm Software Engineer with a passion for building scalable andd efficient systems. I'm
          currently working as a Software Enigneer at Google
        </motion.p>
        <div>
          <LandingBlogCard />
        </div>
      </Container>
    </div>
  );
};

export default Blog;
