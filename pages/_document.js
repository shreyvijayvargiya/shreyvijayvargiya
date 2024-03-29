import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheets as MaterialUiServerStyleSheets } from "@material-ui/core/styles";

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<script
						dangerouslySetInnerHTML={{
							__html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 265394666);
                  `,
						}}
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

MyDocument.getInitialProps = async (ctx) => {
	const materialUiSheets = new MaterialUiServerStyleSheets();
	const originalRenderPage = ctx.renderPage;
	ctx.renderPage = () =>
		originalRenderPage({
			enhanceApp: (App) => (props) =>
				materialUiSheets.collect(<App {...props} />),
		});

	const initialProps = await Document.getInitialProps(ctx);

	return {
		...initialProps,
		styles: [
			...React.Children.toArray(initialProps.styles),
			materialUiSheets.getStyleElement(),
		],
	};
};
