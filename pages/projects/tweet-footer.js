import React, { useEffect, useState } from "react";
import {
	MessageCircle,
	Heart,
	Repeat,
	Bookmark,
	Share2,
	Link,
	ChartBarIcon,
	Loader,
} from "lucide-react";
import gsap from "gsap";
import colors from "tailwindcss/colors";

const TweetFooter = () => {
	const [tweetStats, setTweetStats] = useState({
		likes: 4,
		liked: false,
		replied: false,
		replies: 2,
		retweets: 3,
		retweeted: false,
		bookmarked: false,
		views: 12.3,
	});

	const [showSharePopup, setShowSharePopup] = useState(false);
	const [showReplyPopup, setShowReplyPopup] = useState(false);
	const [loaders, setLoaders] = useState({
		replyLoader: false,
	});

	const handleShareClick = () => {
		setShowSharePopup(!showSharePopup);
	};

	const handleCopyLink = () => {
		setShowToast(true);
		setToastMessage("Link Copied");
		navigator.clipboard.writeText(window.location.href);
		setShowSharePopup(false);
	};

	const toggleStat = (key) => {
		setTweetStats((prevStats) => ({
			...prevStats,
			[key]: !prevStats[key],
		}));
	};

	const [showToast, setShowToast] = useState(false);
	const [toastMessage, setToastMessage] = useState("");

	useEffect(() => {
		gsap.fromTo(
			".toast",
			{
				opacity: 0,
				y: 40,
			},
			{
				opacity: 1,
				y: 0,
				duration: 2,
				onComplete: () => {
					setTimeout(() => {
						setShowToast(false);
					}, 500);
				},
			}
		);
	}, [showToast]);
	return (
		<div className="flex justify-center flex-col items-center h-screen">
			<div
				className={`toast p-3 bg-gray-900 text-center text-gray-300 rounded-xl ${
					showToast
						? "fixed bottom-10 w-1/4 mx-auto left-0 right-0 visible"
						: "w-0 h-0 hidden opacity-0"
				}`}
			>
				{toastMessage}
			</div>
			<div
				className="w-1/3 mx-auto flex justify-between items-center p-4 bg-gray-900 text-white rounded-xl hover:px-8 hover:py-6 transition-all duration-150 ease-in container"
				onMouseEnter={() => {
					gsap.to(".container", { scale: 1.05 });
				}}
				onMouseLeave={() => {
					gsap.to(".container", { scale: 1 });
				}}
			>
				<div className="relative">
					<div
						className={`flex items-center space-x-1 hover:text-blue-600 cursor-pointer ${
							tweetStats?.replied ? "text-blue-600" : "text-gray-500"
						}`}
						onClick={() => {
							setShowReplyPopup(!showReplyPopup);
						}}
					>
						<MessageCircle className="w-5 h-5" />
						<span className={`text-sm`}>{tweetStats.replies}</span>
					</div>
					{showReplyPopup && (
						<div
							className={`absolute left-0 bottom-12 p-4 bg-gray-900 shadow-lg rounded-xl transition-all duration-200 ease-in ${
								showReplyPopup ? "w-80 visible" : "w-0 invisble"
							}`}
						>
							<input
								className="bg-gray-900 border border-gray-700 my-2 text-gray-200 focus:border p-4 rounded-xl focus:border-gray-800 w-full outline-none"
								placeholder="Reply well"
							/>
							<button
								onClick={() => {
									setLoaders((prevState) => ({
										...prevState,
										replyLoader: true,
									}));
									setTweetStats((prevState) => ({
										...prevState,
										replies: tweetStats.replies + 1,
										replied: true,
									}));
									setTimeout(() => {
										setLoaders((prevState) => ({
											...prevState,
											replyLoader: false,
										}));
										setShowReplyPopup(false);
										setShowToast(true);
										setToastMessage("Replied successfully");
									}, 500);
								}}
								className="w-full p-4 rounded-xl my-2 bg-gray-100 text-black flex justify-center gap-2 items-center"
							>
								{loaders.replyLoader && (
									<Loader
										size={18}
										color={colors.gray[900]}
										className="animate-spin"
									/>
								)}
								Send
							</button>
						</div>
					)}
				</div>
				<div
					className={`flex items-center space-x-1 cursor-pointer ${
						tweetStats.liked ? "text-red-500" : "text-gray-500"
					} hover:text-red-500`}
					onClick={() => {
						toggleStat("liked");
						if (!tweetStats.liked) {
							setShowToast(true);
							setToastMessage("Tweet liked");
							setTweetStats((prevState) => ({
								...prevState,
								likes: tweetStats.likes + 1,
							}));
						} else {
							setTweetStats((prevState) => ({
								...prevState,
								likes: tweetStats.likes - 1,
							}));
						}
					}}
				>
					<Heart className="w-5 h-5" />
					<span className="text-sm">{tweetStats.likes}</span>
				</div>
				<div
					className={`flex items-center space-x-1 cursor-pointer ${
						tweetStats.retweeted ? "text-green-500" : "text-gray-500"
					} hover:text-green-500`}
					onClick={() => {
						toggleStat("retweeted");
						if (!tweetStats.retweeted) {
							setTweetStats((prevState) => ({
								...prevState,
								retweets: tweetStats.retweets + 1,
							}));
						} else {
							setTweetStats((prevState) => ({
								...prevState,
								retweets: tweetStats.retweets - 1,
							}));
						}
					}}
				>
					<Repeat className="w-5 h-5" />
					<span className="text-sm">{tweetStats.retweets}</span>
				</div>
				<div className="flex items-center space-x-1 hover:text-orange-500 text-gray-500 cursor-pointer">
					<ChartBarIcon className="w-5 h-5" />
					<span className="text-sm">{tweetStats.views}k</span>
				</div>
				<div
					className={`flex items-center space-x-1 cursor-pointer ${
						tweetStats.bookmarked ? "text-indigo-500" : "text-gray-500"
					} hover:text-indigo-500`}
					onClick={() => {
						if (tweetStats.bookmarked) {
							setShowToast(true);
							setToastMessage("Tweet unsaved");
						} else {
							setShowToast(true);
							setToastMessage("Tweet saved");
						}
						toggleStat("bookmarked");
					}}
				>
					<Bookmark
						className={`${tweetStats.bookmarked ? "fill-current" : ""} w-5 h-5`}
					/>
					<span className="text-sm">
						{tweetStats.bookmarked ? "Saved" : "Save"}
					</span>
				</div>
				<div className="relative">
					<div
						className="flex items-center space-x-1 hover:text-gray-200 text-gray-500 cursor-pointer"
						onClick={handleShareClick}
					>
						<Share2 className="w-5 h-5" />
						<span className="text-sm">Share</span>
					</div>
					{showSharePopup && (
						<div className="absolute left-0 w-40 bottom-12 bg-gray-900 p-4 shadow-lg rounded-xl">
							<button
								onClick={handleCopyLink}
								className="flex items-center space-x-1 text-gray-300 hover:text-white w-full"
							>
								<Link className="w-4 h-4" />
								<span>Copy link</span>
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default TweetFooter;
