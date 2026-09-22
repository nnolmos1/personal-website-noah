import ProjectCard from "./ProjectCard";

export default function Projects() {
    return (
        <section id="projects" className="projects">
            <h2 className="section-heading"> <span className="section-number">03</span> PROJECTS </h2>

            <div className="heading-divider">
                <span className="divider-line"></span>
                <span className="divider-star">✦</span>
                <span className="divider-line"></span>
            </div>
    
            <p className="section-subheading"> A mix of highlighted experiences, coursework, and personal projects </p>

            <div className="projects-grid"> 
                <ProjectCard
                    title="Olive - iOS"
                    description="AI-powered nutrition assistant designed around accessibility and dietary needs."
                    image="/your-image-here.png"
                    tags={["SwiftUI", "Figma", "AI"]}
                    link="#"
                />

                <ProjectCard
                    title="Erie House Website"
                    description="Website redesign project for a Chicago nonprofit organization."
                    image="/your-image-here.png"
                    tags={["Figma", "UX Research", "Frontend"]}
                    link="#"
                />

                {/* <ProjectCard
                    title="Erie Website Redesign"
                    description="Website redesign project for a Chicago nonprofit organization."
                    image="/your-image-here.png"
                    tags={["Figma", "UI/UX", "Frontend"]}
                    link="#"
                    featured={true}
                /> */}

                <ProjectCard
                    title="InsureLit"
                    description="Health & Insurance Literacy app designed to help users navigate the complexities of healthcare."
                    image="/your-image-here.png"
                    tags={["Figma", "UI/UX", "Frontend"]}
                    link="#"
                />

                <ProjectCard
                    title="Personal Website"
                    description="Designed my own website in Figma and built it from scratch using HTML, CSS, JavaScript, and React. More updates to come!!"
                    image="/your-image-here.png"
                    tags={["Figma", "Web Design", "React"]}
                    link="#"
                />
            </div>

            <div className="projects-more">
                <p> I also have a growing collection of design studies and works across photography, typography, color, and more!</p>
                <a href="#"> EXPLORE DESIGN WORK ↗ </a>
            </div>
        </section>
    )
}