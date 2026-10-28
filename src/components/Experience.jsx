import ExperienceCard from "./ExperienceCard";

export default function Experience() {
    return (
        <section id="experience" className="experience">
            <h2 className="section-heading"> <span className="section-number">02</span> EXPERIENCE </h2>
            <p className="section-subheading"> My journey as a student, so far. </p>

        <div className="experience-content">
            <div className="experience-item"> {/* Exp 1 */}


                <div className="timeline-star">✧</div>

                <ExperienceCard 
                    date="APR 2026 – PRESENT"
                    title="Hack4Impact UIC"
                    role="PRODUCT DESIGNER"
                    description="Designing & developing digital solutions for Chicago-based nonproft organizations."
                    tags={["UX Research", "Wireframing", "Figma"]}
                />
            </div>

            <div className="experience-item"> {/* Exp 2 */}

                <div className="timeline-star">✧</div>

                <ExperienceCard 
                    date="JUN 2026 – AUG 2026"
                    title="Everyone Can Code"
                    role="IOS DESIGNER & DEVELOPER"
                    description="Prototyed an AI nutrition assistant app for iOS, designed around accessibility and dietary needs."
                    tags={["SwiftUI", "Figma", "UI/UX", "AI"]}
                />
            </div>

            <div className="experience-item"> {/* Exp 3 */}

                <div className="timeline-star">✧</div>

                <ExperienceCard 
                    date="JUN 2025 – AUG 2025"
                    title="Discovery Partners Institute"
                    role="IOS APP DESIGNER"
                    description="Prototyped a health & insurance literacy app, and pitched it at Apple Michigan Ave as finalists in the 2025 Everyone Can Code Competition!"
                    tags={["SwiftUI", "Figma", "UI/UX"]}
                />
            </div>


            <div className="experience-item"> {/* Exp 4 */}

                <div className="timeline-star">✧</div>

                <ExperienceCard 
                date="JUN 2024 – AUG 2024"
                    title="Chicago Public Schools"
                    role="IT SUMMER INTERN"
                    description="Assisted in the maintenance of IT systems for a Chicago public high school."
                    tags={["Teamwork", "Communication", "IT Support"]}
                />
            </div>

            
        </div>
        
        </section>
    )
}