import { useEffect, useState } from "react";

export const useMouseMove = () => {
	const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
	const handleMouseMove = (e) => {
		setCoordinates({
			x: e.clientX,
			y: e.clientY,
		});
	};
	useEffect(() => {
		window.addEventListener("mousemove", handleMouseMove);
		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);
	return coordinates;
};
