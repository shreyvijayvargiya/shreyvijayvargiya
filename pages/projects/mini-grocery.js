import React, { useState, useEffect, useRef } from "react";
import {
	TextInput,
	NumberInput,
	Button,
	Table,
	Title,
	Paper,
	Group,
	Text,
} from "@mantine/core";
import { gsap } from "gsap";
import { format } from "date-fns";

const GroceryApp = () => {
	const [items, setItems] = useState([]);
	const [itemName, setItemName] = useState("");
	const [itemPrice, setItemPrice] = useState(0);
	const [selectedDate, setSelectedDate] = useState(new Date());
	const tableRef = useRef(null);

	useEffect(() => {
		if (items.length > 0) {
			gsap.from(tableRef.current.lastChild, {
				opacity: 0,
				y: 20,
				duration: 0.5,
				ease: "power2.out",
			});
		}
	}, [items]);

	const handleAddItem = () => {
		if (itemName && itemPrice > 0) {
			setItems([
				...items,
				{ name: itemName, price: itemPrice, date: selectedDate },
			]);
			setItemName("");
			setItemPrice(0);
		}
	};

	const totalExpense = items.reduce((sum, item) => sum + item.price, 0);

	return (
		<div className="container mx-auto p-4 max-w-2xl">
			<Title order={1} className="text-center mb-6 text-indigo-700">
				Mini Monthly Grocery Tracker
			</Title>

			<Paper shadow="sm" p="md" className="mb-6">
				<Group grow>
					<TextInput
						placeholder="Item name"
						label="Grocery Item"
						value={itemName}
						onChange={(event) => setItemName(event.currentTarget.value)}
						className="mb-4"
					/>
					<NumberInput
						placeholder="Price"
						label="Price (₹)"
						value={itemPrice}
						onChange={(value) => setItemPrice(value)}
						min={0}
						precision={2}
						className="mb-4"
					/>
				</Group>
				<input
					placeholder="Pick date"
					label="Purchase Date"
					type="date"
					value={selectedDate}
					onChange={setSelectedDate}
					className="mb-4"
				/>
				<Button
					onClick={handleAddItem}
					fullWidth
					color="indigo"
					className="mt-2"
				>
					Add Item
				</Button>
			</Paper>

			<Paper shadow="sm" p="md">
				<Title order={3} className="mb-4 text-indigo-600">
					Grocery List
				</Title>
				<div className="overflow-x-auto">
					<Table striped highlightOnHover ref={tableRef}>
						<thead>
							<tr>
								<th>Date</th>
								<th>Item</th>
								<th>Price (₹)</th>
							</tr>
						</thead>
						<tbody>
							{items.map((item, index) => (
								<tr key={index}>
									<td>{format(item.date, "dd/MM/yyyy")}</td>
									<td>{item.name}</td>
									<td>₹{item.price.toFixed(2)}</td>
								</tr>
							))}
						</tbody>
					</Table>
				</div>
				<Text
					size="lg"
					weight={700}
					className="mt-4 text-right text-indigo-700"
				>
					Total Expense: ₹{totalExpense.toFixed(2)}
				</Text>
			</Paper>
		</div>
	);
};

export default GroceryApp;
