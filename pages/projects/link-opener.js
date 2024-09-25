import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { X } from "lucide-react";

const LinkOpener = () => {
	const [show, setShow] = useState(false);

	  const handleClick = () => {
			const tl = gsap.timeline();

			if (show) {
				// Close animation
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
					.set(".link-container", {
						display: "none", // hide after animation
					})
					.to(".action-button", {
						y: 0,
						duration: 0.5,
						ease: "power2.inOut",
					});
			} else {
				// Open animation
				tl.set(".link-container", {
					display: "block", // show before animation
					opacity: 0,
					y: -30,
				})
					.to(".action-button", {
						y: 0,
						position: "static",
						duration: 0.2,
						ease: "power2.inOut",
					})
					.to(".link-container", {
						opacity: 1,
						y: 0,
						width: "80%",
						height: "75vh",
						duration: 0.5,
						ease: "power2.inOut",
					});
			}

			setShow(!show);
		};
	const [link, setLink] = useState("https://www.ihatereading.in");

	useEffect(() => {
		gsap.fromTo(".card", { y: -50, scale: 0.98 }, { y: 0, scale: 1 });
		gsap.set(".link-container", { opacity: 0, display: "none" });
	}, []);

	return (
		<div className="w-full flex flex-col justify-center items-center h-screen gap-4 p-2 root-container">
			<div className="card flex justify-center items-center gap-2">
				<div
					className={`text-center mx-auto p-1 relative w-96 rounded-xl border border-gray-200 bg-white bg-opacity-100`}
				>
					<input
						className="p-2 rounded-xl text-lg text-center w-full focus:outline-none focus:border focus:border-gray-200 underline text-indigo-600"
						value={link}
						onChange={(e) => setLink(e.target.value)}
					/>
				</div>
				<button
					onClick={handleClick}
					className="action-button my-2 p-4 rounded-xl border cursor-pointer hover:underline border-gray-200 hover:px-8 hover:py-4 transition-all ease-in duration-100 w-auto mx-auto hover:bg-gray-100"
				>
					{show ? <X size={20} /> : "Link Opener"}
				</button>
			</div>
			<iframe
				src={link}
				className={`link-container mt-2 border mx-auto border-gray-400 rounded-2xl p-4 bg-white shadow-2xl resize-x`}
			/>
		</div>
	);
};

export default LinkOpener;
