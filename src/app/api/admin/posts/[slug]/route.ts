import { NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import fs from "fs/promises";
import path from "path";

export async function DELETE(
  request: Request,
  { params }: { params: { slug: string } },
) {
  try {
    const { password } = await request.json();

    if (!isAuthenticated(password)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const filePath = path.join(
      process.cwd(),
      "content/blog",
      `${params.slug}.md`,
    );
    await fs.unlink(filePath);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete post" },
      { status: 500 },
    );
  }
}
