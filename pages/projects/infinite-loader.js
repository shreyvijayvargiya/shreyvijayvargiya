import gsap from "gsap";
import { OmegaIcon } from "lucide-react";
import { useEffect } from "react";

const InifiniteLoader = () => {
	useEffect(() => {
		gsap.to(".loader", {
			rotation: "+=360",
			repeat: -1,
			yoyo: true,
			duration: 4,
		});
	}, []);
	return (
		<div className="loader flex justify-center items-center h-screen">
			<OmegaIcon size={42} color="black" />
		</div>
	);
};
export default InifiniteLoader;
