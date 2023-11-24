import React from 'react';
import useDocumentTitle from "../hooks/documentTitle";
import { Link } from 'react-router-dom';
import '../css/home_style.css';

function Home() {
    useDocumentTitle("Kenneth Imade")
  return (
    <>
        <section className="intro home-section">
            <h1>Kenneth Imade</h1>
            <p>Data Scientist & Engineer</p>
        </section>

        <section className="about home-section">
            <p className="text">
            I am Kenneth Imade; a data scientist and engineer. I explore ways in which data can be used in solving various problems around us.
            I believe that by harnessing data available to us we are able to make decisions which pave the part of a brighter tomorrow.
            </p>
            <Link className="button-89 link" to="/about">About Me</Link>
        </section>

        <section className="blog home-section">
            <h1 className="text">Read up on all things programming, data science/engineering.</h1>
            <Link className="button-54 link" to="/blog">Blog</Link>
        </section>

        <section className="projects-home home-section">
            <h1 className="text">Check out some of my projects.</h1>
            <Link className="button-54 link" to="/portfolio">Portfolio</Link>
        </section>
    </>
  );
}

export default Home;
