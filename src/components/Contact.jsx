import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Contact() {
    return (
        <section id="contact" className="contact">

            <div className="contact-content">
                <div className="contact-top">
                    <div className ="contact-top-left">
                    <h3 className="contact-heading"> <span className="section-number">04</span> CONTACT </h3>
                    <p className="contact-text"> Feel free to reach out!! Always happy to meet new people, collaborate with others, and just chat about development and design :) </p>
                    </div>
                    {/* Image here */}
                </div>
                <div className="contact-icons">
                    <SiGmail />
                    <FaLinkedin />
                    <FaGithub />
                </div>
                <div className="contact-botton">
                    <p className="contact-email"> nnolmos1@gmail.com </p>
                    <p className="footer-text"> <span className="cpy">&copy;</span> Noah Olmos · [ N.01 ] </p>   
                </div>
                {/* <p className="faded"> Roblox: HiWintry </p> */}
            </div>
        </section>
    )
}