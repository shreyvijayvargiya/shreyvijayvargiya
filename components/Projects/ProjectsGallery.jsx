import { useEffect, useState } from "react";
import axios from "axios";
import gsap from "gsap";
import useSound from "use-sound";

const ProjectsGallery = () => {
	const [allProj, setAllProj] = useState(null);
	const [active, setActive] = useState(null);
	const [play] = useSound("./sound-clips/sound-keyboard.mp3", { volume: 0.6 });

	useEffect(async () => {
		const response = await axios.get("/api/getProjects");
		setAllProj(response.data);
		gsap.fromTo(
			".project-bg-image",
			{ skewX: "-2deg", transformOrigin: "center center", padding: 10 },
			{
				skewX: "2deg",
				rotation: 360,
				duration: 300,
				padding: 100,
				transformOrigin: "center center",
				repeat: -1,
				yoyo: true,
			}
		);
	}, []);

	return (
		<div className="min-h-screen w-full py-10">
			<div className="p-4">
				<p className="text-5xl font-fancy px-4">Projects</p>
				<div className={`p-4 mx-auto w-full`}>
					{allProj?.map((project) => {
						return (
							<div
								onMouseEnter={() => {
									setActive(`https://www.iamshrey.me${project?.link}`);
									play();
								}}
								onMouseLeave={() => setActive(null)}
								className="p-1 hover:text-black hover:bg-gray-50 text-gray-600 border-t border-gray-200 w-full"
							>
								<a
									href={`https://www.iamshrey.me${project?.link}`}
									target="_blank"
									className="flex gap-3 divide-x-2"
									key={project.id}
								>
									{project.id}. {project.name}
								</a>
							</div>
						);
					})}
				</div>
				<div
					className={`md:fixed md:inline-block top-20 left-1/4 right-20 bottom-20 sm:hidden xs:hidden xxs:hidden rounded-xl border border-gray-200 p-2 transition-all duration-500 ease-in ${
						active ? "opacity-100" : "opacity-0"
					} pointer-events-none`}
				>
					<iframe src={active || "about:blank"} className="w-full h-full" />
				</div>
			</div>
		</div>
	);
};

export default ProjectsGallery;
