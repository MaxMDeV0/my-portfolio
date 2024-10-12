import "../globals.css";

export const metadata = {
	title: "myPortfolio - Admin",
	description: "This portfolio is crazy !!!",
};

export default function AdminLayout({ children }) {
	return (
		<html lang="en" suppressHydrationWarning={true}>
			<body className="bg-white">
					{children}
			</body>
		</html>
	);
}
