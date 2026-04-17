"use client";

import { Prisma } from "@prisma/client";

interface Props {
	mii: Prisma.MiiGetPayload<{
		include: {
			_count: {
				select: {
					likedBy: true;
				};
			};
		};
	}>;
}

export default function AuthorButtons({ mii }: Props) {
	// Authentication has been removed - no author buttons
	return null;
}
