import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { Button, Card } from "@mantine/core";

const arrayMethods = [
	{
		method: "push(6)",
		description: "Adds the element 6 to the end of the array.",
		initial: [1, 2, 3, 4, 5],
		intermediate: [1, 2, 3, 4, 5, 6],
	},
	{
		method: "pop()",
		description: "Removes the last element of the array.",
		initial: [1, 2, 3, 4, 5, 6],
		intermediate: [1, 2, 3, 4, 5],
	},
	{
		method: "shift()",
		description: "Removes the first element of the array.",
		initial: [1, 2, 3, 4, 5],
		intermediate: [2, 3, 4, 5],
	},
	{
		method: "unshift(0)",
		description: "Adds the element 0 to the beginning of the array.",
		initial: [2, 3, 4, 5],
		intermediate: [0, 2, 3, 4, 5],
	},
	{
		method: "concat([6, 7])",
		description: "Merges the array with another array.",
		initial: [0, 2, 3, 4, 5],
		intermediate: [0, 2, 3, 4, 5, 6, 7],
	},
	{
		method: "slice(1, 3)",
		description: "Returns a shallow copy of a portion of the array.",
		initial: [0, 2, 3, 4, 5],
		intermediate: [2, 3],
	},
	{
		method: "splice(1, 2)",
		description: "Removes or replaces existing elements in an array.",
		initial: [0, 2, 3, 4, 5],
		intermediate: [0, 4, 5],
	},
	{
		method: "reverse()",
		description: "Reverses the order of the elements in the array.",
		initial: [0, 4, 5],
		intermediate: [5, 4, 0],
	},
	{
		method: "sort()",
		description: "Sorts the elements of the array in place.",
		initial: [5, 4, 0],
		intermediate: [0, 4, 5],
	},
	{
		method: "indexOf(4)",
		description: "Returns the first index where the element is found.",
		initial: [0, 4, 5],
		intermediate: [1],
	},
	{
		method: "includes(3)",
		description: "Determines whether the array contains a certain element.",
		initial: [0, 4, 5],
		intermediate: [false],
	},
	{
		method: "find(x => x > 3)",
		description:
			"Returns the first element that satisfies the provided testing function.",
		initial: [0, 4, 5],
		intermediate: [4],
	},
	{
		method: "filter(x => x > 3)",
		description: "Creates a new array with all elements that pass the test.",
		initial: [0, 4, 5],
		intermediate: [4, 5],
	},
	{
		method: "map(x => x * 2)",
		description:
			"Creates a new array with the results of calling a function on every element.",
		initial: [0, 4, 5],
		intermediate: [0, 8, 10],
	},
	{
		method: "reduce((sum, x) => sum + x, 0)",
		description:
			"Executes a reducer function on each element, resulting in a single output value.",
		initial: [0, 4, 5],
		intermediate: [9],
	},
	{
		method: "join('-')",
		description: "Joins all elements of the array into a string.",
		initial: [0, 4, 5],
		intermediate: ["0-4-5"],
	},
	{
		method: "every(x => x > 2)",
		description: "Checks if all elements in the array pass the test.",
		initial: [0, 4, 5],
		intermediate: [false],
	},
	{
		method: "some(x => x > 4)",
		description: "Checks if at least one element in the array passes the test.",
		initial: [0, 4, 5],
		intermediate: [true],
	},
	{
		method: "findIndex(x => x > 4)",
		description:
			"Returns the index of the first element that satisfies the test function.",
		initial: [0, 4, 5],
		intermediate: [2],
	},
	{
		method: "fill(9)",
		description: "Fills all the elements in an array with a static value.",
		initial: [0, 4, 5],
		intermediate: [9, 9, 9],
	},
	{
		method: "copyWithin(0, 1)",
		description:
			"Copies a part of the array to another location within the array.",
		initial: [9, 9, 9],
		intermediate: [9, 9, 9],
	},
	{
		method: "flatMap(x => [x, x * 2])",
		description:
			"Maps each element using a mapping function, then flattens the result into a new array.",
		initial: [9, 9, 9],
		intermediate: [9, 18, 9, 18, 9, 18],
	},
	{
		method: "entries()",
		description:
			"Returns a new array iterator object with key/value pairs for each index in the array.",
		initial: [9, 18],
		intermediate: [
			["0", 9],
			["1", 18],
		],
	},
	{
		method: "keys()",
		description:
			"Returns a new array iterator object that contains the keys for each index.",
		initial: [9, 18],
		intermediate: [0, 1],
	},
	{
		method: "values()",
		description:
			"Returns a new array iterator object that contains the values for each index.",
		initial: [9, 18],
		intermediate: [9, 18],
	},
];

const ArrayMethodsComponent = () => {
	const [currentMethodIndex, setCurrentMethodIndex] = useState(0);
	const [arrayState, setArrayState] = useState(arrayMethods[0].initial);
	const methodRef = useRef(null);
	const arrayRef = useRef(null);

	useEffect(() => {
		const { initial, intermediate } = arrayMethods[currentMethodIndex];

		setArrayState(initial);
		gsap.fromTo(
			methodRef.current,
			{ opacity: 0, y: -20 },
			{ opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
		);

		gsap.to(arrayRef.current, {
			duration: 1,
			onStart: () => setArrayState(intermediate),
			ease: "power2.out",
		});
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

	const { method, description } = arrayMethods[currentMethodIndex];

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
			<h2 className="text-xl font-semibold text-center mb-4">
				JS Array Methods
			</h2>
			<Card className="w-full max-w-xl px-6 py-20 bg-white border border-gray-200 rounded-md">
				<div className="flex flex-col items-center">
					<div ref={methodRef} className="text-2xl font-mono text-purple-600">
						<span className="text-pink-500">arr.</span>
						{method}
					</div>
					<div className="mt-2 text-sm text-gray-700">{description}</div>
					<div
						ref={arrayRef}
						className="my-2 px-4 py-2 border border-gray-200 rounded-md"
					>
						{`[${arrayState.join(", ")}]`}
					</div>
				</div>
			</Card>
			<div className="flex justify-between my-4 gap-4">
				<Button
					onClick={handlePrevMethod}
					color="dark"
					variant="outline"
					size="xs"
				>
					Previous
				</Button>
				<Button
					onClick={handleNextMethod}
					color="dark"
					variant="outline"
					size="xs"
				>
					Next
				</Button>
			</div>
		</div>
	);
};

export default ArrayMethodsComponent;
