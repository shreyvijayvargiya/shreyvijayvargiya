import gsap from "gsap";
import { useEffect } from "react";

const InifiniteLoader = () => {
	useEffect(() => {
		gsap.fromTo(
			".loader",
			{ rotateX: 0, rotateY: "360deg", opacity: 0.5, scale: 0.8 },
			{
				rotateX: "360deg",
				rotateY: "0deg",
				repeat: -1,
				scale: 1,
				opacity: 1,
				yoyo: true,
				duration: 2,
			}
		);
	}, []);
	return (
		<div className="loader">
			<svg
				viewBox="0 0 1000 1000"
				id="emoji"
				xmlns="http://www.w3.org/2000/svg"
				fill="#ffffff"
				stroke="#ffffff"
			>
				<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
				<g
					id="SVGRepo_tracerCarrier"
					stroke-linecap="round"
					stroke-linejoin="round"
				></g>
				<g id="SVGRepo_iconCarrier">
					{" "}
					<g id="color">
						{" "}
						<path
							fill="#ffffd1"
							stroke="#ffffd1"
							strokeWidth="2"
							d="m36 39.44c-4.335 4.335-8.841 9.096-15.73 9.096-7.141 0-12.24-5.271-12.24-12.58 0.05558-7.058 5.863-12.67 12.92-12.54 6.29 0 10.97 4.973 15.05 9.054 4.335-4.336 8.841-9.054 15.73-9.054 7.226 0 12.24 5.229 12.24 12.54-0.05592 7.058-5.863 12.75-12.92 12.62-6.29 0-10.97-5.057-15.05-9.137zm-3.4-3.444c-3.315-3.06-6.801-7.522-11.73-7.522-4.129 0.0055-7.475 3.351-7.48 7.48-0.2047 4.113 3.108 7.584 7.226 7.522 4.844 5e-4 8.754-4.166 11.98-7.48zm26.01-0.0417c0.205-4.113-3.108-7.543-7.226-7.48-4.846 0-8.756 4.165-11.99 7.48 3.315 3.06 6.8 7.522 11.73 7.522 4.129-0.0057 7.476-3.393 7.482-7.522z"
						></path>{" "}
					</g>{" "}
					<g id="line">
						{" "}
						<path
							fill="none"
							stroke="#ffffff"
							strokeLinecap="round"
							strokeWidth="2"
							d="m36 32.51c4.335-4.336 8.841-9.096 15.73-9.096 7.226 0 12.24 5.271 12.24 12.58-0.05592 7.058-5.863 12.71-12.92 12.58-5.006 0-8.99-3.178-12.47-6.532m-2.581-2.564c-4.335 4.335-8.841 9.096-15.73 9.096-7.141 0-12.24-5.271-12.24-12.58 0.05558-7.058 5.863-12.71 12.92-12.58 5.02 0 9.012 3.194 12.49 6.558m-3.476 3.475c-2.586-2.503-5.447-4.932-9.102-4.932-4.129 0.0055-7.474 3.351-7.48 7.48-0.2047 4.113 3.108 7.542 7.226 7.48 4.844 5e-4 8.754-4.166 11.98-7.48m9.401 2.521c2.594 2.513 5.462 4.959 9.129 4.959 4.129-0.0052 7.476-3.351 7.482-7.48h4e-4c0.2047-4.113-3.108-7.542-7.226-7.48-4.846 0-8.756 4.165-11.99 7.48"
						></path>{" "}
						<line
							x1="32.6"
							x2="36"
							y1="36"
							y2="32.51"
							stroke="#ffffff"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
						></line>{" "}
						<line
							x1="36"
							x2="39.4"
							y1="39.49"
							y2="36"
							stroke="#ffffff"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
						></line>{" "}
					</g>{" "}
				</g>
			</svg>
		</div>
	);
};
export default InifiniteLoader;
