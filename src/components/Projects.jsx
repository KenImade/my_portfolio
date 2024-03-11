import useDocumentTitle from "../hooks/documentTitle";
import projectsData from "../data/projects.json";
import { useState, useEffect, useContext } from "react";
import Project from "./Project";
import PageTitleContext from "../PageTitleContext";

const Projects = () => {

    useDocumentTitle("Projects")
    const [projects, setProjects] = useState([]);
    const [, setTitle] = useContext(PageTitleContext);

    useEffect(() => {
      setProjects(projectsData)
      setTitle("Projects")
    }, [])
    
  return (
    <main className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {
            projects.map(project => (
                <Project project={project} key={project.title}/>
            ))
        }
    </main>
  )
}
export default Projects