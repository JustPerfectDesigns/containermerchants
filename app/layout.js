import { merriweather, montserrat } from "./fonts/fonts";
import "./globals.css";

import Header from "../components/Header";
import MobileHeader from "@/components/MobileHeader";
import CartProvider from "@/components/Providers";
import Navbar from "@/components/Navbar";
import ShoppingCartModal from "@/components/ShoppingCartModal";

export const metadata = {
	title: "Container Merchants",
	description:
		"Elevating Reliability, Redefining Excelence in Container Solutions",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${merriweather.variable} ${montserrat.variable}`}>
				<CartProvider>
					{/* <div className="hidden lg:flex py-6 bg-white">
						<Header />
					</div> */}
					<Navbar />
					{/* <div className="lg:hidden py-4 bg-white">
						<MobileHeader />
					</div> */}
					<div className="lg:hidden py-4 bg-white">
						<MobileHeader />
						<ShoppingCartModal />
					</div>
					<div className="mb-20 lg:mb-28">{children}</div>
					<div className="bg-[#14213F] py-28 md:mt-60 text-white text-center">
						Main Footer
					</div>
				</CartProvider>
			</body>
		</html>
	);
}
