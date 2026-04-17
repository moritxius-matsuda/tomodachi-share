import { Metadata } from "next";
import { redirect } from "next/navigation";

interface Props {
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export const metadata: Metadata = {
	title: "My Likes - TomodachiShare",
	description: "View the Miis that you have liked on TomodachiShare",
	robots: {
		index: false,
		follow: false,
	},
};

export default async function ProfileSettingsPage({ searchParams }: Props) {
	// Authentication has been removed - redirect home
	redirect("/");
}

