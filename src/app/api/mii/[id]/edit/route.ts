import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { MiiGender, MiiMakeup, Prisma } from "@prisma/client";

import fs from "fs/promises";
import path from "path";
import sharp from "sharp";

import { profanity } from "@2toad/profanity";

import { prisma } from "@/lib/prisma";
import { idSchema, nameSchema, switchMiiInstructionsSchema, tagsSchema } from "@/lib/schemas";
import { generateMetadataImage, validateImage } from "@/lib/images";
import { RateLimit } from "@/lib/rate-limit";
import { SwitchMiiInstructions } from "@/types";
import { minifyInstructions } from "@/lib/switch";
import { settings } from "@/lib/settings";

const uploadsDirectory = path.join(process.cwd(), "uploads", "mii");

const editSchema = z.object({
	name: nameSchema.optional(),
	tags: tagsSchema.optional(),
	description: z.string().trim().max(512).optional(),
	quarantined: z
		.enum(["true", "false"])
		.transform((v) => v === "true")
		.optional(),
	gender: z.enum(MiiGender).optional(),
	makeup: z.enum(MiiMakeup).optional(),
	miiPortraitImage: z.union([z.instanceof(File), z.any()]).optional(),
	miiFeaturesImage: z.union([z.instanceof(File), z.any()]).optional(),
	youtubeId: z
		.string()
		.regex(/^[a-zA-Z0-9_-]{11}$/, "Invalid YouTube video ID")
		.or(z.literal(""))
		.optional(),
	instructions: switchMiiInstructionsSchema,
	image1: z.union([z.instanceof(File), z.any()]).optional(),
	image2: z.union([z.instanceof(File), z.any()]).optional(),
	image3: z.union([z.instanceof(File), z.any()]).optional(),
});

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
	// Auth has been removed - deny all edits
	return NextResponse.json({ error: "Editing is disabled" }, { status: 403 });
}
