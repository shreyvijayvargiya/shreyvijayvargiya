import gsap from "gsap";
import React, { useState } from "react";

const LinkOpener = () => {
	const [show, setShow] = useState(false);

	const handleClick = () => {
		const tl = gsap.timeline();

		if (show) {
			tl.to(".link-container", {
				width: "50%",
				height: "100px",
				opacity: 1,
				duration: 0.5,
				ease: "power2.inOut",
			})
				.to(".link-container", {
					y: -20,
					opacity: 0,
					duration: 0.5,
					delay: 0.5,
					ease: "power2.inOut",
				})
				.to(".action-button", {
					y: "45vh",
					duration: 0.5,
					ease: "power2.inOut",
				});
		} else {
			tl.to(".action-button", {
				x: 0,
				y: 0,
				position: "static",
				duration: 0.2,
				ease: "power2.inOut",
			})
				.to(".link-container", {
					opacity: 0,
					y: -30,
					duration: 0.5,
					ease: "power2.inOut",
				})
				.to(".link-container", {
					opacity: 1,
					y: 0,
					width: "80%",
					height: "80vh",
					duration: 0.5,
					ease: "power2.inOut",
					delay: 0.5,
				});
		}

		setShow(!show);
	};

	const [link, setLink] = useState("https://wwww.ihatereading.in");

	return (
		<div className="w-full flex flex-col p-3 root-container">
			<button
				onClick={handleClick}
				className="action-button my-4 p-3 rounded-2xl border cursor-pointer hover:underline border-gray-200 w-auto mx-auto hover:bg-gray-100"
			>
				{show ? "Close" : "Link Opener"}
			</button>
			<iframe
				src={link}
				className="link-container mt-4 border mx-auto border-gray-400 rounded-2xl p-4 bg-white shadow-2xl resize-x"
			/>
			<div
				className={`fixed bottom-4 w-96 text-center mx-auto left-0 right-0 p-1 rounded-xl shadow-xl border border-gray-200 bg-white bg-opacity-30 ${
					show ? "opacity-0" : "opacity-100"
				} transition-all duration-300 ease-in`}
			>
				<input
					className="p-2 rounded-xl text-lg text-center w-full focus:outline-none focus:border focus:border-gray-200 underline text-indigo-600"
					value={link}
					onChange={(e) => setLink(e.target.value)}
				/>
			</div>
		</div>
	);
};

export default LinkOpener;
