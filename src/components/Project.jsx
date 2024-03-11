const Project = ({project}) => {
  return (
    <article>
        <h3 className="text-lg font-bold pb-2">
            <a href={project.link} target="_blank" rel="noopener noreferrer">{project.title}</a>
        </h3>
        <div>{project.description}</div>
    </article>
  )
}
export default Project