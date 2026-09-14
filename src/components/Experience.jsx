import ExperienceCard from "./ExperienceCard";

export default function Experience() {
    return (
        <section id="experience" className="experience">
            <h2 className="section-heading"> 02. EXPERIENCE </h2>
            <p className="section-subheading"> My journey, so far </p>

        <div className="experience-content">
            <div className="experience-item"> {/* Exp 1 */}

                <div className="experience-date"> 
                    <p>APR 2026 - PRESENT</p>
                </div>

                <div className="timeline-marker">
                    <div className="timeline-star">⟡</div>
                    <div className="timeline-line"></div>
                </div>

                <ExperienceCard 
                    title="Hack4Impact UIC"
                    role="PRODUCT DESIGNER"
                    description="Designing & developing digital solutions for Chicago-based nonproft organizations."
                    tags={["Product Design", "UI/UX", "Figma"]}
                />
            </div>

            <div className="experience-item"> {/* Exp 2 */}

                <div className="experience-date"> 
                    <p>JUN 2026 - AUG 2026</p>
                </div>

                <div className="timeline-marker">
                    <div className="timeline-star">⟡</div>
                    <div className="timeline-line"></div>
                </div>

                <ExperienceCard 
                    title="Everyone Can Code"
                    role="iOS DESIGNER & DEVELOPER"
                    description="Prototyed an AI nutrition assistant app for iOS, designed around accessibility and dietary needs."
                    tags={["SwiftUI", "Figma", "UI/UX", "AI"]}
                />
            </div>

            <div className="experience-item"> {/* Exp 3 */}

                <div className="experience-date"> 
                    <p>JUN 2025 - AUG 2025</p>
                </div>

                <div className="timeline-marker">
                    <div className="timeline-star">⟡</div>
                    <div className="timeline-line"></div>
                </div>

                <ExperienceCard 
                    title="Discovery Partners Institute"
                    role="iOS APP DESIGNER"
                    description="Prototyped a health & insurance literacy app. Pitched at Apple Michigan Ave as finalists in the Everyone Can Code Competition."
                    tags={["SwiftUI", "Figma", "UI/UX"]}
                />
            </div>


            <div className="experience-item"> {/* Exp 4 */}

                <div className="experience-date"> 
                    <p>APR 2026 - PRESENT</p>
                </div>

                <div className="timeline-marker">
                    <div className="timeline-star">⟡</div>
                    <div className="timeline-line"></div>
                </div>

                <ExperienceCard 
                    title="CHicago Public Schools"
                    role="IT SUMMER INTERN"
                    description="Assisted in the maintenance of IT systems for a Chicago public high school."
                    tags={["Teamwork", "Communication", "IT Support"]}
                />
            </div>

            
        </div>
        
        </section>
    )
}