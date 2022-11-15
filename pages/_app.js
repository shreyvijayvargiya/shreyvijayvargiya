import React from "react";
import { Body } from "modules";
import "tailwindcss/tailwind.css";
import "../styles.css";

const MyApp = ({ Component, pageProps }) => {
	return (
		<Body>
			<Component {...pageProps} />
		</Body>
	);
};
export default MyApp;
