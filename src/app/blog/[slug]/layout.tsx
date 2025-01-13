import React from "react";
import { Metadata } from "next";
import { SITE_CONFIG } from "@/config/config";
import { defaultMetadata } from "@/config/metadata";
import { getPostBySlug } from "@/lib/blog";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return {
      ...defaultMetadata,
      title: `Post Not Found - ${SITE_CONFIG.name} | ${SITE_CONFIG.siteName}`,
    };
  }

  return {
    ...defaultMetadata,
    title: `${post.title} - ${SITE_CONFIG.name} | ${SITE_CONFIG.siteName}`,
    description: post.description,
    authors: [
      {
        name: post.author || SITE_CONFIG.name,
      },
    ],
  };
}

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-primary-foreground dark:bg-primary-background">
      {children}
    </div>
  );
}
