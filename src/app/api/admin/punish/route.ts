import { NextRequest, NextResponse } from "next/server";

import { z } from "zod";
import dayjs from "dayjs";

import { prisma } from "@/lib/prisma";
import { idSchema } from "@/lib/schemas";
import { PunishmentType } from "@prisma/client";

const punishSchema = z.object({
	type: z.enum([PunishmentType.WARNING, PunishmentType.TEMP_EXILE, PunishmentType.PERM_EXILE]),
	duration: z
		.number({ error: "Duration (days) must be a number" })
		.int({ error: "Duration (days) must be an integer" })
		.positive({ error: "Duration (days) must be valid" }),
	notes: z.string(),
	reasons: z.array(z.string()).optional(),
	miiReasons: z
		.array(
			z.object({
				id: z.number({ error: "Mii ID must be a number" }).int({ error: "Mii ID must be an integer" }).positive({ error: "Mii ID must be valid" }),
				reason: z.string(),
			}),
		)
		.optional(),
});

export async function POST(request: NextRequest) {
	// Authentication has been removed - deny all admin access
	return NextResponse.json({ error: "Admin functionality is disabled" }, { status: 403 });
}

export async function DELETE(request: NextRequest) {
	// Authentication has been removed - deny all admin access
	return NextResponse.json({ error: "Admin functionality is disabled" }, { status: 403 });
}

