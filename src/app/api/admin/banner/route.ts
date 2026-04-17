import { NextRequest, NextResponse } from "next/server";
let bannerText: string | null = null;

export async function GET() {
	return NextResponse.json({ success: true, message: bannerText });
}

export async function POST(request: NextRequest) {
	// Authentication has been removed - deny all admin access
	return NextResponse.json({ error: "Admin functionality is disabled" }, { status: 403 });
}

export async function DELETE() {
	// Authentication has been removed - deny all admin access
	return NextResponse.json({ error: "Admin functionality is disabled" }, { status: 403 });
}

