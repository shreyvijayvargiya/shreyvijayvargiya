import StickyNavbar from "components/Home/Navbar";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Body = ({ children }) => {
	const router = useRouter();
	const [showNavbar, setShowNavbar] = useState(true);

	useEffect(() => {
		if (router.pathname.startsWith("/projects")) {
			setShowNavbar(false);
		} else {
			setShowNavbar(true);
		}
	}, [router.pathname]);

	return (
		<div className="w-full h-full">
			{showNavbar && <StickyNavbar />}
			{children}
		</div>
	);
};

export default Body;
