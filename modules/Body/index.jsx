import StickyNavbar from "components/Home/Navbar";
import gsap from "gsap";
import router from "next/router";
import { useEffect, useState } from "react";

const Body = ({ children }) => {
	// useEffect(() => {
	// 	if (router.pathname.split("/").includes("projects")) {
	// 		gsap.to(".navbar", { opacity: 0 });
	// 	}
	// }, []);

	return (
		<div className="w-full h-full">
			{children}
			<div className="navbar">
				<StickyNavbar />
			</div>
		</div>
	);
};
export default Body;
