import React from 'react';
import { Link } from 'react-router-dom';
import '../css/base_style.css';
import Logo from '../images/ki.png';

// You can create a separate Header component if it gets too large
const Header = () => (
    <header>
        <div id="logo">
            <Link to="/">
                <img src={Logo} alt="logo" />
            </Link>
        </div>
        
        <label className="hamburger-menu">
            <input type="checkbox" />
        </label>
        <aside className="sidebar">
            <nav>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/blog">Blog</a>
                <a href="/portfolio">Portfolio</a>
                <a href="/contact">Contact</a>
            </nav>
        </aside>
    </header>
);

// Main React Component
const BaseLayout = ({ children }) => {
    return (
        <div>
            <Header />

            <main>
                {children} {/* Main content is rendered here */}
            </main>

            <footer>
                <p>2023 Designed and Developed by Kenneth Imade. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default BaseLayout;
