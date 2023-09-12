import "./Hero.scss";
import { SiDiscord } from "react-icons/si";
import { AiOutlineInfoCircle } from "react-icons/ai";
import Card from "../Card/Card";

const Hero = () => {
	return (
		<div className="hero-container">
			<div className="hero-text">
				<div className="hero-text-title">
					<h1>
						Starify <span>Development</span>
					</h1>
					<p>
						Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
						vulputate libero et velit interdum, ac aliquet odio mattis.
					</p>
				</div>
				<div className="hero-text-buttons">
					<a href="#services">
						<div className="button">
							<AiOutlineInfoCircle className="icon" />
							<p>Dowiedz się więcej</p>
						</div>
					</a>
					<a href="https://dc.starify.tech">
						<div className="social-button">
							<SiDiscord size={24} />
						</div>
					</a>
				</div>
			</div>
			<div className="hero-cards">
				<Card path="./snippet.svg" />
			</div>
		</div>
	);
};

export default Hero;
