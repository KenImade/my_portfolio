import React, { useState, useEffect } from "react";
import useDocumentTitle from "../hooks/documentTitle";
import { Link } from "react-router-dom";
import '../css/blog_style.css';
import "../css/portfolio_style.css";
import Projects from "../data/projects_data.json";

function Portfolio() {
    useDocumentTitle("Kenneth Imade's Portfolio")
    const [projects, setProjects] = useState([]);

    useEffect(() => {
      setProjects(Projects);
    }, []);
    
    return (
        <>
            <h1 className="title">
                Portfolio
            </h1>

            <section className="portfolio">
                <div id="articles-container">
                    {projects.map(project => (
                        project.display && <div key={project.id}>
                            {/* Ensure the dynamic path is correctly formed */}
                            <h2 className="article-title">
                                <Link className="link" to={`/portfolio/${project.id}`}>{project.name}</Link>
                            </h2>
                            <p className="article-excerpt">{project.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default Portfolio;