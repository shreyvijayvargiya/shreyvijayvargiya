import React, { useEffect } from "react";
import { gsap } from "gsap";
import colors from "tailwindcss/colors";

const FillingCoffeeCup = () => {
	useEffect(() => {
		gsap.fromTo(
			"#coffeePath",
			{ fill: colors.gray[900] },
			{
				duration: 2,
				fill: colors.gray[500],
				ease: "power2.inOut",
			}
		);
	}, []);

	return (
		<div className="bg-black w-full h-screen flex flex-col justify-center items-center">
			<svg
				fill="#EEEEEE"
				viewBox="0 0 10 10"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					id="coffeePath"
					d="M20,9H2a1,1,0,0,0-1,1v4a9,9,0,0,0,17.941,1H20a3,3,0,0,0,0-6ZM10,21a7.008,7.008,0,0,1-7-7V11H17v3A7.008,7.008,0,0,1,10,21Zm9-8V11c.306.069,2-.366,2,1C21,13.322,19.254,12.943,19,13ZM3.293,6.293l1.25-1.25a2.42,2.42,0,0,1-.6-1.543,2.049,2.049,0,0,1,.6-1.457l.75-.75A1,1,0,0,1,6.707,2.707l-.75.75A2.42,2.42,0,0,1,6.561,5a2.049,2.049,0,0,1-.6,1.457l-1.25,1.25A1,1,0,0,1,3.293,6.293Zm5,0,1.25-1.25a2.42,2.42,0,0,1-.6-1.543,2.049,2.049,0,0,1,.6-1.457l.75-.75a1,1,0,0,1,1.414,1.414l-.75.75A2.42,2.42,0,0,1,11.561,5a2.049,2.049,0,0,1-.6,1.457l-1.25,1.25A1,1,0,0,1,8.293,6.293Zm5,0,1.25-1.25a2.42,2.42,0,0,1-.6-1.543,2.049,2.049,0,0,1,.6-1.457l.75-.75a1,1,0,0,1,1.414,1.414l-.75.75A2.42,2.42,0,0,1,16.561,5a2.049,2.049,0,0,1-.6,1.457l-1.25,1.25a1,1,0,0,1-1.414-1.414Z"
				></path>
			</svg>
		</div>
	);
};

export default FillingCoffeeCup;
