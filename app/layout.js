import "./styles/globals.scss";

export const metadata = {
	title: "MyPortfolio",
	description: "Hi, my name is Maxence and there is my portfolio",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
			<link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="141x134"/>
			</head>
			
			<body>
				{children}
			</body>
		</html>
	);
}
