import { Button } from "@mantine/core";
import gsap from "gsap";
import React, { useState } from "react";

const images = [
	{ src: "/demo-images/img-1.avif" },
	{ src: "/demo-images/img-2.avif" },
	{ src: "/demo-images/img-3.avif" },
	{ src: "/demo-images/img-4.avif" },
	{ src: "/demo-images/img-7.avif" },
	{ src: "/demo-images/img-8.avif" },
	{ src: "/demo-images/img-9.avif" },
];

const ImageShowOver = () => {
	const [isColumn, setIsColumn] = useState(false);
	return (
		<div className="flex justify-center items-center flex-col h-screen w-full p-10">
			<div className="img-container flex justify-around items-center">
				{images.map((item, index) => (
					<img
						key={item.src}
						src={item.src}
						className={`w-40 h-40 object-cover rounded-xl hover:w-60 hover:h-60 transition-all duration-100 ease-in hover:skew-x-2 cursor-pointer img-${index} img-each`}
						onMouseEnter={() => {
							gsap.to(`.img-${index}`, {
								skewY: 0,
								scale: 1.5,
								duration: 0.5,
								zIndex: 100,
								rotate: "360deg",
							});
						}}
						onMouseLeave={() => {
							gsap.to(`.img-${index}`, {
								skewY: -50,
								scale: 1,
								duration: 0.5,
								zIndex: 1,
							});
							gsap.to(".img-container", {
								gap: "-20px",
							});
						}}
					/>
				))}
			</div>
			<br />
			<br />
			<Button
				color="dark"
				size="xs"
				variant="filled"
				my="lg"
				onClick={() => {
					setIsColumn(!isColumn);
					gsap.to(".img-each", {
						skewY: 0,
						marginLeft: isColumn ? "-100px" : "20px",
						gap: isColumn ? "10px" : "0px",
						display: "flex",
						duration: 0.5,
						ease: "circ",
					});
				}}
			>
				Add gaps
			</Button>
		</div>
	);
};
export default ImageShowOver;
