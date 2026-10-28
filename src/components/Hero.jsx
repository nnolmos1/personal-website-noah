import { HiMiniArrowTurnRightDown } from "react-icons/hi2";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


export default function Hero() {
    return (
        <div id="hero" className="hero">
            <section id="hero-left">
                <h2 id="hero-heading"> HI, I'M </h2>
                <h2 id="hero-name"> ⌞Noah!⌝ </h2>
                <p id="hero-description"> CS + Design Student @ UIC | Aspiring Developer & Digital Designer </p>

                <div id="hero-btns">
                    <a id="herobtn1" className="btn" href="#projects">View My Work <HiMiniArrowTurnRightDown /></a>
                    <a id="herobtn2" className="btn" href="#resume">[RESUME]</a>
                </div>

                <div id="hero-socials">
                    <a href="mailto:nnolmos1@gmail.com" target="_blank"><SiGmail /></a>
                    <a href="https://github.com/nnolmos1" target="_blank"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/noaholmos/" target="_blank"><FaLinkedin /></a>
                </div>
            </section>
        </div>
    )
}