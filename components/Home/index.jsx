import React from "react";

const Home = () => {
	return (
		<div className="md:w-2/5 xxl:w-2/5 xl:w-2/5 sm:w-full mx-auto xxs:w-full xs:w-full">
			<div className="my-8">
				<p className="text-3xl font-bold text-green-700">About</p>
				<hr />
				<p>
					This is shrey, I am a 💻 Fullstack Developer || 📝 Tech Writer || 🎙
					Content Creator || 🥸 Freelancer
				</p>
			</div>
			<div className="my-8">
				<p className="text-3xl font-bold text-orange-700">Experience</p>
				<hr />
				<p>
					I’ve have 4 years of industry experience - with Frontend being my
					primary strength. Have an experience in developing -
				</p>
				<ol className="list-disc mx-8 my-2">
					<li>Web applications</li>
					<li>Mobile apps(React Native)</li>
					<li>Backend(NodeJS)</li>
					<li>Firebase</li>
					<li>Blockchain applications(DeFi, Dapps)</li>
				</ol>
			</div>
			<div className="my-8">
				<p className="text-3xl font-bold text-blue-700">Live Projects</p>
				<hr />
				<ol className="list-disc mx-8 my-2">
					<li>
						Crypto Exchange platform,{" "}
						<a
							href="https://coinswitch.co/"
							target="_blank"
							className="text-indigo-800 hover:text-indigo-900 underline"
						>
							CoinSwitch
						</a>
					</li>
					<li>
						Koo, micro blogging application,{" "}
						<a
							href="https://kooapp.com/"
							target="_blank"
							className="text-indigo-800 hover:text-indigo-900 underline"
						>
							Koo
						</a>
					</li>
					<li>
						Tech platform, Learn how products are developed,{" "}
						<a
							href="http://www.ihatereading.in"
							target="_blank"
							className="text-indigo-800 hover:text-indigo-900 underline"
						>
							iHateReading
						</a>
					</li>
					<li>
						Etherscan clone,{" "}
						<a
							href="https://eth-txns.vercel.app/"
							target="_blank"
							className="text-indigo-800 hover:text-indigo-900 underline"
						>
							Clone
						</a>
					</li>
					<li>
						Solana NFT marketplace,{" "}
						<a
							href="https://www.solana-nft-marketplace-pi.vercel.app/"
							target="_blank"
							className="text-indigo-800 hover:text-indigo-900 underline"
						>
							NFT marketplace
						</a>
					</li>
					<li>
						CryptStream,{" "}
						<a
							href="https://crypt-stream.vercel.app/dashboard"
							target="_blank"
							className="text-indigo-800 hover:text-indigo-900 underline"
						>
							Link
						</a>
					</li>
					<li>
						Witness Invoice, Create, Manage, Save invoices{" "}
						<a
							href="http://witnessinvoice.com/"
							target="_blank"
							className="text-indigo-800 hover:text-indigo-900 underline"
						>
							Link
						</a>
					</li>
				</ol>
			</div>
			<div className="my-8">
				<p className="text-3xl font-bold text-pink-700">Developer Presence </p>
				<hr />
				<ol className="list-disc mx-8 my-2">
					<li>
						300+ Medium articles
						<a
							href="https://shreyvijayvargiya26.medium.com/"
							target="_blank"
							className="text-indigo-800 hover:text-indigo-900 underline"
						>
							Collection
						</a>
					</li>
					<li>
						70+ projects repository{" "}
						<a
							href="https://github.com/shreyvijayvargiya/iHateReadingLogs"
							target="_blank"
							className="text-indigo-800 hover:text-indigo-900 underline"
						>
							Projects
						</a>
					</li>
					<li>
						Devto profile{" "}
						<a
							href="https://dev.to/shreyvijayvargiya"
							target="_blank"
							className="text-indigo-800 hover:text-indigo-900 underline"
						>
							Link
						</a>
					</li>
				</ol>
			</div>
			<div className="my-8">
				<p className="text-3xl font-bold text-gray-700">Contact </p>
				<hr />
				<ol className="list-disc mx-8 my-2">
					<li>
						Email {" "}
						<a
							href="mailto@shreyvijayvargiya26@gmail.com"
							target="_blank"
							className="text-indigo-800 hover:text-indigo-900 underline"
						>
							Email me
						</a>
					</li>
					<li>
						Twitter {" "}
						<a
							href="https://twitter.com/treyvijay"
							target="_blank"
							className="text-indigo-800 hover:text-indigo-900 underline"
						>
							Tweet me
						</a>
					</li>
				</ol>
			</div>
		</div>
	);
};
export default Home;
