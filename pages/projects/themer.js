import { Slider } from "@mantine/core";
import { useEffect, useState } from "react";
import colors from "tailwindcss/colors";

const Themer = () => {
	const [val, setVal] = useState(Number(0));

	const getColor = () => {
		if (val === 0) return colors.white;
		if (val <= 5) return colors.gray[50];
		if (val <= 10) return colors.gray[100];
		if (val <= 20) return colors.gray[200];
		if (val <= 30) return colors.gray[300];
		if (val <= 40) return colors.gray[400];
		if (val <= 50) return colors.gray[500];
		if (val <= 60) return colors.gray[600];
		if (val <= 60) return colors.gray[700];
		if (val <= 80) return colors.gray[800];
		if (val <= 90) return colors.gray[900];
		if (val <= 100) return colors.black;
		return colors.gray[800];
	};

	useEffect(() => {
		getColor();
	}, [val]);

	return (
		<div
			className="flex justify-center items-center h-screen w-full flex-col"
			style={{
				backgroundColor: getColor(),
				transition: "background-color 0.2s ease-in-out",
			}}
		>
			<Slider
				color={val < 70 ? val < 50 ? "dark": "red" : "pink"}
				className="w-1/3 mx-auto"
				style={{ transition: "all 0.2s ease-in-out" }}
				onChange={(e) => setVal(e, "e")}
				marks={[
					{ value: 20, label: "20%" },
					{ value: 50, label: "50%" },
					{ value: 80, label: "80%" },
				]}
			/>
		</div>
	);
};
export default Themer;
