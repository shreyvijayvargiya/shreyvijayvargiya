import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const images = [
	{ src: "/demo-images/img-1.avif", alt: "Image 1" },
	{ src: "/demo-images/img-2.avif", alt: "Image 2" },
	{ src: "/demo-images/img-3.avif", alt: "Image 3" },
	{ src: "/demo-images/img-4.avif", alt: "Image 4" },
];

const ImageGallery = () => {
	const imageRefs = useRef([]);

	useEffect(() => {
		handleAnimation();
	}, []);

	const handleAnimation = () => {
		imageRefs.current.forEach((image, index) => {
			const rotation = index < 2 ? 360 : -360;

			gsap.fromTo(
				image,
				{ yPercent: 50, scale: 0.8, rotate: rotation },
				{
					yPercent: 0,
					scale: 1,
					rotate: 0,
					duration: 1,
					ease: "power2.out",
					stagger: 0.2,
				}
			);
		});
	};

	const [clicked, setClicked] = useState(false);

	return (
		<div className="flex justify-center items-center h-screen flex-col">
			<div className="flex gap-4 img-container">
				{images.map((image, index) => (
					<button
						key={index}
						ref={(el) => (imageRefs.current[index] = el)}
						className={`w-20 h-20 gap-4 hover:w-48 hover:h-48 bg-gray-50 relative rounded-lg overflow-hidden transition-all duration-150 ease-in-out cursor-pointer img-${
							index + 1
						} `}
						onClick={() => {
							setClicked(!clicked);
							gsap.to(`.img-${index + 1}`, {
								y: clicked ? 100 : -100,
								width: clicked ? "5rem" : "36rem",
								height: clicked ? "5rem" : "36rem",
								stagger: 0.5,
								duration: 0.5,
							});
							gsap.to(".img-container", { display: "flex" });
						}}
					>
						<img
							src={image.src}
							alt={`Image ${index + 1}`}
							className={`w-full h-full object-cover perspective `}
						/>
					</button>
				))}
				<br />
			</div>
		</div>
	);
};

export default ImageGallery;
