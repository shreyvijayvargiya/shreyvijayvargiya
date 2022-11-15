import React from "react";
import { Body } from "modules";
import "tailwindcss/tailwind.css";

const MyApp = ({ Component, pageProps }) => {
	return (
		<Body>
			<Component {...pageProps} />
		</Body>
	);
};
export default MyApp;
