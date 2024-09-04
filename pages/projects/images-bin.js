import { Button } from "@mantine/core";
import gsap from "gsap";
import { Trash2, ArrowLeft } from "lucide-react";
import React, { useState } from "react";

const images = [
	{ src: "/demo-images/img-1.avif" },
	{ src: "/demo-images/img-2.avif" },
	{ src: "/demo-images/img-3.avif" },
	{ src: "/demo-images/img-4.avif" },
];

const DeleteImages = () => {
	const [isColumn, setIsColumn] = useState(false);
	const [loading, setLoading] = useState(false);
	const [text, setText] = useState("Delete all");
	const [icon, setIcon] = useState(<Trash2 size={16} />);

	const handleButtonClick = () => {
		setIsColumn((prevState) => !prevState);
		setLoading(true);
		setText("Deleting");

		const tl = gsap.timeline();

		tl.to(".img-container", {
			gap: !isColumn ? "0px" : "20px",
			duration: 0.2,
		})
			.to(".img-each", {
				scale: !isColumn ? 1.2 : 1,
				y: !isColumn ? -100 : 0,
				duration: 0.4,
				ease: "power2.inOut",
				stagger: 0.2,
			})
			.to(".img-container", {
				y: 90,
				scale: !isColumn ? 0 : 1,
				marginLeft: !isColumn ? "-40px" : "0px",
				duration: 0.3,
				ease: "power2.inOut",
			})
			.to(".img-container", {
				y: 0,
				duration: 0.3,
				onComplete: () => {
					setLoading(false);
					setText(isColumn ? "Delete all": "Undo");
					setIcon(isColumn ? <Trash2 size={16} /> : <ArrowLeft size={16} />);
				},
			});
	};

	return (
		<div className="flex justify-center items-center flex-col h-screen w-full p-10">
			<div className="img-container flex justify-around items-center gap-5">
				{images.map((item, index) => (
					<img
						key={item.src}
						src={item.src}
						className={`w-20 h-20 object-cover rounded-xl hover:rounded-full hover:w-40 hover:h-40 transition-all duration-100 ease-in hover:skew-x-2 cursor-pointer img-each`}
					/>
				))}
			</div>
			<Button
				color="red"
				size="xs"
				variant={isColumn ? "outline" : "filled"}
				className="group"
				my="lg"
				leftIcon={icon}
				loading={loading}
				onClick={handleButtonClick}
			>
				{text}
			</Button>
		</div>
	);
};

export default DeleteImages;
