import React from 'react';
import Container from './components/Container.jsx';
import Page from './page/Page';
import Navbar from './components/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import About from './page/About';
import Contact from './page/Contact';
import Blog from './page/Blog';
import TailwindArticle from './assets/content/blog/TailwindArticle';
import ReactArticle from './assets/content/blog/ReactArticle';
import MdxArticle from './assets/content/blog/MdxArticle';
import Project from './page/Project';
import Footer from './components/footer/Footer';
import { Toaster } from 'sonner';

const App = () => {
  return (
    <div
      className={`bg-neutral-100 antialiased [--pattern-fg:var(--color-gray-950)]/5 dark:bg-neutral-700`}
    >
      {/* ${inter.className} */}
      <Container>
        <Navbar />
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/blog/tailwind-css" element={<TailwindArticle />} />
          <Route path="/blog/react-component-driven-design" element={<ReactArticle />} />
          <Route path="/blog/mdx-modern-web-development" element={<MdxArticle />} />
        </Routes>
        <Toaster position="top-center" />
        <Footer />
      </Container>
    </div>
  );
};

export default App;
