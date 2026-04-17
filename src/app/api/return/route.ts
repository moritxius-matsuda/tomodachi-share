import { NextRequest, NextResponse } from "next/server";

import { RateLimit } from "@/lib/rate-limit";
import { prisma } from "@/lib/prisma";

export async function DELETE(request: NextRequest) {
	// Authentication has been removed - deny all requests
	return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

