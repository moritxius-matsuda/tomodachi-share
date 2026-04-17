import { NextRequest, NextResponse } from "next/server";

import fs from "fs/promises";
import path from "path";

import { prisma } from "@/lib/prisma";
import { idSchema } from "@/lib/schemas";
import { RateLimit } from "@/lib/rate-limit";

const uploadsDirectory = path.join(process.cwd(), "uploads", "mii");

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
	// Auth has been removed - deny all deletions
	return NextResponse.json({ error: "Deletion is disabled" }, { status: 403 });
}
