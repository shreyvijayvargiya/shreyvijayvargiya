import React from "react";
import {
	useReactTable,
	createColumnHelper,
	flexRender,
	getCoreRowModel,
} from "@tanstack/react-table";
import { useQuery } from "react-query";
import axios from "axios";

const TanStackUsersTable = () => {
	const { data: allUsers, isLoading } = useQuery("allUsers", async () => {
		const response = await axios.get(
			"https://jsonplaceholder.typicode.com/posts?_limit=10"
		);
		return response.data;
	});

	const columnHelper = createColumnHelper();

	const columns = [
		columnHelper.accessor("id", { header: "Id" }),
		columnHelper.accessor("title", { header: "Title" }),
		columnHelper.accessor("body", { header: "Body" }),
	];

	const table = useReactTable({
		data: allUsers,
		columns,
		getCoreRowModel: getCoreRowModel(),
	});

	return (
		<table className="p-10 m-10 w-10/12 mx-auto text-left border border-gray-100">
			<thead className="bg-gray-50 h-10">
				{table?.getHeaderGroups()?.map((headerGroup) => {
					return (
						<tr key={headerGroup?.id}>
							{headerGroup?.headers?.map((header) => {
								return (
									<th colSpan={header?.colSpan} key={header?.id}>
										{header?.isPlaceholder
											? null
											: flexRender(
													header?.column?.columnDef?.header,
													header?.getContext()
											  )}
									</th>
								);
							})}
						</tr>
					);
				})}
			</thead>
			{isLoading ? (
				<p>Loading users...</p>
			) : (
				<tbody>
					{table?.getCoreRowModel()?.flatRows.map((row) => (
						<tr key={row.id} className="hover:bg-gray-50 h-16 cursor-pointer">
							{row.getVisibleCells().map((cell) => {
								return <td key={cell.id}>{cell?.getValue()}</td>;
							})}
						</tr>
					))}
				</tbody>
			)}
		</table>
	);
};

export default TanStackUsersTable;
