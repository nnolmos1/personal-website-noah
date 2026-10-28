export default function ExperienceCard(props) {
    return (
        <div className="experience-card">
            {props.date && <p className="experience-card-date">{props.date}</p>}
            <h3 className="experience-title"> {props.title} </h3>
            <p className="experience-role"> {props.role} </p>
            <p className="experience-description"> {props.description} </p>

            <div className="experience-tags"> 
                {props.tags.map((tag) => (
                <  span key={tag}>{tag}</span>
                ))}
            </div>
        </div>
    )
}