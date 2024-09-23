import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { gsap } from "gsap";

const Counter = () => {
	const [count, setCount] = useState(0);

	const handleDecrease = () => {
		gsap.fromTo(".minus-button", { scale: 0.7 }, { scale: 1, ease: "elastic" });
		if (count > 0) {
			gsap.fromTo(
				".counter-text",
				{
					x: 0,
					opacity: 1,
					scale: 0,
				},
				{
					opacity: 0,
					scale: 1,
					duration: 0.3,
					x: -100,
					ease: "power1",
					onComplete: () => {
						setCount(count - 1);
						gsap.fromTo(
							".counter-text",
							{ x: 100, opacity: 0, scale: 0 },
							{ x: 0, opacity: 1, scale: 1, duration: 0.3 }
						);
					},
				}
			);
		}
	};

	const handleIncrease = () => {
		gsap.fromTo(".plus-button", { scale: 0.7 }, { scale: 1, ease: "elastic" });
		gsap.fromTo(
			".counter-text",
			{
				x: 0,
				opacity: 1,
				scale: 1,
			},
			{
				opacity: 0,
				scale: 0,
				duration: 0.3,
				x: 100,
				onComplete: () => {
					setCount(count + 1);
					gsap.fromTo(
						".counter-text",
						{ x: -100, opacity: 0, scale: 0 },
						{ x: 0, opacity: 1, scale: 1, duration: 0.3 }
					);
				},
			}
		);
	};

	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<div>
				<p className="font-display counter-text text-7xl font-semibold">
					{count}
				</p>
			</div>
			<div className="flex items-center space-x-20 my-10">
				<button
					onClick={handleDecrease}
					className="minus-button bg-gray-200 text-gray-400 rounded-full p-2"
				>
					<Minus />
				</button>

				<button
					onClick={handleIncrease}
					className="plus-button bg-gray-200 text-gray-400 rounded-full p-2"
				>
					<Plus />
				</button>
			</div>
		</div>
	);
};

export default Counter;
