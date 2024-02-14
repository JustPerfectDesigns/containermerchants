"use client";
// Providers.jsx

import { CartProvider as USCProvider } from "use-shopping-cart";

export default function CartProvider({ children }) {
	return (
		<USCProvider
			mode="payment"
			cartMode="client-only"
			stripe={process.env.NEXT_PUBLIC_STRIPE_KEY}
			successUrl="https://localhost:3000/stripe/success"
			cancelUrl="https://localhost:3000/stripe/error"
			currency="USD"
			billingAddressCollection={true}
			shouldPersist={true}
			language="en-US"
		>
			{children}
		</USCProvider>
	);
}
