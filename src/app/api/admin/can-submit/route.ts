import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { settings } from "@/lib/settings";

export async function GET() {
	return NextResponse.json({ success: true, value: settings.canSubmit });
}

export async function PATCH(request: NextRequest) {
	// Authentication has been removed - deny all admin access
	return NextResponse.json({ error: "Admin functionality is disabled" }, { status: 403 });
}

