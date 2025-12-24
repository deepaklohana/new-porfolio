import React from 'react';
import Container from '../../../components/Container';
import { motion } from 'motion/react';
import Image from '../../images/mdx-logo.png';
import Scale from '../../../components/Scale';

const MdxArticle = () => {
  return (
    <Container className={'relative min-h-screen p-10 md:pt-20 md:pb-10'}>
      <Scale />
      <motion.div
        initial={{ opacity: 0, filter: 'blur(10px)', y: 0 }}
        animate={{ opacity: 1, filter: 'blur(0px)', y: 10 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="px-4 pt-4 md:py-30"
      >
        {/* Header Image */}
        <div className="mx-4 mb-6">
          <motion.img
            initial={{ filter: 'blur(0px)' }}
            whileHover={{ filter: 'blur(2px)' }}
            transition={{ duration: 0.3 }}
            src={Image}
            alt="MDX Logo"
            className="mx-auto h-20 max-w-full scale-150"
          />
        </div>

        {/* Main Title */}
        <h1 className="text-primary text-2xl font-bold tracking-tight md:text-4xl">
          MDX in Modern Web Development: Writing Content Like a Developer
        </h1>

        <p className="text-secondary pt-4 text-sm">
          In modern web development, content is no longer static. Blogs, documentation, and
          marketing pages increasingly require interactive elements, live code examples, and
          reusable UI components.
        </p>

        <p className="text-secondary pt-4 text-sm">
          <strong>MDX</strong> solves this problem by allowing developers to write Markdown while
          seamlessly embedding React components—bridging the gap between content and code.
        </p>

        {/* Section */}
        <h2 className="text-primary pt-10 text-2xl font-bold tracking-tight md:text-4xl">
          What Is MDX?
        </h2>

        <p className="text-secondary pt-4 text-sm">
          MDX is an extension of Markdown that lets you use JSX directly inside your content files.
          This means headings, paragraphs, and lists live alongside React components.
        </p>

        <p className="text-secondary pt-4 text-sm">
          Instead of being limited to plain text, MDX allows developers to build rich, interactive
          content experiences using the same components they use throughout their application.
        </p>

        {/* Example */}
        <h2 className="text-primary pt-10 text-2xl font-bold tracking-tight md:text-4xl">
          MDX in Action
        </h2>

        <p className="text-secondary pt-4 text-sm">
          With MDX, you can import and use components directly inside a Markdown file.
        </p>

        <pre className="text-secondary overflow-x-auto rounded-lg bg-neutral-100 p-4 pt-4 text-sm dark:bg-neutral-800">
          <code>{`import Button from '@/components/Button'

# Welcome to MDX

<Button label="Get Started" />`}</code>
        </pre>

        {/* Benefits */}
        <h2 className="text-primary pt-10 text-2xl font-bold tracking-tight md:text-4xl">
          Why Developers Love MDX
        </h2>

        <ul className="text-secondary list-disc pt-4 pl-5 text-sm">
          <li>Write content using Markdown syntax</li>
          <li>Embed interactive React components</li>
          <li>Reuse design system components</li>
          <li>Perfect for blogs and documentation</li>
        </ul>

        <p className="text-secondary pt-4 text-sm">
          MDX empowers developers to treat content as part of the application instead of a
          disconnected system.
        </p>

        {/* Use Cases */}
        <h2 className="text-primary pt-10 text-2xl font-bold tracking-tight md:text-4xl">
          Common Use Cases for MDX
        </h2>

        <p className="text-secondary pt-4 text-sm">
          MDX is widely used in developer-focused products where content and interactivity go hand
          in hand.
        </p>

        <ul className="text-secondary list-disc pt-4 pl-5 text-sm">
          <li>Technical blogs</li>
          <li>Product documentation</li>
          <li>Design system guides</li>
          <li>Marketing pages with interactive demos</li>
        </ul>

        {/* MDX with React */}
        <h2 className="text-primary pt-10 text-2xl font-bold tracking-tight md:text-4xl">
          Using MDX with React
        </h2>

        <p className="text-secondary pt-4 text-sm">
          MDX integrates naturally with React-based frameworks like Vite, Next.js, and Remix.
          Content can be imported and rendered just like any other component.
        </p>

        <p className="text-secondary pt-4 text-sm">
          This makes MDX an excellent choice for portfolio blogs, SaaS documentation, and
          content-heavy applications.
        </p>

        {/* Styling */}
        <h2 className="text-primary pt-10 text-2xl font-bold tracking-tight md:text-4xl">
          Styling MDX Content
        </h2>

        <p className="text-secondary pt-4 text-sm">
          MDX works beautifully with Tailwind CSS and design systems. Developers can wrap MDX
          content in layout components or use
          <code className="px-1">@tailwindcss/typography</code> for consistent styling.
        </p>

        {/* Misconceptions */}
        <h2 className="text-primary pt-10 text-2xl font-bold tracking-tight md:text-4xl">
          Common Misconceptions About MDX
        </h2>

        <p className="text-secondary pt-4 text-sm">
          Some believe MDX is only for blogs, but it’s far more powerful. MDX can power entire
          documentation sites and complex content workflows.
        </p>

        {/* Conclusion */}
        <h2 className="text-primary pt-10 text-2xl font-bold tracking-tight md:text-4xl">
          Conclusion
        </h2>

        <p className="text-secondary pt-4 text-sm">
          MDX represents a modern approach to content creation—one where developers don’t have to
          choose between flexibility and simplicity.
        </p>

        <p className="text-secondary pt-4 text-sm">
          By combining Markdown with React, MDX enables teams to build rich, interactive, and
          maintainable content experiences that scale with their applications.
        </p>
      </motion.div>
    </Container>
  );
};

export default MdxArticle;
