import { createStyles } from "@mantine/core";
import { Music2Icon } from "lucide-react";
import React from "react";

const MusicCard = () => {
	const { classes } = useStyles();
	return (
		<div className="flex justify-center items-center w-full h-screen">
			<div className="relative bg-gray-100 cursor-pointer rounded-xl w-96 h-96 z-50 border border-gray-200 group overflow-hidden">
				<div
					className={`${classes.cdCard} cd-card absolute top-0 left-0 right-0 bottom-0 bg-gray-300 z-10 border border-gray-200`}
				/>
				<div className="w-full h-full mt-20 relative flex justify-center flex-col z-0 items-center p-4">
					<Music2Icon className="animate-bounce" />
					<p className="text-gray-400 text-center">Currently listening</p>
					<p className="text-xl text-center">Lex Fridmand with Donald Trump</p>
				</div>
			</div>
		</div>
	);
};
export default MusicCard;

const useStyles = createStyles((theme) => ({
	cdCard: {
		"@keyframes rotate": {
			"0%": { transform: "rotate(0deg)" },
			"100%": { transform: "rotate(360deg)" },
		},
		transition: "all 0.8s ease-in-out",
		borderRadius: "0.75rem",
		backgroundImage: "url(/demo-images/img-4.avif)",
		imageOrientation: "center center",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		backgroundOrigin: "content-box",
		"&:hover": {
			height: "100%",
			border: `1px solid ${theme.colors.gray[3]}`,
			top: "-180px",
			transformOrigin: "center center",
			borderRadius: "50%",
			animation: "rotate 2s ease infinite",
			animationDelay: "1s",
		},
	},
}));
