import React, { useEffect, useState } from "react";
import { TextInput, Button } from "@mantine/core";
import { Wallet } from "lucide-react";
import { gsap } from "gsap";
import { validatePattern } from "bhimupijs";

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

const CashOnDeliveryPaymentForm = () => {
	const [upiId, setUpiId] = useState("");
	const [loading, setLoading] = useState(false);
	const [validity, setValidity] = useState(null);
	const [paymentStatus, setPaymentStatus] = useState(null);

	const handlePayment = async () => {
		setLoading(true);
		try {
			setTimeout(() => {
				setPaymentStatus("success");
				setLoading(false);
				gsap.to(".payment-form", {
					opacity: 0,
					width: 0,
					height: 0,
					scale: 0,
					duration: 0.5,
					display: "none",
				});
			}, 500);
		} catch (error) {
			setPaymentStatus("failed");
			setLoading(false);
		}
	};

	useEffect(() => {
		gsap.to(".complete-card", {
			opacity: 1,
			scale: 1,
			duration: 0.2,
		});
	}, []);

	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<div className="complete-card w-full max-w-md bg-white p-6 rounded-lg shadow-lg border border-gray-200">
				<div className="payment-form">
					<h2 className="text-xl font-semibold mb-6 text-gray-800">
						Cash on Delivery
					</h2>
					
					<div className="mb-4">
						<span
							className={`bg-green-100 font-sans px-4 py-2 rounded-full transition-all duration-500 ease-in-out transform scale-0 opacity-0 ${
								validity
									? "scale-100 opacity-100 inline-block"
									: "scale-0 opacity-0 hidden"
							}`}
						>
							Huhuhu, your UPI ID is correct
						</span>
						<p
							className={`bg-pink-100 font-sans px-4 py-2 rounded-full transition-all duration-500 ease-in-out transform scale-0 opacity-0 ${
								!validity && upiId.length > 0
									? "scale-100 opacity-100 inline-block"
									: "scale-0 opacity-0 hidden"
							}`}
						>
							Oops, it's not a valid UPI ID
						</p>
					</div>
				</div>
				{paymentStatus && (
					<div className="payment-confirm-msg">
						<div className="mb-8">
							{" "}
							<h2 className="text-xl font-semibold text-gray-800">
								Order confirmed
							</h2>
							<p className="text-lg font-mono">Your order is placed!!</p>
						</div>
					</div>
				)}
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
				{!paymentStatus ? (
					<Button
						fullWidth
						size="lg"
						radius="md"
						color="dark"
						disabled={validity === false ? true : false}
						loading={loading}
						leftIcon={<Wallet size={18} />}
						onClick={handlePayment}
					>
						Make Payment
					</Button>
				) : (
					<Button
						size="xs"
						color="dark"
						variant="filled"
						onClick={() => {
							window.location.href = "/projects/upi-payment-form";
						}}
					>
						Reorder
					</Button>
				)}
			</div>
		</div>
	);
};

export default CashOnDeliveryPaymentForm;
