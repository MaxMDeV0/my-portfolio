import Header from "@components/Header";
import "@app/globals.css";


export const metadata = {
	title: "myPortfolio",
	description: "This portfolio is crazy !!!",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" suppressHydrationWarning={true}>
			<body className="bg-white">
				<Header/>
				{children}
			</body>
		</html>
	);
}
