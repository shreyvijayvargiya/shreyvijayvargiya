import React, { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { gsap } from "gsap";

const Counter = () => {
	const [count, setCount] = useState(0);

	const handleDecrease = () => {
		if (count > 0) {
			// Animate the text up
			gsap.to(".counter-text", {
				y: -40,
				duration: 0.3,
				onComplete: () => {
					setCount(count - 1);
					gsap.to(".counter-text", { y: 0, duration: 0.3 });
				},
			});
		}
	};

	const handleIncrease = () => {
		// Animate the text down
		gsap.to(".counter-text", {
			y: 40,
			duration: 0.3,
			onComplete: () => {
				setCount(count + 1);
				gsap.to(".counter-text", { y: 0, duration: 0.3 });
			},
		});
	};

	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<motion.div className="flex items-center space-x-4">
				<button
					onClick={handleDecrease}
					className="bg-red-500 text-white p-2 rounded"
				>
					<Minus />
				</button>
				<div className="counter-text text-4xl">{count}</div>
				<button
					onClick={handleIncrease}
					className="bg-green-500 text-white p-2 rounded"
				>
					<Plus />
				</button>
			</motion.div>
		</div>
	);
};

export default Counter;
