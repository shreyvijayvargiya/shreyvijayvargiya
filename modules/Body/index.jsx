import React from "react";
import { Header } from "modules";

const Body = ({ children }) => {
  return (
		<div>
			<Header />
			<br />
			<div className="relative top-40 p-4 h-full overflow-scroll">
				{children}
			</div>
		</div>
	);
};
export default Body;
