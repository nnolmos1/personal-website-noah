import ProjectCard from "./ProjectCard";

export default function Projects() {
    return (
        <section id="projects" className="projects">
            <h2 className="section-heading"> 03. PROJECTS </h2>

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
                    tags={["Figma", "UI/UX", "Frontend"]}
                    link="#"
                />

                <ProjectCard
                    title="Erie Website Redesign"
                    description="Website redesign project for a Chicago nonprofit organization."
                    image="/your-image-here.png"
                    tags={["Figma", "UI/UX", "Frontend"]}
                    link="#"
                />

                <ProjectCard
                    title="Erie Website Redesign"
                    description="Website redesign project for a Chicago nonprofit organization."
                    image="/your-image-here.png"
                    tags={["Figma", "UI/UX", "Frontend"]}
                    link="#"
                />
            </div>
        </section>
    )
}