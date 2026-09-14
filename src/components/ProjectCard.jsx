export default function ProjectCard(props) {
    return (
        <div className="project-card">
            <img
                className="project-image"
                src={props.image}
                alt={props.title}
            />

            <div className="project-card-content">
                <h3>{props.title}</h3>

                <p className="project-description">
                    {props.description}
                </p>

                <div className="project-tags">
                    {props.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                    ))}
                </div>

                <a
                    className="project-link"
                    href={props.link}
                    target="_blank"
                    rel="noreferrer"
                >
                    VIEW PROJECT ↗
                </a>
            </div>

            </div>
    )
}