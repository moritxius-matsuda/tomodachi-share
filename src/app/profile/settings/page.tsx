import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
	title: "Profile Settings - TomodachiShare",
	description: "Change your account info or delete it",
	robots: {
		index: false,
		follow: false,
	},
};

export default async function ProfileSettingsPage() {
	// Authentication has been removed - redirect home
	redirect("/");
}
}

