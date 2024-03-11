import { useState } from 'react';
import PageTitleContext from './PageTitleContext';
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Home from './components/Home'
import Projects from './components/Projects'
import Post from './components/Post'
import Posts from './components/Posts'
import ErrorPage from './components/ErrorPage';

function App() {

  return (
    <>
      <PageTitleContext.Provider value={useState('Kenneth Imade')}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/projects" element={<Projects />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:slug" element={<Post />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Layout>
      </PageTitleContext.Provider>
    </>
  )
}

export default App
