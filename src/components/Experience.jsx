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

            <div className="experience-item"> {/* Exp 3 */}

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


            <div className="experience-item"> {/* Exp 4 */}

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

            
        </div>
        
        </section>
    )
}