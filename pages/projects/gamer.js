import { ActionIcon } from "@mantine/core";
import gsap from "gsap";
import { SquareDashedMousePointerIcon } from "lucide-react";
import React, { useState } from "react";

const powers = {
	"1000cc": 1000,
	"650cc": 800,
	"500cc": 500,
	"350cc": 350,
	"100cc": 80,
};

const colors = [
	"bg-rose-100",
	"bg-blue-100",
	"bg-pink-100",
	"bg-red-100",
	"bg-green-100",
	"bg-yellow-100",
	"bg-orange-100",
	"bg-indigo-100",
];

const ShootingGame = () => {
	const [blocks, setBlocks] = useState([]);
	const [activeIndex, setActiveIndex] = useState(0);

	const [power, setPower] = useState("650cc");
	const [threshold, setThreshold] = useState(powers[power]);
	const totalDistance = powers[power] - 32;
	const shoot = () => {
		const tl = gsap.timeline();

		if (blocks.length === 0) {
			tl.to(`.bullet`, {
				x: `${threshold}`,
				rotate: 360,
				visibility: "visible",
				position: "relative",
				duration: 1,
				ease: "power1",
				width: "20px",
				height: "20px",
			}).to(".bullet", {
				height: "100vh",
				duration: 0.5,
				ease: "power1",
				onComplete: () => {
					setBlocks((prev) => [
						...prev,
						{
							id: blocks?.length + 1,
							color: colors[Math.floor(Math.random() * colors.length)],
						},
					]);
					gsap.to(".bullet", {
						visibility: "hidden",
					});
				},
			});
		} else {
			tl.fromTo(
				`.bullet`,
				{
					x: 0,
					width: "20px",
					height: "20px",
					position: "absolute",
					visibility: "visible",
					top: "50%",
				},
				{
					x: totalDistance + "px",
					duration: 1,
					rotate: 360,
					ease: "power1",
					width: "20px",
					height: "20px",
				}
			).to(
				`.bullet`,
				{
					position: "fixed",
					height: "100vh",
					duration: 0.5,
					ease: "power1",
					transformOrigin: "top center",
				}.
        to(".bullet", {
					width: "50vw",
					top: 0,
					bottom: 0,
					rotate: 360,
					onComplete: () => {
						setBlocks((prev) => [
							...prev,
							{
								id: blocks.length + 1,
								color: colors[Math.floor(Math.random() * colors.length)],
							},
						]);
						gsap.to(".bullet", {
							visibility: "hidden",
							position: "absolute",
							left: "20px",
							top: "50%",
						});
					},
				})
			);
		}
	};
	console.log(blocks);
	const data = blocks.slice().reverse();
	return (
		<div className="relative w-full overflow-hidden h-full">
			<div className="fixed bg-gray-50 z-10 hover:bg-gray-100 p-1 rounded-xl top-1/2 left-0 w-10 mx-2">
				<ActionIcon onClick={shoot} className="">
					<SquareDashedMousePointerIcon />
				</ActionIcon>
				<div className="bullet absolute z-0 -top-5 invisible w-20 h-20 left-10 bg-gradient-to-tr to-blue-100 from-green-50 rounded-xl" />
			</div>
			{
				<div
					className={`border border-gray-300 rounded-xl h-96 w-96 flex flex-reverse`}
					style={{
						position: "absolute",
						top: "50%",
						left: threshold,
					}}
				>
					{/* {data.map((item) => {
						return (
							<div
								key={item.id}
								className={`bg-gradient-to-tr rounded-xl to-blue-50 from-indigo-50 relative w-8 z-20 h-full`}
							/>
						);
					})} */}
					<div
						style={{ width: blocks.length * 10 + "%" }}
						className="w-full h-full bg-gradient-to-tr rounded-xl to-blue-50 from-indigo-50"
					/>
				</div>
			}
		</div>
	);
};
export default ShootingGame;
