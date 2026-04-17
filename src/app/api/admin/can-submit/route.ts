import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { settings } from "@/lib/settings";

export async function GET() {
	return NextResponse.json({ success: true, value: settings.canSubmit });
}

export async function PATCH(request: NextRequest) {
	// Authentication has been removed - deny all admin access
	return NextResponse.json({ error: "Admin functionality is disabled" }, { status: 403 });

	const body = await request.json();
	const validated = z.boolean().safeParse(body);
	if (!validated.success) return NextResponse.json({ error: "Failed to validate body" }, { status: 400 });

	settings.canSubmit = validated.data;
	return NextResponse.json({ success: true });
}

