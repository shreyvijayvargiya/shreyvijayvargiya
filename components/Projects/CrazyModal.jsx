import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import ProgressBar from "react-scroll-progress-bar";
import { useMediaQuery } from "@mantine/hooks";

const DynamicModal = () => {
	const ref = useRef(null);
	const [show, setShow] = useState(true);

	const [scrollPercent, setScrollPercent] = useState(0);
	const isMobile = useMediaQuery("(max-width: 400px)");

	useEffect(() => {
		initialAnimation();
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const handleScroll = () => {
		const percent = Math.floor((window.scrollY / window.innerHeight) * 100);
		setScrollPercent(percent);
		if (percent < 10) {
			setShow(false);
			if (isMobile) {
				gsap.to(ref.current, {
					width: "0%",
					scale: 0,
					opacity: 0,
				});
			}
			gsap.to(ref.current, {
				width: "25%",
				scale: 1,
				opacity: 1,
			});
		} else if (percent >= 10) {
			gsap.to(ref.current, {
				width: percent >= 90 ? "80%" : percent + "%",
				scale: 1,
				opacity: 1,
			});
			setShow(true);
		}
	};

	const initialAnimation = () => {
		gsap.fromTo(
			ref.current,
			{ width: "0%", opacity: 0 },
			{ width: "20%", opacity: 1 }
		);
	};

	return (
		<div
			className="bg-black bg-opacity-95 w-full"
			style={{ height: isMobile ? "100vh" : "200vh" }}
		>
			<ProgressBar />
			<div className="fixed w-full mx-auto text-center bottom-10 flex justify-center items-center my-4 text-white">
				<p className="text-center w-full">
					Scroll to increase the container width
				</p>
			</div>
			<div
				className="fixed md:top-20 sm:top-20 xs:top-20 xxs:top-20 md:h-4/5 sm:h-3/5 xs:h-3/5 xxs:h-3/5 md:left-60 md:right-60 sm:left-10 xs:left-10 xxs:left-10 sm:right-20 mx-auto text-gray-400 hover:text-gray-200 border-dotted border-4 border-gray-600 p-4 rounded-xl cursor-pointer overflow-scroll"
				style={{ boxShadow: "0px 0px 50px rgb(255, 255, 255, 0.2)" }}
				ref={ref}
			>
				<div className="flex flex-wrap md:justify-start items-start gap-4 sm:justify-center xs:justify-center xxs:justify-center transition-all duration-100">
					<img
						className="w-80 h-auto rounded-md"
						style={{ aspectRatio: "auto" }}
						src="https://firebasestorage.googleapis.com/v0/b/ihatereading-4ba52.appspot.com/o/Karyams%2FQXq1wZdVU3X7pGJJjdiB2JSavdk1%2Fimages%2FBundle%20template%20-%202.png?alt=media&token=95c3d277-2ff6-4737-8b2d-22d0f9506228"
					/>
					<img
						className="w-80 h-auto rounded-md"
						src="https://firebasestorage.googleapis.com/v0/b/ihatereading-4ba52.appspot.com/o/Karyams%2FQXq1wZdVU3X7pGJJjdiB2JSavdk1%2Fimages%2FEv8_ccgXcAAFm3B.png?alt=media&token=17e0c391-0758-4ae3-a4e9-2f3589b5cc9f"
					/>
					<img
						className="w-80 h-auto rounded-md"
						src="https://firebasestorage.googleapis.com/v0/b/ihatereading-4ba52.appspot.com/o/Karyams%2FQXq1wZdVU3X7pGJJjdiB2JSavdk1%2Fimages%2F259e8fed-7241-4c92-b7ec-1c4aea104f7d_1920x959.webp?alt=media&token=4b846b85-1e49-498e-9bf6-8dba54caafbd"
					/>
					<img
						className="w-80 h-auto rounded-md"
						src="https://firebasestorage.googleapis.com/v0/b/ihatereading-4ba52.appspot.com/o/Karyams%2FQXq1wZdVU3X7pGJJjdiB2JSavdk1%2Fimages%2F1bf258e3-07fd-4dde-9851-4599acae586f-ezgif.com-video-to-gif-converter.gif?alt=media&token=36ba661f-696f-4fdc-9928-7d28a217da1d"
					/>
					<img
						className="w-80 h-auto rounded-md"
						src="https://firebasestorage.googleapis.com/v0/b/ihatereading-4ba52.appspot.com/o/Karyams%2FQXq1wZdVU3X7pGJJjdiB2JSavdk1%2Fimages%2FGithub%20repo%20collection%20banner.png?alt=media&token=cf50468f-dd88-4dc4-8a6b-07fe72396e3f"
					/>
					<img
						className="w-80 h-auto rounded-md"
						style={{ aspectRatio: "auto" }}
						src="https://firebasestorage.googleapis.com/v0/b/ihatereading-4ba52.appspot.com/o/Karyams%2FQXq1wZdVU3X7pGJJjdiB2JSavdk1%2Fimages%2FBundle%20template%20-%202.png?alt=media&token=95c3d277-2ff6-4737-8b2d-22d0f9506228"
					/>
					<img
						className="w-80 h-auto rounded-md"
						src="https://firebasestorage.googleapis.com/v0/b/ihatereading-4ba52.appspot.com/o/Karyams%2FQXq1wZdVU3X7pGJJjdiB2JSavdk1%2Fimages%2FPersonal%20Portfolio%20Website%20-%201.png?alt=media&token=d46ed287-3ce7-4e64-ab14-e7789bd8cd34"
					/>
					<img
						className="w-80 h-auto rounded-md"
						src="https://firebasestorage.googleapis.com/v0/b/ihatereading-4ba52.appspot.com/o/Karyams%2FQXq1wZdVU3X7pGJJjdiB2JSavdk1%2Fimages%2F259e8fed-7241-4c92-b7ec-1c4aea104f7d_1920x959.webp?alt=media&token=4b846b85-1e49-498e-9bf6-8dba54caafbd"
					/>
					<img
						className="w-80 h-auto rounded-md"
						src="https://firebasestorage.googleapis.com/v0/b/ihatereading-4ba52.appspot.com/o/Karyams%2FQXq1wZdVU3X7pGJJjdiB2JSavdk1%2Fimages%2F1bf258e3-07fd-4dde-9851-4599acae586f-ezgif.com-video-to-gif-converter.gif?alt=media&token=36ba661f-696f-4fdc-9928-7d28a217da1d"
					/>
					<img
						className="w-80 h-auto rounded-md"
						src="https://firebasestorage.googleapis.com/v0/b/ihatereading-4ba52.appspot.com/o/Karyams%2FQXq1wZdVU3X7pGJJjdiB2JSavdk1%2Fimages%2F259e8fed-7241-4c92-b7ec-1c4aea104f7d_1920x959.webp?alt=media&token=4b846b85-1e49-498e-9bf6-8dba54caafbd"
					/>
				</div>
			</div>
		</div>
	);
};
export default DynamicModal;
