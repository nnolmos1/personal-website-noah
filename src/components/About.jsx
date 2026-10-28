import { HiBuildingLibrary } from "react-icons/hi2";

export default function About() {
    return (
        <section id="about" className="about">

        <h2 className="section-heading"><span className="section-number">01</span> ABOUT ME</h2>

        <div className="about-intro">
            <div className="about-text">
            <p>My name is Noah, and I am currently a Sophomore at the <span className="highlight">University of Illinois Chicago</span> majoring in <span className="bold">Computer Science + Design.</span> </p>
            <p>Recently I’ve been exploring the worlds of <span className="bold">frontend development</span> & <span className="bold">web design</span>, building things with Figma, React, HTML, CSS, and JavaScript. I'm also a product designer on the founding team for the UIC Chapter of Hack4Impact, a student organization dedicated to using technology for social good. However I’m always looking for opportunities to build new skills and explore new technologies.</p>
            <p>Outside of my studies, you can catch me [need smthg here], working out, or exploring the city! I enjoy digital art, graphic design, and I've recently been exploring photography.</p>
            </div>

            <div className="about-photo">
                <img src="./src/images/mylittleme.jpg" alt="Noah Olmos" />
            </div>
        </div>

        <div className="education">
            <div className="subsection-heading">
                <h3>MY EDUCATION</h3>
                <div className="heading-line"></div>
            </div>

            <div className="education-content">
                <div className="education-logo">
                     <HiBuildingLibrary />
                </div>

                <div className="education-text">
                    <p className="school-name">University of Illinois Chicago</p>
                    <p className="degree">B.S. in CS + Design, Exp. 2029</p>
                    <div className="school-details">
                        <div className="school-detail-tags">
                            <span>4.0 GPA</span>
                            <span>Honors College</span>
                            <span>Chancellor's Fellows Scholar</span>
                        </div>
                        <div className="school-involvement">
                            <div className="school-detail-tags">
                                <span>ACM Web Dev SIG</span>
                                <span>AASIA</span>
                                <span>Hack4Impact UIC</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className="skills-section">

            <div className="subsection-heading">
                <h3>SKILLS & TOOLS</h3>
                <div className="heading-line"></div>
            </div>

            <div className="skills-grid">

                <div className="skill-card">
                    <h4>DEVELOPMENT_ </h4>

                    <div className="skill-tags">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>JavaScript</span>
                        <span>React</span>
                        <span>C++</span>
                        <span>SwiftUI</span>
                        <span>Frontend Development</span>
                        <span>Git/GitHub</span>
                    </div>
                </div>

                <div className="skill-card">
                    <h4>DESIGN_</h4>

                    <div className="skill-tags">
                        <span>Figma</span>
                        <span>UI/UX</span>
                        <span>User Interface Design</span>
                        <span>Web Design</span>
                        <span>Adobe Photoshop</span>
                        <span>Adobe Illustrator</span>
                        <span>Photography</span>
                        <span>Color Theory</span>
                    </div>
                </div>
            </div>

            <div className="skill-card exploring-card">
                <h4>CURRENTLY EXPLORING_</h4>

                <div className="skill-tags">
                <span>Advanced React</span>
                <span>p5.js</span>
                <span>Typography</span>
                <span>C/C++</span>
                <span>AI Tools</span>
                </div>
            </div>

        </div>

        </section>
    )
}