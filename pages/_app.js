import React from "react";
import { Body } from "modules";
import "tailwindcss/tailwind.css";
import { MantineProvider } from "@mantine/core";
import "../styles.css";

const MyApp = ({ Component, pageProps }) => {
	return (
		<MantineProvider withGlobalStyles withNormalizeCSS>
			<Body>
				<Component {...pageProps} />
			</Body>
		</MantineProvider>
	);
};
export default MyApp;
