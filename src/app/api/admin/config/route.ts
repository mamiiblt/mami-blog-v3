import { NextResponse } from "next/server";
import { ADMIN_PASSWORD } from "@/lib/auth";
import fs from "fs/promises";
import path from "path";

export async function POST(request: Request) {
  try {
    const { password, config } = await request.json();

    if (password !== ADMIN_PASSWORD) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Format the config content
    const configContent = `export const SITE_CONFIG = ${JSON.stringify(config, null, 2)};`;

    const configPath = path.join(process.cwd(), "src/config/config.tsx");
    await fs.writeFile(configPath, configContent, "utf8");

    // Force reload server components by touching the layout file
    const layoutPath = path.join(process.cwd(), "src/app/layout.tsx");
    const layoutContent = await fs.readFile(layoutPath, "utf8");
    await fs.writeFile(layoutPath, layoutContent, "utf8");

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Config save error:", error);
    return NextResponse.json(
      { error: "Failed to save configuration" },
      { status: 500 },
    );
  }
}
