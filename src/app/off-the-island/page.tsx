import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
	title: "Exiled - TomodachiShare",
	description: "You have been exiled from the TomodachiShare island...",
	robots: {
		index: false,
		follow: false,
	},
};

export default async function ExiledPage() {
	// Authentication has been removed - redirect home
	redirect("/");
}

