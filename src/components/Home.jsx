import { Link } from "react-router-dom";
import useDocumentTitle from "../hooks/documentTitle";
import projectsData from "../data/projects.json";
import { useState, useEffect, useContext } from "react";
import Project from "./Project";
import PostCard from "./PostCard";
import PageTitleContext from "../PageTitleContext";

const Home = () => {
    useDocumentTitle("Kenneth Imade")
    const [, setTitle] = useContext(PageTitleContext)
    const [projects, setProjects] = useState([]);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      setProjects(projectsData)
      setTitle('kenneth imade')
      fetch('/posts.json')
      .then(response => response.json())
      .then(data => {
        // Sort the posts by date before setting them into state
        const sortedPosts = data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setPosts(sortedPosts);
      })
      .catch(error => console.error("Couldn't load posts:", error));
    }, [])

  return (
    <main className="grid gap-12 sm:grid-cols-2 xl:grid-cols-3">
        <div
            className="space-y-6 border-b xl:border-none border-[#42200620] pb-6 sm:col-span-2 xl:col-span-1"
        >
            <div className="text-2xl">
                According to my degree I'm a data analyst but last I checked I have to transform the data also so yeah, I'm an analytics engineer.
            </div>
            
            <nav>
                <ul className="text-sm flex flex-col gap-2 oj">
                    <li>
                        <a 
                            className="transition transition-all opacity-80 hover:opacity-100" 
                            href="https://www.linkedin.com/in/kenneth-imade/" target="_blank" rel="noopener noreferrer"
                        >
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        <a 
                        className="transition transition-all opacity-80 hover:opacity-100" 
                        href="https://github.com/kenimade" target="_blank" rel="noopener noreferrer"
                        >
                            GitHub
                        </a>
                    </li>
                    <li>
                        <a 
                            className="transition transition-all opacity-80 hover:opacity-100" 
                            href="mailto:kenimade91@gmail.com"
                        >
                            Email
                        </a>
                    </li>
                </ul>
            </nav>
        </div>

        <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Writing</h2>
            <ul className="space-y-7">
                {posts.slice(0,5).map(post => (
                    <li key={post.slug}>
                        <Link to={`/posts/${post.slug}`}>
                            <PostCard post={post}/>
                        </Link>
                    </li>
                ))}
            </ul>
            <div>
                <Link to="/posts" className="text-sm font-semibold opacity-80">
                    See all {posts.length} writeups →
                </Link>
            </div>
        </div>

        <div className="space-y-4 sm:row-span-4">
            <h2 className="text-2xl font-semibold">Projects</h2>
            <ul className="space-y-7">
                {
                    projects.slice(0, 5).map(
                        project => (
                            <li key={project.title}>
                                <Project project={project} />
                            </li>
                        )
                    )
                }
            </ul>
            <div>
                <Link to="/projects" className="text-sm font-semibold opacity-80">
                    See all {projects.length} projects →
                </Link>
            </div>
        </div>

    </main>
  )
}
export default Home