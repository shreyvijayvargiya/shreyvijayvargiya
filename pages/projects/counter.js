import React, { useState } from "react";
import { Plus, Minus, Loader } from "lucide-react";
import { gsap } from "gsap";
import colors from "tailwindcss/colors";

const TransactionCounter = () => {
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
					x: -80,
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
				x: 80,
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

	const [show, setShow] = useState(false);
	const [loader, setLoader] = useState(false);
	const [buttonText, setButtonText] = useState("Send");

	return (
		<div className="flex items-center justify-center h-screen gap-4">
			<div className="flex items-center space-x-10 my-10 p-5 border border-gray-200 bg-gray-50 bg-opacity-40 rounded-xl">
				<div className="flex items-center counter-container space-x-10">
					<button
						onClick={handleDecrease}
						className="minus-button bg-gray-200 text-gray-400 rounded-full p-2"
					>
						<Minus />
					</button>
					<p className="font-mono counter-text text-4xl font-semibold">
						{count}
					</p>
					<button
						onClick={handleIncrease}
						className="plus-button bg-gray-200 text-gray-400 rounded-full p-2"
					>
						<Plus />
					</button>
				</div>
				<button
					onClick={() => {
						setLoader(true);
						const tl = gsap.timeline();
						tl.to(".counter-container", {
							width: !show ? "100%" : "0%",
							opacity: !show ? 1 : 0,
							duration: 1,
							onComplete: () => {
								setShow(!show);
							},
						})
							.to(".send-button", {
								width: "110%",
								backgroundColor: colors.green[600],
								duration: 0.5,
								onComplete: () => {
									setLoader(false);
									setButtonText("Transaction successfull");
								},
							})
							.to(".send-button", {
								backgroundColor: colors.gray[800],
								duration: 1,
							})
							.to(".counter-container", {
								width: "100%",
								opacity: 1,
								duration: 1,
								onComplete: () => {
									setButtonText("Send");
									setShow(false);
									setCount(0);
								},
							});
					}}
					className="send-button px-8 py-4 flex justify-center items-center gap-4 w-full bg-gray-800 hover:bg-black hover:shadow-xl text-white rounded-xl"
				>
					{loader && <Loader className="animate-spin" />}
					{buttonText}
				</button>
			</div>
		</div>
	);
};

export default TransactionCounter;
