import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const ImageGrid = () => {
	const gridRef = useRef(null);

	useEffect(() => {
		const images = gridRef.current.querySelectorAll(".image-item");

		images.forEach((img, index) => {
			gsap
				.fromTo(
					img,
					{ scale: 1 },
					{
						scale: 1.1,
						duration: 0.3,
						ease: "power2.out",
						paused: true,
						onStart: () => {
							gsap.to(img, { zIndex: 10 });
						},
						onReverseComplete: () => {
							gsap.to(img, { zIndex: 1 });
						},
					}
				)
				.eventCallback("onStart", () => {
					images.forEach((otherImg, otherIndex) => {
						if (otherIndex !== index) {
							gsap.to(otherImg, { scale: 0.9, duration: 0.3 });
						}
					});
				});

			img.addEventListener("mouseenter", () =>
				gsap.to(img, { scale: 1.2, duration: 0.3 })
			);
			img.addEventListener("mouseleave", () =>
				gsap.to(img, { scale: 1, duration: 0.3 })
			);
		});
	}, []);

	return (
		<div
			ref={gridRef}
			className="grid grid-cols-2 gap-4 w-1/4 h-1/4 mx-auto mt-20 justify-center items-center "
		>
			{[
				"https://firebasestorage.googleapis.com/v0/b/ihatereading-4ba52.appspot.com/o/Logs%2F0_9lUWQ5iiXACH9TC0.jpeg?alt=media&token=0de588ed-2282-40e5-8e3c-faee01b8c38c",
				"https://firebasestorage.googleapis.com/v0/b/ihatereading-4ba52.appspot.com/o/Logs%2F0_CFsSlVxcz87wIhuP.jpeg?alt=media&token=59d9c2f3-6cba-4384-99ec-e07e3c3d9579",
				"https://firebasestorage.googleapis.com/v0/b/ihatereading-4ba52.appspot.com/o/Logs%2F0_5nfyEaT_0yMgJ7rV.jpeg?alt=media&token=5b349c27-d229-4186-b9f6-4b85a93c7848",
				"https://firebasestorage.googleapis.com/v0/b/ihatereading-4ba52.appspot.com/o/Logs%2F0_LAlGTaACtiPTOsnt.jpeg?alt=media&token=6662d093-b504-49c8-a40b-02186971d3f0",
			].map((src, index) => (
				<div
					key={index}
					className="image-item relative overflow-hidden rounded-lg cursor-pointer"
				>
					<img
						src={src}
						alt={`Image ${index + 1}`}
						className="w-full h-full object-cover"
					/>
				</div>
			))}
		</div>
	);
};

export default ImageGrid;
