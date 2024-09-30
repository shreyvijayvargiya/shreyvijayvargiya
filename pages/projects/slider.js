import { useEffect } from "react";
import { gsap } from "gsap";

const GsapSlider = () => {
	useEffect(() => {
		gsap.to(".slide", {
			x: -1000,
			duration: 1,
			repeat: -1,
			ease: "power1.inOut",
		});
	}, []);

	return (
		<div className="slider">
			<div className="slide">
				<img src="/demo-images/img-1.avif" alt="Slide 1" />
			</div>
			<div className="slide">
				<img src="/demo-images/img-2.avif" alt="Slide 2" />
			</div>
			<div className="slide">
				<img src="/demo-images/img-3.avif" alt="Slide 3" />
			</div>
		</div>
	);
};

export default GsapSlider;
