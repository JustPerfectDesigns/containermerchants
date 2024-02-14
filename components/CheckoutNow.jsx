"use client";
// CheckoutNow.jsx

import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";

export default function CheckoutNow({ price_id }) {
	const { checkoutSingleItem } = useShoppingCart();

	function buyNow(priceId) {
		checkoutSingleItem(priceId);
	}

	return (
		<Button
			size="lg"
			variant="outline"
			onClick={() => {
				buyNow(price_id);
			}}
			className="bg-orange-600 py-[10px] px-5 rounded-full text-sm text-white flex justify-center items-center w-full"
		>
			Checkout Now
		</Button>
	);
}
