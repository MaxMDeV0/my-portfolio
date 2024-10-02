import "./globals.css";


export const metadata = {
	title: "myPortfolio",
	description: "This portfolio is crazy !!!",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" suppressHydrationWarning={true}>
			<body >
				{children}
			</body>
		</html>
	);
}
