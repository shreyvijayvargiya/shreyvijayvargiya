import { Button } from "@mantine/core";
import gsap from "gsap";
import React, { useState } from "react";

const images = [
	{
		src: "/demo-images/img-1.avif",
	},
	{ src: "/demo-images/img-2.avif" },
	{ src: "/demo-images/img-3.avif" },
	{ src: "/demo-images/img-4.avif" },
	{ src: "/demo-images/img-7.avif" },
	{ src: "/demo-images/img-8.avif" },
	{ src: "/demo-images/img-9.avif" },
];

const ImageDirectoryDrawer = () => {
	const [isColumn, setIsColumn] = useState(false);

	return (
		<div className="flex justify-center items-center flex-col h-screen w-full p-10">
			<div className="img-container flex justify-around items-center space-x-4">
				{images.map((item, index) => (
					<img
						key={item.src}
						src={item.src}
						className={`w-40 h-40 object-cover rounded-xl hover:w-60 hover:h-60 transition-all duration-100 ease-in hover:skew-x-2 cursor-pointer img-${index} img-each`}
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
						skewY: isColumn ? -35 : 0,
						marginLeft: isColumn ? "-100px" : "20px",
						gap: isColumn ? "10px" : "0px",
						display: "flex",
						duration: 0.5,
						scale: isColumn ? 0.8 : 1,
						ease: "circ",
					});
				}}
			>
				{isColumn ? "Show folder" : "Close folder"}
			</Button>
		</div>
	);
};
export default ImageDirectoryDrawer;
