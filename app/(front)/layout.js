import Header from "@components/Header";
import "@app/globals.css";

import LoggedUserBanner from "@components/LoggedUserBanner";
import { auth } from "@/auth";
import { Context } from "../context/Context";

export const metadata = {
	title: "myPortfolio",
	description: "This portfolio is crazy !!!",
};

export default async function RootLayout({ children }) {
	const session = await auth()
	
	return (
		<html lang="en" suppressHydrationWarning={true}>
			<body className="bg-white z-[-10]">
				<Context session={session}>
					<div className="relative w-full top-0">
						<LoggedUserBanner />
						<Header/>
					</div>
					{children}
				</Context>
			</body>
		</html>
	);
}
