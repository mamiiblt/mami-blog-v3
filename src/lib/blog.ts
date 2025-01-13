import * as fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { isAuthenticated } from "./auth";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export interface Post {
  slug: string;
  title: string;
  date: string;
  description: string;
  content: string;
  tags: string[];
  readingTime?: string;
  image?: string;
  author?: string;
}

interface FrontMatter {
  title: string;
  date: string;
  description: string;
  tags?: string[];
}

export async function getAllPosts(): Promise<Post[]> {
  try {
    const files = await fs.readdir(BLOG_DIR);
    const posts = await Promise.all(
      files
        .filter((file) => file.endsWith(".md"))
        .map(async (file) => {
          const source = await fs.readFile(path.join(BLOG_DIR, file), "utf8");
          const { data, content } = matter(source) as unknown as {
            data: FrontMatter;
            content: string;
          };
          const readingTime = calculateReadingTime(content);

          return {
            ...data,
            content: content,
            slug: file.replace(".md", ""),
            readingTime,
            tags: data.tags || [],
          } as Post;
        }),
    );

    return posts.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );
  } catch (error) {
    console.error("Error getting posts:", error);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const source = await fs.readFile(path.join(BLOG_DIR, `${slug}.md`), "utf8");
    const { data, content } = matter(source) as unknown as {
      data: FrontMatter;
      content: string;
    };

    const readingTime = calculateReadingTime(content);

    return {
      ...data,
      content: content,
      slug,
      readingTime,
      tags: data.tags || [],
    } as Post;
  } catch (error) {
    return null;
  }
}

export async function createPost(
  post: Post,
  password: string,
): Promise<boolean> {
  try {
    if (!isAuthenticated(password)) {
      throw new Error("Unauthorized");
    }

    if (!post.title || !post.date || !post.description) {
      throw new Error("Missing required fields");
    }

    const content = `---
title: "${post.title}"
date: "${post.date}"
description: "${post.description}"
tags: ${JSON.stringify(post.tags || [])}${post.author ? `\nauthor: "${post.author}"` : ""}${
      post.image ? `\nimage: "${post.image}"` : ""
    }
---

${post.content}`;

    await fs.mkdir(BLOG_DIR, { recursive: true });
    await fs.writeFile(path.join(BLOG_DIR, `${post.slug}.md`), content, "utf8");
    return true;
  } catch (error) {
    console.error("Error creating post:", error);
    return false;
  }
}

function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

export async function BlogPost(slug: string) {
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
}

export function extractHeadings(
  content: string,
): Array<{ id: string; text: string; level: number }> {
  const headingRegex = /^(#{1,6})\s+(.+)$/gm;
  const headings: Array<{ id: string; text: string; level: number }> = [];
  const usedIds = new Set<string>();

  let match;
  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    let id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");

    // If this ID is already used, append a number
    if (usedIds.has(id)) {
      let counter = 1;
      while (usedIds.has(`${id}-${counter}`)) {
        counter++;
      }
      id = `${id}-${counter}`;
    }

    usedIds.add(id);
    headings.push({ id, text, level });
  }
  return headings;
}
