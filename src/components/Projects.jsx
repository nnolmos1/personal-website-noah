import ProjectCard from "./ProjectCard";
import oliveImg from "../images/olive_img.jpg";
import insurelitImg from "../images/insurelit_img.jpg";
import noImg from "../images/noimage.png";

export default function Projects() {
    return (
        <section id="projects" className="projects">
            <h2 className="section-heading"> <span className="section-number">03</span> PROJECTS </h2>

            <p className="section-subheading"> A mix of highlighted experiences, coursework, and personal projects </p>

            <div className="heading-divider">
                <span className="divider-line"></span>
                <span className="divider-star">✦</span>
                <span className="divider-line"></span>
            </div>

            <div className="projects-grid"> 
                <ProjectCard
                    title="Olive - iOS"
                    description="AI-powered nutrition assistant designed around accessibility and dietary needs."
                    image={oliveImg}
                    tags={["SwiftUI", "Figma", "AI"]}
                    link="#"
                />

                <ProjectCard
                    title="Erie House Website"
                    description="Website redesign project for a Chicago nonprofit organization."
                    image={noImg}
                    tags={["Product Design", "UX Research", "Product Design"]}
                    link="#"
                />

                {/* <ProjectCard
                    title="Erie Website Redesign"
                    description="Website redesign project for a Chicago nonprofit organization."
                    image="/your-image-here.png"
                    tags={["Figma", "UI/UX", "Wireframing"]}
                    link="#"
                    featured={true}
                /> */}

                <ProjectCard
                    title="InsureLit"
                    description="Health & Insurance Literacy app designed to help users navigate the complexities of healthcare."
                    image={insurelitImg}
                    tags={["Figma", "UI/UX", "Frontend"]}
                    link="#"
                />

                <ProjectCard
                    title="Personal Website"
                    description="Designed my own website in Figma and built it from scratch using HTML, CSS, JavaScript, and React. More updates to come!!"
                    image={noImg}
                    tags={["Figma", "Web Design", "React"]}
                    link="#"
                />

                <ProjectCard
                    title="Olive - iOS"
                    description="AI-powered nutrition assistant designed around accessibility and dietary needs."
                    image={noImg}
                    tags={["SwiftUI", "Figma", "AI"]}
                    link="#"
                />

                <ProjectCard
                    title="InsureLit"
                    description="Health & Insurance Literacy app designed to help users navigate the complexities of healthcare."
                    image={noImg}
                    tags={["Figma", "UI/UX", "Frontend"]}
                    link="#"
                />
            </div>
        </section>
    )
}