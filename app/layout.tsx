import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Footer from "./_components/footer";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "FSW - Barber",
	description: "App criado durante a full stack week",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-br">
			<body className={`${nunito.className} dark`}>
				{children}
				<Footer />
			</body>
		</html>
	);
}
