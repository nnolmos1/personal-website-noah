export default function About() {
    return (
        <section id="about" className="about">

        <h2 className="section-heading">01. ABOUT ME</h2>

        <div className="about-intro">
            <div className="about-text">
            <p>My name is Noah Olmos, and I am currently a Sophomore at the <span className="highlight">University of Illinois Chicago</span> majoring in <span className="bold">Computer Science + Design.</span> </p>
            <p>Recently I’ve been exploring the worlds of frontend development & web design, building things with Figma, React, HTML, CSS, and JavaScript. However I’m always looking for opportunities to build new skills and explore new technologies.</p>
            <p>In my free time, I find myself drawn to photography, exploring the city, working out, and talking to the voices in my head that i cant control</p>
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
                {/* logo here */}
                </div>

                <div className="education-text">
                    <p className="school-name">University of Illinois Chicago</p>
                    <p className="degree">B.S. in CS + Design,  Minor in Business Analytics;  2025-2029</p>
                    <p className="school-details">4.0 GPA / Deans List  ⭑  Honors College ⭑ Chancellors Fellow 
                    <br />
                    Involvement: ACM  ⭑  AASIA  ⭑  Hack4Impact UIC </p>
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
                    <h4>DEVELOPMENT_</h4>

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
                        <span>Photoshop</span>
                        <span>Illustrator</span>
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