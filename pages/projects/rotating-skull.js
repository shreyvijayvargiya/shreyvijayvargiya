import React, { useEffect, useState } from "react";
import gsap from "gsap";

const RotatingSkull = () => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const images = [
		{ src: "/demo-images/img-1.avif" },
		{ src: "/demo-images/img-2.avif" },
		{ src: "/demo-images/img-3.avif" },
		{ src: "/demo-images/img-4.avif" },
	];

	useEffect(() => {
		const tl = gsap.timeline({
			repeat: -1,
			onRepeat: () => {
				setTimeout(() => {
					setCurrentImageIndex((prevIndex) =>
						prevIndex === images.length - 1 ? 0 : prevIndex + 1
					);
				}, 200);
			},
		});

		tl.to(".skull", {
			rotationY: "-=180",
			duration: 4,
			ease: "linear",
		});

		return () => {
			tl.kill();
		};
	}, [currentImageIndex]);

	return (
		<div className="w-full h-screen flex justify-center items-center flex-col bg-white">
			<div className="p-20 skull">
				<img
					src={images[currentImageIndex].src}
					className="transition-all duration-500 ease-in img"
					style={{
						width: (currentImageIndex + 1) * 200 + "px",
						height: (currentImageIndex + 1) * 200 + "px",
						borderRadius: currentImageIndex * 10 * 10,
						transition: "all 0.5s ease",
					}}
				/>
			</div>
		</div>
	);
};

export default RotatingSkull;
