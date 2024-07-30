import React, { useState } from "react";
import { PDFDocument } from "pdf-lib";

const PdfUploader = ({ onFileParsed }) => {
	const [file, setFile] = useState(null);

	const handleFileChange = (e) => {
		setFile(e.target.files[0]);
	};

	const parsePdf = async (file) => {
		const arrayBuffer = await file.arrayBuffer();
		const pdfDoc = await PDFDocument.load(arrayBuffer);
		const text = [];

		const pages = pdfDoc.getPages();
		for (const page of pages) {
			const pageText = await page.getTextContent();
			text.push(pageText);
		}

		return text.join(" ");
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (file) {
			const parsedText = await parsePdf(file);
			onFileParsed(parsedText);
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="file"
					accept="application/pdf"
					onChange={handleFileChange}
				/>
				<button type="submit">Upload and Parse PDF</button>
			</form>
		</div>
	);
};

export default PdfUploader;
