import React, { useEffect } from "react";
import { createStyles } from "@mantine/core";
import gsap from "gsap";

const Wallet = () => {
	useEffect(() => {
		gsap.fromTo(
			".wallet-image",
			{ y: -100, opacity: 0 },
			{
				y: 0,
				opacity: 1,
				stagger: 0.2,
				duration: 1.5,
				ease: "bounce.out",
			}
		);
	}, []);

	const { classes } = useStyles();
	return (
		<div
			className={`w-full h-screen flex justify-center items-center flex-col`}
		>
			<div className={classes.container} />
			<div className="absolute flex justify-between items-center gap-4 w-auto border border-gray-200 mx-auto p-4">
				<div className="w-20 h-20 rounded-xl skew-x-6 rotate-3">
					<img
						className="wallet-image"
						src="/logos/css.svg"
						alt="Wallet Image 1"
					/>
				</div>
				<img
					className="wallet-image w-20 h-20 rounded-xl mb-10"
					src="/logos/firebase.svg"
					alt="Wallet Image 2"
				/>
				<img
					className="wallet-image w-20 h-20 rounded-xl mb-20"
					src="/logos/html.svg"
					alt="Wallet Image 3"
				/>
				<img
					className="wallet-image w-20 h-20 rounded-xl mb-40"
					src="/logos/javascript.svg"
					alt="Wallet Image 4"
				/>
			</div>
		</div>
	);
};

export default Wallet;
const useStyles = createStyles((theme) => ({
	container: {
		position: "fixed",
		width: "400px",
		height: "300px",
		backgroundColor: "#f0f0f0",
		borderRadius: "16px",
		boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
		overflow: "hidden",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		padding: "16px",
		position: "relative",
	},
}));
