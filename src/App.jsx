import React from "react";
import Container from "./components/container";
import Page from "./page/Page";
import Navbar from "./components/navbar/Navbar";
import { Route,  Routes } from "react-router-dom";
import About from "./page/About";
import Contact from "./page/Contact";
import Blog from "./page/Blog";


const App = () => {
  return (
    <div className={` antialiased bg-neutral-100 dark:bg-neutral-700 `}>
      {/* ${inter.className} */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Page/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/blog" element={<Blog/>}/>
      </Routes>
      
    </div>
  );
};

export default App;
