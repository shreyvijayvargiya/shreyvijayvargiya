import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { Card } from "@mantine/core";

const arrayMethods = [
	{ method: "push(6)", result: "[1, 2, 3, 4, 5, 6]" },
	{ method: "pop()", result: "[1, 2, 3, 4, 5]" },
	{ method: "shift()", result: "[2, 3, 4, 5]" },
	{ method: "unshift(0)", result: "[0, 2, 3, 4, 5]" },
	{ method: "concat([6, 7])", result: "[0, 2, 3, 4, 5, 6, 7]" },
	{ method: "slice(1, 3)", result: "[2, 3]" },
	{ method: "splice(1, 2)", result: "[0, 4, 5]" },
	{ method: "reverse()", result: "[5, 4, 0]" },
	{ method: "sort()", result: "[0, 4, 5]" },
	{ method: "indexOf(4)", result: "1" },
	{ method: "includes(3)", result: "false" },
	{ method: "find(x => x > 3)", result: "4" },
	{ method: "filter(x => x > 3)", result: "[4, 5]" },
	{ method: "map(x => x * 2)", result: "[10, 8, 0]" },
	{ method: "reduce((sum, x) => sum + x, 0)", result: "9" },
	{ method: "join('-')", result: '"5-4-0"' },
	{ method: "every(x => x > 2)", result: "false" },
	{ method: "some(x => x > 4)", result: "true" },
	{ method: "findIndex(x => x > 4)", result: "0" },
	{ method: "fill(9)", result: "[9, 9, 9]" },
	{ method: "copyWithin(0, 1)", result: "[9, 9, 9]" },
	{ method: "flatMap(x => [x, x * 2])", result: "[18, 18, 18]" },
];

const ArrayMethodsComponent = () => {
	const [currentMethodIndex, setCurrentMethodIndex] = useState(0);
	const methodRef = useRef(null);
	const resultRef = useRef(null);

	useEffect(() => {
		gsap.fromTo(
			methodRef.current,
			{ opacity: 0, y: -20 },
			{ opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
		);
		gsap.fromTo(
			resultRef.current,
			{ opacity: 0, y: 20 },
			{ opacity: 1, y: 0, duration: 0.5, ease: "power2.out", delay: 0.2 }
		);
	}, [currentMethodIndex]);

	const handleNextMethod = () => {
		setCurrentMethodIndex((prevIndex) =>
			prevIndex < arrayMethods.length - 1 ? prevIndex + 1 : 0
		);
	};

	const handlePrevMethod = () => {
		setCurrentMethodIndex((prevIndex) =>
			prevIndex > 0 ? prevIndex - 1 : arrayMethods.length - 1
		);
	};

	const { method, result } = arrayMethods[currentMethodIndex];

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
			<Card className="w-full max-w-lg p-6 bg-white shadow-lg rounded-md">
				<h2 className="text-2xl font-semibold text-center mb-4">
					JS Array Methods
				</h2>
				<div className="flex flex-col items-center">
					<div ref={methodRef} className="text-lg font-mono text-purple-600">
						<span className="text-pink-500">arr.</span>
						{method}
					</div>
					<div ref={resultRef} className="mt-2 text-xl text-gray-700">
						Result: {result}
					</div>
				</div>
				<div className="flex justify-between mt-6">
					<button
						onClick={handlePrevMethod}
						className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600"
					>
						Previous
					</button>
					<button
						onClick={handleNextMethod}
						className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600"
					>
						Next
					</button>
				</div>
			</Card>
		</div>
	);
};

export default ArrayMethodsComponent;
