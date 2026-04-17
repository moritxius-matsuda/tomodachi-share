import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";
import { idSchema } from "@/lib/schemas";

export async function PATCH(request: NextRequest) {
	// Authentication has been removed - deny all admin access
	return NextResponse.json({ error: "Admin functionality is disabled" }, { status: 403 });

	const searchParams = request.nextUrl.searchParams;
	const parsedMiiId = idSchema.safeParse(searchParams.get("id"));

	if (!parsedMiiId.success) return NextResponse.json({ error: parsedMiiId.error.issues[0].message }, { status: 400 });
	const miiId = parsedMiiId.data;

	await prisma.mii.update({
		where: {
			id: miiId,
		},
		data: {
			in_queue: false,
		},
	});

	return NextResponse.json({ success: true });
}

