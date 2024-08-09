import React, { useState, useEffect } from "react";
import BackgroundDots from "components/Projects/BackgroundDots";

const Page = () => {
	return (
		<div className="flex justify-center items-center min-h-screen w-full">
			<div className="w-full h-full mx-auto">
				<BackgroundDots />
			</div>
		</div>
	);
};

export default Page;
