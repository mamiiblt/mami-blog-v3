import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "";
if (!baseUrl) {
  throw new Error("NEXT_PUBLIC_SITE_URL is not defined");
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts();

  // Base routes
  const routes = ["", "/about", "/projects", "/blogs"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // Blog posts
  const postRoutes = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "daily" as const,
    priority: 0.6,
  }));

  return [...routes, ...postRoutes];
}
