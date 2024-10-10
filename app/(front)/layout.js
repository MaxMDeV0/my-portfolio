import Header from "@components/Header";
import "@app/globals.css";

import LoggedUserBanner from "@components/LoggedUserBanner";
import { auth } from "@/auth";
import { SessionProvider } from "../context/SessionProvider";

export const metadata = {
	title: "myPortfolio",
	description: "This portfolio is crazy !!!",
};

export default async function RootLayout({ children }) {
	const session = await auth()
	console.log("session ,",  session);

	return (
		<html lang="en" suppressHydrationWarning={true}>
			<body className="bg-white z-[-10]">
			
				<div className="fixed w-full top-0">
					<LoggedUserBanner />
					<Header/>
				</div>
				<SessionProvider session={session}>
					{children}
				</SessionProvider>
			</body>
		</html>
	);
}
