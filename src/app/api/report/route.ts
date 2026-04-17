import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Prisma, ReportReason, ReportType } from "@prisma/client";

import { prisma } from "@/lib/prisma";
import { RateLimit } from "@/lib/rate-limit";

const reportSchema = z.object({
	id: z.coerce.number({ error: "ID must be a number" }).int({ error: "ID must be an integer" }).positive({ error: "ID must be valid" }),
	type: z.enum(["mii", "user"], { error: "Type must be either 'mii' or 'user'" }),
	reason: z.enum(["inappropriate", "spam", "bad_quality", "other"], {
		message: "Reason must be either 'inappropriate', 'spam', 'bad_quality' or 'other'",
	}),
	notes: z.string().trim().max(256).optional(),
});

export async function POST(request: NextRequest) {
	// Authentication has been removed - all reports must be denied
	return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

