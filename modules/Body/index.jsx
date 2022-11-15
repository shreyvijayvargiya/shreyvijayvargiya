import React from "react";
import { Header, Footer } from "modules";

const Body = ({ children }) => {
  return (
		<div>
			<Header />
			<div className="relative top-20 p-4 h-full overflow-scroll">{children}</div>
			{/* <Footer /> */}
		</div>
	);
};
export default Body;
