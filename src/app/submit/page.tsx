import { Metadata } from "next";
import Link from "next/link";

import { Icon } from "@iconify/react";

import { prisma } from "@/lib/prisma";

import SubmitForm from "@/components/submit-form";
import { settings } from "@/lib/settings";

export const metadata: Metadata = {
	title: "Submit a Mii - TomodachiShare",
	description: "Upload your Tomodachi Life Mii through its QR code and share it with others",
	robots: {
		index: false,
		follow: false,
	},
};

export default async function SubmitPage() {
	if (!settings.canSubmit)
		return (
			<div className="grow flex items-center justify-center">
				<div className="bg-amber-50 border-2 border-amber-500 rounded-2xl shadow-lg p-8 max-w-xs w-full text-center flex flex-col">
					<h2 className="text-5xl font-black">Sorry</h2>
					<p className="mt-1">Submissions are disabled</p>
					<Link href="/" aria-label="Return to Home Page" className="pill button gap-2 mt-8 w-fit self-center">
						<Icon icon="ic:round-home" fontSize={24} />
						Return Home
					</Link>
				</div>
			</div>
		);

	// Since auth is removed, assume a default user
	const inQueueMiisCount = 0;

	return <SubmitForm inQueueMiisCount={inQueueMiisCount} />;
}
