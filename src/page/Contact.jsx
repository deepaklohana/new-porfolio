import React from 'react';
import Container from '../components/Container';
import Navbar from '../components/navbar/Navbar';
import Projects from '../components/Projects';
import LandingBlogCard from '../components/LandingBlogCard';
import { motion } from 'motion/react';
import Footer from '../components/footer/Footer';
import ContactForm from '../components/ContactForm';
import Scale from '../components/Scale';

const Contact = () => {
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
          Contact Me
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, filter: 'blur(10px)', y: 10 }}
          whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.2 }}
          className="text-secondary max-w-lg px-12 py-4 text-sm md:text-sm"
        >
          I'm open to freelancing offers. React out to me to inquire more about my work.
        </motion.p>
        <ContactForm />
      </Container>
    </div>
  );
};

export default Contact;
