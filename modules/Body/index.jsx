import React from "react";
import { Header } from "modules";

const Body = ({ children }) => {
  return (
		<div>
			<Header />
			<div className="relative top-20 p-4 h-full overflow-scroll">{children}</div>
		</div>
	);
};
export default Body;
