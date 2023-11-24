import React from 'react';
import {Route, Routes } from 'react-router-dom';
import BaseLayout from './components/BaseLayout';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import ProjectDetail from './components/ProjectDetail';
import PageNotFound from './components/PageNotFound';
// ... import other components

function App() {
  return (
    <BaseLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:id" element={<ProjectDetail />} />
        <Route path="*" element={<PageNotFound />} />
        {/* Define other routes here */}
      </Routes>
    </BaseLayout>
  );
}

export default App;