import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useDocumentTitle from "../hooks/documentTitle";
import Projects from '../data/projects_data.json';
import '../css/project_detail_style.css'; // Adjust the path as needed
import PythonIcon from '../images/icons/python.png'; // Import images as needed
import SqlIcon from '../images/icons/sql-server.png';
import RIcon from '../images/icons/letter-r.png';
import PowerBIIcon from '../images/icons/powerbi.png';
import JupyterIcon from '../images/icons/jupyter.png';
import MatplotlibIcon from '../images/icons/matplotlib.svg';
import GithubIcon from '../images/icons/github-sign.png';
import BrowserIcon from '../images/icons/browser.png';
import PageNotFound from './PageNotFound';

function ProjectDetail() {
    
    const { id } = useParams();
    console.log(id)
    const project = Projects.find(p => p.id === parseInt(id));
    useDocumentTitle(project.name)
    if (!project) {
        return <PageNotFound />;
    }
    const toolIcons = {
        Python: PythonIcon,
        SQL: SqlIcon,
        R: RIcon,
        PowerBI: PowerBIIcon,
        Jupyter: JupyterIcon,
        Matplotlib: MatplotlibIcon
    };

    return (
        <section className="project-container">
        <Link to="/portfolio" className="link return-link">← Return to projects list</Link>
        <h1 className="project-title">{project.name}</h1>

        <p className="tools">Tools</p>
        <div className="skill-list">
            {project.tools.map(tool => (
            <span key={tool} className="text skill">
                {tool} <img className="icon" src={toolIcons[tool]} alt={tool} />
            </span>
            ))}
        </div>

        {project.hasLinks && (
            <div>
            <p className="tools">Links</p>
            {project.hasGit && (
                <span>
                <a className="link text project-link" href={project.gitLink} target="_blank" rel="noopener noreferrer">
                    Github<img className="icon" src={GithubIcon} alt="Github" />
                </a>
                </span>
            )}
            {project.hasExternalLink && (
                <span>
                <a className="link text project-link" href={project.externalLink} target="_blank" rel="noopener noreferrer">
                    Live Project <img className="icon" src={BrowserIcon} alt="Live Project" />
                </a>
                </span>
            )}
            </div>
        )}

        {project.chapters.map(chapter => (
            <div key={chapter.title}>
            <h2 className="section-title">{chapter.title}</h2>
            {chapter.texts.map((text, index) => (
                <p key={index} className="text">{text}</p>
            ))}
            {chapter.hasImages && (
                <div className="gallery">
                {chapter.images.map(image => (
                    <div key={image.path} className="image-container">
                    <img src={image.path} alt={image.caption} />
                    <p className="image-title">{image.caption}</p>
                    </div>
                ))}
                </div>
            )}
            </div>
        ))}
        </section>
    );
}

export default ProjectDetail;
