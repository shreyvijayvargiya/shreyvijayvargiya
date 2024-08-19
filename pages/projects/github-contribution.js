import GitHubCalendar from "react-github-calendar";

const GithubCalenderContribution = () => {
	return (
		<div className="w-full h-screen flex justify-center items-center">
			<div className="border-dashed border-2 rounded-xl border-gray-800 p-4 hover:rounded-2xl hover:bg-gray-50 text-gray-900 hover:skew-x-2 transition-all duration-150 hover:px-8 hover:translate-x-3 hover:border-4 hover:border-black">
				<GitHubCalendar
					username="shreyvijayvargiya"
					blockSize={14}
					blockMargin={4}
					fontSize={18}
					year={2024}
				/>
			</div>
		</div>
	);
};
export default GithubCalenderContribution;
