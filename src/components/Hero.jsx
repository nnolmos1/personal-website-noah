import { HiMiniArrowTurnRightDown } from "react-icons/hi2";

export default function Hero() {
    return (
        <div id="hero" className="hero">
            <section id="hero-left">
                <h2 id="hero-heading"> HI, I'M </h2>
                <h2 id="hero-name"> Noah! </h2>
                <p id="hero-description"> CS + Design @ UIC | Aspiring Developer & Digital Designer </p>

                <div id="hero-btns">
                    <a id="herobtn1" className="btn" href="#projects">View My Work <HiMiniArrowTurnRightDown /></a>
                    <a id="herobtn2" className="btn" href="#resume">[RESUME]</a>
                </div>
            </section>
        </div>
    )
}