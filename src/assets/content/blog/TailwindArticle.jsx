import React from 'react';
import Container from '../../../components/Container';
import { motion } from 'motion/react';
import Image from '../../images/tailwind-css-logo.png';
import Scale from '../../../components/Scale';

const TailwindArticle = () => {
  return (
    <Container className={'relative min-h-screen p-10 md:pt-20 md:pb-10'}>
      <Scale />
      <motion.div
        initial={{ opacity: 0, filter: 'blur(10px)', y: 0 }}
        animate={{ opacity: 1, filter: 'blur(0px)', y: 10 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="px-4 md:py-30"
      >
        <motion.div
          initial={{ filter: 'blur(0px)' }}
          whileHover={{ filter: 'blur(2px)' }}
          transition={{ duration: 0.3 }}
          className="mx-4 mb-6"
        >
          <div className="mx-4 mb-6">
            <motion.img
              initial={{ filter: 'blur(0px)' }}
              whileHover={{ filter: 'blur(2px)' }}
              transition={{ duration: 0.3 }}
              src={Image}
              alt="Tailwind CCS Logo"
              className="mx-auto h-20 max-w-full scale-150"
            />
          </div>
        </motion.div>

        {/* Main Heading */}
        <h1 className="text-primary text-2xl font-bold tracking-tight md:text-4xl">
          Mastering Tailwind CSS: A Modern Approach to Styling Web Applications
        </h1>

        <p className="text-secondary pt-4 text-sm">
          In the rapidly evolving world of web development, building clean, responsive, and scalable
          user interfaces has become more important than ever.
        </p>

        <p className="text-secondary pt-4 text-sm">
          This is where <strong>Tailwind CSS</strong> has emerged as a game-changer. Rather than
          being a traditional component-based CSS framework, Tailwind introduces a utility-first
          approach.
        </p>

        {/* Section Heading */}
        <h2 className="text-primary pt-10 text-2xl font-bold tracking-tight md:text-4xl">
          What Is Tailwind CSS?
        </h2>

        <p className="text-secondary pt-4 text-sm">
          Tailwind CSS is a <strong>utility-first CSS framework</strong> that provides low-level
          utility classes like
          <code className="px-1">p-4</code>,<code className="px-1">text-center</code>, and
          <code className="px-1">bg-blue-500</code>.
        </p>

        <h2 className="text-primary pt-10 text-2xl font-bold tracking-tight md:text-4xl">
          The Utility-First Philosophy
        </h2>

        <p className="text-secondary pt-4 text-sm">
          Instead of abstracting styles into reusable class names, Tailwind encourages building
          designs directly in your markup.
        </p>

        <ul className="text-secondary list-disc pt-4 pl-5 text-sm">
          <li>No context switching between HTML and CSS</li>
          <li>Predictable styles without specificity issues</li>
          <li>Faster prototyping and iteration</li>
          <li>Easier refactoring</li>
        </ul>

        <h2 className="text-primary pt-10 text-2xl font-bold tracking-tight md:text-4xl">
          Responsive Design Made Simple
        </h2>

        <p className="text-secondary pt-4 text-sm">
          Tailwind provides responsive utilities using breakpoint prefixes such as
          <code className="px-1">sm:</code>,<code className="px-1">md:</code>,
          <code className="px-1">lg:</code>.
        </p>

        <pre className="text-secondary overflow-x-auto rounded-lg bg-neutral-100 p-4 pt-4 text-sm dark:bg-neutral-800">
          <code>{`<div class="p-4 md:p-8 lg:p-12">
  Responsive Padding
</div>`}</code>
        </pre>

        <h2 className="text-primary pt-10 text-2xl font-bold tracking-tight md:text-4xl">
          Performance and Optimization
        </h2>

        <p className="text-secondary pt-4 text-sm">
          Tailwind’s JIT compiler generates only the CSS your application uses, resulting in
          extremely small production builds.
        </p>

        <h2 className="text-primary pt-10 text-2xl font-bold tracking-tight md:text-4xl">
          Tailwind CSS with React
        </h2>

        <p className="text-secondary pt-4 text-sm">
          Tailwind works exceptionally well with React. Styling stays colocated with components.
        </p>

        <pre className="text-secondary overflow-x-auto rounded-lg bg-neutral-100 p-4 pt-4 text-sm dark:bg-neutral-800">
          <code>{`<button className="px-4 py-2 bg-indigo-600 text-white rounded-lg
hover:bg-indigo-700 transition">
  Click Me
</button>`}</code>
        </pre>

        <h2 className="text-primary pt-10 text-2xl font-bold tracking-tight md:text-4xl">
          Conclusion
        </h2>

        <p className="text-secondary pt-4 text-sm">
          Mastering Tailwind CSS means embracing a modern, scalable approach to styling web
          applications.
        </p>
      </motion.div>
    </Container>
  );
};

export default TailwindArticle;
