import React, { useState } from "react";
import { TextInput, Button, Tooltip } from "@mantine/core";
import {
	Lock,
	CreditCard,
	Watch,
	Calendar,
	PlusIcon,
	DollarSign,
} from "lucide-react";
import { gsap } from "gsap";
import colors from "tailwindcss/colors";

const userOrders = [
	{
		src: "/clothes-images/img-1.jpg",
		name: "Stiched white ",
		id: 1,
		rating: 3.5,
		orderAt: "24 August 2024",
		hoverBackground: "bg-blue-50",
	},
	{
		src: "/clothes-images/img-2.jpg",
		name: "Purple lining",
		id: 2,
		rating: 4,
		orderAt: "26 August 2024",
		hoverBackground: "bg-green-50",
	},
	{
		src: "/clothes-images/img-3.jpg",
		name: "Creamy flower",
		id: 3,
		rating: 4.8,
		orderAt: "28 August 2024",
		hoverBackground: "bg-pink-50",
	},
	{
		src: "/clothes-images/img-4.jpg",
		name: "White spots",
		id: 4,
		rating: 3,
		orderAt: "31 August 2024",
		hoverBackground: "bg-yellow-50",
	},
];

const CardPaymentForm = () => {
	const [cardNumber, setCardNumber] = useState("");
	const [expiryDate, setExpiryDate] = useState("");
	const [expiryYear, setExpiryYear] = useState("");
	const [cvv, setCvv] = useState("");
	const [loading, setLoading] = useState(false);
	const [isPaymentDone, setIsPaymentDone] = useState(false);
	const [cards, setCards] = useState([]);
	const [activeIndex, setActiveIndex] = useState(0);

	const handleCardNumberChange = (e) => {
		const value = e.target.value;
		setCardNumber(value);
	};

	const handlePayment = () => {
		setLoading(true);
		setTimeout(() => {
			gsap.to([".card-heading", ".user-cards", ".card-payment-form"], {
				width: "0%",
				height: "0%",
				display: "none",
				opacity: 0,
				duration: 0.5,
				onComplete: () => {
					setLoading(false);
					setIsPaymentDone(true);
					gsap.to(".payment-done-component", {
						display: "inline-block",
						opacity: 100,
					});
				},
			});
		}, 500);
	};

	const SingleCard = ({ item, index }) => {
		return (
			<div className="p-2 text-left" key={item?.cardNumber + "_" + index}>
				<div className=" my-2">
					<p className="text-md font-sans">Card Number</p>
					<p className="text-sm text-gray-500 font-mono">{item?.cardNumber}</p>
				</div>
				<div className=" my-2">
					<p className="text-md font-sans">Expiry date/year</p>
					<p className="text-sm text-gray-500 font-mono">
						{item?.expiryDate}/{item?.expiryYear}
					</p>
				</div>
				<div className="my-2">
					<p className="text-md font-sans">CVV</p>
					<p className="text-sm text-gray-500 font-mono">{item?.cvv}</p>
				</div>
			</div>
		);
	};

	const tailwindColorMap = {
		0: "blue",
		1: "green",
		2: "pink",
		3: "yellow",
		4: "red",
		5: "gray",
		6: "teal",
		7: "voilet",
		8: "rose",
	};

	const addNewCardAction = () => {
		let newIndex = cards.length;
		let newCards = [
			...cards,
			{
				cardNumber,
				expiryDate,
				expiryYear,
				cvv,
				cardColor: colors[tailwindColorMap[newIndex]][100],
			},
		];
		gsap.from(
			`.user-card-${newCards.length - 1}`,
			{ opacity: 0, rotation: 360 },
			{ opacity: 1, x: 0 }
		);
		setCards(newCards);
		setLoading(false);
		setActiveState("makePayment");
	};

	const updateCardAction = () => {
		const updatedCards = [...cards];
		updatedCards[activeIndex] = {
			cardNumber,
			expiryDate,
			expiryYear,
			cvv,
			cardColor: colors[tailwindColorMap[activeIndex]][100],
		};
		setActiveState("makePayment");
		setCards(updatedCards);
	};

	let states = {
		addNewCard: {
			buttonText: "Add New Card",
			action: addNewCardAction,
		},
		editCard: {
			buttonText: "Update Card",
			action: updateCardAction,
		},
		makePayment: {
			buttonText: "Make Payment",
			action: handlePayment,
		},
	};

	const [activeState, setActiveState] = useState("addNewCard");
	const { buttonText, action } = states[activeState];

	return (
		<div className="flex flex-col items-center justify-center min-h-screen">
			<div
				style={{ opacity: 1, transition: "opacity 0.5s ease-in-out" }}
				className="w-full max-w-xl bg-white p-8 rounded-lg shadow-lg border border-gray-200"
			>
				<div className="">
					<div className="card-heading">
						<h2 className="text-xl font-semibold mb-6 text-gray-800">
							Card Payment
						</h2>
					</div>
					<div
						className={`${
							cards.length > 0
								? "w-full h-full mb-6"
								: "w-0 h-0 invisible"
						}  flex justify-start items-center gap-3 user-cards transition-all duration-500 ease-in`}
					>
						<Tooltip label="Add new card">
							<button
								onClick={() => {
									setActiveState("addNewCard");
									setCardNumber("");
									setExpiryDate("");
									setExpiryYear("");
									setCvv("");
									setActiveIndex(null);
								}}
								className="border border-gray-200 rounded-full p-2 hover:bg-gray-100"
							>
								<PlusIcon size={14} />
							</button>
						</Tooltip>
						{cards.map((item, index) => {
							return (
								<div
									key={item.cardNumber + "_" + index}
									id={item.cardNumber}
									onClick={() => {
										setCardNumber(item.cardNumber);
										setExpiryDate(item.expiryDate);
										setExpiryYear(item.expiryYear);
										setCvv(item.cvv);
										setActiveState("editCard");
										setActiveIndex(index);
										gsap.fromTo(
											`.user-card-${index}`,
											{ y: 100, scale: 0.6 },
											{ y: 0, scale: 1, duration: 0.2 }
										);
										gsap.fromTo(
											[
												".card-number-input",
												".expirydate-input",
												".expiryyear-input",
												".cvv-input",
											],
											{ opacity: 0 },
											{ opacity: 1, duration: 0.2 }
										);
									}}
									className={`user-card-${index} rounded-md cursor-pointer h-10 w-20 hover:h-auto hover:w-80 group hover:shadow-xl transition-all duration-200 ease-in ${
										activeIndex === index
											? "border-2 border-black"
											: "border-none"
									}`}
									style={{
										backgroundColor: item?.cardColor,
									}}
								>
									<div className="visible group-hover:hidden transition-all duration-100 ease-in flex justify-center items-center mt-2">
										{index + 1}
									</div>
									<div className="hidden group-hover:inline-block opacity-0 group-hover:opacity-100 group-hover:translate-x-10 transition-all duration-300 ease-in">
										<SingleCard item={item} index={index} />
									</div>
								</div>
							);
						})}
					</div>
					<div className="card-payment-form">
						<div className="flex justify-between gap-2 mb-4">
							<TextInput
								value={cardNumber}
								onChange={handleCardNumberChange}
								placeholder="4444444444444444"
								maxLength={16}
								className="flex-grow card-number-input"
								classNames={{
									input:
										"outline-none focus:outline-none border border-gray-300",
								}}
								size="lg"
								radius="md"
								icon={<CreditCard size={18} />}
								styles={{ input: { fontSize: "1.25rem" } }}
							/>
						</div>
						<div className="flex justify-between gap-2 mb-4">
							<TextInput
								value={expiryDate}
								onChange={(e) => setExpiryDate(e.target.value)}
								placeholder="MM"
								maxLength={2}
								className="flex-grow expirydate-input"
								size="lg"
								icon={<Watch size={18} />}
								radius="md"
								styles={{ input: { fontSize: "1.25rem" } }}
							/>
							<TextInput
								value={expiryYear}
								onChange={(e) => setExpiryYear(e.target.value)}
								placeholder="YYYY"
								maxLength={4}
								className="flex-grow expiryyear-input"
								size="lg"
								icon={<Calendar size={18} />}
								radius="md"
								styles={{ input: { fontSize: "1.25rem" } }}
							/>
						</div>
						<div className="flex justify-between gap-2 mb-6">
							<TextInput
								value={cvv}
								onChange={(e) => setCvv(e.target.value)}
								placeholder="CVV"
								maxLength={3}
								className="flex-grow cvv-input"
								size="lg"
								radius="md"
								icon={<Lock size={18} />}
								styles={{ input: { fontSize: "1.25rem" } }}
							/>
						</div>
						<div className="flex justify-start items-center my-4 gap-1 border border-gray-200 rounded-xl p-2">
							<p className="text-xs">Your orders</p>
							{userOrders.map((item, index) => {
								return (
									<div key={item.id}>
										<img
											src={item.src}
											className={`w-10 h-10 object-cover rounded-xl hover:h-20 hover:w-20 cursor-pointer hover:translate-x-4 translate-x-0 hover:shadow-2xl transition-all duration-100 ease-linear group-hover:ml-4`}
										/>
									</div>
								);
							})}
						</div>
						<Button
							fullWidth
							size="lg"
							loading={loading}
							radius="md"
							color="dark"
							onClick={action}
							rightIcon={isPaymentDone ? <DollarSign size={18} /> : null}
						>
							{buttonText}
						</Button>
					</div>
					<div className="payment-done-component hidden">
						<div className="mb-8">
							{" "}
							<h2 className="text-xl font-semibold text-gray-800">
								Order confirmed
							</h2>
							<p className="text-lg font-mono">Your order is placed!!</p>
						</div>
						<div className="flex justify-around items-center animate-bounce">
							{userOrders.map((item, index) => {
								return (
									<div key={item.id}>
										<img
											src={item.src}
											className={`w-24 h-24 object-cover rounded-xl hover:h-28 hover:w-28 cursor-pointer hover:translate-x-4 translate-x-0 hover:shadow-2xl transition-all duration-100 ease-linear group-hover:ml-4`}
											style={{
												transform: `rotationX(${index + 1 * 10}px)`,
												transition: "all 0.4s ease",
											}}
										/>
									</div>
								);
							})}
						</div>
						<Button
							size="xs"
							color="dark"
							variant="filled"
							onClick={() => {
								window.location.href = "/projects/card-payment-form";
							}}
						>
							Reorder
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardPaymentForm;
