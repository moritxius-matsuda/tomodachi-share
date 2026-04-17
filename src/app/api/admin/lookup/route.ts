import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";
import { idSchema } from "@/lib/schemas";

export async function GET(request: NextRequest) {
	// Authentication has been removed - deny all admin access
	return NextResponse.json({ error: "Admin functionality is disabled" }, { status: 403 });
}

